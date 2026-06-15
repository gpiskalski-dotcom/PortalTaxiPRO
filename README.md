# PortalTaxiPRO.eu

Branżowy serwis B2B dla rynku taxi/ride-hailing w Polsce (rynek polski, regulacje, Dyrektywa UE 2024/2831, platformy, analizy) + wersja angielska.

## Struktura

- `index.html` — strona główna (PL)
- `en.html` — wersja angielska
- `pro-data.js` — treści/dane (kategorie, artykuły, kafelki)
- `pro-shell.jsx`, `pro-home.jsx`, `pro-pages.jsx`, `pro-app.jsx` — komponenty React (ładowane w przeglądarce via Babel standalone, bez build stepu)
- `pro/` — obrazy (covery artykułów, zdjęcia)
- `uploads/` — pojedynczy obraz referencjonowany z `pro-data.js`

## Deploy

Strona jest statyczna (React + Babel standalone z CDN, bez kroku budowania).
Wystarczy wgrać całość na hosting i otworzyć `index.html`.

## Do zrobienia

- Konwersja zdjęć w `pro/` do WebP i kompresja wg specyfikacji
  (hero < 300KB, kafelki < 150KB, miniatury < 60KB)
- Dodanie panelu B2B / formularza leadów (faza 2-3)

<!-- sync test 2026-06-15T21:15:07Z -->
