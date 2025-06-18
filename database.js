let countriesData = {}; // Хранит данные стран

async function loadData() {
    try {
        const symbolsResponse = await fetch('symbols.json');
        countriesData = await symbolsResponse.json();

        const countryList = Object.keys(countriesData);
        renderCountryList(countryList);
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}

function renderCountryList(countryList) {
    const countryListElement = document.getElementById('countryList');
    countryListElement.innerHTML = ''; // Очищаем список

    countryList.forEach(country => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${country}">${country}</a>`;
        countryListElement.appendChild(li);
    });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCountries = Object.keys(countriesData).filter(country =>
        country.toLowerCase().includes(searchTerm)
    );
    renderCountryList(filteredCountries);
});

// Сортировка по возрастанию
document.getElementById('sortAscBtn').addEventListener('click', () => {
    const sortedCountries = Object.keys(countriesData).sort();
    renderCountryList(sortedCountries);
});

// Сортировка по убыванию
document.getElementById('sortDescBtn').addEventListener('click', () => {
    const sortedCountries = Object.keys(countriesData).sort().reverse();
    renderCountryList(sortedCountries);
});

// Загружаем данные при старте страницы
loadData();
