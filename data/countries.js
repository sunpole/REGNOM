// data/countries.js

export const countryDatabase = [
  {
    name: "🇦🇱 Албания",
    code: "ALB",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили", // Название на русском
        type_en: "Cars",    // Название на английском
        masks: ["AA 9999", "A 9999", "A-9999"] // Примеры масок
      }
    ]
  },
  {
    name: "🇦🇩 Андорра",
    code: "AND",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇦🇲 Армения",
    code: "ARM",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇦🇹 Австрия",
    code: "AUT",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["AA 9999", "A 99999"] // Примеры масок
      }
    ]
  },
  {
    name: "🇦🇿 Азербайджан",
    code: "AZE",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇧🇾 Беларусь",
    code: "BLR",
    flagStatus: "real", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Грузовые автомобили",
        type_en: "Freight vehicles",
        masks: [
          "DD 9999-9",   // Например, AX 7506-7
          "DD999-9",     // Формат без пробелов
          "DD 999 9"     // Например, AAE 001-7
        ]
      },
      {
        type: "Грузовые электромобили и электробусы",
        type_en: "Freight electric vehicles and buses",
        masks: [
          "DD 999-9",    // Пример для электробусов
          "DD 999 9"     // Другие форматы
        ]
      },
      {
        type: "Задние знаки для грузовых автомобилей и автобусов",
        type_en: "Rear signs for freight vehicles and buses",
        masks: [
          "DD-9 9999",   // Например, AO-7 1234
          "DD-9 999"     // Другие форматы
        ]
      },
      {
        type: "Задние знаки для легковых автомобилей и прицепов",
        type_en: "Rear signs for passenger vehicles and trailers",
        masks: [
          "DD 9999",     // Однорядный задний знак легковых автомобилей
          "DD 999"       // Прицепы
        ]
      },
      {
        type: "Грузовые прицепы и полуприцепы",
        type_en: "Freight trailers and semi-trailers",
        masks: [
          "DD-9 9999"    // Формат для прицепов
        ]
      },
      {
        type: "Знаки для тракторов и тракторных прицепов",
        type_en: "Signs for tractors and tractor trailers",
        masks: [
          "DD 9999"      // Формат для тракторов
        ]
      }
    ]
  },
  {
    name: "🇧🇪 Бельгия",
    code: "BEL",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999", "A9999"]
      }
    ]
  },
  {
    name: "🇧🇦 Босния и Герцеговина",
    code: "BIH",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇧🇬 Болгария",
    code: "BGR",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999", "A 9 999"]
      }
    ]
  },
  {
    name: "🇭🇷 Хорватия",
    code: "HRV",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇨🇾 Кипр",
    code: "CYP",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇨🇿 Чехия",
    code: "CZE",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇩🇰 Дания",
    code: "DNK",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999", "A-9999"]
      }
    ]
  },
  {
    name: "🇪🇪 Эстония",
    code: "EST",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇫🇮 Финляндия",
    code: "FIN",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇫🇷 Франция",
    code: "FRA",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["AA 9999", "A 99999"]
      }
    ]
  },
  {
    name: "🇬🇪 Грузия",
    code: "GEO",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇩🇪 Германия",
    code: "DEU",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["B 9999", "B 99", "B9999"]
      }
    ]
  },
  {
    name: "🇬🇷 Греция",
    code: "GRC",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇭🇺 Венгрия",
    code: "HUN",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇮🇸 Исландия",
    code: "ISL",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇮🇪 Ирландия",
    code: "IRL",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇮🇹 Италия",
    code: "ITA",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 99999", "AA 9999"]
      }
    ]
  },
  {
    name: "🇰🇿 Казахстан",
    code: "KAZ",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇽🇰 Косово",
    code: "XKX",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇱🇻 Латвия",
    code: "LVA",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇱🇮 Лихтенштейн",
    code: "LIE",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇱🇹 Литва",
    code: "LTU",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇱🇺 Люксембург",
    code: "LUX",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇲🇹 Мальта",
    code: "MLT",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇲🇩 Молдова",
    code: "MDA",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇲🇨 Монако",
    code: "MCO",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["AA 9999", "A 9999"]
      }
    ]
  },
  {
    name: "🇲🇪 Черногория",
    code: "MNE",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇳🇱 Нидерланды",
    code: "NLD",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇲🇰 Северная Македония",
    code: "MKD",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇳🇴 Норвегия",
    code: "NOR",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇵🇱 Польша",
    code: "POL",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 99999"]
      }
    ]
  },
  {
    name: "🇵🇹 Португалия",
    code: "PRT",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["99 99 99", "AA 99"]
      }
    ]
  },
  {
    name: "🇷🇴 Румыния",
    code: "ROU",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["B 9999"]
      }
    ]
  },
  {
    name: "🇷🇺 Россия",
    code: "RUS",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999", "AA 9999"]
      }
    ]
  },
  {
    name: "🇸🇲 Сан-Марино",
    code: "SMR",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇷🇸 Сербия",
    code: "SRB",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇸🇰 Словакия",
    code: "SVK",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["B 9999"]
      }
    ]
  },
  {
    name: "🇸🇮 Словения",
    code: "SVN",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇪🇸 Испания",
    code: "ESP",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["9999 A", "9999 AA", "A 9999"]
      }
    ]
  },
  {
    name: "🇸🇪 Швеция",
    code: "SWE",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇨🇭 Швейцария",
    code: "CHE",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 999 9999"]
      }
    ]
  },
  {
    name: "🇺🇦 Украина",
    code: "UKR",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  },
  {
    name: "🇬🇧 Великобритания",
    code: "GBR",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 999 9999", "A99 999"]
      }
    ]
  },
  {
    name: "🇻🇦 Ватикан",
    code: "VAT",
    flagStatus: "test", // test / real
    lastUpdated: "2025-06-19",
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  }
];
