export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  badge?: string;
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
        name: "Korona Draft",
        description: "Berea casei la halbă – blondă, echilibrată, răcoritoare",
        price: "12 lei",
        badge: "Casa noastră",
      },
      {
        id: 2,
        name: "Ursus Premium",
        description: "Lager românesc premium, 500ml",
        price: "10 lei",
      },
      {
        id: 3,
        name: "Heineken",
        description: "Lager olandez clasic, 330ml",
        price: "11 lei",
      },
      {
        id: 4,
        name: "Paulaner Weißbier",
        description: "Bere albă bavareză, 500ml – cu lămâie",
        price: "16 lei",
      },
      {
        id: 5,
        name: "Guinness Draught",
        description: "Stout irlandez iconic, cremos și intens",
        price: "18 lei",
        badge: "Premium",
      },
      {
        id: 6,
        name: "Corona Extra",
        description: "Lager mexican, 330ml – servit cu lime",
        price: "14 lei",
      },
      {
        id: 7,
        name: "Leffe Blonde",
        description: "Bere de abație belgiană, 330ml",
        price: "15 lei",
      },
      {
        id: 8,
        name: "Craft IPA Local",
        description: "IPA artizanal, amăruie și aromatică, 400ml",
        price: "19 lei",
        badge: "Artizanal",
      },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktailuri",
    emoji: "🍹",
    items: [
      {
        id: 9,
        name: "Korona Sunset",
        description: "Tequila, sirop de portocale, suc de grepfrut, lime, sare",
        price: "25 lei",
        badge: "Specialitate",
      },
      {
        id: 10,
        name: "Mojito Clasic",
        description: "Rum alb, mentă proaspătă, lime, zahăr, apă minerală",
        price: "22 lei",
      },
      {
        id: 11,
        name: "Aperol Spritz",
        description: "Aperol, Prosecco, apă minerală, portocală",
        price: "24 lei",
      },
      {
        id: 12,
        name: "Dark & Stormy",
        description: "Rum brun, ginger beer, lime, ghimbir proaspăt",
        price: "26 lei",
      },
      {
        id: 13,
        name: "Old Fashioned",
        description: "Whisky bourbon, zahăr, bitter, coajă portocală",
        price: "28 lei",
        badge: "Premium",
      },
      {
        id: 14,
        name: "Negroni",
        description: "Gin, Campari, vermouth roșu – agitat, nu scuturat",
        price: "27 lei",
      },
      {
        id: 15,
        name: "Espresso Martini",
        description: "Vodkă, Kahlúa, espresso proaspăt, zahăr",
        price: "29 lei",
      },
      {
        id: 16,
        name: "Hugo Spritz",
        description: "Elderflower, Prosecco, mentă, lime, apă minerală",
        price: "22 lei",
      },
    ],
  },
  {
    id: "softuri",
    label: "Soft-uri",
    emoji: "🥤",
    items: [
      {
        id: 17,
        name: "Limonadă Artizanală",
        description: "Lemon proaspăt, sirop de zahăr, apă minerală, gheață",
        price: "14 lei",
        badge: "Fresh",
      },
      {
        id: 18,
        name: "Ice Tea Peach",
        description: "Ceai negru răcit, piersică, mentă, lemon",
        price: "12 lei",
      },
      {
        id: 19,
        name: "Coca-Cola / Zero",
        description: "330ml – sticlă",
        price: "8 lei",
      },
      {
        id: 20,
        name: "Schweppes Tonic",
        description: "330ml – sticlă",
        price: "8 lei",
      },
      {
        id: 21,
        name: "Red Bull",
        description: "250ml – energizant clasic",
        price: "12 lei",
      },
      {
        id: 22,
        name: "Sucuri Naturale",
        description: "Portocale / Grepfrut / Măr – stoarse la comandă",
        price: "16 lei",
        badge: "Fresh",
      },
      {
        id: 23,
        name: "Apă Plată / Minerală",
        description: "500ml",
        price: "5 lei",
      },
      {
        id: 24,
        name: "Cafea Espresso",
        description: "Boabe de specialitate, extrase la comandă",
        price: "8 lei",
      },
    ],
  },
  {
    id: "food",
    label: "Snacks & Food",
    emoji: "🍽️",
    items: [
      {
        id: 25,
        name: "Platou Korona",
        description:
          "Mezeluri artizanale, brânzeturi, murături, pâine prăjită",
        price: "55 lei",
        badge: "Recomandat",
      },
      {
        id: 26,
        name: "Nachos cu Guacamole",
        description: "Chips tortilla, guacamole proaspăt, salsa, jalapeños",
        price: "28 lei",
      },
      {
        id: 27,
        name: "Aripioare Buffalo",
        description: "6 buc – marinate, cu sos ranch și țelină",
        price: "32 lei",
      },
      {
        id: 28,
        name: "Burger Korona",
        description: "Vită 200g, cheddar, bacon, caramelizat, brioche",
        price: "42 lei",
        badge: "Best seller",
      },
      {
        id: 29,
        name: "Cartofi Wedges",
        description: "Cu rozmarin, usturoi și sos de smântână",
        price: "18 lei",
      },
      {
        id: 30,
        name: "Pizza Pub",
        description: "30cm – mozzarella, pepperoni, ciuperci, ardei",
        price: "38 lei",
      },
      {
        id: 31,
        name: "Salată Cezar",
        description: "Pui grătar, parmezan, crutons, sos clasic",
        price: "29 lei",
      },
      {
        id: 32,
        name: "Brownie cu Înghețată",
        description: "Brownie de ciocolată caldă cu înghețată de vanilie",
        price: "22 lei",
      },
    ],
  },
];
