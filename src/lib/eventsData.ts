export type Event = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  schedule: string;
  badge: string;
  badgeColor: string;
  icon: string;
  tags: string[];
};

export const eventsData: Event[] = [
  {
    id: 1,
    title: "Live Music & DJ Sets",
    subtitle: "Techno · House · Deep House Funky",
    description:
      "În fiecare sâmbătă seara, Korona Pub se transformă. DJ-uri de top și artiști locali aduc energia perfectă pentru o noapte de neuitat. Sunete curate, atmosferă premium.",
    schedule: "În fiecare Sâmbătă | 22:00 – 03:00",
    badge: "SĂPTĂMÂNAL",
    badgeColor: "gold",
    icon: "🎵",
    tags: ["DJ Set", "Live Music", "Techno", "House"],
  },
  {
    id: 2,
    title: "Champions League Night",
    subtitle: "Fotbal · Live · Atmosferă de stadion",
    description:
      "Cele mai mari meciuri din UEFA Champions League transmise live pe ecranele noastre. Bere rece, prieteni buni și goluri mari – singura rețetă pentru o seară perfectă.",
    schedule: "Marți & Miercuri | Zilele de meci",
    badge: "SPORT LIVE",
    badgeColor: "blue",
    icon: "⚽",
    tags: ["Champions League", "Football", "Sport Live"],
  },
  {
    id: 3,
    title: "Happy Hour",
    subtitle: "Reduceri · Oferte · Cocktailuri",
    description:
      "De luni până vineri, între 17:00 și 20:00, toate berea la halbă și cocktailurile de bază sunt la prețuri speciale. Relaxează-te după o zi lungă cu noi.",
    schedule: "Luni – Vineri | 17:00 – 20:00",
    badge: "ZILNIC",
    badgeColor: "green",
    icon: "🍻",
    tags: ["Reduceri", "Happy Hour", "Cocktailuri"],
  },
  {
    id: 4,
    title: "Seara de Vineri",
    subtitle: "Social Club · Networking · Vibe",
    description:
      "Vinerea este seara socializării la Korona. Muzică ambient, cocktailuri signature și oameni interesanți. Perfect pentru a încheia săptămâna în stil.",
    schedule: "În fiecare Vineri | 20:00 – 02:00",
    badge: "SĂPTĂMÂNAL",
    badgeColor: "gold",
    icon: "🥂",
    tags: ["Social Club", "Vineri", "Cocktailuri"],
  },
  {
    id: 5,
    title: "Concerte Live",
    subtitle: "Cântă · Râde · Bucură-te",
    description:
      "Prima joi din lună e dedicată celor care nu se tem să cânte. Repertoriu vast în română și engleză, atmosferă prietenoasă și premii pentru cei mai îndrăzneți.",
    schedule: "Prima Joi a lunii | 21:00 – 01:00",
    badge: "LUNAR",
    badgeColor: "purple",
    icon: "🎤",
    tags: ["Concerte", "Distracție", "Premii"],
  },
  {
    id: 6,
    title: "Sport Weekend",
    subtitle: "Formula 1 · Tenis · Baschet",
    description:
      "Weekend-ul e al sportului la Korona. De la Formula 1 la NBA, transmitem toate evenimentele majore live. Alege-ți echipa, ia-ți berea și bucură-te.",
    schedule: "Sâmbătă & Duminică | toată ziua",
    badge: "WEEKEND",
    badgeColor: "red",
    icon: "🏎️",
    tags: ["Formula 1", "NBA", "Sport Weekend"],
  },
];
