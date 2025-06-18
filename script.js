// script.js

import { MODELS } from './data/models.js';
import { countryDatabase } from './data/countries.js';

/**
 * Экранирование спецсимволов для RegExp
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Преобразует маску в регулярное выражение.
 * Символы маски:
 *  - A: заглавная латинская буква [A-Z]
 *  - 9: цифра [0-9]
 *  - c: символ из модели C (тире, пробел или пустой символ)
 *  - остальные символы — экранируются и проверяются как есть
 */
function maskToRegex(mask) {
  let regexStr = '^';
  for (const char of mask) {
    if (char === 'A') {
      regexStr += `[${MODELS.A}]`;
    } else if (char === '9') {
      regexStr += `[${MODELS['9']}]`;
    } else if (char === 'c') {
      // Модель C — тире, пробел или пустой символ (0 или 1 вхождение)
      // Пустой символ — значит, что символ может отсутствовать
      const escapedChars = MODELS.C.map(c => escapeRegExp(c)).join('');
      regexStr += `[- ]?`; // - или пробел или ничего
    } else {
      // Любой другой символ экранируем
      regexStr += escapeRegExp(char);
    }
  }
  regexStr += '$';
  return new RegExp(regexStr, 'i');
}

/**
 * Обработчик ввода для поиска по маске
 */
document.getElementById('search').addEventListener('input', function () {
  const input = this.value.trim();
  const output = [];

  if (input.length === 0) {
    document.getElementById('results').innerHTML = '<p>Введите значение для поиска</p>';
    return;
  }

  for (const country of countryDatabase) {
    for (const mask of country.masks) {
      const regex = maskToRegex(mask);
      if (regex.test(input)) {
        output.push(`<b>${input}</b> соответствует маске <code>${mask}</code> в стране <i>${country.name}</i>`);
      }
    }
  }

  document.getElementById('results').innerHTML = output.length > 0
    ? `<ul>${output.map(r => `<li>${r}</li>`).join('')}</ul>`
    : '<p>Ничего не найдено</p>';
});

/**
 * Рендер базы знаний (каталог стран с масками и рекомендациями)
 */
function renderKnowledgeBase() {
  const container = document.getElementById('knowledge-base');
  container.innerHTML = ''; // очистка перед рендером
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
