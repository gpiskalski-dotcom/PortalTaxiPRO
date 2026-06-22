// pro-data.js — content for PortalTaxiPRO.eu (B2B industry portal)
// All copy is realistic Polish industry placeholder text, generated from the
// 22-article source guide + the brief. Not driver how-tos — market/regulation/analysis.

const PRO = {
  brand: { name: 'portaltaxi', pro: 'PRO', tld: '.eu' },

  categories: [
    { id: 'rynek-polski', label: 'Rynek polski', desc: 'Sytuacja firm i flot w polskich miastach, konsolidacja, koszty działalności, konkurencja korporacji z platformami.' },
    { id: 'regulacje-ue', label: 'Regulacje i Dyrektywa UE', desc: 'Nowe obowiązki platform, unijna dyrektywa o pracy platformowej, licencje, kontrole i obowiązki pośredników.' },
    { id: 'rynki-zagraniczne', label: 'Rynki zagraniczne', desc: 'Regulacje taxi w Europie, modele platform, protesty branży, zmiany w aglomeracjach, porównania z Polską.' },
    { id: 'newsy-platform', label: 'Newsy z platform', desc: 'Zmiany w aplikacjach, funkcje dla flot, decyzje Ubera, Bolta i FreeNow, prowizje, wymagania wobec partnerów.' },
    { id: 'przeglad-prasy', label: 'Przegląd prasy', desc: 'Streszczenia publikacji branżowych, cytowania raportów, omówienia mediów gospodarczych, komentarze redakcji.' },
    { id: 'analizy', label: 'Analizy', desc: 'Rentowność flot, wpływ kosztów paliwa i energii, przyszłość licencjonowania, elektromobilność, skutki regulacji.' },
    { id: 'bezpieczenstwo', label: 'Bezpieczeństwo', desc: 'Przestępczość w kursach na aplikację, weryfikacja kierowców, kontrole policji i ITD, bezpieczeństwo pasażerów.' },
    { id: 'autonomiczne', label: 'Autonomiczne taxi', desc: 'Robotaxi i pojazdy bez kierowcy w Polsce i na świecie — testy, regulacje i wpływ na rynek przewozów.' },
  ],

  // Slider — featured articles
  slider: [
    {
      id: 'p53', cat: 'bezpieczenstwo', img: 'uploads/sondaz-ibris-tak.png',
      title: 'Sondaż IBRiS dla „Rz”: Aż 84% Polaków chce polskiego egzaminu na prawo jazdy dla taksówkarzy z zagranicy',
      lead: 'Po wypadku w Ząbkach presja na zaostrzenie zasad dla kierowców przewozów nadal rośnie. Problemem jest Konwencja Wiedeńska o wzajemnym uznawaniu przez państwa praw jazdy.',
      cats: ['bezpieczenstwo', 'przeglad-prasy'],
      source: 'Rzeczpospolita',
      link: 'https://www.rp.pl/spoleczenstwo/art44644601-prawo-jazdy-zrobione-tylko-w-polsce-nie-ufamy-taksowkarzom-obcokrajowcom',
      date: '19 czerwca 2026', read: 4,
    },
    {
      id: 'p52', cat: 'autonomiczne', img: 'uploads/av-robotaxi-pe.png',
      title: '17 państw UE za wspólnymi testami robotaxi. Polska wśród sygnatariuszy',
      lead: '8 czerwca br. w Luksemburgu 17 ministrów transportu UE — w tym polski — podpisało deklarację popierającą transgraniczne testy pojazdów autonomicznych. To regulacyjna odpowiedź Europy na ekspansję Waymo, Tesli i Apollo Go, mająca dać szansę na rozwój ich europejskim konkurentom.',
      cats: ['autonomiczne', 'regulacje-ue'],
      author: 'Redakcja PortalTaxiPRO',
      date: '15 czerwca 2026', read: 6,
    },
    {
      id: 'p50', cat: 'bezpieczenstwo', img: 'uploads/przeglad-nowe-zasady.png',
      title: 'Licencja z weryfikacją. Ministerstwo zmieni wymogi dla zagranicznych taksówkarzy',
      lead: 'Resort infrastruktury chce uszczelnić dostęp do zawodu taksówkarza. Cudzoziemcy spoza UE będą musieli udowodnić niekaralność nie tylko w Polsce, ale i w kraju, z którego pochodzą.',
      cats: ['bezpieczenstwo', 'przeglad-prasy'],
      source: 'RMF24', sourceAuthor: 'Waldemar Stelmach',
      link: 'https://www.rmf24.pl/fakty/polska/news-praca-nie-dla-przestepcow-beda-zmiany-dla-kierowcow-taxi,nId,8089932',
      date: '11 czerwca 2026', read: 3,
    },
    {
      id: 'p49', cat: 'bezpieczenstwo', img: 'uploads/jazda-deszcz-warszawa.png',
      title: 'Wypadek w Ząbkach otwiera na nowo debatę o bezpieczeństwie taksówek na aplikację',
      lead: 'Śmiertelny wypadek w Ząbkach spowodował powrót do debaty publicznej kwestii bezpieczeństwa taksówek i umiejętności zagranicznych kierowców. Postuluje się zawieszanie licencji za naruszenia przepisów drogowych.',
      cats: ['bezpieczenstwo', 'przeglad-prasy'],
      source: 'Rzeczpospolita', sourceAuthor: 'Piotr Szymaniak',
      link: 'https://www.rp.pl/prawo-drogowe/art44586391-po-wypadku-w-zabkach-eksperci-o-tym-jak-zwiekszyc-bezpieczenstwo-przewozow-na-aplikacje',
      date: '9 czerwca 2026', read: 5,
    },
    {
      id: 'p47', cat: 'rynek-polski', img: 'uploads/rynek-skrzyzowanie-warszawa.png',
      title: 'Zawody odporne na AI. Dlaczego taksówkarz i kurier mają przewagę nad automatyzacją?',
      lead: 'Natviol w analizie dla Infor przekonuje, że kierowcy i kurierzy mają coś, czego algorytmy na razie nie zastąpią: fizyczną obecność i mobilność. To sprawia, że ich praca pozostaje w dużej mierze poza zasięgiem automatyzacji.',
      cats: ['rynek-polski', 'autonomiczne', 'przeglad-prasy'],
      source: 'Infor (Kadry)', sourceAuthor: 'materiał partnera Natviol', region: 'Polska',
      link: 'https://kadry.infor.pl/wiadomosci/7595683,taksowkarz-i-kurier-bezpieczny-zawod-w-dobie-sztucznej-inteligencji-to-najliczniejsza-grupa-niezaleznych-pracownikow.html',
      date: '2 czerwca 2026', read: 3,
    },
  ],

  // Full article pool (assigned to categories). lead + body paragraphs.
  articles: [
    // PRZEGLĄD PRASY — Sondaż IBRiS ws. egzaminu dla kierowców z zagranicy (19 czerwca 2026)
    {
      "id": "p53",
      "cat": "bezpieczenstwo",
      "cats": ["bezpieczenstwo", "przeglad-prasy"],
      "img": "uploads/sondaz-ibris-wiek.png",
      "title": "Sondaż IBRiS dla „Rz”: Aż 84% Polaków chce polskiego egzaminu na prawo jazdy dla taksówkarzy z zagranicy",
      "lead": "Po wypadku w Ząbkach presja na zaostrzenie zasad dla kierowców przewozów nadal rośnie. Problemem jest Konwencja Wiedeńska o wzajemnym uznawaniu przez państwa praw jazdy.",
      "author": "Redakcja PRO.portaltaxi.pl",
      "source": "Rzeczpospolita",
      "sourceCat": "Bezpieczeństwo i prawo",
      "region": "Polska",
      "link": "https://www.rp.pl/spoleczenstwo/art44644601-prawo-jazdy-zrobione-tylko-w-polsce-nie-ufamy-taksowkarzom-obcokrajowcom",
      "date": "19 czerwca 2026",
      "read": 4,
      "hot": true,
      "sources": [
        "Rzeczpospolita, „Prawo jazdy zrobione tylko w Polsce. Nie ufamy taksówkarzom obcokrajowcom”, 19.06.2026 — https://www.rp.pl/spoleczenstwo/art44644601-prawo-jazdy-zrobione-tylko-w-polsce-nie-ufamy-taksowkarzom-obcokrajowcom"
      ],
      "body": [
        "Badania opinii publicznej poświęcone wprost rynkowi taksówek pojawiają się rzadko, dlatego najnowszy sondaż IBRiS zlecony przez „Rzeczpospolitą” zasługuje na uwagę. Po wypadku w Ząbkach nie maleje presja opinii publicznej i komentatorów na poprawę bezpieczeństwa przewozów taxi, a większość głosów szanse na poprawę upatruje w zaostrzeniu wymagań formalnych w stosunku do kierowców z zagranicy. Za przyczynę wypadków upatruje się ich niską kulturę jazdy, sprzeczną z zasadami oczekiwanymi na polskich drogach. Po fali oskarżeń kierowców taksówek o przemoc na tle seksualnym, aktualna kwestia BRD wydaje się być najistotniejszym od lat kryzysem wizerunkowym branży.",
        "Wyniki sondażu dla „Rzeczpospolitej” są jednoznaczne. Na pytanie, czy każdy taksówkarz — niezależnie od narodowości — powinien zdać egzamin na prawo jazdy w Polsce, twierdząco odpowiedziało 83,9% badanych. Tak wysoka zgodność jest w badaniach społecznych zjawiskiem wyjątkowym, zwłaszcza w temacie, który zwykle dzieli opinię publiczną. Warto odnotować zaangażowanie „Rzeczpospolitej” w relacjonowanie sytuacji w branży taxi w Polsce.",
        "Co istotne, poparcie dla zaostrzenia zasad przecina podziały polityczne i pokoleniowe. Za obowiązkowym egzaminem opowiada się 92% wyborców koalicji rządzącej i 88% elektoratu opozycji. Wyraźny jest natomiast efekt wieku: od 62% wśród najmłodszych respondentów (18–29 lat), przez 72% i 85% w średnich grupach, aż do 94–99% wśród osób po pięćdziesiątym i sześćdziesiątym roku życia.",
        "Sednem problemu pozostaje luka w obowiązujących przepisach. Od czerwca 2024 r. kierowca z zagranicy musi legitymować się prawem jazdy wydanym w Polsce, jednak urzędnik jedynie potwierdza autentyczność dokumentu zagranicznego — nie bada ani wiedzy o przepisach, ani realnych umiejętności prowadzenia pojazdu. Realne zaostrzenie zasad komplikuje przy tym ratyfikowana przez Polskę Konwencja wiedeńska o ruchu drogowym, która zobowiązuje do wzajemnego uznawania praw jazdy państw-sygnatariuszy, w tym wielu krajów spoza UE.",
        "Branża od dawna sygnalizuje, że obecne wymogi mają charakter formalny. Postulaty środowiska taksówkarzy obejmują wprowadzenie obowiązkowego egzaminu w Polsce oraz testu znajomości języka polskiego, a Ministerstwo Infrastruktury zapowiada przepisy wykluczające z zawodu osoby z wyrokami w krajach spoza UE i EFTA. W tle pozostaje zasadniczy deficyt informacyjny: ani policja, ani resort nie gromadzą danych o liczbie cudzoziemców wykonujących przewóz osób, co utrudnia rzetelną ocenę skali zjawiska."
      ]
    },
    // ARTYKUŁ — Deklaracja UE ws. transgranicznych testów AV (8 czerwca 2026)
    {
      "id": "p52",
      "cat": "autonomiczne",
      "cats": ["autonomiczne", "regulacje-ue"],
      "img": "uploads/av-robotaxi-pe.png",
      "title": "17 państw UE za wspólnymi testami robotaxi. Polska wśród sygnatariuszy",
      "lead": "8 czerwca w Luksemburgu 17 ministrów transportu UE — w tym polski — podpisało deklarację popierającą wprowadzenie przez UE transgranicznych testów pojazdów autonomicznych. To regulacyjna odpowiedź Europy na ekspansję Waymo, Tesli i Apollo Go, mająca dać szansę europejskim firmom konkurującym na rynku AV.",
      "author": "Redakcja PortalTaxiPRO",
      "date": "15 czerwca 2026",
      "read": 6,
      "hot": true,
      "sources": [
        "Euronews, 8.06.2026 — https://www.euronews.com/business/2026/06/08/robotaxis-are-coming-to-europe-and-the-eu-wants-to-speed-things-up",
        "Komisja Europejska (DG MOVE), 8.06.2026 — https://transport.ec.europa.eu/news-events/news/eu-ministers-back-cross-border-initiative-autonomous-vehicle-testbeds-2026-06-08_en",
        "electrive.com, 9.06.2026 — https://www.electrive.com/2026/06/09/17-eu-member-states-eye-cross-border-autonomous-driving-tests/"
      ],
      "body": [
        "8 czerwca w Luksemburgu komisarz UE ds. transportu Apostolos Tzitzikostas i ministrowie transportu siedemnastu państw członkowskich podpisali deklarację polityczną popierającą wielkoskalowe, transgraniczne testy pojazdów autonomicznych (AV). Wśród sygnatariuszy znalazła się Polska. Celem deklaracji jest zastąpienie rozproszonych krajowych pilotaży wspólnymi zasadami dopuszczeń i zharmonizowanymi procedurami zezwoleń — tak, by europejska branża mogła dogonić Stany Zjednoczone i Chiny.",
        "**Sygnatariusze i nieobecni**",
        "Pod deklaracją podpisały się: Austria, Belgia, Chorwacja, Cypr, Czechy, Estonia, Finlandia, Francja, Niemcy, Grecja, Węgry, Irlandia, Włochy, Luksemburg, Holandia, Polska i Szwecja (część źródeł wymienia też Litwę — wtedy 18 państw). Deklaracji nie podpisało ok. 9–10 krajów: Bułgaria, Dania, Łotwa, Malta, Portugalia, Rumunia, Słowacja, Słowenia i Hiszpania. Powodów oficjalnie nie podano — dokument był dobrowolny i otwarty, więc brak podpisu nie oznacza sprzeciwu; państwa mogą dołączyć w każdej chwili. Warta uwagi jest nieobecność Hiszpanii — to duży, mocno sporny rynek przewozów na aplikację (napięcie taxi vs VTC), a jej brak wśród sygnatariuszy jest istotnym sygnałem politycznym.",
        "**Pierwsze pieniądze: 20 mln EUR z CEF 2026**",
        "Pierwszym instrumentem wsparcia jest Connecting Europe Facility (CEF) 2026: 20 mln EUR przeznaczonych na infrastrukturę cyfrową dla jazdy autonomicznej. Nabór wniosków uruchamiany jest w czerwcu 2026 r. Kwota nie jest imponująca, ale otwiera formalny kanał finansowania, który może rosnąć w kolejnych rundach — szczególnie jeśli państwa szybko przedstawią wspólne testbedy.",
        "**Dlaczego harmonizacja przepisów jest kluczowa**",
        "Pojazd autonomiczny nie zna granic. AV dopuszczone w Niemczech mogło dotychczas okazać się nielegalne tuż za granicą — bo każde z 27 państw prowadziło własny pilotaż według własnych zasad. Producenci i operatorzy nie zbudują opłacalnej usługi na 27 różnych zestawach przepisów. Jeden wspólny standard pozwala wdrażać raz i działać w całej UE, co obniża ryzyko regulacyjne i przyciąga kapitał. To samo dotyczy infrastruktury: wspólne reguły ułatwiają budowę spójnej komunikacji pojazd–infrastruktura i wymianę danych między krajami.",
        "Bez harmonizacji powstają wyspy regulacyjne — część krajów wyprzedza resztę, technologie się nie łączą, a mniejsze rynki (takie jak Polska) ryzykują, że standardy ustalą za nich inni.",
        "**Kontekst rynkowy: robotaxi w Europie już działa**",
        "W tym samym tygodniu Londyn ogłosił rychłe starcie operatorów robotaxi: Waymo, Wayve (z Uberem) i Apollo Go (Baidu). Bolt i Uber równolegle zawierają partnerstwa z chińskimi firmami AV — Pony.ai, WeRide i Momenta — z myślą o rynkach w Madrycie, Monachium i Zagrzebiu. Deklaracja UE to regulacyjna odpowiedź na tę presję ze strony globalnych graczy.",
        "**Co to oznacza dla polskiego rynku taxi**",
        "Deklaracja to kierunek, nie prawo. Realne ramy dopuszczeń AV dopiero powstaną, a tempo ich wdrożenia zależy od prac na poziomie krajowym. Wpływ na polski rynek przewozów osób to perspektywa kilkuletnia, nie najbliższych miesięcy. Warto jednak obserwować kilka kwestii: nabór CEF 2026 (szansa dla polskich miast i firm na finansowanie testbedów), stanowisko Ministerstwa Infrastruktury wobec wspólnych ram UE oraz ewentualne polskie testbedy AV.",
        "Szansa leży w tym, że wcześniejsza obecność Polski w pracach UE może przyspieszyć krajowe pilotaże. Ryzyko — że globalni gracze (Uber, Bolt) i chińscy dostawcy AV wchodzą do Europy szybciej niż lokalne podmioty zdążą określić swoją rolę: jako operator floty, pośrednik, integrator technologii czy dostawca infrastruktury. Firmy z sektora taxi i mobility powinny już dziś mapować, gdzie w tym ekosystemie jest dla nich miejsce."
      ]
    },
    // RMF24 — zmiany przepisów dla kierowców taxi (11 czerwca 2026)
    {
      "id": "p50",
      "cat": "bezpieczenstwo",
      "cats": ["bezpieczenstwo", "przeglad-prasy"],
      "img": "uploads/przeglad-nowe-zasady.png",
      "title": "Licencja z weryfikacją. Ministerstwo zmieni wymogi dla zagranicznych taksówkarzy",
      "lead": "Resort infrastruktury chce uszczelnić dostęp do zawodu taksówkarza. Cudzoziemcy spoza UE będą musieli udowodnić niekaralność nie tylko w Polsce, ale i w kraju, z którego pochodzą.",
      "source": "RMF24",
      "sourceAuthor": "Waldemar Stelmach",
      "sourceCat": "Bezpieczeństwo i prawo",
      "region": "Polska",
      "link": "https://www.rmf24.pl/fakty/polska/news-praca-nie-dla-przestepcow-beda-zmiany-dla-kierowcow-taxi,nId,8089932",
      "date": "11 czerwca 2026",
      "read": 3,
      "body": [
        "Aktualne przepisy wymagają jedynie zaświadczenia o niekaralności z polskiego KRK. Luka prawna sprawia, że osoba wcześniej skazana za poważne przestępstwo — np. w Gruzji, Pakistanie lub Ukrainie — może bez przeszkód uzyskać polską licencję przewozową, jeśli nie figuruje w krajowym rejestrze.",
        "Planowana zmiana zobowiąże obywateli państw spoza Unii Europejskiej i EFTA do dołączenia analogicznego dokumentu z państwa, z którego pochodzą. Zaświadczenie będzie wymagało tłumaczenia przez tłumacza przysięgłego lub poświadczenia przez konsula.",
        "Projekt regulacji ma wkrótce pojawić się w wykazie prac rządu. Branża transportowa od miesięcy apeluje o skuteczniejsze narzędzia weryfikacji kierowców — temat powraca za każdym razem, gdy dochodzi do głośnego wypadku z udziałem taksówkarza pracującego na aplikację."
      ]
    },
    // Rzeczpospolita — wypadek w Ząbkach, bezpieczeństwo przewozów (9 czerwca 2026)
    {
      "id": "p49",
      "cat": "bezpieczenstwo",
      "cats": ["bezpieczenstwo", "przeglad-prasy"],
      "img": "uploads/jazda-deszcz-warszawa.png",
      "title": "Wypadek w Ząbkach otwiera na nowo debatę o bezpieczeństwie taksówek na aplikację",
      "lead": "Tragedia na skrzyżowaniu w Ząbkach z udziałem zagranicznego kierowcy przywróciła pytanie o standardy weryfikacji taksówkarzy. Prawnicy wskazują, że skuteczniejsze niż egzaminy byłoby szybkie zawieszanie licencji za naruszenia.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "Piotr Szymaniak",
      "sourceCat": "Bezpieczeństwo i prawo",
      "region": "Polska",
      "link": "https://www.rp.pl/prawo-drogowe/art44586391-po-wypadku-w-zabkach-eksperci-o-tym-jak-zwiekszyc-bezpieczenstwo-przewozow-na-aplikacje",
      "date": "9 czerwca 2026",
      "read": 5,
      "body": [
        "Do wypadku doszło, gdy kierowca wykonujący kurs na platformie zawrócił z prawego pasa tuż przed skrzyżowaniem, uderzając w nadjeżdżający pojazd. Dwie osoby zginęły, jedna trafiła w ciężkim stanie do szpitala. Prokuratura skierowała wniosek o areszt tymczasowy.",
        "Skala problemu jest niebagatalna: w ubiegłym roku służby ujawniły ponad 100 kierowców bez ważnych uprawnień i kilkanaście tysięcy wykroczeń w przewozach na aplikację. Wymóg posiadania polskiego prawa jazdy obowiązuje od dwóch lat, ale samo przekwalifikowanie dokumentu nie wiąże się z żadnym egzaminem praktycznym.",
        "Zdaniem prawników specjalizujących się w transporcie skuteczniejszym narzędziem od obowiązkowych testów byłby mechanizm szybkiego zawieszania i cofania licencji za stwierdzone naruszenia. Taki system działałby równomiernie wobec wszystkich kierowców, niezależnie od ich pochodzenia."
      ]
    },
    // Auto Świat — BYD Seal U DM-i jako taksówka (9 czerwca 2026)
    {
      "id": "p48",
      "cat": "rynek-polski",
      "cats": ["rynek-polski", "przeglad-prasy"],
      "img": "pro/real-byd-taxi.png",
      "title": "BYD Seal U DM-i po 40 000 km w robocie taksówkarskim. Jak wypadł?",
      "lead": "Warszawski taksówkarz wybrał chińską hybrydę plug-in zamiast sprawdzonych marek. Po pół roku i 40 000 km intensywnej pracy nie ma powodów do żalu — i bez wahania poleciłby auto kolegom po fachu.",
      "source": "Auto Świat",
      "sourceAuthor": "redakcja Auto Świat",
      "sourceCat": "Taksówki i flota",
      "region": "Polska",
      "link": "https://www.auto-swiat.pl/wiadomosci/aktualnosci/czy-chinski-suv-to-dobre-auto-na-taksowke-tak-byd-seal-u-dm-i-wypadl-na-40000-km/72nd362",
      "date": "9 czerwca 2026",
      "read": 4,
      "body": [
        "Biały BYD Seal U DM-i na lotnisku Chopina — taki widok przykuł uwagę reportera i zapoczątkował rozmowę z jego właścicielem, kierowcą FreeNow. Mężczyzna postawił na chiński samochód świadomie, traktując zakup jako eksperyment. Po kilku miesiącach intensywnej eksploatacji przyznaje, że eksperyment się powiódł.",
        "Koszt przejechania 100 km wynosi ok. 35 zł — nieco więcej niż w przypadku popularnych hybryd z LPG, ale kierowca uważa, że nadrabia to jakość wykonania i przestronność kabiny. Pasażerowie doceniają tylną kanapę i ogólny komfort jazdy, co przekłada się na wyższe oceny w aplikacji.",
        "Materiał wpisuje się w szerszy cykl redakcji motoryzacyjnych o ekspansji chińskich producentów na Starym Kontynencie — temacie, który coraz mocniej wybrzmiewa też w polskich flotach taksówkarskich."
      ]
    },
    // FEATURED — materiał partnera (Natviol / Infor)
    {
      "id": "p47",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "autonomiczne",
        "przeglad-prasy"
      ],
      "img": "uploads/rynek-skrzyzowanie-warszawa.png",
      "title": "Zawody odporne na AI. Dlaczego taksówkarz i kurier mają przewagę nad automatyzacją?",
      "lead": "Natviol w analizie dla Infor przekonuje, że kierowcy i kurierzy mają coś, czego algorytmy na razie nie zastąpią: fizyczną obecność i mobilność. To sprawia, że ich praca pozostaje w dużej mierze poza zasięgiem automatyzacji.",
      "source": "Infor (Kadry)",
      "sourceAuthor": "materiał partnera Natviol",
      "sourceCat": "Rynek pracy i AI",
      "region": "Polska",
      "link": "https://kadry.infor.pl/wiadomosci/7595683,taksowkarz-i-kurier-bezpieczny-zawod-w-dobie-sztucznej-inteligencji-to-najliczniejsza-grupa-niezaleznych-pracownikow.html",
      "date": "2 czerwca 2026",
      "read": 3,
      "body": [
        "Pod względem liczebności kierowcy i kurierzy stanowią największą grupę wśród niezależnych pracowników platform w Polsce. Dynamicznie rozwijający się sektor dostaw na bieżąco generuje zapotrzebowanie na nowe ręce do pracy — a specyfika tego zajęcia sprawia, że trudno je zastąpić algorytmem czy robotem.",
        "Natviol nie bagatelizuje długoterminowych trendów: robotaxi i zautomatyzowane dostawy są realną perspektywą. Ale w horyzoncie najbliższych lat branża potrzebuje konkretnych ludzi za kierownicą — i to bardziej niż w poprzednich dekadach."
      ],
      "hot": true
    },
    // RYNEK POLSKI
    {
      id: 'a1', cat: 'rynek-polski', img: 'pro/real-rynek-2.jpg',
      title: 'Konsolidacja flot przyspiesza. Mniejsi operatorzy szukają parasola większych partnerów',
      lead: 'W największych aglomeracjach trwa cicha konsolidacja rynku partnerów rozliczeniowych. Małe floty łączą się lub przechodzą pod skrzydła dużych operatorów, by udźwignąć rosnące koszty zgodności.',
      date: '1 czerwca 2026', read: 6, hot: true,
      body: [
        'Rynek partnerów flotowych w Polsce wchodzi w fazę dojrzewania. Po okresie gwałtownego wzrostu liczby pośredników rozliczeniowych — w szczytowym momencie działało ich w dużych miastach kilkadziesiąt — następuje naturalna selekcja. Rosnące wymogi formalne, presja na marże oraz oczekiwania platform wobec jakości obsługi sprawiają, że mniejsi gracze tracą rentowność.',
        'Właściciele flot liczących od kilkunastu do kilkudziesięciu pojazdów coraz częściej decydują się na współpracę z większymi operatorami zamiast samodzielnego utrzymywania pełnego zaplecza administracyjnego. W praktyce oznacza to wspólne rozliczenia, współdzielone licencje i scentralizowaną obsługę kierowców.',
        'Analitycy wskazują, że konsolidacja to zjawisko korzystne dla stabilności rynku, ale niesie ryzyko ograniczenia konkurencji. Im mniej podmiotów, tym silniejsza pozycja negocjacyjna dużych operatorów wobec kierowców i samych platform.',
        'W perspektywie najbliższych kwartałów spodziewane jest dalsze zmniejszanie się liczby aktywnych partnerów rozliczeniowych, przy jednoczesnym wzroście średniej wielkości floty obsługiwanej przez jeden podmiot.',
      ],
    },
    {
      id: 'a2', cat: 'rynek-polski', img: 'pro/real-rynek-3.jpg',
      title: 'Koszty działalności flot rosną szybciej niż stawki. Operatorzy tną marże',
      lead: 'Ubezpieczenia TAXI, serwis i amortyzacja pojazdów obciążają budżety operatorów. Realny koszt utrzymania pojazdu w obrocie sięga 0,72 zł za kilometr — i rośnie.',
      date: '31 maja 2026', read: 7, hot: true,
      body: [
        'Struktura kosztów operatora floty zmieniła się istotnie w ciągu ostatnich dwóch lat. Najszybciej rosnącą pozycją pozostają ubezpieczenia komunikacyjne dla pojazdów w zarobkowym przewozie osób, których stawki potrafią być o 50–100% wyższe niż w segmencie prywatnym.',
        'Drugim obciążeniem jest amortyzacja. Intensywna eksploatacja — często powyżej 50 tys. km rocznie na pojazd — skraca cykl życia auta i wymusza częstsze wymiany floty. W przeliczeniu na kilometr realny koszt utrzymania pojazdu hybrydowego sięga 0,72 zł.',
        'Operatorzy reagują optymalizacją: przechodzą na napęd hybrydowy i LPG, negocjują pakiety serwisowe i ubezpieczeniowe oraz zaostrzają kontrolę tygodniowych rozliczeń. Mimo to marże w segmencie wynajmu pojazdów pozostają pod presją.',
      ],
    },
    {
      id: 'a3', cat: 'rynek-polski', img: 'pro/real-rynek-4.jpg',
      title: 'Klasyczne korporacje taxi kontra platformy. Segment premium odzyskuje przewagę',
      lead: 'Tradycyjne korporacje stawiają na segment biznesowy i klienta korporacyjnego. W obliczu rosnących cen na platformach, B2B znów staje się polem walki o marżę.',
      date: '29 maja 2026', read: 6,
      body: [
        'Po latach defensywy klasyczne korporacje taksówkowe odnajdują nową przewagę w segmencie premium i obsłudze klienta biznesowego. Stałe umowy z firmami, przewidywalna jakość i faktury VAT to atuty, których platformy konsumenckie nie zawsze są w stanie zaoferować.',
        'Integratorzy klasycznych korporacji rozwijają oferty B2B, łącząc zaplecze technologiczne z gwarancją obsługi. To odpowiedź na rosnące ceny kursów aplikacyjnych, które w godzinach szczytu potrafią rosnąć o 50%.',
      ],
    },
    {
      id: 'a4', cat: 'rynek-polski', img: 'pro/cover-rynek-5.png',
      title: 'Mapa podaży kierowców w polskich miastach. Gdzie brakuje rąk do kierownicy',
      lead: 'Warszawa, Wrocław i Trójmiasto raportują największy niedobór kierowców spełniających nowe wymogi. To winduje stawki i zmienia geografię opłacalności.',
      date: '27 maja 2026', read: 5,
      body: [
        'Niedobór kierowców spełniających aktualne wymogi formalne jest najbardziej odczuwalny w największych aglomeracjach. Wysokie koszty życia i konkurencja o pracowników z innych sektorów logistyki sprawiają, że operatorzy mają trudność z utrzymaniem stabilnej floty kierowców.',
        'Paradoksalnie, niedobór podaży sprzyja stawkom — średni kurs podrożał o 20–25%, co poprawia rentowność tych operatorów, którym udało się utrzymać kierowców.',
      ],
    },

    // REGULACJE UE
    {
      id: 'a5', cat: 'regulacje-ue', img: 'pro/cover-ue-2.png',
      title: 'Domniemanie stosunku pracy. Co zmieni dyrektywa platformowa dla operatorów',
      lead: 'Jeśli platforma kontroluje sposób pracy kierowcy, ten może zostać uznany za pracownika — z pełnym ZUS, urlopami i L4. Operatorzy analizują skutki dla modelu B2B.',
      date: '31 maja 2026', read: 9, hot: true,
      body: [
        'Dyrektywa Parlamentu Europejskiego i Rady 2024/2831 wprowadza tzw. domniemanie stosunku pracy w gospodarce platformowej. Jeśli platforma sprawuje kontrolę nad sposobem świadczenia usług — poprzez algorytmiczne przydzielanie zleceń, ocenianie czy blokady — relacja może zostać przekwalifikowana na stosunek pracy.',
        'Dla polskiego rynku, w którym dominuje model współpracy B2B przez partnerów rozliczeniowych, oznacza to konieczność przemyślenia całej architektury kontraktowej. Operatorzy flot będą musieli wykazać, że kierowcy zachowują realną autonomię.',
        'Termin wdrożenia dyrektywy do polskiego porządku prawnego upływa 2 grudnia 2026 r. Branża apeluje o przepisy, które pogodzą ochronę pracowników z elastycznością modelu, który wybiera większość kierowców.',
      ],
    },
    {
      id: 'a6', cat: 'regulacje-ue', img: 'pro/cover-ue-3.png',
      title: 'Licencje, kontrole i obowiązki pośredników. Nowy reżim odpowiedzialności platform',
      lead: 'Po lex Uber 2.0 platformy odpowiadają za weryfikację kierowców i archiwizację dokumentów. Kary sięgają miliona złotych. Jak operatorzy dostosowują procedury.',
      date: '30 maja 2026', read: 7,
      body: [
        'Nowelizacja przepisów o transporcie drogowym nałożyła na platformy obowiązek osobistej weryfikacji każdego kierowcy przed pierwszym kursem oraz archiwizacji cyfrowego odwzorowania dokumentów w bazach CEPiK.',
        'Za naruszenia przewidziano kary do 1 mln zł dla platform i do 500 tys. zł za pośrednictwo bez licencji. To przesunęło ciężar zgodności na operatorów i pośredników rozliczeniowych, którzy muszą prowadzić rygorystyczną dokumentację.',
      ],
    },
    {
      id: 'a7', cat: 'regulacje-ue', img: 'pro/cover-ue-4.png',
      title: 'Postulat licencji metropolitalnych wraca do dyskusji. Koniec pułapki obszarowej?',
      lead: 'Branża postuluje licencje obejmujące całe aglomeracje zamiast pojedynczych gmin. To rozwiązałoby problem mandatów ITD za kursy między sąsiednimi miastami.',
      date: '28 maja 2026', read: 6,
      body: [
        'Obecny system, w którym wypis z licencji obowiązuje wyłącznie na obszarze macierzystej gminy, generuje realne ryzyko prawne dla kierowców pracujących w aglomeracjach. Mandat Inspekcji Transportu Drogowego za kurs rozpoczęty poza obszarem licencji sięga 2 000 zł.',
        'Postulat wprowadzenia licencji metropolitalnych, obejmujących całe aglomeracje takie jak Warszawa z gminami ościennymi, GZM czy Trójmiasto, wraca do debaty publicznej. Operatorzy wskazują, że uprościłoby to działalność i ograniczyło szarą strefę.',
      ],
    },

    // RYNKI ZAGRANICZNE
    {
      id: 'a8', cat: 'rynki-zagraniczne', img: 'pro/cover-zagranica-2.png',
      title: 'Hiszpania zaostrza limity podaży. Madryt i Barcelona testują nowe modele licencji',
      lead: 'Hiszpańskie miasta wprowadzają proporcje licencji VTC do taxi. Model „1 do 30" budzi protesty platform, ale stabilizuje dochody klasycznych przewoźników.',
      date: '30 maja 2026', read: 7,
      body: [
        'Hiszpania pozostaje jednym z najbardziej regulowanych rynków przewozowych w Europie. Proporcja licencji VTC do klasycznych taksówek, ustalona na poziomie jednej do trzydziestu, ogranicza podaż usług platformowych i chroni dochody tradycyjnych przewoźników.',
        'Model budzi sprzeciw platform, które argumentują, że sztucznie ogranicza konkurencję. Dla polskiego ustawodawcy to jednak ważny punkt odniesienia w dyskusji o równowadze między regulacją a dostępnością usług.',
      ],
    },
    {
      id: 'a9', cat: 'rynki-zagraniczne', img: 'pro/cover-zagranica-3.png',
      title: 'Niemcy: powrót obowiązku powrotu do bazy. Jak Berlin reguluje przewozy na aplikację',
      lead: 'Niemiecki model zakłada obowiązek powrotu pojazdu do siedziby między kursami dla usług typu VTC. Operatorzy w Polsce obserwują skutki dla efektywności flot.',
      date: '27 maja 2026', read: 6,
      body: [
        'Niemieckie prawo o przewozie osób utrzymuje rozróżnienie między klasyczną taksówką a usługą wynajmu pojazdu z kierowcą. Ta druga kategoria podlega obowiązkowi powrotu do bazy między zleceniami, co ogranicza efektywność i konkurencyjność cenową platform.',
        'Dla polskich operatorów niemieckie doświadczenia są istotne — pokazują, jak szczegóły regulacji wpływają na ekonomikę floty i geografię opłacalności.',
      ],
    },
    {
      id: 'a10', cat: 'rynki-zagraniczne', img: 'pro/cover-zagranica-4.png',
      title: 'Fala protestów przewoźników w Europie Zachodniej. Żądania równych reguł gry',
      lead: 'Od Paryża po Lizbonę klasyczni taksówkarze protestują przeciw nierównym warunkom konkurencji. Branża domaga się jednolitych wymogów dla wszystkich operatorów.',
      date: '25 maja 2026', read: 5,
      body: [
        'Protesty klasycznych przewoźników to stały element europejskiego krajobrazu rynku taxi. Główny postulat pozostaje niezmienny: jednolite wymogi licencyjne, podatkowe i bezpieczeństwa dla wszystkich podmiotów świadczących usługi przewozu osób.',
      ],
    },

    // NEWSY Z PLATFORM
    {
      id: 'a11', cat: 'newsy-platform', img: 'pro/cover-platform-1.png',
      title: 'Lyft przejmuje FreeNow za 175 mln EUR. Co to oznacza dla segmentu premium w Polsce',
      lead: 'Amerykański Lyft wchodzi do Europy przez przejęcie FreeNow. Analitycy spodziewają się inwestycji w segment biznesowy i możliwych zmian w strukturze prowizji.',
      date: '1 czerwca 2026', read: 6, hot: true,
      body: [
        'Przejęcie FreeNow przez Lyft za 175 mln EUR to jedno z największych wejść amerykańskiego gracza na europejski rynek przewozowy. FreeNow operuje w segmencie premium i biznesowym, z najniższymi prowizjami na rynku — od 7 do 12%.',
        'Dla polskiego rynku kluczowe pytanie dotyczy strategii cenowej. Inwestycja może oznaczać agresywniejszą walkę o segment B2B oraz nowe funkcje dla operatorów flot. Branża obserwuje też ewentualne zmiany w strukturze prowizji.',
      ],
    },
    {
      id: 'a12', cat: 'newsy-platform', img: 'pro/cover-platform-2.png',
      title: 'Platformy wprowadzają panele dla operatorów flot. Więcej danych, więcej kontroli',
      lead: 'Nowe narzędzia analityczne dla partnerów flotowych pozwalają śledzić rozliczenia w czasie rzeczywistym. To odpowiedź na postulaty transparentności rozliczeń.',
      date: '30 maja 2026', read: 5,
      body: [
        'Platformy rozwijają panele zarządcze dedykowane operatorom flot. Nowe narzędzia umożliwiają śledzenie rozliczeń, prowizji i bonusów w czasie rzeczywistym, co odpowiada na rosnące oczekiwania transparentności.',
        'Dla operatorów to szansa na lepszą kontrolę kosztów, ale też nowy obowiązek — kierowcy coraz częściej oczekują szczegółowych, weryfikowalnych raportów tygodniowych.',
      ],
    },
    {
      id: 'a13', cat: 'newsy-platform', img: 'pro/cover-platform-3.png',
      title: 'Zmiany prowizji i struktury opłat. Operatorzy przeliczają modele współpracy',
      lead: 'Ukryty VAT od importu usług sprawia, że realna prowizja platform sięga 28–31% obrotu. Operatorzy renegocjują modele opłat z kierowcami.',
      date: '28 maja 2026', read: 6,
      body: [
        'Reklamowane prowizje platform — od 20 do 25% — nie obejmują VAT od importu usług, który ponoszą polscy pośrednicy. W efekcie realne obciążenie obrotu sięga 28–31%.',
        'Operatorzy reagują, przechodząc z modelu prowizyjnego na stałą opłatę tygodniową, która jest korzystniejsza dla najbardziej aktywnych kierowców i bardziej przewidywalna dla obu stron.',
      ],
    },

    // PRZEGLĄD PRASY
    {
      id: 'a14', cat: 'przeglad-prasy', img: 'pro/cover-prasa-1.png',
      title: 'Przegląd prasy: rynek przewozów w raportach Instytutu Jagiellońskiego i ZDG TOR',
      lead: 'Najnowsze opracowania wyceniają polski rynek ride-hailing na 4,7 mld zł. Zebraliśmy najważniejsze liczby i wnioski z publikacji branżowych ostatniego miesiąca.',
      date: '31 maja 2026', read: 4,
      body: [
        'W minionym miesiącu ukazało się kilka istotnych opracowań dotyczących rynku przewozów na aplikację. Wartość rynku oszacowano na 4,7 mld zł, a udział kursów zamawianych przez aplikację — na ponad 70% wszystkich przejazdów taksówkowych.',
        'Publikacje zgodnie wskazują, że po zmianach regulacyjnych rynek wszedł w fazę większej koncentracji i profesjonalizacji. Przedstawiamy zestawienie kluczowych danych i tez.',
      ],
    },
    {
      id: 'a15', cat: 'przeglad-prasy', img: 'pro/cover-prasa-2.png',
      title: 'Media gospodarcze o przyszłości pracy platformowej. Zestawienie komentarzy',
      lead: 'Dziennikarze gospodarczy i eksperci prawa pracy komentują nadchodzącą implementację dyrektywy UE. Subiektywny wybór najciekawszych głosów.',
      date: '26 maja 2026', read: 4,
      body: [
        'Temat pracy platformowej zdominował komentarze gospodarcze ostatnich tygodni. Eksperci prawa pracy wskazują na trudność pogodzenia ochrony zatrudnienia z elastycznością, której oczekują sami kierowcy.',
      ],
    },

    // ANALIZY
    {
      id: 'a16', cat: 'analizy', img: 'pro/cover-analizy-1.png',
      title: 'Rentowność floty taxi w 2026. Analiza progu opłacalności pojazdu',
      lead: 'Przy realnym koszcie 0,72 zł/km i prowizjach sięgających 31% obrotu, próg rentowności pojazdu we flocie wymaga obrotu na poziomie 3 500 zł tygodniowo. Pełna analiza.',
      date: '1 czerwca 2026', read: 9, hot: true,
      body: [
        'Rentowność pojedynczego pojazdu we flocie zależy od trzech zmiennych: obrotu tygodniowego, struktury kosztów stałych oraz poziomu prowizji. Przy realnym koszcie utrzymania 0,72 zł/km i prowizjach sięgających 31% obrotu, próg opłacalności wymaga obrotu rzędu 3 500 zł tygodniowo na pojazd.',
        'Poniżej tego progu pojazd generuje koszty stałe — wynajem, ubezpieczenie, amortyzację — które pochłaniają cały przychód. W branży funkcjonuje na to określenie „jazda na sam czynsz".',
        'Nasza analiza pokazuje, że kluczowym czynnikiem rentowności jest nie liczba przejechanych kilometrów, lecz efektywność godzin pracy — udział czasu spędzonego w realizacji kursów względem czasu oczekiwania.',
      ],
    },
    {
      id: 'a17', cat: 'analizy', img: 'pro/cover-analizy-2.png',
      title: 'Elektromobilność we flotach taxi. Kiedy pojazd elektryczny zacznie się opłacać',
      lead: 'Koszt energii 0,12–0,20 zł/km kusi, ale wysoka cena zakupu i czas ładowania ograniczają adopcję. Analiza opłacalności EV w intensywnej eksploatacji taxi.',
      date: '29 maja 2026', read: 8,
      body: [
        'Pojazd elektryczny oferuje najniższy koszt energii na kilometr — od 0,12 do 0,20 zł przy ładowaniu we własnym zakresie. To nawet o połowę mniej niż w przypadku hybrydy.',
        'Barierą pozostaje wysoki koszt zakupu oraz czas ładowania, który w intensywnej eksploatacji taxi przekłada się na utracone godziny pracy. Analiza wskazuje, że EV opłaca się dziś przede wszystkim operatorom z własną infrastrukturą ładowania i przewidywalnym, miejskim profilem tras.',
      ],
    },
    {
      id: 'a18', cat: 'analizy', img: 'pro/cover-analizy-3.png',
      title: 'Przyszłość licencjonowania. Scenariusze dla rynku do 2030 roku',
      lead: 'Trzy scenariusze rozwoju systemu licencyjnego: deregulacja, status quo i model metropolitalny. Który najbardziej sprzyja stabilności rynku?',
      date: '24 maja 2026', read: 7,
      body: [
        'Przedstawiamy trzy scenariusze rozwoju systemu licencyjnego do 2030 roku. Pierwszy zakłada deregulację i otwarcie rynku, drugi — utrzymanie obecnego status quo gminnego, trzeci — wprowadzenie licencji metropolitalnych.',
        'Każdy scenariusz niesie inne konsekwencje dla operatorów flot, klasycznych korporacji i platform. Analiza wskazuje, że model metropolitalny najlepiej godzi interesy rynku z postulatami uproszczenia.',
      ],
    },

    // ===== PRZEGLĄD PRASY — realne artykuły z bazy mediów 2024–2026 =====
    {
      "id": "p1",
      "cat": "regulacje-ue",
      "cats": [
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/cover-ue-2.png",
      "title": "Obcokrajowcy uratowali rynek taxi. Nie na długo",
      "lead": "ZDG TOR ostrzega, że wymóg polskiego prawa jazdy od czerwca 2024 r. może wypchnąć z rynku co dziesiątego kierowcę w skali kraju, a w dużych miastach nawet 30%. Branża przewozu osób opierała się na kierowcach zza granicy, którzy mogą stracić pracę. Skutkiem mają być wyższe ceny (nawet o 50%) i dłuższy czas oczekiwania.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Regulacje i prawo",
      "region": "Polska",
      "link": "https://www.rp.pl/transport/art39984101-obcokrajowcy-uratowali-rynek-taxi-nie-na-dlugo",
      "date": "13 marca 2024",
      "read": 2,
      "body": []
    },
    {
      "id": "p2",
      "cat": "regulacje-ue",
      "cats": [
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-2.jpg",
      "title": "Odżyła szara strefa taxi. Kierowcy bez polskiego prawa jazdy ignorują przepisy",
      "lead": "Tydzień po wejściu nowych przepisów ponad co czwarty kierowca aplikacyjny nadal woził pasażerów bez polskich uprawnień. Bolt odciął 26% kierowców, FreeNow 15%, Eternis przyznał odpływ kilkunastu procent obcokrajowców. Uber zablokował dostęp tylko nowym kierowcom, co rozwścieczyło konkurencję zarzucającą mu przejęcie rynku.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Regulacje i prawo",
      "region": "Polska / Warszawa",
      "link": "https://www.rp.pl/transport/art40715431-odzyla-szara-strefa-taxi-kierowcy-bez-polskiego-prawa-jazdy-ignoruja-przepisy",
      "date": "27 czerwca 2024",
      "read": 2,
      "body": []
    },
    {
      "id": "p3",
      "cat": "regulacje-ue",
      "cats": [
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Trzęsienie ziemi na rynku taxi. Wszystko przez zmianę przepisów",
      "lead": "Po wejściu wymogu polskiego prawa jazdy rynek przewozu osób przeszedł głębokie przetasowanie podaży. Firmy, które dostosowały się do przepisów, nie były w stanie odpowiedzieć na popyt ani konkurować ceną z Uberem. Artykuł analizuje skalę odpływu kierowców i napięcia konkurencyjne między platformami.",
      "source": "Rzeczpospolita (PRO)",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Regulacje i prawo",
      "region": "Polska",
      "link": "https://pro.rp.pl/raporty-ekonomiczne/art40631921-trzesienie-ziemi-na-rynku-taxi-wszystko-przez-zmiane-przepisow",
      "date": "21 sierpnia 2024",
      "read": 2,
      "body": []
    },
    {
      "id": "p4",
      "cat": "regulacje-ue",
      "cats": [
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Bez polskiego prawa jazdy obcokrajowiec nie zostanie taksówkarzem",
      "lead": "Od 17 czerwca 2024 r. wszyscy kierowcy przewozu osób muszą mieć polskie prawo jazdy, co może obniżyć liczbę kierowców-obcokrajowców. W Warszawie w 2023 r. przeprowadzono 1 835 kontroli pojazdów, wykazując 523 nieprawidłowości i 159 zatrzymań dowodów rejestracyjnych. Materiał wyjaśnia podstawę prawną (ustawa z 26 maja 2023 r.) i jej cel: poprawę bezpieczeństwa pasażerów.",
      "source": "Prawo.pl",
      "sourceAuthor": "redakcja",
      "sourceCat": "Regulacje i prawo",
      "region": "Polska / Warszawa",
      "link": "https://www.prawo.pl/prawo/bez-polskiego-prawa-jazdy-obcokrajowiec-nie-zostanie-taksowkarzem,527426.html",
      "date": "18 czerwca 2024",
      "read": 2,
      "body": []
    },
    {
      "id": "p5",
      "cat": "regulacje-ue",
      "cats": [
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Kurier i dostawca na etacie? Pizza może podrożeć przez dyrektywę UE",
      "lead": "Dyrektywa o pracy platformowej (PWD), obowiązująca od grudnia 2024 r., może objąć w UE ponad 40 mln osób, w tym kierowców Ubera i kurierów Glovo. Domniemanie stosunku pracy może zmusić platformy do zmiany modelu zatrudnienia i podnieść koszty. Branża ostrzega przed wzrostem cen, w tym dostaw jedzenia o kilkanaście złotych.",
      "source": "Rzeczpospolita (PRO)",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Regulacje i prawo",
      "region": "Polska / UE",
      "link": "https://pro.rp.pl/raporty-ekonomiczne/art41634571-kurier-i-dostawca-na-etacie-pizza-moze-podrozec-nawet-o-kilkanascie-zlotych-przez-dyrektywe-ue",
      "date": "9 stycznia 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p6",
      "cat": "regulacje-ue",
      "cats": [
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Upadek dyrektywy o pracy platformowej. Lobbyści Uber, Bolt i Glovo mogą otwierać szampana",
      "lead": "Szymaniak analizuje fiasko negocjacji nad dyrektywą platformową na poziomie UE i silne lobby platform. Wskazuje, że w 2025 r. przez platformy ma pracować 43 mln osób w UE, a dochody sektora wzrosły o ok. 500% w pięć lat. Tekst pokazuje napięcie między ochroną pracowników a interesem platform i pracodawców.",
      "source": "Spider's Web Plus",
      "sourceAuthor": "Marek Szymaniak",
      "sourceCat": "Regulacje i prawo",
      "region": "Polska / UE",
      "link": "https://spidersweb.pl/plus/2024/02/upadek-dyrektywy-o-pracy-platformowej",
      "date": "28 lutego 2024",
      "read": 2,
      "body": []
    },
    {
      "id": "p7",
      "cat": "regulacje-ue",
      "cats": [
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/cover-ue-4.png",
      "title": "Dyrektywa UE ma poprawić warunki pracy milionów osób. Kiedy wprowadzi ją Polska?",
      "lead": "MRPiPS pracuje nad odrębną ustawą wdrażającą dyrektywę 2024/2831 i planuje konsultacje do końca marca 2026 r. Dyrektywa wprowadza domniemanie stosunku pracy dla kierowców i kurierów platform sprawujących kontrolę algorytmiczną. Polska ma czas na transpozycję do 2 grudnia 2026 r., a brak zgody partnerów społecznych opóźnia prace.",
      "source": "Rzeczpospolita / PulsHR",
      "sourceAuthor": "redakcja",
      "sourceCat": "Regulacje i prawo",
      "region": "Polska / UE",
      "link": "https://www.rp.pl/praca/art43792681-dyrektywa-ue-ma-poprawic-warunki-pracy-milionow-osob-kiedy-wprowadzi-ja-polska",
      "date": "12 lutego 2026",
      "read": 2,
      "body": []
    },
    {
      "id": "p8",
      "cat": "regulacje-ue",
      "cats": [
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Dyrektywa platformowa 2026. Firmy boją się odpływu pracowników",
      "lead": "Raport PZPA na próbie 3,8 tys. kierowców i kurierów: 72% zapowiada odejście w razie obowiązkowego etatu. Związki kwestionują wyniki, twierdząc, że pracownicy więcej zyskają niż stracą. Branża domaga się szerszych konsultacji i implementacji bez rozszerzania zakresu ponad minimum UE.",
      "source": "Gazeta Prawna",
      "sourceAuthor": "redakcja",
      "sourceCat": "Regulacje i prawo",
      "region": "Polska",
      "link": "https://www.gazetaprawna.pl/praca/artykuly/9768307,dyrektywa-platformowa-2026-firmy-boja-sie-odplywu-pracownikow.html",
      "date": "7 listopada 2025",
      "read": 2,
      "body": [],
      "hot": true
    },
    {
      "id": "p9",
      "cat": "regulacje-ue",
      "cats": [
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/cover-ue-2.png",
      "title": "Stanowisko ZPP ws. wdrożenia dyrektywy platformowej",
      "lead": "ZPP popiera cel dyrektywy, ale ostrzega przed goldplatingiem. Apeluje o zachowanie swobody zawierania umów i nierozszerzanie domniemania stosunku pracy na kolejne branże. Zbyt sztywna implementacja może podnieść koszty i ceny dla konsumentów.",
      "source": "ZPP",
      "sourceAuthor": "ZPP",
      "sourceCat": "Regulacje i prawo",
      "region": "Polska",
      "link": "https://zpp.net.pl/stanowisko-zpp-ws-wdrozenia-dyrektywy-platformowej-do-polskiego-porzadku-prawnego/",
      "date": "10 lutego 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p10",
      "cat": "regulacje-ue",
      "cats": [
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/cover-ue-3.png",
      "title": "Dyrektywa platformowa – co się zmieni i jakie będą skutki finansowe?",
      "lead": "EY analizuje skutki finansowe dyrektywy 2024/2831 – wzrost składek ZUS, PIT i obowiązki dot. algorytmów. Wskazuje przykład Hiszpanii z obowiązkiem zatrudniania kurierów na etat. Platformy powinny już teraz audytować modele współpracy.",
      "source": "EY Polska",
      "sourceAuthor": "EY",
      "sourceCat": "Regulacje i prawo",
      "region": "Polska / UE",
      "link": "https://www.ey.com/pl_pl/insights/workforce/dyrektywa-platformowa-skutki-finansowe",
      "date": "22 grudnia 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p11",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-2.jpg",
      "title": "Lyft wchodzi do Polski. Rywal Ubera przejmuje FreeNow",
      "lead": "Amerykański Lyft kupił FreeNow od BMW i Mercedes-Benz Mobility za 175 mln euro, wchodząc na rynek w 9 krajach, w tym w Polsce. Transakcja niemal podwaja rynek docelowy Lyft i dodaje ok. 1 mld euro rezerwacji rocznie. FreeNow zachowuje markę, zespół i model współpracy z licencjonowanymi taksówkarzami.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "redakcja",
      "sourceCat": "Konsolidacja rynku",
      "region": "Polska / Europa",
      "link": "https://www.rp.pl/transport/art42132741-lyft-wchodzi-do-polski-rywal-ubera-przejmuje-freenow",
      "date": "16 kwietnia 2025",
      "read": 2,
      "body": [],
      "hot": true
    },
    {
      "id": "p12",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/cover-rynek-5.png",
      "title": "Wielkie przejęcie na rynku taksówek. iTaxi łączy siły z Ele Taxi",
      "lead": "iTaxi przejęło Ele Taxi wraz z siecią Taxi Polska (29 miast) – największa konsolidacja w historii polskiego rynku taxi. iTaxi zyskuje m.in. obsługę dolnego poziomu terminala Lotniska Chopina. Na liście kolejnych przejęć: Komfort Taxi, AS Taxi, Flash Taxi, City Drivers.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "redakcja",
      "sourceCat": "Konsolidacja rynku",
      "region": "Polska",
      "link": "https://www.rp.pl/transport/art43291911-wielkie-przejecie-na-rynku-taksowek-w-polsce-lacza-sie-dwie-popularne-sieci",
      "date": "5 listopada 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p13",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-2.jpg",
      "title": "Wielkie przejęcie na rynku taksówek. Polska firma ogłasza",
      "lead": "iTaxi przejęło Ele Taxi i markę Taxi Polska, kolejny krok po wchłonięciu 16 regionalnych korporacji. Obie marki tymczasowo zachowają osobne szyldy. Konsolidacja wzmacnia iTaxi jako polską alternatywę wobec Bolt, Uber i Lyft/FreeNow.",
      "source": "money.pl",
      "sourceAuthor": "redakcja",
      "sourceCat": "Konsolidacja rynku",
      "region": "Polska",
      "link": "https://www.money.pl/gospodarka/wielkie-przejecie-na-rynku-taksowek-polska-firma-oglasza-7218629999094592a.html",
      "date": "5 listopada 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p14",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-2.jpg",
      "title": "Rekord upadłości w branży taksówek. Tak źle jeszcze nigdy nie było",
      "lead": "Dane Dun & Bradstreet: w Polsce działa już tylko 49 tys. firm taksówkarskich – najmniej od 15 lat. W 2025 r. zniknęło ponad 1 600 firm, głównie jednoosobowych. 43% podmiotów jest w słabej kondycji, kolejne 24% w bardzo złej.",
      "source": "money.pl / Rzeczpospolita",
      "sourceAuthor": "redakcja",
      "sourceCat": "Konsolidacja rynku",
      "region": "Polska",
      "link": "https://www.money.pl/gospodarka/rekord-upadlosci-w-branzy-taksowek-tak-zle-jeszcze-nie-bylo-7246068895439040a.html",
      "date": "22 stycznia 2026",
      "read": 2,
      "body": [],
      "hot": true
    },
    {
      "id": "p15",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-3.jpg",
      "title": "Firmy taksówkarskie masowo upadają",
      "lead": "W 2025 r. zniknęło ponad 1,6 tys. firm taxi; działa ich ok. 49 tys. Eksperci wskazują wysokie koszty, podatki, paliwo i dumping platform. Trend uderza głównie w jednoosobowe działalności.",
      "source": "RMF24",
      "sourceAuthor": "redakcja",
      "sourceCat": "Konsolidacja rynku",
      "region": "Polska",
      "link": "https://www.rmf24.pl/ekonomia/news-firmy-taksowkarskie-masowo-upadaja,nId,8059466",
      "date": "22 stycznia 2026",
      "read": 2,
      "body": []
    },
    {
      "id": "p16",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-2.jpg",
      "title": "Lyft rozwija się w Europie poprzez przejęcie FreeNow (komunikat)",
      "lead": "Oficjalny komunikat potwierdza przejęcie FreeNow przez Lyft za 175 mln euro. FreeNow działa w 9 krajach i ponad 150 miastach, zachowując markę i model oparty na licencjonowanych taksówkarzach. Połączone spółki mają obsługiwać ponad 50 mln pasażerów rocznie.",
      "source": "PAP MediaRoom",
      "sourceAuthor": "komunikat prasowy",
      "sourceCat": "Konsolidacja rynku",
      "region": "Polska / Europa",
      "link": "https://pap-mediaroom.pl/biznes-i-finanse/lyft-rozwija-sie-w-europie-i-dywersyfikuje-dzialalnosc-poprzez-przejecie-freenow",
      "date": "16 kwietnia 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p17",
      "cat": "newsy-platform",
      "cats": [
        "newsy-platform",
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-2.jpg",
      "title": "Aplikacje generują ponad 70% kursów taksówek (FreeNow i Żabka)",
      "lead": "Szef FreeNow w Polsce Krzysztof Urban: aplikacje generują już ponad 70% kursów taxi – więcej niż średnia europejska. Biznes FreeNow w Polsce jest rentowny od 2024 r.; ceny o min. 20% wyższe niż przed regulacjami. FreeNow nawiązał współpracę z Żabką, poszerzając kanały dystrybucji.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Platformy i technologia",
      "region": "Polska",
      "link": "https://www.rp.pl/transport/art42095371-aplikacje-generuja-ponad-70-proc-kursow-taksowek",
      "date": "14 kwietnia 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p18",
      "cat": "newsy-platform",
      "cats": [
        "newsy-platform",
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Uber wjeżdża na Okęcie. Idą zmiany na rynku taxi",
      "lead": "Uber został oficjalnym partnerem Lotniska Chopina, uzyskując prawo podjeżdżania pod terminal przylotów i korzystania ze stanowisk postojowych. To pierwszy taki przypadek w Europie Środkowo-Wschodniej. Umowa długoterminowa daje platformie dostęp do najbardziej pożądanej lokalizacji w kraju.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Platformy i technologia",
      "region": "Warszawa",
      "link": "https://www.rp.pl/transport/art36368301-uber-wjezdza-na-okecie-ida-zmiany-na-rynku-taxi",
      "date": "25 maja 2022",
      "read": 2,
      "body": []
    },
    {
      "id": "p19",
      "cat": "newsy-platform",
      "cats": [
        "newsy-platform",
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Koniec tanich taksówek? Sprawdzamy, jak nowe prawo zmieniło ceny",
      "lead": "Pierwszego dnia obowiązywania wymogu polskiego prawa jazdy ceny w Uberze i Bolcie wbrew zapowiedziom nie wzrosły. Branża prognozowała wzrost stawek nawet o 50% i odpływ 1/3 kierowców z dużych miast. Materiał wskazuje, że realna ocena skutków nadejdzie jesienią, po wyczerpaniu rezerwy kierowców i okresie karencji nowych.",
      "source": "WP Finanse / money.pl",
      "sourceAuthor": "redakcja",
      "sourceCat": "Platformy i technologia",
      "region": "Polska / Warszawa",
      "link": "https://finanse.wp.pl/cena-ubera-miala-pojsc-w-gore-co-sie-stalo-klienci-zdezorientowani-7039520416955136a",
      "date": "17 czerwca 2024",
      "read": 2,
      "body": []
    },
    {
      "id": "p20",
      "cat": "newsy-platform",
      "cats": [
        "newsy-platform",
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-2.jpg",
      "title": "Rok po Lex Uber – co się zmieniło",
      "lead": "Rok po wejściu wymogu polskiego prawa jazdy Uber odnotował trwały spadek o ok. 30%, FreeNow i Bolt po ok. 15%. Ceny kursów o 20–25% wyższe, w szczytach nawet o 50%. Platformy zainwestowały w weryfikację kierowców, punkty obsługi i szkolenia dla służb.",
      "source": "Interia",
      "sourceAuthor": "redakcja",
      "sourceCat": "Platformy i technologia",
      "region": "Polska",
      "link": "https://motoryzacja.interia.pl/wiadomosci/",
      "date": "czerwca 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p21",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "newsy-platform",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Polska firma kryje się za sukcesem Ubera i Bolta. Rusza do Czech i Niemiec",
      "lead": "Eternis, lider partnerów rozliczeniowych, planuje ekspansję do Czech, Niemiec, Chorwacji i Litwy, docelowo na Bliski Wschód i do Ameryki Płd. Współpracuje z 12 tys. kierowców i kurierów; flota rośnie z 1,5 do 3,5 tys. pojazdów, przychody w 2025 r. ok. 700 mln zł. Plan 2026: wzrost do 850 mln zł przy EBITDA 20 mln zł.",
      "source": "Rzeczpospolita (Cyfrowa)",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Floty i partnerzy",
      "region": "Polska / CEE",
      "link": "https://cyfrowa.rp.pl/biznes-ludzie-startupy/art44000991-polska-firma-kryje-sie-za-sukcesem-ubera-i-bolta-teraz-rusza-z-ekspansja-do-czech-i-niemiec",
      "date": "23 marca 2026",
      "read": 2,
      "body": []
    },
    {
      "id": "p22",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "newsy-platform",
        "przeglad-prasy"
      ],
      "img": "pro/real-zagranica-1.jpg",
      "title": "Polska firma podbija świat. Chce być jak InPost (Eternis)",
      "lead": "Eternis, jeden z największych partnerów rozliczeniowych w Europie Środkowo-Wschodniej, ogłasza ekspansję m.in. na Bliski Wschód i do Afryki. Współpracuje z 12 tys. kierowców i kurierów; flotę (500 aut) potraja w ramach projektu Beter z Boltem. Stał się kluczowym klientem flotowym Toyota Motor Poland.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Floty i partnerzy",
      "region": "Polska / CEE",
      "link": "https://www.rp.pl/uslugi/art42266741-polska-firma-podbija-swiat-chce-byc-jak-inpost",
      "date": "13 maja 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p23",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "newsy-platform",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-3.jpg",
      "title": "Eternis rozszerza współpracę z Bolt – spółka Beter i flota 1000 aut",
      "lead": "Eternis i Bolt powołały spółkę celową Beter, która zbuduje flotę co najmniej 1 000 nowoczesnych, hybrydowych pojazdów taxi. To największy projekt flotowy tego typu w Polsce. Kierowcy uzyskają dostęp do nowych aut bez własnego pojazdu i działalności.",
      "source": "ISBtech / Rynek Infrastruktury",
      "sourceAuthor": "komunikat prasowy",
      "sourceCat": "Floty i partnerzy",
      "region": "Polska",
      "link": "https://www.isbtech.pl/2025/05/eternis-rozszerza-wspolprace-z-bolt/",
      "date": "9 maja 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p24",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "newsy-platform",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Taksówkarze idą na współpracę z Uberem. To będzie koniec wojny",
      "lead": "Tradycyjne korporacje taxi zaczynają same pozyskiwać kierowców platformowych (umowa Sawa Taxi z Eternis). To sygnał zacierania się podziału między klasycznym taxi a aplikacjami. Korporacje wchodzą do ekosystemu platformowego, by utrzymać podaż.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Floty i partnerzy",
      "region": "Warszawa",
      "link": "https://www.rp.pl/transport/art39199031-taksowkarze-ida-na-wspolprace-z-uberem-to-bedzie-koniec-wojny",
      "date": "2 października 2023",
      "read": 2,
      "body": []
    },
    {
      "id": "p25",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-2.jpg",
      "title": "Kurierów i taksówkarzy portret własny. Wiemy, kim są",
      "lead": "RP publikuje jedno z pierwszych kompleksowych badań pracowników platformowych – 48% to obcokrajowcy (z niemal 70 krajów), 52% Polacy. W 49% przypadków pracują krócej niż rok, ceniąc elastyczność. 60% korzysta z kilku platform jednocześnie, co uniemożliwia proste sumowanie danych Uber, Bolt i FreeNow.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Kierowcy i praca",
      "region": "Polska",
      "link": "https://www.rp.pl/uslugi/art42006631-kurierow-i-taksowkarzy-portret-wlasny-wiemy-kim-sa",
      "date": "26 marca 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p26",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-4.jpg",
      "title": "Klatki z tombaku. W pułapce pracy platformowej (reportaż nagrodzony)",
      "lead": "Nagrodzony reportaż Szymaniaka o pracy platformowej kierowców i kurierów, w dużej części migrantów kuszonych mitem dostatniego Zachodu. Pokazuje, jak obietnica wysokich zarobków i niezależności zamienia się w machinę wyzysku, niepewność i izolację społeczną. Tekst zdobył nagrodę w konkursie Twarze ubóstwa (2024).",
      "source": "Spider's Web Plus",
      "sourceAuthor": "Marek Szymaniak",
      "sourceCat": "Kierowcy i praca",
      "region": "Polska",
      "link": "https://spidersweb.pl/2024/10/marek-szymaniak-spiders-web-nagroda.html",
      "date": "2024",
      "read": 2,
      "body": []
    },
    {
      "id": "p27",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/cover-rynek-1.png",
      "title": "Z polskich ulic masowo znikają kierowcy. Branżę taxi czeka robotyzacja?",
      "lead": "Dane Dun & Bradstreet: liczba działalności taksówkarskich spadła po raz pierwszy poniżej 50 tys. Z rynku znika średnio pięciu taksówkarzy dziennie, a rodzimych kierowców zastępują obcokrajowcy z nawigacją. Eksperci wskazują pojazdy autonomiczne jako możliwe remedium.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Kierowcy i praca",
      "region": "Polska",
      "link": "https://www.rp.pl/transport/art42872521-tak-malo-taksowek-jeszcze-nie-bylo",
      "date": "19 sierpnia 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p28",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/cover-rynek-5.png",
      "title": "Taksówkowa zapaść. Rynek kurczy się najszybciej od 15 lat",
      "lead": "Raport Dun & Bradstreet dla RP: zniknięcie ponad 1,6 tys. firm taxi w 2025 r. i spadek rynku do 49 tys. podmiotów. Rodzimych kierowców zastępują obcokrajowcy, a korporacje ustępują platformom. Analiza przyczyn: koszty, regulacje, dumping i szara strefa.",
      "source": "Rzeczpospolita (PRO)",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Kierowcy i praca",
      "region": "Polska",
      "link": "https://pro.rp.pl/raporty-ekonomiczne/art43672201-taksowkowa-zapasc-rynek-kurczy-sie-najszybciej-od-15-lat",
      "date": "22 stycznia 2026",
      "read": 2,
      "body": [],
      "hot": true
    },
    {
      "id": "p29",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Katarzyna Kucharczyk: Znikające taksówki. Quo vadis, gospodarko?",
      "lead": "Felieton o rekordowym spadku liczby firm taksówkarskich i rosnącej dominacji Ubera i Bolta. Autorka pyta, czy zanik tradycyjnych taksówek to dla gospodarki dobra czy zła wiadomość. Wskazuje ambiwalencję: niższe ceny i wygoda aplikacji kosztem stabilności i lokalnego charakteru branży.",
      "source": "Rzeczpospolita (opinie)",
      "sourceAuthor": "Katarzyna Kucharczyk",
      "sourceCat": "Kierowcy i praca",
      "region": "Polska",
      "link": "https://www.rp.pl/opinie-ekonomiczne/art43672581-katarzyna-kucharczyk-znikajace-taksowki-quo-vadis-gospodarko",
      "date": "22 stycznia 2026",
      "read": 2,
      "body": []
    },
    {
      "id": "p30",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "regulacje-ue",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Taksówkarz – zawód na wymarciu. Uber i Bolt przejmują polski rynek",
      "lead": "Bizblog podsumowuje dane RP/D&B o spadku liczby działalności poniżej 50 tys. Średnio znika pięciu taksówkarzy dziennie; rynek skurczył się o 30% od 2009 r. Liczba zawieszanych działalności spadła o 85% r/r – kierowcy zamykają firmy na stałe i przechodzą pod sieci pośredników.",
      "source": "Spider's Web Bizblog",
      "sourceAuthor": "Karol Kopańko",
      "sourceCat": "Kierowcy i praca",
      "region": "Polska",
      "link": "https://bizblog.spidersweb.pl/taskowka-kierowca-uber",
      "date": "20 sierpnia 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p31",
      "cat": "bezpieczenstwo",
      "cats": [
        "bezpieczenstwo",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Przybywa kobiet zgwałconych w taksówkach zamawianych przez aplikacje",
      "lead": "RP ujawnia rosnącą liczbę napaści seksualnych w taksówkach na aplikację – warszawskie prokuratury prowadziły 28 śledztw, średnio jedno tygodniowo. Opisany przypadek: gruziński kierowca Ubera zatrzymany w Gdańsku tuż przed odlotem. Materiał (akt. do 04.2026) był jednym z impulsów do zaostrzenia Lex Uber 2.0.",
      "source": "Rzeczpospolita",
      "sourceAuthor": "redakcja",
      "sourceCat": "Bezpieczeństwo i przestępczość",
      "region": "Warszawa / Gdańsk",
      "link": "https://www.rp.pl/przestepczosc/art36779511-przybywa-kobiet-zgwalconych-w-taksowkach-zamawianych-przez-aplikacje",
      "date": "28 lipca 2022",
      "read": 2,
      "body": []
    },
    {
      "id": "p32",
      "cat": "bezpieczenstwo",
      "cats": [
        "bezpieczenstwo",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Na ile gwiazdek ocenić przewóz z próbą gwałtu? Fala przestępstw w taksówkach na aplikację",
      "lead": "Reportaż Spider's Web Plus o skali napaści seksualnych w pojazdach Ubera i Bolta – w Warszawie 2020–2021 odnotowano 21 zgłoszeń. Opisuje historię ofiary i krytykuje niewystarczającą weryfikację kierowców. Materiał (akt. do 2026 r.) pozostaje punktem odniesienia w debacie o bezpieczeństwie przewozów.",
      "source": "Spider's Web Plus",
      "sourceAuthor": "redakcja Spider's Web",
      "sourceCat": "Bezpieczeństwo i przestępczość",
      "region": "Polska / Warszawa",
      "link": "https://spidersweb.pl/plus/2022/04/gwalt-aplikacja-taksowka-uber-bolt-przestepstwa-airbnb",
      "date": "19 kwietnia 2022",
      "read": 2,
      "body": []
    },
    {
      "id": "p33",
      "cat": "bezpieczenstwo",
      "cats": [
        "bezpieczenstwo",
        "przeglad-prasy"
      ],
      "img": "pro/real-zagranica-1.jpg",
      "title": "Bolt i Uber weryfikują kierowców w Polsce. Co ze zmianami w prawie?",
      "lead": "Po nagłośnieniu molestowania przez kierowcę Bolta platformy zapowiedziały weryfikację tożsamości i niekaralności w czasie rzeczywistym. W 2022 r. w Warszawie zgłoszono 35 przypadków przemocy seksualnej – więcej niż łącznie w latach 2016–2021. Bolt współpracuje z Feminoteką, Uber z Centrum Praw Kobiet.",
      "source": "money.pl",
      "sourceAuthor": "redakcja",
      "sourceCat": "Bezpieczeństwo i przestępczość",
      "region": "Polska / Warszawa",
      "link": "https://www.money.pl/gospodarka/bolt-i-uber-weryfikuja-kierowcow-w-polsce-co-ze-zmianami-w-prawie-6864982693993056a.html",
      "date": "2023",
      "read": 2,
      "body": []
    },
    {
      "id": "p34",
      "cat": "bezpieczenstwo",
      "cats": [
        "bezpieczenstwo",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Uber i Bolt pod lupą policjantów w Poznaniu. 105 wykroczeń w 12 godzin",
      "lead": "Policja w Poznaniu skontrolowała 279 pojazdów (148 cudzoziemców), ujawniając 105 wykroczeń w 12 godzin. 15 kierowców jeździło bez licencji, zatrzymano 9 dowodów; jeden poszukiwany kierowca trafił do więzienia. W akcji uczestniczyły ITD i KAS.",
      "source": "Głos Wielkopolski",
      "sourceAuthor": "redakcja",
      "sourceCat": "Bezpieczeństwo i przestępczość",
      "region": "Poznań",
      "link": "https://gloswielkopolski.pl/uber-i-bolt-pod-lupa-policjantow-105-wykroczen-w-12-godzin-kierowca-trafil-do-wiezienia/ar/c1p2-28838705",
      "date": "21 marca 2026",
      "read": 2,
      "body": []
    },
    {
      "id": "p35",
      "cat": "autonomiczne",
      "cats": [
        "autonomiczne",
        "newsy-platform",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Taksówki bez kierowców wyjadą na polskie ulice. Szykuje się przełom",
      "lead": "RP ustaliła, że Eternis planuje jeszcze w 2026 r. zakup pojazdów autonomicznych i pierwsze testy w Polsce. Umożliwia to nowelizacja Prawa o ruchu drogowym (podpisana 12.2025), wchodząca w życie pod koniec czerwca 2026 r. Uber, realizujący miliony autonomicznych przejazdów m.in. w Dubaju, także analizuje polski rynek.",
      "source": "Rzeczpospolita (Cyfrowa)",
      "sourceAuthor": "Michał Duszczyk",
      "sourceCat": "Autonomiczne taksówki",
      "region": "Polska",
      "link": "https://cyfrowa.rp.pl/globalne-interesy/art44314931-taksowki-bez-kierowcow-wyjada-na-polskie-ulice-szykuje-sie-przelom",
      "date": "6 maja 2026",
      "read": 2,
      "body": [],
      "hot": true
    },
    {
      "id": "p36",
      "cat": "autonomiczne",
      "cats": [
        "autonomiczne",
        "newsy-platform",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-3.jpg",
      "title": "Robotaxi wjeżdżają do Polski. Giganci szykują testy bez kierowców",
      "lead": "Eternis przygotowuje się do testów pojazdów autonomicznych w Polsce po nowelizacji Prawa o ruchu drogowym. Bolt rozwija współpracę z Nvidią, Pony.ai i Stellantisem, zapowiadając 100 tys. robotaxi do 2035 r. Polska, dotąd opóźniona regulacyjnie, ma szansę dołączyć do europejskiej fali pojazdów autonomicznych.",
      "source": "Spider's Web",
      "sourceAuthor": "redakcja Spider's Web",
      "sourceCat": "Autonomiczne taksówki",
      "region": "Polska",
      "link": "https://spidersweb.pl/2026/05/taksowki-autonomiczne-w-polsce.html",
      "date": "6 maja 2026",
      "read": 2,
      "body": []
    },
    {
      "id": "p37",
      "cat": "autonomiczne",
      "cats": [
        "autonomiczne",
        "newsy-platform",
        "przeglad-prasy"
      ],
      "img": "pro/cover-platform-3.png",
      "title": "Polska otwarta na robotaxi. Wiadomo, kiedy taksówki bez kierowcy wyjadą na drogi",
      "lead": "Nowelizacja Prawa o ruchu drogowym (podpisana przez prezydenta Karola Nawrockiego w grudniu 2025 r.) tworzy ramy prawne dla testów pojazdów zautomatyzowanych. Robotaxi mają powstawać m.in. na bazie Toyoty bZ4X; 35% Polaków deklaruje pozytywne nastawienie. Eternis wskazuje Polskę jako priorytetowy rynek autonomicznej floty w Europie.",
      "source": "Interia (GeekWeek)",
      "sourceAuthor": "redakcja",
      "sourceCat": "Autonomiczne taksówki",
      "region": "Polska",
      "link": "https://geekweek.interia.pl/transport/news-robotaxi-nad-wisla-taksowki-bez-kierowcy-wyjada-jeszcze-w-ty,nId,23473343",
      "date": "6 maja 2026",
      "read": 2,
      "body": []
    },
    {
      "id": "p38",
      "cat": "autonomiczne",
      "cats": [
        "autonomiczne",
        "newsy-platform",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-2.jpg",
      "title": "Bolt i Uber idą w odstawkę? Taksówki bez kierowcy wyjadą na polskie ulice",
      "lead": "Za informacjami RP: pierwsze autonomiczne taksówki mogą pojawić się na polskich drogach przed końcem 2026 r. Wśród globalnych liderów wymieniani są Waymo (Alphabet), Zoox (Amazon) i Baidu, który z FreeNow testuje już pojazdy w Londynie. Bariera psychologiczna maleje – 35% Polaków pozytywnie ocenia tę technologię.",
      "source": "Business Insider Polska",
      "sourceAuthor": "redakcja",
      "sourceCat": "Autonomiczne taksówki",
      "region": "Polska",
      "link": "https://www.biznesinfo.pl/taksowki-bez-kierowcy-wyjada-na-polskie-ulice-jeszcze-w-2026-r-rozpocznie-sie-nowa-era-js-wem-060506",
      "date": "6 maja 2026",
      "read": 2,
      "body": []
    },
    {
      "id": "p39",
      "cat": "autonomiczne",
      "cats": [
        "autonomiczne",
        "newsy-platform",
        "przeglad-prasy"
      ],
      "img": "pro/cover-analizy-1.png",
      "title": "Autonomiczne samochody w Polsce. Pojawią się już w czerwcu",
      "lead": "Od 24 czerwca 2026 r. obowiązują przepisy umożliwiające testowanie pojazdów zautomatyzowanych i w pełni zautomatyzowanych w rzeczywistym ruchu. Nowelizacja wprowadza pojęcia pojazdu zautomatyzowanego, w pełni zautomatyzowanego i organizatora prac badawczych. To zmiana dla firm technologicznych, producentów i uczelni, ale nie oznacza masowego wyjazdu robotaxi.",
      "source": "Skarbiec.biz",
      "sourceAuthor": "redakcja",
      "sourceCat": "Autonomiczne taksówki",
      "region": "Polska",
      "link": "https://skarbiec.biz/wiadomosci/technologia/autonomiczne-samochody-w-polsce-nowe-przepisy-2026.html",
      "date": "27 maja 2026",
      "read": 2,
      "body": []
    },
    {
      "id": "p40",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Kierowcy Ubera i Bolta chcą wyższych stawek. W poniedziałek strajk",
      "lead": "Kierowcy Ubera i Bolta zaplanowali na 7 kwietnia 2025 r. strajk w Trójmieście, domagając się obniżenia prowizji i wyższych stawek minimalnych. Apel zapowiadał utrudnienia w zamawianiu przejazdów. Protest ilustruje napięcia między kierowcami a platformami wokół rozliczeń.",
      "source": "trojmiasto.pl",
      "sourceAuthor": "redakcja",
      "sourceCat": "Lokalna",
      "region": "Trójmiasto",
      "link": "https://www.trojmiasto.pl/moto/Kierowcy-Ubera-i-Bolta-chca-wyzszych-stawek-W-poniedzialek-strajk-n201347.html",
      "date": "6 kwietnia 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p41",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Postój taxi przed dworcem tylko dla Ubera",
      "lead": "Uber wygrał dostęp do postoju przed dworcem Gdańsk Główny, gdzie powstały dedykowane miejsca odbioru pasażerów aplikacji. Tradycyjni taksówkarze stracili tam miejsca postojowe. To przykład rosnącej dominacji platform w strategicznych lokalizacjach transportowych.",
      "source": "trojmiasto.pl",
      "sourceAuthor": "redakcja",
      "sourceCat": "Lokalna",
      "region": "Gdańsk",
      "link": "https://www.trojmiasto.pl/wiadomosci/Postoj-taxi-przed-dworcem-tylko-dla-Ubera-n196509.html",
      "date": "5 grudnia 2024",
      "read": 2,
      "body": []
    },
    {
      "id": "p42",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Taksówki na aplikacje – kierowców mniej, dłuższy czas oczekiwania",
      "lead": "Po wejściu wymogu polskiego prawa jazdy z Ubera w Trójmieście odpłynęło blisko 20% kierowców, wydłużając czas oczekiwania. Pomorska policja, ITD i SG w dobę skontrolowały 219 kierowców – tylko jeden bez polskiego prawa jazdy. Obrazuje lokalny wpływ regulacji na podaż.",
      "source": "trojmiasto.pl",
      "sourceAuthor": "redakcja",
      "sourceCat": "Lokalna",
      "region": "Trójmiasto",
      "link": "https://www.trojmiasto.pl/moto/Taksowki-na-aplikacje-kierowcow-mniej-to-i-dluzszy-czas-oczekiwania-na-transport-n190891.html",
      "date": "2 lipca 2024",
      "read": 2,
      "body": []
    },
    {
      "id": "p43",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Tak się opłaca jeździć po Krakowie. Taksówka, Uber czy wynajem? [LISTA]",
      "lead": "Gazeta Krakowska porównuje koszty przejazdów po Krakowie: taksówki, Bolt, Uber, wynajem auta. Zestawia taryfy lokalnych korporacji ze stawkami Bolta (Comfort, XL, Pets). Praktyczny przewodnik cenowy pokazuje przewagę aplikacji poza godzinami szczytu na rynku turystycznym.",
      "source": "Gazeta Krakowska",
      "sourceAuthor": "redakcja",
      "sourceCat": "Lokalna",
      "region": "Kraków",
      "link": "https://gazetakrakowska.pl/tak-sie-oplaca-jezdzic-po-krakowie-taksowka-uber-czy-wypozyczenie-samochodu-sprawdz-dostepne-opcje-lista/gh/c1-15568183",
      "date": "2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p44",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-1.jpg",
      "title": "Kontrole przewozu osób w Krakowie – akcja Taxi i walka z szarą strefą",
      "lead": "Krakowska policja i magistrat prowadzą cykliczne kontrole kierowców przewozu osób (kryptonim Taxi), m.in. przy Balicach i w centrum. Komisja Zrównoważonej Gospodarki Nocy badała nieprawidłowości w przewozach nocnych. Materiały dokumentują skalę szarej strefy i nadużyć na krakowskim rynku.",
      "source": "Kraków Nasze Miasto",
      "sourceAuthor": "redakcja",
      "sourceCat": "Lokalna",
      "region": "Kraków",
      "link": "https://krakow.naszemiasto.pl/tag/uber-w-krakowie",
      "date": "2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p45",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-ue-1.jpg",
      "title": "Protest taksówkarzy we Wrocławiu. W taksówce język polski jest obowiązkowy",
      "lead": "Wrocławscy taksówkarze protestowali przeciw nieuczciwej konkurencji i kierowcom nieznającym polskiego, blokując miejsca pod urzędem. Domagali się m.in. obowiązku języka polskiego i zaświadczeń o niekaralności z kraju pochodzenia. Uber opisał własny proces weryfikacji i kontrolę CEPiK.",
      "source": "Gazeta Wrocławska",
      "sourceAuthor": "Paweł Relikowski",
      "sourceCat": "Lokalna",
      "region": "Wrocław",
      "link": "https://gazetawroclawska.pl/protest-taksowkarzy-we-wroclawiu-blokuja-miejsca-parkingowe-pod-urzedem-w-taksowce-jezyk-polski-jest-obowiazkowy/ar/c1p2-28083049",
      "date": "16 października 2025",
      "read": 2,
      "body": []
    },
    {
      "id": "p46",
      "cat": "rynek-polski",
      "cats": [
        "rynek-polski",
        "przeglad-prasy"
      ],
      "img": "pro/real-rynek-3.jpg",
      "title": "Wielka kontrola taksówkarzy we Wrocławiu. Jak sprawdzić, czy taksówka jest legalna?",
      "lead": "Wrocław wprowadził projekt Legalna Taksówka z naklejkami QR pozwalającymi pasażerom zweryfikować pojazd w miejskiej bazie. Mieszkańcy skorzystali ponad 45 tys. razy. Służby sprawdzają polskie prawo jazdy, licencje, trzeźwość i oznakowanie.",
      "source": "Gazeta Wrocławska",
      "sourceAuthor": "redakcja",
      "sourceCat": "Lokalna",
      "region": "Wrocław",
      "link": "https://gazetawroclawska.pl/wielka-kontrola-taksowkarzy-we-wroclawiu-jak-sprawdzic-czy-taksowka-jest-legalna/ar/c4-18767357",
      "date": "28 sierpnia 2024",
      "read": 2,
      "body": []
    },
  ],

  about: {
    title: 'PRO.portaltaxi.pl — branżowy serwis informacyjny rynku taxi',
    lead: 'Portal PRO.portaltaxi.pl to medium informacyjne dla profesjonalistów rynku taxi w Polsce. Pokazujemy co napędza branżę: decyzje platform, zmiany regulacyjne, ruchy rynkowe i dane, które mają realny wpływ na działalność firm partnerskich, właścicieli flot i otoczenia rynkowego branży.',
    body: [
      'PRO.portaltaxi.pl to medium informacyjne dla profesjonalistów rynku taxi w Polsce. Pokazujemy to, co napędza branżę: decyzje platform, zmiany regulacyjne, ruchy rynkowe i dane, które mają realny wpływ na działalność firm partnerskich, właścicieli flot oraz otoczenia rynkowego branży.',
      'Piszemy o tym, co ważne dla firm działających w ekosystemie Ubera, Bolta, FreeNow oraz innych platform ride-hailingu. Polska to dziś dojrzały ekosystem platformowo-flotowy, w którym o pozycję rywalizują globalne aplikacje, profesjonalne floty partnerskie i tradycyjne lokalne korporacje taxi. To dynamicznie rosnący europejski rynek, którego wartość wynosi 5 mld zł rocznie. Ponad 70% kursów taxi w Polsce zamawianych jest przez aplikację — powyżej średniej europejskiej — a branża zatrudnia kilkadziesiąt tysięcy osób.',
      'Stanowimy wiarygodne źródło wiedzy: informujemy o aktualnościach, pokazujemy trendy i porządkujemy informacje istotne dla rynku. Wspieramy branżę w okresie transformacji regulacyjnej, wejścia w erę elektromobilności i przygotowań do pojazdów autonomicznych.',
      'Dostarczamy inwestorom, firmom partnerskim, właścicielom flot i uczestnikom rynku uporządkowany, weryfikowalny obraz polskiej branży taxi. Chcemy uczestniczyć w rozwoju rynku, bo wierzymy, że silna branża potrzebuje silnej infrastruktury informacyjnej.'
    ],
  },

  newsletter: {
    heading: 'Bądź na bieżąco z rynkiem taxi',
    text: 'Otrzymuj najważniejsze informacje branżowe, analizy, zmiany regulacyjne i przegląd wydarzeń z rynku taxi prosto na swoją skrzynkę.',
  },

  // Suggested questions for the AI assistant
  aiSuggestions: [
    'Jak dyrektywa UE 2024/2831 wpłynie na floty w Polsce?',
    'Ile wynosi realna prowizja platform po doliczeniu VAT?',
    'Czym różni się licencja taxi od wypisu z licencji?',
    'Kiedy pojazd elektryczny opłaca się we flocie taxi?',
  ],
};

window.PRO = PRO;
