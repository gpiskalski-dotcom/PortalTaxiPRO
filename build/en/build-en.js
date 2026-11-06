// Buduje pro-data-en.js (wersja EN serwisu) z plików w build/en/.
// Uruchom z katalogu repo:  node build/en/build-en.js
// Źródła treści: articles.json (p54, p57, p50), p68.md, content-guide.md, meta.json.
const fs = require('fs');
const path = require('path');
const DIR = __dirname;
const OUT = path.join(DIR, '..', '..', 'pro-data-en.js');

const meta = JSON.parse(fs.readFileSync(path.join(DIR, 'meta.json'), 'utf8'));
const arts = JSON.parse(fs.readFileSync(path.join(DIR, 'articles.json'), 'utf8'));

const slugs = { [meta.guide.slug]: 'guide' };
arts.forEach((a) => { slugs[a.slug] = 'article'; });
slugs[meta.p68.slug] = 'article';

// /en/<slug> -> /en/article/<slug> lub /en/guide/<slug>
const fixLinks = (s) => s.replace(/\]\(\/en\/([a-z0-9-]+)\)/g, (m, slug) => {
  const kind = slugs[slug];
  if (!kind) throw new Error('Nieznany link EN: ' + slug);
  return '](/en/' + kind + '/' + slug + ')';
});

// markdown -> tablica bloków w konwencji ProBlock (akapity rozdzielone pustą linią)
const toBlocks = (md) => fixLinks(md.replace(/\r/g, '')).split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);

const words = (blocks) => blocks.join(' ').split(/\s+/).length;
const readMin = (blocks) => Math.max(2, Math.round(words(blocks) / 200));
const img = (s) => (s || '').replace(/^\//, '');

const out = [];

// Przewodnik: sekcja "## Sources" -> pole sources
{
  const g = meta.guide;
  let blocks = toBlocks(fs.readFileSync(path.join(DIR, g.bodyFile), 'utf8'));
  const si = blocks.findIndex((b) => /^##\s+Sources\s*$/.test(b));
  let sources = [];
  if (si >= 0) {
    sources = blocks.slice(si + 1).join('\n').split('\n').filter((l) => l.startsWith('- ')).map((l) => l.slice(2).replace(/\*/g, '').trim());
    blocks = blocks.slice(0, si);
  }
  out.push({
    id: g.id, type: 'guide', slug: g.slug, cat: g.cat, cats: g.cats, date: g.date, img: img(g.img),
    featured: true, hot: true, author: 'PRO.portaltaxi.pl editorial team',
    title: g.title, lead: g.lead, body: blocks, sources, read: readMin(blocks),
  });
}

const fromJson = (a) => {
  const blocks = toBlocks(a.body);
  return {
    id: a.id, plId: a.id, slug: a.slug, cat: meta.catMap[a.cat], cats: meta.cats[a.id], date: (meta.dates && meta.dates[a.id]) || a.date,
    img: img(a.img), imgCaption: a.imgCaption || undefined, hot: meta.hot.includes(a.id) || undefined,
    author: 'PRO.portaltaxi.pl editorial team', title: a.title, lead: a.lead, body: blocks,
    sources: a.sources, read: readMin(blocks), translated: meta.translated,
  };
};
arts.forEach((a) => out.push(fromJson(a)));
{
  const m = meta.p68;
  const blocks = toBlocks(fs.readFileSync(path.join(DIR, m.bodyFile), 'utf8'));
  out.push({
    id: m.id, plId: m.id, slug: m.slug, cat: meta.catMap[m.cat], cats: meta.cats[m.id], date: m.date,
    img: img(m.img), imgCaption: m.imgCaption, imgHome: img(m.imgHome), imgHomeCaption: m.imgHomeCaption,
    hot: true, author: 'PRO.portaltaxi.pl editorial team', title: m.title, lead: m.lead, body: blocks,
    sources: m.sources, read: readMin(blocks), translated: meta.translated,
  });
}

const byId = Object.fromEntries(out.map((a) => [a.id, a]));
const articles = meta.order.map((id) => { if (!byId[id]) throw new Error('Brak ' + id); return byId[id]; });
articles.forEach((a) => { if (!a.cat || !a.cats) throw new Error('Brak kategorii: ' + a.id); });

const PRO_EN = {
  brand: 'PRO.portaltaxi.pl',
  lang: 'en',
  categories: [
    { id: 'guide', label: 'Market guide', desc: 'A standing guide to how the Polish taxi and ride-hailing market works, updated every quarter.' },
    { id: 'rynek-polski', label: 'Polish market', desc: 'Taxi companies and fleets in Polish cities, consolidation, operating costs and competition between taxi firms and platforms.' },
    { id: 'regulacje-ue', label: 'Regulation & EU', desc: 'New duties for platforms, the EU Platform Work Directive, licences, inspections and the obligations of intermediaries.' },
    { id: 'newsy-platform', label: 'Platforms', desc: 'Changes at Uber, Bolt, Freenow by Lyft and iTaxi that matter for fleets and partners in Poland.' },
    { id: 'bezpieczenstwo', label: 'Safety & licensing', desc: 'Driver verification, licensing rules, police and Road Transport Inspection checks, passenger safety.' },
  ],
  articles,
  about: {
    title: 'About the English edition',
    body: [
      'PRO.portaltaxi.pl is an independent B2B news service on the Polish taxi and ride-hailing market.',
      'The English edition carries a selection of our coverage that explains how the Polish market works – regulation, platforms, fleets and key data. The Polish edition remains our main service; each English article links to its Polish original and states when it was translated.',
      'We use only data from verifiable sources and give a source for every figure. Where a figure is an estimate, we say so.',
    ],
  },
  newsletter: {
    heading: 'Follow the Polish taxi market',
    text: 'Get key industry news, analysis and regulatory changes from the Polish taxi market by e-mail. Please note: the newsletter is written in Polish.',
  },
  scheduled: 0,
};
PRO_EN.slider = articles.filter((a) => a.img).slice(0, 5);

const header = '// pro-data-en.js — TREŚĆ wersji EN (generowany: node build/en/build-en.js). Nie edytuj ręcznie — zmieniaj build/en/*.\n';
fs.writeFileSync(OUT, header + 'window.PRO_EN = ' + JSON.stringify(PRO_EN, null, 2) + ';\n');
console.log('OK', OUT, articles.map((a) => a.id + ':' + a.body.length + 'bl/' + a.read + 'min').join(' '));
