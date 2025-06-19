// script.js

import { MODELS } from './data/models.js';
import { countryDatabase } from './data/countries.js';

const MIN_INPUT_LENGTH = 2;
const warnings = new Set();

/**
 * Экранирует спецсимволы для RegExp.
 */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// --- Валидация ввода ---
// Разрешённые символы: латиница (с диакритиками), цифры, пробел, дефис
const VALID_INPUT_REGEX = /^[A-Za-zÀ-ÿ0-9\- ]*$/;

/**
 * Проверяет, состоит ли ввод только из разрешённых символов.
 * @param {string} input
 * @returns {boolean}
 */
function isValidInput(input) {
  return VALID_INPUT_REGEX.test(input);
}

/**
 * Показывает предупреждение, если ввод содержит запрещённые символы.
 * Возвращает true, если ввод валиден, иначе false.
 */
function handleInputValidation(inputValue) {
  const warningElement = document.getElementById('input-warning');
  if (!warningElement) return true; // Если элемента нет — пропускаем проверку

  if (!isValidInput(inputValue)) {
    warningElement.innerHTML = '<p style="color:red;">Пожалуйста, вводите только латинские буквы, цифры и допустимые спецсимволы. Кириллица и другие алфавиты не поддерживаются.</p>';
    return false;
  } else {
    warningElement.innerHTML = '';
    return true;
  }
}

/**
 * Преобразует маску в регулярное выражение.
 * partialLength — длина частичного сравнения (например, длина ввода).
 */
function maskToRegex(mask, partialLength = null, countryCode = '', groupType = '') {
  let regexStr = '^';
  const len = partialLength ?? mask.length;
  let hasUnknownModel = false;

  for (let i = 0; i < mask.length && i < len; i++) {
    const char = mask[i];

    if (Object.prototype.hasOwnProperty.call(MODELS, char)) {
      const model = MODELS[char];

      if (Array.isArray(model)) {
        const escaped = model.map(c => escapeRegExp(c)).join('');
        regexStr += `[${escaped}]?`;
      } else if (typeof model === 'string') {
        regexStr += `[${escapeRegExp(model)}]`;
      } else {
        console.warn(`Неожиданный тип модели для символа '${char}' в маске "${mask}"`);
        regexStr += escapeRegExp(char);
      }

    } else {
      if (/^[a-zA-Z0-9]$/.test(char)) {
        const message = `⚠ Неизвестный символ-модель "${char}" в маске "${mask}" (${groupType}) страны ${countryCode}`;
        console.error(`[model] ${message}`);
        warnings.add(message);
        hasUnknownModel = true;
      }
      regexStr += escapeRegExp(char);
    }
  }

  if (!partialLength) {
    regexStr += '$';
  }

  if (hasUnknownModel) return null;

  try {
    return new RegExp(regexStr, 'i');
  } catch (e) {
    console.error(`❌ Ошибка RegExp из маски "${mask}" → ${regexStr}`, e);
    return null;
  }
}

/**
 * Обработка поиска по введенному значению.
 */
function handleSearch(inputValue) {
  const input = inputValue.trim();
  const resultsElement = document.getElementById('results');
  if (!resultsElement) return;

  resultsElement.innerHTML = '';

  if (input.length < MIN_INPUT_LENGTH) {
    resultsElement.innerHTML = `<p>Введите минимум ${MIN_INPUT_LENGTH} символа(ов)</p>`;
    return;
  }

  const matches = [];

  for (const country of countryDatabase) {
    if (!Array.isArray(country.groups)) continue;

    for (const group of country.groups) {
      for (const mask of group.masks) {
        if (input.length > mask.length) continue;

        const regex = maskToRegex(mask, input.length, country.code, group.type);
        if (!regex) continue;

        if (regex.test(input)) {
          matches.push(`<b>${input}</b> совпадает с <code>${mask}</code> (${group.type_en} / ${country.name})`);
        }
      }
    }
  }

  resultsElement.innerHTML = matches.length
    ? `<ul>${matches.map(m => `<li>${m}</li>`).join('')}</ul>`
    : `<p>Ничего не найдено</p>`;

  renderWarnings();
}

/**
 * Отрисовка всей базы знаний в DOM.
 */
function renderKnowledgeBase() {
  const container = document.getElementById('knowledge-base');
  if (!container) return;

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
}

/**
 * Отрисовка предупреждений о неизвестных моделях.
 */
function renderWarnings() {
  const warningBox = document.getElementById('warnings');
  if (!warningBox) return;

  if (warnings.size > 0) {
    warningBox.innerHTML = `<div class="warning-list">
      <p><b>⚠ Обнаружены ошибки в масках стран:</b></p>
      <ul>${Array.from(warnings).map(w => `<li>${w}</li>`).join('')}</ul>
    </div>`;
  } else {
    warningBox.innerHTML = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderKnowledgeBase();
  renderWarnings();

  const input = document.getElementById('search');
  if (input) {
    input.addEventListener('input', () => {
      const val = input.value;
      if (handleInputValidation(val)) {
        handleSearch(val);
      } else {
        const resultsElement = document.getElementById('results');
        if (resultsElement) resultsElement.innerHTML = '';
      }
    });
  }
});
