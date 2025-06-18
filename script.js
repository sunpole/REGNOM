import { MODELS } from './data/models.js';
import { countryDatabase } from './data/countries.js';

/**
 * Кол-во символов, после которого начинается поиск по шаблонам
 * (Измени значение ниже с 2 на другое — по желанию)
 */
const MIN_INPUT_LENGTH = 2; // <=== настройка длины начала поиска

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Преобразует маску в регулярное выражение.
 * Символы маски:
 *  - A: заглавная латинская буква [A-Z]
 *  - 9: цифра [0-9]
 *  - c: символ из модели C (тире, пробел или пустой символ)
 */
function maskToRegex(mask, partialLength = null) {
  let regexStr = '^';
  let length = partialLength || mask.length;

  for (let i = 0; i < mask.length && i < length; i++) {
    const char = mask[i];
    if (char === 'A') {
      regexStr += `[${MODELS.A}]`;
    } else if (char === '9') {
      regexStr += `[${MODELS['9']}]`;
    } else if (char === 'c') {
      regexStr += `[- ]?`; // тире, пробел или ничего
    } else {
      regexStr += escapeRegExp(char);
    }
  }

  if (!partialLength) {
    regexStr += '$';
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
    for (const mask of country.masks) {
      // Проверка по укороченной регулярке (по длине ввода)
      const regex = maskToRegex(mask, input.length);
      if (regex.test(input)) {
        output.push(`<b>${input}</b> может соответствовать <code>${mask}</code> в стране <i>${country.name}</i>`);
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
      <p><b>Маски:</b> ${country.masks.map(m => `<code>${m}</code>`).join(', ')}</p>
      <p><b>Рекомендуемые форматы:</b> ${country.recommended.map(r => `<code>${r}</code>`).join(', ')}</p>
    `;
    container.appendChild(div);
  });
}

renderKnowledgeBase();
