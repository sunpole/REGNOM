// data/countries.js

export const countryDatabase = [
  {
    name: "🇦🇱 Албания",
    code: "ALB",
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
    groups: [
      {
        type: "Автомобили",
        type_en: "Cars",
        masks: ["A 9999"]
      }
    ]
  }
];
