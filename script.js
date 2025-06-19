// script.js

import { MODELS } from './data/models.js';
import { countryDatabase } from './data/countries.js';

/**
 * @constant {number}
 * Минимальное количество символов, с которого начинается поиск.
 * Измени это число, чтобы изменить чувствительность поиска.
 */
const MIN_INPUT_LENGTH = 2; // ← можно изменить, если нужно позже

/**
 * Экранирует спецсимволы для использования в RegExp.
 * @param {string} str
 * @returns {string}
 */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Преобразует маску в регулярное выражение, используя MODELS.
 * Автоматически обрабатывает все символы, заданные в MODELS.
 *
 * @param {string} mask — строковая маска (например, "AAc9999")
 * @param {number|null} partialLength — ограничение по длине (для частичного ввода)
 * @returns {RegExp|null}
 */
function maskToRegex(mask, partialLength = null) {
  let regexStr = '^';
  const len = partialLength || mask.length;

  for (let i = 0; i < mask.length && i < len; i++) {
    const char = mask[i];

    if (MODELS[char]) {
      const model = MODELS[char];

      if (Array.isArray(model)) {
        // Модель C (массив) — пробел, тире, и т.п.
        const escaped = model.map(c => escapeRegExp(c)).join('');
        regexStr += `[${escaped}]?`; // символы опциональны
      } else if (typeof model === 'string') {
        regexStr += `[${escapeRegExp(model)}]`;
      }
    } else {
      regexStr += escapeRegExp(char); // обычный символ
    }
  }

  if (!partialLength) {
    regexStr += '$'; // Завершение строки — если полное совпадение
  }

  try {
    return new RegExp(regexStr, 'i');
  } catch (e) {
    console.error(`Ошибка в regex из маски "${mask}" → ${regexStr}`, e);
    return null;
  }
}

/**
 * Поиск и отображение результатов по введённому значению.
 */
function handleSearch(inputValue) {
  const input = inputValue.trim();
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML = '';

  if (input.length < MIN_INPUT_LENGTH) {
    resultsElement.innerHTML = `<p>Введите минимум ${MIN_INPUT_LENGTH} символа(ов)</p>`;
    console.info(`[input] Недостаточно символов (${input.length})`);
    return;
  }

  console.log(`[input] Введено: "${input}" (${input.length})`);
  const matches = [];

  for (const country of countryDatabase) {
    if (!Array.isArray(country.groups)) continue;

    for (const group of country.groups) {
      for (const mask of group.masks) {
        const regex = maskToRegex(mask, input.length);
        if (regex?.test(input)) {
          const message = `<b>${input}</b> совпадает с <code>${mask}</code> (${group.type} / ${country.name})`;
          matches.push(message);
          console.log(`[match] ✔ ${input} ↔ ${mask} [${country.code}]`);
        }
      }
    }
  }

  resultsElement.innerHTML = matches.length
    ? `<ul>${matches.map(m => `<li>${m}</li>`).join('')}</ul>`
    : `<p>Ничего не найдено</p>`;

  console.info(`[result] Найдено совпадений: ${matches.length}`);
}

/**
 * Рендер базы знаний (список стран и групп масок).
 */
function renderKnowledgeBase() {
  const container = document.getElementById('knowledge-base');
  container.innerHTML = '';

  for (const country of countryDatabase) {
    const div = document.createElement('div');
    div.className = 'country-block';

    const groupsHTML = (country.groups || []).map(group => `
      <div class="group-block">
        <h4>${group.type} <small>(${group.type_en})</small></h4>
        <p><b>Маски:</b> ${group.masks.map(m => `<code>${m}</code>`).join(', ')}</p>
      </div>
    `).join('');

    div.innerHTML = `
      <h3>${country.name} <small>(${country.code})</small></h3>
      ${groupsHTML}
    `;

    container.appendChild(div);
  }

  console.log(`[render] Загружено стран: ${countryDatabase.length}`);
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  renderKnowledgeBase();

  const input = document.getElementById('search');
  if (input) {
    input.addEventListener('input', () => {
      handleSearch(input.value);
    });
  } else {
    console.warn('Поле ввода #search не найдено в DOM');
  }
});
