export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  badge?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "bere",
    label: "Bere",
    emoji: "🍺",
    items: [
      {
        id: 1,
        name: "Heineken Silver",
        description: "330 ml",
        price: "14 lei",
      },
      {
        id: 2,
        name: "Heineken",
        description: "330 ml",
        price: "14 lei",
      },
      {
        id: 3,
        name: "Stella Artois",
        description: "330 ml",
        price: "15 lei",
      },
      {
        id: 4,
        name: "Ciuc",
        description: "330 ml",
        price: "11 lei",
      },
      {
        id: 5,
        name: "Heineken F.A.",
        description: "330 ml",
        price: "14 lei",
      },
      {
        id: 6,
        name: "Beks",
        description: "330 ml",
        price: "14 lei",
      },
      {
        id: 7,
        name: "Ciuc Radle zmeură & lămâie",
        description: "330 ml",
        price: "14 lei",
      },
      {
        id: 8,
        name: "Leffe Blonde / Dark",
        description: "330 ml",
        price: "22 lei",
      },
      {
        id: 9,
        name: "Edelweiss Original",
        description: "500 ml",
        price: "26 lei",
      },
      {
        id: 10,
        name: "Desperados",
        description: "400 ml",
        price: "20 lei",
      },
      {
        id: 11,
        name: "Korona",
        description: "335 ml",
        price: "20 lei",
      },
    ],
  },
  {
    id: "bere draught",
    label: "bere draught",
    emoji: "🍻",
    items: [
      {
        id: 12,
        name: "Stella Artois DRAUGHT",
        description: "400 ml",
        price: "14 lei",
        badge: "Specialitate",
      },
      {
        id: 13,
        name: "Staropramen draught",
        description: "400 ml",
        price: "12 lei",
      },
      {
        id: 14,
        name: "Heineken draught",
        description: "250 ml",
        price: "10 lei",
      },
      {
        id: 15,
        name: "Bere la metru ciuc",
        description: "4 L",
        price: "100 lei",
      },
    ],
  },
  {
    id: "cidru",
    label: "cidru",
    emoji: "🍋",
    items: [
      {
        id: 16,
        name: "STRONGBOW",
        description: "330 ml",
        price: "16 lei",

      },
      {
        id: 17,
        name: "OLD MOUT KIWI & LIME",
        description: "500 ml",
        price: "26 lei",
      },
    ],
  },
  {
    id: "vin alb",
    label: "vin alb",
    emoji: "🍷",
    items: [
      {
        id: 18,
        name: "PURCARI NOCTURNE ALB SEC CHARDONNAY",
        description: "750 ml",
        price: "140 lei",
      },
      {
        id: 19,
        name: "SIAJ MURFATLAR CHARDONNAY ELITE",
        description: "750 ml",
        price: "130 lei",
      },
      {
        id: 20,
        name: "DOMENIUL COROANEI SAUVIGNON BLANC PRESTIGE ",
        description: "750 ml",
        price: "130 lei",
      },
      {
        id: 21,
        name: "OPRISOR LA CETATE TAMAIOASA ROMANEASCA",
        description: "750 ml",
        price: "130 lei",
      },
      {
        id: 22,
        name: "RECAS SOLO QUINTA",
        description: "750 ml",
        price: "200 lei",
      },
    ],
  },
  {
    id: "vin rose",
    label: "vin rose",
    emoji: "🍷",
    items: [
      {
        id: 23,
        name: "WINE CRIME ROSE SEC",
        description: "750 ml",
        price: "100 lei",
      },
      {
        id: 24,
        name: "PURCARI NOCTURNE ROSE SEC CUPAJ CABERNET SAUVIGNON",
        description: "750 ml",
        price: "140 lei",
      },
      {
        id: 25,
        name: "PURCARI NOCTURNE ROSE MERLOT",
        description: "750 ml",
        price: "140 lei",
      },
      {
        id: 26,
        name: "PURCARI NOCTURNE ROSE RARA NEAGRA",
        description: "750 ml",
        price: "140 lei",
      },
      {
        id: 27,
        name: "DOMENIUL COROANEI ROSE ELITE",
        description: "750 ml",
        price: "140 lei",
      },
      {
        id: 28,
        name: "RECAS MUSE NIGHT",
        description: "750 ml",
        price: "150 lei",
      },
      {
        id: 29,
        name: "DOMENIUL COROANEI",
        description: "750 ml",
        price: "200 lei",
      },
    ],
  },
  {
    id: "vin rosu",
    label: "vin rosu",
    emoji: "🍷",
    items: [
      {
        id: 30,
        name: "PURCARI NOCTURNE RARA NEGRA ROSU SEC",
        description: "750 ml",
        price: "130 lei",
      },
      {
        id: 31,
        name: "OPRISOR LA CETATE CABERNET SAUVIGNON",
        description: "750 ml",
        price: "130 lei",
      },
      {
        id: 32,
        name: "DOMENIUL COROANEI MERLOT PRESTIGE",
        description: "750 ml",
        price: "140 lei",
      },
      {
        id: 33,
        name: "OPRISOR DRAGAICA ROSIE",
        description: "750 ml",
        price: "160 lei",
      },
    ],
  },
  {
    id: "vin la pahar",
    label: "vin la pahar",
    emoji: "🍷",
    items: [
      {
        id: 34,
        name: "VIN LA PAHAR",
        description: "150 ml",
        price: "19 lei",
      },
      {
        id: 35,
        name: "PROSECCO",
        description: "100 ml",
        price: "21 lei",
      },
    ],
  },
  {
    id: "shots",
    label: "shots",
    emoji: "⚡",
    items: [
      {
        id: 36,
        name: "TEQUILA",
        description: "20 ml",
        price: "12 lei",
      },
      {
        id: 37,
        name: "jager",
        description: "20 ml",
        price: "12 lei",
      },
      {
        id: 38,
        name: "amaretto sour",
        description: "20 ml",
        price: "12 lei",
      },
      {
        id: 39,
        name: "OLMECA ALTOS",
        description: "20 ml",
        price: "20 lei",
      },
      {
        id: 40,
        name: "TURBO CREMA DE WHISKY",
        description: "20 ml",
        price: "12 lei",
      },
      {
        id: 41,
        name: "GODFATHER AMARETTO",
        description: "20 ml",
        price: "12 lei",
      },
      {
        id: 42,
        name: "GODFATHER WHISKY",
        description: "20 ml",
        price: "12 lei",
      },
      {
        id: 43,
        name: "CRAZY VODKA",
        description: "20 ml",
        price: "12 lei",
      },
    ],
  },
  {
    id: "spirtoase",
    label: "spirtoase",
    emoji: "⭐",
    items: [
      {
        id: 44,
        name: "MARTEL V.S",
        description: "40 ml",
        price: "24 lei",

      },
      {
        id: 45,
        name: "HENNESY V.S.",
        description: "40 ml",
        price: "30 lei",
      },
      {
        id: 46,
        name: "SHOT OLMECA GOLD",
        description: "20 ml",
        price: "12 lei",

      },
      {
        id: 47,
        name: "DON JULIO REPOSADO",
        description: "40 ml",
        price: "30 lei",
      },
      {
        id: 48,
        name: "JAMESON",
        description: "40 ml",
        price: "22 lei",

      },
      {
        id: 49,
        name: "JACK DANIELS",
        description: "40 ml",
        price: "24 lei",
      },
      {
        id: 50,
        name: "CHIVAS",
        description: "40 ml",
        price: "28 lei",

      },
      {
        id: 51,
        name: "GLENFIDDICH",
        description: "40 ml",
        price: "30 lei",
      },
      {
        id: 52,
        name: "ABSOLUT",
        description: "40 ml",
        price: "24 lei",
      },
      {
        id: 53,
        name: "OSTOYA",
        description: "40 ml",
        price: "32 lei",

      },
      {
        id: 54,
        name: "BELVEDERE",
        description: "40 ml",
        price: "34 lei",
      },
      {
        id: 55,
        name: "BEEFEATER",
        description: "40 ml",
        price: "20 lei",

      },
      {
        id: 56,
        name: "MALFY GIN",
        description: "40 ml",
        price: "24 lei",
      },
      {
        id: 57,
        name: "HAVAN 7YO",
        description: "40 ml",
        price: "26 lei",

      },
      {
        id: 58,
        name: "BUMBU THE ORIGINAL",
        description: "40 ml",
        price: "26 lei",
      },
      {
        id: 59,
        name: "DIPLOMATICO ROM 23 YO",
        description: "40 ml",
        price: "30 lei",
      },
    ],
  },
  {
    id: "APERITIV / digestiv",
    label: "APERITIV / digestiv",
    emoji: "🍹",
    items: [
      {
        id: 60,
        name: "AMARO AVERNA ",
        description: "40 ml",
        price: "18 lei",

      },
      {
        id: 61,
        name: "AMARETTO SOUR COKTAIL",
        description: "120 ml",
        price: "32 lei",
      },
      {
        id: 62,
        name: "BAILEYS",
        description: "40 ml",
        price: "24 lei",

      },
      {
        id: 63,
        name: "APEROL",
        description: "40 ml",
        price: "22 lei",
      },
    ],
  },
  {
    id: "Snaks",
    label: "snaks",
    emoji: "🍹",
    items: [
      {
        id: 64,
        name: "ALUNE",
        description: "80 g",
        price: "10 lei",
      },
      {
        id: 65,
        name: "POPCORN",
        description: "",
        price: "15 lei",
      },
      {
        id: 66,
        name: "MORCOVI & CASTRAVETI",
        description: "",
        price: "15 lei",
      },
      {
        id: 67,
        name: "NACHOS",
        description: "",
        price: "16 lei",
      },
      {
        id: 68,
        name: "SUPREME NACHOS",
        description: "",
        price: "36 lei",
      },
      {
        id: 69,
        name: "CROCHETE DE BRANZA",
        description: "",
        price: "18 lei",
      },
    ],
  },
  {
    id: "soft drinks",
    label: "soft drinks",
    emoji: "🧋",
    items: [
      {
        id: 70,
        name: "pepsi",
        description: "250 ml",
        price: "14 lei",
      },
      {
        id: 71,
        name: "MIRINDA",
        description: "250 ml",
        price: "14 lei",
      },
      {
        id: 72,
        name: "7UP",
        description: "250 ml",
        price: "14 lei",
      },
      {
        id: 73,
        name: "LIPTON ICE TEA",
        description: "250 ml",
        price: "14 lei",
      },
      {
        id: 74,
        name: "PRIGAT NECTAR & JUICE",
        description: "250 ml",
        price: "16 lei",
      },
      {
        id: 75,
        name: "EVERVESS TONIC",
        description: "250 ml",
        price: "14 lei",
      },
      {
        id: 76,
        name: "APA PLATA/MINERALA",
        description: "330 ml",
        price: "12 lei",
      },
      {
        id: 77,
        name: "APA PLATA/MINERALA",
        description: "750 ml",
        price: "21 lei",
      },
      {
        id: 78,
        name: "REDBULL",
        description: "250 ml",
        price: "18 lei",
      },
    ],
  },
  {
    id: "fresh",
    label: "fresh",
    emoji: "🍊",
    items: [
      {
        id: 79,
        name: "LIMONADA",
        description: "330 ml",
        price: "23 lei",
      },
      {
        id: 80,
        name: "FRESH PORTOCALE",
        description: "330 ml",
        price: "23 lei",
      },
      {
        id: 81,
        name: "FRESH GRAPEFRUIT",
        description: "330 ml",
        price: "23 lei",
      },
      {
        id: 82,
        name: "FRESH MIXT",
        description: "330 ml",
        price: "26 lei",
      },
      {
        id: 83,
        name: "LIMONADA MENTA & GHIMBIR",
        description: "330 ml",
        price: "26 lei",
      },
      {
        id: 84,
        name: "LIMONADA FRUCTUL PASIUNII",
        description: "330 ml",
        price: "26 lei",
      },
      {
        id: 85,
        name: "LIMONADA FRUCTE DE PADURE",
        description: "330 ml",
        price: "26 lei",
      },
      {
        id: 86,
        name: "LIMONADA CAPSUNI",
        description: "330 ml",
        price: "26 lei",
      },
    ],
  },
  {
    id: "cafea",
    label: "cafea",
    emoji: "☕",
    items: [
      {
        id: 87,
        name: "ESPRESSO",
        description: "",
        price: "12 lei",
      },
      {
        id: 88,
        name: "CAPPUCCINO",
        description: "",
        price: "17 lei",
      },
      {
        id: 89,
        name: "CAFE LATTE",
        description: "",
        price: "17 lei",
      },
      {
        id: 90,
        name: "FRAPPE CARAMEL",
        description: "",
        price: "21 lei",
      },
      {
        id: 91,
        name: "FRAPPE CIOCOLATA",
        description: "",
        price: "21 lei",
      },
      {
        id: 92,
        name: "IRISH COFFEE",
        description: "",
        price: "23 lei",
      },
      {
        id: 93,
        name: "IRISH COFFEE",
        description: "",
        price: "17 lei",
      },
      {
        id: 94,
        name: "CEAI FRUCTE DE PADURE",
        description: "",
        price: "17 lei",
      },
      {
        id: 95,
        name: "CEAI VERDE",
        description: "",
        price: "17 lei",
      },
      {
        id: 96,
        name: "CEAI NEGRU LAMAIE SI GHIMBIR",
        description: "",
        price: "17 lei",
      },
      {
        id: 97,
        name: "CEAI MUSETEL",
        description: "",
        price: "17 lei",
      },
    ],
  },
  {
    id: "long drinks",
    label: "long drinks",
    emoji: "🔞",
    items: [
      {
        id: 98,
        name: "WHISKY COLA",
        description: "",
        price: "22 lei",
      },
      {
        id: 99,
        name: "VODKA MIX",
        description: "",
        price: "22 lei",
      },
      {
        id: 100,
        name: "CUBA LIBRE",
        description: "",
        price: "22 lei",
      },
      {
        id: 101,
        name: "GIN TONIC",
        description: "",
        price: "22 lei",
      },
      {
        id: 102,
        name: "CUBA LIBRE",
        description: "",
        price: "22 lei",
      },
    ],
  },
  {
    id: "non alcoholic cocktails",
    label: "non alcoholic cocktails",
    emoji: "🍸",
    items: [
      {
        id: 103,
        name: "MARACUJA MOJITO ",
        description: "250 ml",
        price: "25 lei",
      },
      {
        id: 104,
        name: "STRAWBERRY MINT",
        description: "250 ml",
        price: "25 lei",
      },
      {
        id: 105,
        name: "GREEEN APPLE",
        description: "250 ml",
        price: "25 lei",
      },
    ],
  },
  {
    id: "cocktails",
    label: "cocktails",
    emoji: "🍸",
    items: [
      {
        id: 106,
        name: "PINACOLADA",
        description: "250 ml",
        price: "27 lei",
      },
      {
        id: 107,
        name: "CAMPARI ORANGE",
        description: "250 ml",
        price: "32 lei",
      },
      {
        id: 108,
        name: "MOJITO",
        description: "250 ml",
        price: "27 lei",
      },
      {
        id: 109,
        name: "APEROL SPRITZ",
        description: "250 ml",
        price: "27 lei",
      },
      {
        id: 110,
        name: "HUGO SPRITZ",
        description: "250 ml",
        price: "27 lei",
      },
    ],
  },
  {
    id: "narghilea",
    label: "narghilea",
    emoji: "💨",
    items: [
      {
        id: 111,
        name: "NARGHILEA BANANE + CAPSUNI",
        description: "",
        price: "60 lei",
      },
      {
        id: 112,
        name: "NARGHILEA LOVE 66",
        description: "",
        price: "60 lei",
      },
      {
        id: 113,
        name: "NARGHILEA HAWAII",
        description: "",
        price: "60 lei",
      },
      {
        id: 114,
        name: "NARGHILEA MIAMORE",
        description: "",
        price: "60 lei",
      },
      {
        id: 115,
        name: "NARGHILEA BON BON",
        description: "",
        price: "60 lei",
      },
      {
        id: 116,
        name: "NARGHILEA MAR",
        description: "",
        price: "60 lei",
      },
      {
        id: 117,
        name: "EXTRA CARBUNI",
        description: "",
        price: "60 lei",
      },
    ],
  },
  {
    id: "food",
    label: "Mancare",
    emoji: "🍽️",
    items: [
      {
        id: 118,
        name: "🍔 Burger de porc cu cheddar și cartofi prăjiți",
        description: "Burger suculent din chiftea de porc, în chiflă pufoasă cu cheddar, roșii și salată. Servit cu cartofi prăjiți aurii și sos – 600g.",
        price: "49 lei",
        badge: "Recomandat",
        image: "/photos/Meniu_Burger_Cartofi.png", // 👈 nou
      },
      {
        id: 119,
        name: "Aripioare crispy cu cartofi prăjiți",
        description: "Aripioare de pui crocante, servite cu cartofi prăjiți aurii și sos delicios la alegere – 400g",
        price: "39 lei",
        image: "/photos/Meniu_Aripioare_Cartofi.jpeg", // 👈 nou
      },
      {
        id: 120,
        name: "Șnițel pane cu cartofi prăjiți",
        description: "Șnițel de pui în stil vienez, crocant la exterior și suculent în interior, servit pe un pat de cartofi prăjiți aurii și salată proaspătă – 450g",
        price: "39 lei",
        image: "/photos/Meniu_Snitel_Cu_Cartofi.png", // 👈 nou
      },
      {
        id: 121,
        name: "„Mici tradiționali",
        description: "Mititei românești suculenți, serviți cu cartofi prăjiți aurii și muștar clasic – 400g",
        price: "39 lei",
        badge: "Best seller",
        image: "/photos/Meniu_Mici_Cartofi.png", // 👈 nou
      },
      {
        id: 122,
        name: "Pomana porcului",
        description: "Carne la găleată cu mămăligă și murături - 600g",
        price: "59 lei",
        image: "/photos/Meniu_Carne_Galeata_Cu_Muraturi.png", // 👈 nou
      },
      {
        id: 123,
        name: "Salată grecească",
        description: "Salată în stil grecesc, preparată din roșii proaspete, castraveți, telemea de vacă și măsline, asezonată cu ulei de măsline extravirgin – 400g",
        price: "43 lei",
        image: "/photos/Meniu_Salata_Greceasca.png", // 👈 nou
      },
      {
        id: 124,
        name: "Salată Cezar",
        description: "Salată fresh cu piept de pui la grătar, parmezan, crutoane crocante și sos Caesar clasic – porție echilibrată și sățioasă - 400g",
        price: "49 lei",
        image: "/photos/Meniu_Salata_Ceaser.png", // 👈 nou
      },
    ],
  },
];
