// Buduje nowy pro-data.js: nowe artykuły (z harmonogramem pub) + przeredagowane stare.
const fs = require('fs');
const path = require('path');
const SRC = process.argv[2], OUT = process.argv[3];
const orig = fs.readFileSync(SRC, 'utf8');
const sandbox = {};
new Function('window', orig)(sandbox);
const PRO = sandbox.PRO;

const NEW = require('./new.js');
const OLD = require('./old.js');

const proSlug = (s) => (s || '').toLowerCase()
  .replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e').replace(/ł/g, 'l')
  .replace(/ń/g, 'n').replace(/ó/g, 'o').replace(/ś/g, 's').replace(/ż/g, 'z').replace(/ź/g, 'z')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70);

// 1) przeredagowane stare
let changed = 0;
PRO.articles = PRO.articles.map((a) => {
  const o = OLD[a.id];
  if (!o) return a;
  changed++;
  return Object.assign({}, a, o);
});
// 2) nowe na początek: najnowszy pub pierwszy
const fresh = NEW.slice().sort((x, y) => Date.parse(y.pub) - Date.parse(x.pub));
const ids = new Set(PRO.articles.map((a) => a.id));
fresh.forEach((n) => { if (ids.has(n.id)) throw new Error('duplikat id ' + n.id); });
PRO.articles = fresh.concat(PRO.articles);

// 3) linki wewnętrzne (@id) + czas czytania
const byId = Object.fromEntries(PRO.articles.map((a) => [a.id, a]));
const words = (a) => [a.lead].concat(a.body || []).join(' ').split(/\s+/).length;
const missing = [];
PRO.articles.forEach((a) => {
  if (a.body) a.body = a.body.map((p) => p.replace(/\(@([pa]\d+)\)/g, (m, id) => {
    const t = byId[id]; if (!t) { missing.push(a.id + '->' + id); return m; }
    return '(/artykul/' + id + '-' + proSlug(t.title) + ')';
  }));
  if (OLD[a.id] || NEW.find((n) => n.id === a.id)) a.read = Math.max(2, Math.round(words(a) / 200));
});
if (missing.length) throw new Error('brak celu linku: ' + missing.join(', '));

// 4) slider: generowany w przeglądarce z opublikowanych artykułów (patrz kod niżej)
delete PRO.slider;

const body = '// pro-data.js — treści PRO.portaltaxi.pl. Wygenerowano ' + new Date().toISOString() + ' (build/build.js).\n' +
  '// Artykuł z polem pub (ISO) pojawia się w serwisie dopiero od tej chwili (harmonogram publikacji).\n\n' +
  'const PRO = ' + JSON.stringify(PRO, null, 2) + ';\n\n' +
  '(function () {\n' +
  '  var now = Date.now();\n' +
  '  var ok = function (a) { return !a.pub || Date.parse(a.pub) <= now; };\n' +
  '  PRO.scheduled = PRO.articles.filter(function (a) { return !ok(a); }).length;\n' +
  '  PRO.articles = PRO.articles.filter(ok);\n' +
  '  PRO.slider = PRO.articles.filter(function (a) { return a.img; }).slice(0, 5);\n' +
  '})();\n\n' +
  'window.PRO = PRO;\n';
fs.writeFileSync(OUT, body);
console.log('zmienione stare:', changed, '| nowe:', NEW.length, '| razem:', PRO.articles.length);
