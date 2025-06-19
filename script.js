// script.js

import { MODELS } from './data/models.js';
import { countryDatabase } from './data/countries.js';

const MIN_INPUT_LENGTH = 2;
const warnings = new Set();

/**
 * Экранирует спецсимволы для RegExp.
 */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');
}

/**
 * Преобразует маску в регулярное выражение.
 */
function maskToRegex(mask, partialLength = null, countryCode = '', groupType = '') {
  let regexStr = '^';
  const len = partialLength || mask.length;
  let hasUnknownModel = false;

  for (let i = 0; i < mask.length && i < len; i++) {
    const char = mask[i];

    if (MODELS.hasOwnProperty(char)) {
      const model = MODELS[char];
      if (Array.isArray(model)) {
        const escaped = model.map(c => escapeRegExp(c)).join('');
        regexStr += `[${escaped}]?`;
      } else if (typeof model === 'string') {
        regexStr += `[${escapeRegExp(model)}]`;
      }
    } else {
      if (/^[a-zA-Z0-9]$/.test(char)) {
        const message = `\u26A0 \u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B-\u043C\u043E\u0434\u0435\u043B\u044C "${char}" \u0432 \u043C\u0430\u0441\u043A\u0435 "${mask}" (${groupType}) \u0441\u0442\u0440\u0430\u043D\u044B ${countryCode}`;
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
    console.error(`\u274C \u041E\u0448\u0438\u0431\u043A\u0430 RegExp \u0438\u0437 \u043C\u0430\u0441\u043A\u0438 "${mask}" → ${regexStr}`, e);
    return null;
  }
}

function handleSearch(inputValue) {
  const input = inputValue.trim();
  const resultsElement = document.getElementById('results');
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
}

function renderWarnings() {
  const warningBox = document.getElementById('warnings');
  if (!warningBox) return;

  if (warnings.size > 0) {
    warningBox.innerHTML = `<div class="warning-list">
      <p><b>\u26A0 Обнаружены ошибки в масках стран:</b></p>
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
      handleSearch(input.value);
    });
  }
});
