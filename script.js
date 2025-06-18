let countriesData = {}; // Переменная для хранения всех данных
let allSymbols = {}; // Переменная для хранения символов

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
        .replace(/1/g, '[0-9]')      // заменяем 1 цифрой
        .replace(/A/g, '[A-Z]')      // заменяем A на любую заглавную букву
        .replace(/-/g, '\\-')        // экранируем дефис
        .toLowerCase());             // делаем нижний регистр
}

// Функция для поиска совпадений в реальном времени
function searchCountry(licensePlate) {
    let matches = [];
    
    for (const country in countriesData) {
        const formats = countriesData[country];

        formats.forEach(({ format, description }) => {
            const regex = createRegex(format);
            if (regex.test(licensePlate.toLowerCase())) {
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

    if (results.length > 0) {
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = `${result.country}: ${result.format} - ${result.description}`;
            resultList.appendChild(li);
        });
    } else if (licensePlate.length > 0) {
        resultList.innerHTML = '<li>Нет совпадений</li>';
    }
});

// Обработчик кнопки сброса
document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('licensePlate').value = '';
    document.getElementById('resultList').innerHTML = '';
});

// Обработчик кнопки базы данных
document.getElementById('dbButton').addEventListener('click', () => {
    alert(JSON.stringify(countriesData, null, 2)); // Здесь вы можете отобразить данные другим способом
});

// Загружаем данные при старте приложения
loadAllData();
