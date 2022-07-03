const cards = [
  {
    id: 1,
    purple: {
      solution: "Csabai Kolbász",
      avoid: ["Békéscsaba", "Hús", "Paprika", "Szalámi", "Vastag"],
    },
    red: {
      solution: "Vontatókötél",
      avoid: ["Acélsodrony", "Autó", "Lerobban", "Horog", "Szervíz"],
    },
    yellow: {
      solution: "Gyomorkorgás",
      avoid: ["Hang", "Éhes", "Simaizom", "Összehúzódik", "Levegő"],
    },
    blue: {
      solution: "Adomány",
      avoid: ["Ingyen", "Juttat", "Segítség", "Pénz", "Rászoruló"],
    },
  },
  {
    id: 2,
    purple: {
      solution: "Próféta",
      avoid: ["Jövő", "Jós", "Beszélő", "Hírnök", "Isten"],
    },
    red: {
      solution: "Hibátlan",
      avoid: ["Feladat", "Tökéletes", "Munka", "Korrekt", "Jellem"],
    },
    blue: {
      solution: "Műlégy",
      avoid: ["Horog", "Pecázik", "Csali", "Pisztráng", "Hal"],
    },
    yellow: {
      solution: "Próbatétel",
      avoid: ["Feladat", "Erőltet", "Teszt", "Csapás", "Átesik"],
    },
  },
  {
    id: 3,
    purple: {
      solution: "Szigonypuska",
      avoid: ["Fegyver", "Víz", "Halászat", "Búvár", "Vessző"],
    },
    red: {
      solution: "Lakatlan Sziget",
      avoid: ["Robinson", "Hajótörött", "Egyedül", "Üres", "Néptelen"],
    },
    blue: {
      solution: "Bemárt",
      avoid: ["Áztat", "Pácol", "Feljelent", "Elárul", "Kiad"],
    },
    yellow: {
      solution: "Illatozik",
      avoid: ["Virág", "Szagol", "Levegő", "Erős", "Parfüm"],
    },
  },
  {
    id: 4,
    purple: {
      solution: "Láda",
      avoid: ["Tároló", "Gyümölcs", "Fa", "Léc", "Szög"],
    },
    red: {
      solution: "Turmix",
      avoid: ["Eper", "Gép", "Ital", "Tej", "Édes"],
    },
    blue: {
      solution: "Aranyásó",
      avoid: ["Láz", "Kalifornia", "Szita", "Serpenyő", "Mos"],
    },
    yellow: {
      solution: "Ablak",
      avoid: ["Ház", "Fény", "Üveg", "Kilincs", "Függöny"],
    },
  },
  {
    id: 5,
    purple: {
      solution: "Híres",
      avoid: ["Befolyásos", "Népszerű", "Sztár", "Neves", "Illusztris"],
    },
    red: {
      solution: "Függöny",
      avoid: ["Átlátszó", "Sötétítő", "Ablak", "Karnis", "Csipesz"],
    },
    blue: {
      solution: "Film",
      avoid: ["Mozi", "Sztár", "Tv", "Néz", "Jegy"],
    },
    yellow: {
      solution: "Szafari",
      avoid: ["Park", "Jeep", "Afrika", "Túra", "Vadles"],
    },
  },
  {
    id: 6,
    purple: {
      solution: "Pitypang",
      avoid: ["Gyermekláncfű", "Virág", "Sárga", "Kutyatej", "Fűz"],
    },
    red: {
      solution: "Viasz",
      avoid: ["Gyertya", "Fül", "Panoptikum", "Méh", "Kenőcs"],
    },
    blue: {
      solution: "Maraton",
      avoid: ["Görögország", "Futás", "42,195 km", "Olimpia", "Paula Redcliff"],
    },
    yellow: {
      solution: "Matador",
      avoid: ["Vér", "Bikaviadal", "Spanyolország", "Köpeny", "Döf"],
    },
  },
  {
    id: 7,
    purple: {
      solution: "Kakukk",
      avoid: ["Fészek", "Madár", "Tojás", "Óra", "Fióka"],
    },
    red: {
      solution: "János Vitéz",
      avoid: ["Kukorica", "Iluska", "Petőfi", "Franciaország", "Óriás"],
    },
    blue: {
      solution: "Jancsi és Juliska",
      avoid: ["Ketrec", "Boszorkány", "Hízlal", "Mézeskalács", "Csont"],
    },
    yellow: {
      solution: "Banán",
      avoid: ["Majom", "Gyümölcs", "Déli", "Héj", "Turmix"],
    },
  },
  {
    id: 8,
    purple: {
      solution: "Állatkert",
      avoid: ["Fogság", "Ketrec", "Látogató", "Vad", "Etetés"],
    },
    red: {
      solution: "Csütörtök",
      avoid: ["Négy", "Áldozó", "Szerda", "Mond", "Péntek"],
    },
    blue: {
      solution: "Dodo",
      avoid: ["Madár", "Repül", "Kihalt", "Felfedezők", "Galamb"],
    },
    yellow: {
      solution: "Sampon",
      avoid: ["Mos", "Haj", "Kondícionáló", "Hab", "Balzsam"],
    },
  },
  {
    id: 9,
    purple: {
      solution: "Kifest",
      avoid: ["Sminkel", "Lakás", "Szépítkezik", "Rajz", "Kikeniüfeni magát"],
    },
    red: {
      solution: "Hámoz",
      avoid: ["Krumpli", "Héj", "Lefejt", "Külső", "Foszt"],
    },
    blue: {
      solution: "Mérlegel",
      avoid: ["Boksz", "Fontolgat", "Átgondol", "Állat", "Töprengés"],
    },
    yellow: {
      solution: "Horgolás",
      avoid: ["Terítő", "Fonal", "Tű", "Nagymama", "Csipke"],
    },
  },
  {
    id: 10,
    purple: {
      solution: "Fokváros",
      avoid: ["Afrika", "Jóreménység", "Oranje", "Mandela", "Gyarmat"],
    },
    red: {
      solution: "Kengyel",
      avoid: ["Láb", "Beletesz", "Ló", "Fül", "Felmászik"],
    },
    blue: {
      solution: "Kötés",
      avoid: ["Nagymama", "Sál", "Fonál", "Kémia", "Borító"],
    },
    yellow: {
      solution: "Híradó",
      avoid: ["Média", "Tájékoztatás", "Katasztrófa", "Riporter", "Bemondó"],
    },
  },
  {
    id: 11,
    purple: {
      solution: "Szürkeállomány",
      avoid: ["Agy", "Gondolkodik", "Kéreg", "Tekervényes", "Koponya"],
    },
    red: {
      solution: "Diszkoszvetés",
      avoid: ["Atlétika", "Olimpia", "Dob", "Szer", "Verseny"],
    },
    blue: {
      solution: "Üveg",
      avoid: ["Ital", "Törékeny", "Palack", "Sör", "Bor"],
    },
    yellow: {
      solution: "Spitfire",
      avoid: ["Repülő", "Háború", "Vadász", "Pilóta", "Légierő"],
    },
  },
  {
    id: 12,
    purple: {
      solution: "Rizslámpa",
      avoid: ["Ázsia", "Hangulat", "Világít", "Berendez", "Olcsó"],
    },
    red: {
      solution: "Kalauz",
      avoid: ["Ellenőr", "Kezel", "Jegy", "Vonat", "Egyenruha"],
    },
    blue: {
      solution: "Szalvéta",
      avoid: ["Papír", "Étkezés", "Asztal", "Töröl", "Bal"],
    },
    yellow: {
      solution: "Falevél",
      avoid: ["Őszi", "Ág", "Zöld", "Lomb", "Hullik"],
    },
  },
  {
    id: 13,
    purple: {
      solution: "Domborzat",
      avoid: ["Felszín", "Földrajz", "Síkság", "Hegy", "Folyó"],
    },
    red: {
      solution: "Interjú",
      avoid: ["Beszélegtés", "Munkaadó", "Állás", "TV", "Alany"],
    },
    blue: {
      solution: "Fénymásol",
      avoid: ["Sokszorosít", "Papír", "Dokumentum", "Színes", "Nagyít"],
    },
    yellow: {
      solution: "Környezetvédelem",
      avoid: [
        "Energiatakarékos",
        "Szelektív",
        "Újrahasznosítás",
        "Biogáz",
        "Napelem",
      ],
    },
  },
  {
    id: 14,
    purple: {
      solution: "Ázsia",
      avoid: ["Kína", "Távol-Kelet", "Selyemút", "Kontinens", "Legnépesebb"],
    },
    red: {
      solution: "Kaszinó",
      avoid: ["Póker", "Rulett", "Tét", "Szerencsejáték", "Las Vegas"],
    },
    blue: {
      solution: "Bőrgyógyász",
      avoid: ["Vizsgál", "Recept", "Kiütés", "Kenőcs", "Anyajegy"],
    },
    yellow: {
      solution: "Diákmunka",
      avoid: ["Nyári", "Meló", "Mellékállás", "Iskola", "Fizetés"],
    },
  },
  {
    id: 15,
    purple: {
      solution: "Rege",
      avoid: ["Mítosz", "Mese", "Téli", "Történet", "Hiedelem"],
    },
    red: {
      solution: "Házimozi rendszer",
      avoid: ["Film", "Otthon", "Hangfal", "Dolby", "DVD"],
    },
    blue: {
      solution: "Közösség",
      avoid: ["Vallás", "Csoport", "Szervezet", "Kapcsolat", "Társadalmi"],
    },
    yellow: {
      solution: "Polc",
      avoid: ["Pakol", "Bútor", "Fal", "Könyv", "Tárol"],
    },
  },
  {
    id: 16,
    purple: {
      solution: "Program",
      avoid: ["Szoftver", "Hétvégi", "Kereső", "Terv", "Műsor"],
    },
    red: {
      solution: "Bűbáj",
      avoid: ["Varázslat", "Film", "Szemfényvesztés", "Hercegnő", "New York"],
    },
    blue: {
      solution: "Kispál és a Borz",
      avoid: ["Alternatív", "Zenekar", "Lovasi András", "Rock", "Emese"],
    },
    yellow: {
      solution: "Curling",
      avoid: ["Sport", "Jég", "Csúszik", "Kő", "Seper "],
    },
  },
  {
    id: 17,
    purple: {
      solution: "Play-Doh",
      avoid: ["Gyurma", "Alkotás", "Színes", "Készlet", "Tégely"],
    },
    red: {
      solution: "Szendvicsember",
      avoid: ["Hirdetés", "Étel", "Kenyér", "Reklám", "Szórólap"],
    },
    blue: {
      solution: "Tetoválószalon",
      avoid: ["Varrat", "Minta", "Tinta", "Rajz", "Bőr"],
    },
    yellow: {
      solution: "E.T.",
      avoid: ["Steven Spielberg", "Földönkívüli", "UFO", "Hazatelefonál", "Drew Barrymore"],
    },
  },
  {
    id: 18,
    purple: {
      solution: "Olimpia",
      avoid: ["Ötkarikás", "Játék", "Téli", "Nyári", "Athén"],
    },
    red: {
      solution: "Versenyló",
      avoid: ["Kincsem", "Lovi", "Fogadás", "Zsoké", "Telivér"],
    },
    blue: {
      solution: "Gladiátor",
      avoid: ["Ókor", "Róma", "Rabszolga", "Colosseum", "Harc"],
    },
    yellow: {
      solution: "Bűvös Kocka",
      avoid: ["Rubik Ernő", "Logika", "Színes", "Elforgat", "Játék"],
    },
  },
  {
    id: 19,
    purple: {
      solution: "Költöztető Cég",
      avoid: ["Teherautó", "Bútor", "Doboz", "Lakás", "Hordár"],
    },
    red: {
      solution: "Házassági Évforduló",
      avoid: ["Esküvő", "Ünnep", "Házasság", "Pár", "Aranylakodalom"],
    },
    blue: {
      solution: "Magyar Népzene",
      avoid: ["Folklór", "Művészet", "Bartók Béla", "Hegedű", "Népdalgyűjtemény"],
    },
    yellow: {
      solution: "Vidra",
      avoid: ["Állat", "Emlős", "Vízi", "Lutra", "Ragadozó"],
    },
  },
  {
    id: 20,
    purple: {
      solution: "Van Gogh",
      avoid: ["Festő", "Művész", "Napraforgó", "Holland", "Provence"],
    },
    red: {
      solution: "Csiszol",
      avoid: ["Dörzsöl", "Nevel", "Padló", "Papír", "Nyelvtudás"],
    },
    blue: {
      solution: "Metró",
      avoid: ["Aluljáró", "Vonal", "Budapest", "Megálló", "Kocsi"],
    },
    yellow: {
      solution: "Gorilla",
      avoid: ["Fekete", "Hegyi", "Dian Fossey", "Kongó", "Esőerdő"],
    },
  },
];

export default cards;