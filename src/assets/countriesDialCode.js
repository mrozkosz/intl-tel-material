const countriesDialCode = [
    {
      name: "Poland",
      code: "PL",
      codeLowCase: "pl",
      dialCode: "+48",
      mask: "999 999 999",
    },
    {
      name: "United Kingdom",
      code: "GB",
      codeLowCase: "gb",
      dialCode: "+44",
      mask: "99999 999999",
    },
    {
      name: "Ukraine",
      code: "UA",
      codeLowCase: "ua",
      dialCode: "+380",
      mask: "999 999 9999",
    },
    {
      name: "Switzerland",
      code: "CH",
      codeLowCase: "ch",
      dialCode: "+41",
      mask: "999 999 99 99",
    },
    {
      name: "Sweden",
      code: "SE",
      codeLowCase: "se",
      dialCode: "+46",
      mask: "999-999 99 99",
    },
    {
      name: "Spain",
      code: "ES",
      codeLowCase: "es",
      dialCode: "+34",
      mask: "999 99 99 99",
    },
    {
      name: "Slovenia",
      code: "SI",
      codeLowCase: "si",
      dialCode: "+386",
      mask: "999 999 999",
    },
    {
      name: "Slovakia",
      code: "SK",
      codeLowCase: "sk",
      dialCode: "+421",
      mask: "9999 999 999",
    },
    {
      name: "Serbia",
      code: "RS",
      codeLowCase: "rs",
      dialCode: "+381",
      mask: "999 9999999",
    },
    {
      name: "San Marino",
      code: "SM",
      codeLowCase: "sm",
      dialCode: "+378",
      mask: "99 99 99 99",
    },
    {
      name: "Romania",
      code: "RO",
      codeLowCase: "ro",
      dialCode: "+40",
      mask: "9999 999 999",
    },
    {
      name: "Netherlands",
      code: "NL",
      codeLowCase: "nl",
      dialCode: "+31",
      mask: "99",
    },
    {
      name: "Montenegro",
      code: "ME",
      codeLowCase: "me",
      dialCode: "+382",
      mask: "999 999 999",
    },
    {
      name: "Monaco",
      code: "MC",
      codeLowCase: "mc",
      dialCode: "+377",
      mask: "99 99 99 99 99",
    },
    {
      name: "Moldova",
      code: "MD",
      codeLowCase: "md",
      dialCode: "+373",
      mask: "9999 99 999",
    },
    {
      name: "Russia",
      code: "RU",
      codeLowCase: "ru",
      dialCode: "+7",
      mask: "9 (999) 999-99-99",
    },
    {
      name: "Portugal",
      code: "PT",
      codeLowCase: "pt",
      dialCode: "+351",
      mask: "999 999 999",
    },
    {
      name: "Norway",
      code: "NO",
      codeLowCase: "no",
      dialCode: "+47",
      mask: "999 99 999",
    },
    {
      name: "Malta",
      code: "MT",
      codeLowCase: "mt",
      dialCode: "+356",
      mask: "9999 9999",
    },
    {
      name: "Macedonia",
      code: "MK",
      codeLowCase: "mk",
      dialCode: "+389",
      mask: "999 999 999",
    },
    {
      name: "Luxembourg",
      code: "LU",
      codeLowCase: "lu",
      dialCode: "+352",
      mask: "999 999 999",
    },
    {
      name: "Lithuania",
      code: "LT",
      codeLowCase: "lt",
      dialCode: "+370",
      mask: "(9-999) 99999",
    },
    {
      name: "Liechtenstein",
      code: "LI",
      codeLowCase: "li",
      dialCode: "+423",
      mask: "999 999 999",
    },
    {
      name: "Latvia",
      code: "LV",
      codeLowCase: "lv",
      dialCode: "+371",
      mask: "99 999 999",
    },
    {
      name: "Italy",
      code: "IT",
      codeLowCase: "it",
      dialCode: "+39",
      mask: "999 999 9999",
    },
    {
      name: "Ireland",
      code: "IE",
      codeLowCase: "ie",
      dialCode: "+353",
      mask: "999 999 9999",
    },
    {
      name: "Iceland",
      code: "IS",
      codeLowCase: "is",
      dialCode: "+354",
      mask: "999 9999",
    },
    {
      name: "Hungary",
      code: "HU",
      codeLowCase: "hu",
      dialCode: "+36",
      mask: "(99) 999 9999",
    },
    {
      name: "Greece",
      code: "GR",
      codeLowCase: "gr",
      dialCode: "+30",
      mask: "999 999 9999",
    },
    {
      name: "Gibraltar",
      code: "GI",
      codeLowCase: "gi",
      dialCode: "+350",
      mask: "99999999",
    },
    {
      name: "Germany",
      code: "DE",
      codeLowCase: "de",
      dialCode: "+49",
      mask: "99999 9999999",
    },
    {
      name: "France",
      code: "FR",
      codeLowCase: "fr",
      dialCode: "+33",
      mask: "99 99 99 99 99",
    },
    {
      name: "Finland",
      code: "FI",
      codeLowCase: "fi",
      dialCode: "+358",
      mask: "999 9999999",
    },
    {
      name: "Faroe Islands",
      code: "FO",
      codeLowCase: "fo",
      dialCode: "+298",
      mask: "999999",
    },
    {
      name: "Estonia",
      code: "EE",
      codeLowCase: "ee",
      dialCode: "+372",
      mask: "9999 9999",
    },
    {
      name: "Denmark",
      code: "DK",
      codeLowCase: "dk",
      dialCode: "+45",
      mask: "99 99 99 99",
    },
    {
      name: "Czech Republic",
      code: "CZ",
      codeLowCase: "cz",
      dialCode: "+420",
      mask: "999 999 999",
    },
    {
      name: "Croatia",
      code: "HR",
      codeLowCase: "hr",
      dialCode: "+385",
      mask: "999 999 9999",
    },
    {
      name: "Bulgaria",
      code: "BG",
      codeLowCase: "bg",
      dialCode: "+359",
      mask: "999 999 999",
    },
    {
      name: "Bosnia and Herzegovina",
      code: "BA",
      codeLowCase: "ba",
      dialCode: "+387",
      mask: "999 999 999",
    },
    {
      name: "Belgium",
      code: "BE",
      codeLowCase: "be",
      dialCode: "+32",
      mask: "9999 99 99 99",
    },
    {
      name: "Belarus",
      code: "BY",
      codeLowCase: "by",
      dialCode: "+375",
      mask: "9 999 999-99-99",
    },
    {
      name: "Austria",
      code: "AT",
      codeLowCase: "at",
      dialCode: "+43",
      mask: "9999 999999",
    },
    {
      name: "Andorra",
      code: "AD",
      codeLowCase: "ad",
      dialCode: "+376",
      mask: "999 999",
    },
    {
      name: "Albania",
      code: "AL",
      codeLowCase: "al",
      dialCode: "+355",
      mask: "999 999 9999",
    },
  ];
  
  export default countriesDialCode;
  