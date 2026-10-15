// Everything on the site lives here — replace the placeholders with your own details.
export const profile = {
  name: "Ihor Borysenko",
  initials: "IB",
  photo: `${import.meta.env.BASE_URL}images/photo.jpg`,
  role: "CS student in Ukraine · working in Bern",
  eyebrow: "Personal card · 2026",
  status: "Currently searching for a Lehrstelle",
  heroWords: ["everything", "new things", "my own thing", "life"],
  heroIntro:
    "I study Computer Science and keep trying new things. This page is the short version of me — what I'm about, what I can do, and how to reach me.",
  quote: [
    "Life is our resume. It is our story to tell, and the choices we make write the chapters. Can we live in a way where we look forward to looking back?",
  ],
  facts: [
    { label: "Born", value: "23.04.2008" },
    { label: "City", value: "Bern, Switzerland" },
    { label: "Languages", value: "German · English · Russian · Ukrainian" },
    { label: "Status", value: "Studying" },
    { label: "Interests", value: "Music · nature · photo · gaming · learning" },
  ],
  aboutIntro: "A short, honest note on who I am and what I'm about — no big titles, just me.",
  about: [
    "My name is Ihor. I study Computer Science and I'm the kind of person who likes to try things — whatever I pick up, I want to understand how it works and what I can make of it.",
    "Along the way I've tried different fields, learning as I go and picking up experience piece by piece. I learned something important about myself — I learn fast, I'm flexible, patient and calm under pressure, and I see things through.",
    "Right now I'm working and studying, keeping learning and meeting people along the way. I'm open and sociable, so if you think we could be useful to each other, just write to me.",
  ],
  experienceIntro:
    "Not a list of big titles, but an honest record: what I've tried and what I learned along the way.",
  experience: [
    {
      period: "10.2026 — present",
      title: "Computer Science student",
      place: "Nizhyn State University named after Mykola Gogol, Ukraine · distance learning",
      text: "First year of Computer Science at the Nizhyn State University named after Mykola Gogol(UA) — studies started in October 2026.",
    },
    {
      period: "07.2026 — 10.2026",
      title: "Product Manager",
      place: "Swiss Filling and Packaging AG, Wynigen",
      text: "My role was — managing products and day-to-day operations. A steady position in Switzerland that brings together responsibility and everything I've picked up along the way.",
    },
    {
      period: "2026",
      title: "Secondary education",
      place: "Ukraine",
      text: "Finished my secondary education in Ukraine — 11 grades, completed.",
    },
    {
      period: "April 2026",
      title: "German B2 course",
      place: "Academia, Bern",
      text: "Completed a B2 German course at Academia in Bern.",
    },
    {
      period: "08.2024 — 06.2025",
      title: "BPI 1",
      place: "BFF Bern",
      text: "Studied at BFF Bern in the BPI 1 program and graduated with a grade of 6.0.",
    },
    {
      period: "12.2024 — 03.2025",
      title: "Schnupperlehre — Informatiker",
      place: "Bern",
      text: "Trial apprenticeships as an IT specialist: MC Software AG (12.2024), TF Bern (01.2025) and berufsbildungscenter Bern (03.2025).",
    },
  ],
  skillsIntro: "No made-up percentages — just what I can do and what I know.",
  skills: {
    groups: [
      {
        title: "Strengths",
        items: ["Fast learner", "Teamwork", "Flexible", "Patient & stress-resistant", "Responsible", "See things through"],
      },
      {
        title: "Know & can do",
        items: ["Programming fundamentals", "IT & tech basics", "Computers & internet", "Social media & content", "Staying organized"],
      },
      {
        title: "Interested in",
        items: ["Music", "Nature", "Creating New", "Learning", "Photography", "Gaming"],
      },
    ],
    languages: [
      { name: "Ukrainian", level: "Native" },
      { name: "Russian", level: "Fluent" },
      { name: "English", level: "B2" },
      { name: "German", level: "B2" },
    ],
  },
  contacts: [
    { type: "email", label: "Email", value: "contact.ihor.borysenko@gmail.com", href: "mailto:contact.ihor.borysenko@gmail.com" },
    { type: "telegram", label: "Telegram", value: "@BIhorory", href: "https://t.me/BIhorory" },
    { type: "instagram", label: "Instagram", value: "ihor.borysenko", href: "https://www.instagram.com/ihor.borysenko?obrf=MXYyajJ2cW05ZW9yMA%3D%3D&utm_source=qr" },
  ],
  contactIntro: "The easiest way is to just write. I'll reply and be glad to meet you.",
  contactNote:
    "Right now I'm looking for a Lehrstelle and open to new connections. Message me anywhere — I reply fast.",
};

export const chapters = [
  { to: "/about", n: "01", title: "About me", desc: "Who I am and what I'm into" },
  { to: "/experience", n: "02", title: "Experience & education", desc: "What I've tried and where I studied" },
  { to: "/skills", n: "03", title: "Skills", desc: "What I can do and where I shine" },
  { to: "/contact", n: "04", title: "Contact", desc: "How to reach me" },
];