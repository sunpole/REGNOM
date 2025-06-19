// data/countries.js

export const countryDatabase = [
  {
    name: "🇦🇱 Албания",
    code: "ALB",
    masks: ["A 9999", "AA 999"],
    recommended: ["A-9999"] // Модель A
  },
  {
    name: "🇦🇩 Андорра",
    code: "AND",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇦🇲 Армения",
    code: "ARM",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇦🇹 Австрия",
    code: "AUT",
    masks: ["AA 9999", "A 99999"],
    recommended: ["AA 9999"]
  },
  {
    name: "🇦🇿 Азербайджан",
    code: "AZE",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇧🇾 Беларусь",
    code: "BLR",
    groups: [
      {
        type: "Грузовые автомобили", // Название на русском
        type_en: "Freight vehicles",   // Название на английском
        masks: [
          "DD 9999-9",   // Например, AX 7506-7
          "DD999-9",     // Формат без пробелов
          "DD 999 9"     // Например, AAE 001-7
        ]
      },
      {
        type: "Грузовые электромобили и электробусы",  // Название на русском
        type_en: "Freight electric vehicles and buses", // Название на английском
        masks: [
          "DD 999-9",    // Пример для электробусов
          "DD 999 9"     // Другие форматы
        ]
      },
      {
        type: "Задние знаки для грузовых автомобилей и автобусов", // Название на русском
        type_en: "Rear signs for freight vehicles and buses",     // Название на английском
        masks: [
          "DD-9 9999",   // Например, AO-7 1234
          "DD-9 999"     // Другие форматы
        ]
      },
      {
        type: "Задние знаки для легковых автомобилей и прицепов", // Название на русском
        type_en: "Rear signs for passenger vehicles and trailers", // Название на английском
        masks: [
          "DD 9999",     // Однорядный задний знак легковых автомобилей
          "DD 999"       // Прицепы
        ]
      },
      {
        type: "Грузовые прицепы и полуприцепы", // Название на русском
        type_en: "Freight trailers and semi-trailers", // Название на английском
        masks: [
          "DD-9 9999",   // Формат для прицепов
        ]
      },
      {
        type: "Знаки для тракторов и тракторных прицепов", // Название на русском
        type_en: "Signs for tractors and tractor trailers",  // Название на английском
        masks: [
          "DD 9999",     // Формат для тракторов
        ]
      }
    ]
  },
  {
    name: "🇧🇪 Бельгия",
    code: "BEL",
    masks: ["A 9999", "A9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇧🇦 Босния и Герцеговина",
    code: "BIH",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇧🇬 Болгария",
    code: "BGR",
    masks: ["A 9999", "A 9 999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇭🇷 Хорватия",
    code: "HRV",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇨🇾 Кипр",
    code: "CYP",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇨🇿 Чехия",
    code: "CZE",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇩🇰 Дания",
    code: "DNK",
    masks: ["A 9999", "A-9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇪🇪 Эстония",
    code: "EST",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇫🇮 Финляндия",
    code: "FIN",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇫🇷 Франция",
    code: "FRA",
    masks: ["AA 9999", "A 99999"],
    recommended: ["AA 9999"]
  },
  {
    name: "🇬🇪 Грузия",
    code: "GEO",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇩🇪 Германия",
    code: "DEU",
    masks: ["B 9999", "B 99", "B9999"],
    recommended: ["B 9999"]
  },
  {
    name: "🇬🇷 Греция",
    code: "GRC",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇭🇺 Венгрия",
    code: "HUN",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇮🇸 Исландия",
    code: "ISL",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇮🇪 Ирландия",
    code: "IRL",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇮🇹 Италия",
    code: "ITA",
    masks: ["A 99999", "AA 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇰🇿 Казахстан",
    code: "KAZ",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇽🇰 Косово",
    code: "XKX",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇱🇻 Латвия",
    code: "LVA",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇱🇮 Лихтенштейн",
    code: "LIE",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇱🇹 Литва",
    code: "LTU",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇱🇺 Люксембург",
    code: "LUX",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇲🇹 Мальта",
    code: "MLT",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇲🇩 Молдова",
    code: "MDA",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇲🇨 Монако",
    code: "MCO",
    masks: ["AA 9999", "A 9999"],
    recommended: ["AA 9999"]
  },
  {
    name: "🇲🇪 Черногория",
    code: "MNE",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇳🇱 Нидерланды",
    code: "NLD",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇲🇰 Северная Македония",
    code: "MKD",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇳🇴 Норвегия",
    code: "NOR",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇵🇱 Польша",
    code: "POL",
    masks: ["A 99999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇵🇹 Португалия",
    code: "PRT",
    masks: ["99 99 99", "AA 99"],
    recommended: ["A 9999"]
  },
  {
    name: "🇷🇴 Румыния",
    code: "ROU",
    masks: ["B 9999"],
    recommended: ["B 9999"]
  },
  {
    name: "🇷🇺 Россия",
    code: "RUS",
    masks: ["A 9999", "AA 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇸🇲 Сан-Марино",
    code: "SMR",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇷🇸 Сербия",
    code: "SRB",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇸🇰 Словакия",
    code: "SVK",
    masks: ["B 9999"],
    recommended: ["B 9999"]
  },
  {
    name: "🇸🇮 Словения",
    code: "SVN",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇪🇸 Испания",
    code: "ESP",
    masks: ["9999 A", "9999 AA", "A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇸🇪 Швеция",
    code: "SWE",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇨🇭 Швейцария",
    code: "CHE",
    masks: ["A 999 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇺🇦 Украина",
    code: "UKR",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇬🇧 Великобритания",
    code: "GBR",
    masks: ["A 999 9999", "A99 999"],
    recommended: ["A 9999"]
  },
  {
    name: "🇻🇦 Ватикан",
    code: "VAT",
    masks: ["A 9999"],
    recommended: ["A 9999"]
  }
];
