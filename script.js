import { MODELS } from './data/models.js';
import { countryDatabase } from './data/countries.js';

const MIN_INPUT_LENGTH = 2;

/**
 * Экранирует спецсимволы для RegExp.
 */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Преобразует маску в регулярное выражение.
 * Использует все модели из MODELS. Сообщает об ошибках, если в маске есть неизвестный символ.
 */
function maskToRegex(mask, partialLength = null, countryCode = '', groupType = '') {
  let regexStr = '^';
  const len = partialLength || mask.length;

  for (let i = 0; i < mask.length && i < len; i++) {
    const char = mask[i];

    if (MODELS.hasOwnProperty(char)) {
      const model = MODELS[char];
      if (Array.isArray(model)) {
        const escaped = model.map(c => escapeRegExp(c)).join('');
        regexStr += `[${escaped}]?`;
      } else if (typeof model === 'string') {
        regexStr += `[${escapeRegExp(model)}]`;
      } else {
        console.warn(`[model] Неподдерживаемая модель: ${char} в "${mask}"`);
      }
    } else {
      // Проверка, не является ли это обычным символом (например, '-')
      if (/^[a-zA-Z0-9]$/.test(char)) {
        console.error(
          `[model] ❌ Неизвестный символ-модель "${char}" в маске "${mask}" (${groupType}) страны ${countryCode}`
        );
      }
      regexStr += escapeRegExp(char);
    }
  }

  if (!partialLength) {
    regexStr += '$';
  }

  try {
    return new RegExp(regexStr, 'i');
  } catch (e) {
    console.error(`❌ Ошибка RegExp из маски "${mask}" → ${regexStr}`, e);
    return null;
  }
}

/**
 * Обработчик поиска.
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
        if (input.length > mask.length) {
          console.log(`[skip] Пропуск: "${input}" длиннее маски "${mask}"`);
          continue;
        }

        const regex = maskToRegex(mask, input.length, country.code, group.type);
        if (!regex) continue;

        if (regex.test(input)) {
          const message = `<b>${input}</b> совпадает с <code>${mask}</code> (${group.type_en} / ${country.name})`;
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
 * Отрисовка базы знаний.
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

/**
 * Инициализация
 */
document.addEventListener('DOMContentLoaded', () => {
  renderKnowledgeBase();

  const input = document.getElementById('search');
  if (input) {
    input.addEventListener('input', () => {
      handleSearch(input.value);
    });
  } else {
    console.warn('❗ Поле ввода #search не найдено в DOM');
});
});
