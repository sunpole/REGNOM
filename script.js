// script.js

import { MODELS } from './data/models.js';
import { countryDatabase } from './data/countries.js';

/**
 * @constant {number} MIN_INPUT_LENGTH
 * Минимальное количество символов, с которого начинается поиск.
 * Измените это значение при необходимости.
 */
const MIN_INPUT_LENGTH = 2; // <=== ЧТОБЫ НАЙТИ: настройка длины начала поиска

/**
 * Экранирует специальные символы в строке для использования в RegExp.
 * @param {string} string
 * @returns {string}
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Преобразует маску в регулярное выражение.
 *
 * Символы маски:
 *  - D: заглавная буква из MODELS.D (например, белорусский алфавит)
 *  - 9: цифра [0-9]
 *  - c: символ из модели C (тире, пробел или отсутствие символа)
 *
 * @param {string} mask - маска, заданная в шаблоне страны.
 * @param {number|null} partialLength - если указано, ограничивает длину регулярки.
 * @returns {RegExp}
 */
function maskToRegex(mask, partialLength = null) {
  let regexStr = '^';
  const length = partialLength || mask.length;

  for (let i = 0; i < mask.length && i < length; i++) {
    const char = mask[i];
    switch (char) {
      case 'D':
        regexStr += `[${MODELS.D}]`; // буквы из MODELS.D
        break;
      case '9':
        regexStr += `[${MODELS['9']}]`; // цифры
        break;
      case 'c':
        regexStr += '[- ]?'; // тире или пробел или ничего
        break;
      default:
        regexStr += escapeRegExp(char); // любой другой символ — экранируем
    }
  }

  if (!partialLength) {
    regexStr += '$'; // завершение строки
  }

  try {
    return new RegExp(regexStr, 'i');
  } catch (e) {
    console.error(`Ошибка в создании RegExp из маски "${mask}" → ${regexStr}`, e);
    return null;
  }
}

/**
 * Обработчик ввода в поле поиска.
 * Выполняет проверку ввода по всем маскам во всех странах.
 */
document.getElementById('search').addEventListener('input', function () {
  const input = this.value.trim();
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML = '';

  console.log(`[search] Введено: "${input}" (${input.length} символов)`);

  if (input.length < MIN_INPUT_LENGTH) {
    resultsElement.innerHTML = `<p>Введите минимум ${MIN_INPUT_LENGTH} символа(ов) для поиска</p>`;
    console.info(`[search] Недостаточно символов (${input.length} < ${MIN_INPUT_LENGTH})`);
    return;
  }

  const output = [];

  for (const country of countryDatabase) {
    if (!country.groups || !Array.isArray(country.groups)) {
      console.warn(`[country] Страна ${country.name} не содержит groups`);
      continue;
    }

    for (const group of country.groups) {
      for (const mask of group.masks) {
        const regex = maskToRegex(mask, input.length);
        if (!regex) continue;

        if (regex.test(input)) {
          const message = `<b>${input}</b> может соответствовать <code>${mask}</code> в группе <i>${group.type_en}</i> в стране <i>${country.name}</i>`;
          output.push(message);
          console.log(`[match] ✔ Совпадение: ${input} → ${mask} [${country.code}]`);
        }
      }
    }
  }

  resultsElement.innerHTML = output.length > 0
    ? `<ul>${output.map(r => `<li>${r}</li>`).join('')}</ul>`
    : '<p>Ничего не найдено</p>';

  console.info(`[search] Найдено совпадений: ${output.length}`);
});

/**
 * Рендерит базу знаний по странам в DOM.
 */
function renderKnowledgeBase() {
  const container = document.getElementById('knowledge-base');
  container.innerHTML = '';

  console.info('[knowledge-base] Отрисовка базы знаний');

  for (const country of countryDatabase) {
    const div = document.createElement('div');
    div.className = 'country-block';

    const groupHtml = (country.groups || [])
      .map(group => `
        <div class="group-block">
          <h4>${group.type} (${group.type_en})</h4>
          <p><b>Маски:</b> ${group.masks.map(m => `<code>${m}</code>`).join(', ')}</p>
        </div>
      `)
      .join('');

    div.innerHTML = `
      <h3>${country.name} (${country.code})</h3>
      ${groupHtml}
    `;

    container.appendChild(div);
  }

  console.info(`[knowledge-base] Загружено стран: ${countryDatabase.length}`);
}

renderKnowledgeBase();
