// pro-i18n.js — wybór języka (PL / EN) + słownik napisów interfejsu.
// Ładowany PO pro-data.js i pro-data-en.js, PRZED plikami .jsx.
// Język wynika z adresu: /en i /en/... = EN, wszystko inne = PL.
// Kluczem słownika jest polski napis z kodu — w PL funkcja t() zwraca go bez zmian.
(function () {
  var p = window.location.pathname || '/';
  var lang = (p === '/en' || p.indexOf('/en/') === 0) ? 'en' : 'pl';
  window.PRO_LANG = lang;
  window.PRO_PL = window.PRO;
  if (lang === 'en' && window.PRO_EN) {
    window.PRO = window.PRO_EN;
    document.documentElement.lang = 'en';
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', 'English edition of PRO.portaltaxi.pl: a guide to the Polish taxi and ride-hailing market and selected articles on regulation, platforms and fleets.');
  }

  var EN = {
    // nagłówek / menu
    'Rynek PL': 'Polish market',
    'Regulacje': 'Regulation',
    'Rynki zagraniczne': 'Foreign markets',
    'Platformy': 'Platforms',
    'Analizy': 'Analysis',
    'Przewodnik': 'Market guide',
    'Bezpieczeństwo': 'Safety',
    'portaltaxi.pl dla kierowców →': 'For drivers (PL) →',
    'Wersja angielska': 'Polska wersja',
    // newsletter
    '✓ Dziękujemy! Zapis potwierdzony.': '✓ Thank you! You are subscribed.',
    'Twój adres e-mail': 'Your e-mail address',
    'Twój e-mail': 'Your e-mail',
    'Podaj poprawny adres e-mail.': 'Please enter a valid e-mail address.',
    'Podaj poprawny e-mail.': 'Please enter a valid e-mail.',
    'Nie udało się zapisać — spróbuj ponownie za chwilę.': 'Subscription failed — please try again in a moment.',
    'Nie udało się zapisać — spróbuj ponownie.': 'Subscription failed — please try again.',
    'Zapisuję…': 'Subscribing…',
    'Zapisz mnie': 'Subscribe',
    'Zapisz się': 'Subscribe',
    'Nie teraz': 'Not now',
    'Najważniejsze informacje branżowe prosto na skrzynkę.': 'Key industry news by e-mail (in Polish).',
    'NEWSLETTER BRANŻOWY': 'INDUSTRY NEWSLETTER',
    'Co tydzień jedna analiza rynku i kalendarz regulacji': 'One market analysis and a regulatory calendar every week',
    'Dla właścicieli flot i operatorów. Bez ofert pracy dla kierowców.': 'For fleet owners and operators. The newsletter is written in Polish.',
    'adres@firma.pl': 'name@company.com',
    'REZYGNACJA JEDNYM KLIKNIĘCIEM': 'UNSUBSCRIBE WITH ONE CLICK',
    // strona główna
    'Czytaj więcej →': 'Read more →',
    'Czytaj tekst': 'Read',
    'Najnowsze': 'Latest',
    'Popularne': 'Popular',
    'Więcej wiadomości →': 'All articles →',
    'Wszystkie →': 'All →',
    'Fot. materiały własne': 'Photo: own material',
    'Przegląd prasy': 'Press review',
    'Poprzedni': 'Previous',
    'Następny': 'Next',
    'Slajd': 'Slide',
    // listy, artykuł
    'Brak artykułów w tej kategorii.': 'No articles in this category yet.',
    'Strona główna': 'Home',
    'min czytania': 'min read',
    'Redakcja PortalTaxiPRO': 'PRO.portaltaxi.pl editorial team',
    'Źródła': 'Sources',
    'Źródło materiału': 'Source',
    'Czytaj w oryginale →': 'Read the original →',
    'Kategorie:': 'Categories:',
    'Kategoria:': 'Category:',
    'Powiązane': 'Related',
    'Więcej:': 'More:',
    'Kategoria': 'Category',
    'Wszystkie artykuły': 'All articles',
    'Wybrane artykuły o polskim rynku taxi w języku angielskim.': 'Selected articles on the Polish taxi market in English.',
    // stopka
    'Branżowy serwis rynku taxi. Część ekosystemu taxiportal.pl.': 'B2B news service on the Polish taxi market. Part of the portaltaxi.pl ecosystem.',
    'Serwis': 'Sections',
    'Dla firm': 'For companies',
    'Oferta reklamowa': 'Advertising',
    'Patronat raportu': 'Report partnership',
    'Kontakt redakcji': 'Contact the editors',
    'Newsletter': 'Newsletter',
    'Polityka prywatności': 'Privacy policy (PL)',
    'Polityka cookies': 'Cookie policy (PL)',
    'SERWIS DLA KIEROWCÓW: PORTALTAXI.PL →': 'FOR DRIVERS (IN POLISH): PORTALTAXI.PL →',
    'O nas': 'About',
    'Kontakt': 'Contact',
    // tytuł strony
    'pro.portaltaxi.pl — branżowy serwis rynku taxi': 'pro.portaltaxi.pl — the Polish taxi market in English',
  };

  window.t = function (s) {
    if (lang !== 'en') return s;
    return Object.prototype.hasOwnProperty.call(EN, s) ? EN[s] : s;
  };

  // Odpowiedniki PL <-> EN (po id artykułu w wersji PL)
  window.proEnArticle = function (plId) {
    var en = window.PRO_EN;
    return en ? (en.articles.find(function (a) { return a.plId === plId; }) || null) : null;
  };
  window.proPlArticle = function (enArticle) {
    if (!enArticle || !enArticle.plId || !window.PRO_PL) return null;
    return window.PRO_PL.articles.find(function (a) { return a.id === enArticle.plId; }) || null;
  };
})();
