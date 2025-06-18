// script.js

// Подгрузка модулей (при использовании <script type="module">)
import { MODELS } from './data/models.js';
import { countryDatabase } from './data/countries.js';

// === та же логика что выше ===
function maskToRegex(mask) {
  let regexStr = '^';
  for (let char of mask) {
    if (MODELS[char]) {
      if (char === 'C') {
        regexStr += '(' + MODELS.C.map(c => (c ? c.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') : '')).join('|') + ')';
      } else {
        regexStr += '[' + MODELS[char] + ']';
      }
    } else {
      regexStr += char.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
  }
  return new RegExp(regexStr + '$', 'i');
}

document.getElementById('search').addEventListener('input', function () {
  const input = this.value.trim();
  const output = [];

  for (let country of countryDatabase) {
    for (let mask of country.masks) {
      const regex = maskToRegex(mask);
      if (regex.test(input)) {
        output.push(`${input} соответствует маске ${mask} в стране ${country.name}`);
      }
    }
  }

  const results = document.getElementById('results');
  results.innerHTML = output.length > 0
    ? '<ul>' + output.map(r => `<li>${r}</li>`).join('') + '</ul>'
    : '<p>Ничего не найдено</p>';
});

function renderKnowledgeBase() {
  const container = document.getElementById('knowledge-base');
  countryDatabase.forEach(country => {
    const div = document.createElement('div');
    div.className = 'country-block';
    div.innerHTML = `
      <strong>${country.name} (${country.code})</strong><br>
      Маски: ${country.masks.join(', ')}<br>
      Рекомендуемые: ${country.recommended.join(', ')}
    `;
    container.appendChild(div);
  });
}

renderKnowledgeBase();
