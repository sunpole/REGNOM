let countriesData = {};
let allSymbols = {};

// Загружаем символы и форматы стран
async function loadAllData() {
    const symbolsResponse = await fetch('symbols.json');
    allSymbols = await symbolsResponse.json();

    const countryList = ['belgium', 'france', 'germany']; // Добавьте другие страны здесь
    for (const country of countryList) {
        const response = await fetch(`${country}.json`);
        const countryData = await response.json();
        countriesData[country] = countryData.formats;
    }
}

// Функция для создания регулярного выражения из формата
function createRegex(format) {
    return new RegExp(format
        .replace(/0/g, '[0-9]')      // заменяем 0 цифрой
        .replace(/X/g, '[A-Z]')      // заменяем X на любую заглавную букву
        .replace(/-/g, '\\-')        // экранируем дефис
        .replace(/\s/g, '[\\s-]?')     // заменяем пробел на пробел или тире
        .toLowerCase());             // делаем нижний регистр для соответствия
}

// Функция для поиска совпадений в реальном времени
function searchCountry(licensePlate) {
    let matches = [];
    
    for (const country in countriesData) {
        const formats = countriesData[country];

        formats.forEach(({ format, description }) => {
            const regex = createRegex(format);
            if (regex.test(licensePlate.toLowerCase().trim())) {
                matches.push({
                    country,
                    format,
                    description,
                });
            }
        });
    }

    return matches;
}

// Обновление списка совпадений в реальном времени
document.getElementById('licensePlate').addEventListener('input', (event) => {
    const licensePlate = event.target.value;
    const results = searchCountry(licensePlate);
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = ''; // Очищаем список перед обновлением

    if (licensePlate.length > 0) {
        if (results.length > 0) {
            results.forEach(result => {
                const li = document.createElement('li');
                li.textContent = `${result.country}: ${result.format} - ${result.description}`;
                resultList.appendChild(li);
            });
        } else {
            resultList.innerHTML = '<li>Нет совпадений</li>';
        }
    }
});

// Обработчик кнопки сброса
document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('licensePlate').value = '';
    document.getElementById('resultList').innerHTML = '';
});

// Обработчик кнопки базы данных
document.getElementById('dbButton').addEventListener('click', () => {
    alert(JSON.stringify(countriesData, null, 2));
});

// Загружаем данные при старте приложения
loadAllData();
