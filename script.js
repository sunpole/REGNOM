//script.js

import { MODELS } from './data/models.js';
import { countryDatabase } from './data/countries.js';

/**
 * Кол-во символов, после которого начинается поиск по шаблонам
 * (Измени значение ниже с 2 на другое — по желанию)
 */
const MIN_INPUT_LENGTH = 2; // <=== настройка длины начала поиска

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\__CODE_BLOCK_0__');
}

/**
 * Преобразует маску в регулярное выражение.
 * Символы маски:
 *  - D: заглавная буква из белорусского алфавита
 *  - 9: цифра [0-9]
 *  - c: символ из модели C (тире, пробел или пустой символ)
 */
function maskToRegex(mask, partialLength = null) {
  let regexStr = '^';
  let length = partialLength || mask.length;

  for (let i = 0; i < mask.length && i < length; i++) {
    const char = mask[i];
    if (char === 'D') {
      regexStr += `[${MODELS.D}]`;
    } else if (char === '9') {
      regexStr += `[${MODELS['9']}]`;
    } else if (char === 'c') {
      regexStr += `[- ]?`; // тире или пробел
    } else {
      regexStr += escapeRegExp(char);
    }
  }

  // Добавление опциональности пробелов и тире в любом месте
  regexStr = regexStr.replace(/9/g, '(?:[- ]?)[0-9]'); // для цифр
  regexStr = regexStr.replace(/D/g, '(?:[- ]?)[A-ZА-Я]'); // для букв

  if (!partialLength) {
    regexStr += ';
  }

  return new RegExp(regexStr, 'i');
}

/**
 * Обработка ввода и поиск по частичному соответствию
 */
document.getElementById('search').addEventListener('input', function () {
  const input = this.value.trim();
  const output = [];

  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML = '';

  if (input.length < MIN_INPUT_LENGTH) {
    resultsElement.innerHTML = `<p>Введите минимум ${MIN_INPUT_LENGTH} символа(ов) для поиска</p>`;
    return;
  }

  for (const country of countryDatabase) {
    for (const group of country.groups) {
      for (const mask of group.masks) {
        // Проверка по укороченной регулярке (по длине ввода)
        const regex = maskToRegex(mask, input.length);
        if (regex.test(input)) {
          output.push(`<b>${input}</b> может соответствовать <code>${mask}</code> в группе <i>${group.type_en}</i> в стране <i>${country.name}</i>`);
        }
      }
    }
  }

  resultsElement.innerHTML = output.length > 0
    ? `<ul>${output.map(r => `<li>${r}</li>`).join('')}</ul>`
    : '<p>Ничего не найдено</p>';
});

/**
 * Рендер базы знаний
 */
function renderKnowledgeBase() {
  const container = document.getElementById('knowledge-base');
  container.innerHTML = '';
  countryDatabase.forEach(country => {
    const div = document.createElement('div');
    div.className = 'country-block';
    div.innerHTML = `
      <h3>${country.name} (${country.code})</h3>
      ${country.groups.map(group => `
        <div class="group-block">
          <h4>${group.type} (${group.type_en})</h4>
          <p><b>Маски:</b> ${group.masks.map(m => `<code>${m}</code>`).join(', ')}</p>
        </div>
      `).join('')}
    `;
    container.appendChild(div);
  });
}

renderKnowledgeBase();
