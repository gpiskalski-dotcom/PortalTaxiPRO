# PortalTaxiPRO — kod serwisu pro.portaltaxi.pl

Branżowy serwis informacyjny B2B rynku taxi w Polsce (Portal Taxi). Serwis dla kierowców (portaltaxi.pl) jest osobnym projektem i nie leży w tym repo.

## Jak działa wdrożenie
- Gałąź `main` = produkcja. Push do `main` → Cloudflare Pages (projekt `portaltaxipro`) → https://pro.portaltaxi.pl.
- Strona jest statyczna: React 18 UMD + Babel w przeglądarce (pliki `.jsx` ładowane przez `type="text/babel"`), bez kroku build po stronie Cloudflare.
- Routing: czyste adresy (`/artykul/<id>-<slug>`, `/kategoria/<id>`, `/strona/<id>`, `/en/...`) — router w `pro-app.jsx`, `<base href="/">` w `index.html`, fallback w `_redirects` (`/* /index.html 200`). Nie usuwać żadnego z tych trzech elementów.
- Po zmianie plików JS/JSX podbić parametr `?v=` w `index.html` (cache przeglądarek).

## Struktura
| Plik / folder | Rola |
|---|---|
| `index.html` | punkt wejścia, ładuje skrypty |
| `pro-shell.jsx` | nagłówek, stopka, tokeny stylu `T`, newsletter (`window.PRO_subscribe`) |
| `pro-home.jsx`, `pro-pages.jsx`, `pro-app.jsx` | strona główna, podstrony, router |
| `pro-data.js` | treści PL — **generowane**, nie edytować ręcznie |
| `pro-data-en.js`, `pro-i18n.js` | wersja EN (treści generowane + słownik UI) |
| `build/` | generator treści: `build.js` (nowe `new.js` + przeredagowane `old.js` → `pro-data.js`; publikacja wg pola `pub`), `build/en/build-en.js` → `pro-data-en.js` |
| `partner.html`, `logowanie-partnera.html` | logowanie i panel partnera (`/partner`) |
| `cookie-consent.js`, `polityka-*.html`, `regulamin.html` | zgody (PostHog EU) i strony prawne |
| `pro/`, `thumbs/pro/`, `uploads/` | obrazy: każdy obraz artykułu w 2 wersjach — `pro/<nazwa>` (~1100 px) i `thumbs/pro/<nazwa>` (540 px), nazwy ASCII bez spacji |

## Backend
- Supabase `mysvdwfdthhbppdnicuz` (Lovable Cloud): newsletter (`newsletter_subscribers`, tylko INSERT dla anon), logowanie i panel partnera. Klucz w kodzie to publiczny klucz anon.

## Zasady
- Zmiany na produkcji tylko po akceptacji właściciela („go!”).
- Marka: „Portal Taxi”, serwis „PRO.portaltaxi.pl”. Domena portaltaxipro.eu nie istnieje.
- Dokumentacja projektu (stan, decyzje, zasady) jest poza repo, w folderze projektu: `CLAUDE.md`, `STAN_PROJEKTU.md`, `DECYZJE.md`.
