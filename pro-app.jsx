// pro-app.jsx — routing + compose for PortalTaxiPRO
// Czyste, udostępnialne adresy (bez #): /artykul/<id>-<slug>, /kategoria/<id>, /strona/<id>.
// Wymaga <base href="/"> w index.html oraz reguły .htaccess kierującej nieistniejące ścieżki do index.html.

const { useState: aUseState, useEffect: aUseEffect, useRef: aUseRef } = React;

const proSlug = (s) => (s || '')
  .toLowerCase()
  .replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e').replace(/ł/g, 'l')
  .replace(/ń/g, 'n').replace(/ó/g, 'o').replace(/ś/g, 's').replace(/ż/g, 'z').replace(/ź/g, 'z')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70);

// route -> ścieżka (PL: /artykul/<id>-<slug>; EN: /en, /en/article/<slug>, /en/guide/<slug>, /en/category/<id>)
const proPathFor = (r, a) => {
  if (window.PRO_LANG === 'en') {
    if (!r || r.type === 'home') return '/en';
    if (r.type === 'category') return '/en/category/' + r.id;
    if (r.type === 'page') return '/en/page/' + r.id;
    if (r.type === 'article' && a) return '/en/' + (a.type === 'guide' ? 'guide' : 'article') + '/' + a.slug;
    return '/en';
  }
  if (!r || r.type === 'home') return '/';
  if (r.type === 'category') return '/kategoria/' + r.id;
  if (r.type === 'page') return '/strona/' + r.id;
  if (r.type === 'article' && a) return '/artykul/' + a.id + '-' + proSlug(a.title);
  return '/';
};
window.proPathFor = proPathFor;
window.proSlug = proSlug;

// tekst ścieżki -> {type,...}
const proParseSegments = (raw) => {
  const parts = (raw || '/').split('/').filter(Boolean);
  if (window.PRO_LANG === 'en') {
    const seg = parts.slice(1); // bez "en"
    if ((seg[0] === 'article' || seg[0] === 'guide') && seg[1]) {
      const a = window.PRO.articles.find((x) => x.slug === seg[1]);
      if (a) return { type: 'article', article: a };
    }
    if (seg[0] === 'category' && seg[1]) return { type: 'category', id: seg[1] };
    if (seg[0] === 'page' && seg[1]) return { type: 'page', id: seg[1] };
    return { type: 'home' };
  }
  if (parts[0] === 'artykul') {
    const m = (parts[1] || '').match(/^(p\d+|a\d+)/);
    const a = m && window.PRO.articles.find((x) => x.id === m[1]);
    if (a) return { type: 'article', article: a };
  }
  if (parts[0] === 'kategoria' && parts[1]) return { type: 'category', id: parts[1] };
  if (parts[0] === 'strona' && parts[1]) return { type: 'page', id: parts[1] };
  return { type: 'home' };
};

const ProApp = () => {
  const T = window.T;
  const [route, setRoute] = aUseState({ type: 'home' });
  const [article, setArticle] = aUseState(null);
  const [aiOpen, setAiOpen] = aUseState(false);
  const [nlOpen, setNlOpen] = aUseState(false);
  const nlTimer = aUseRef(null);

  const pushPath = (r, a) => {
    try {
      const p = proPathFor(r, a);
      if ((window.location.pathname || '/') !== p) {
        window.history.pushState(null, '', p);
      }
    } catch (e) {}
  };

  const applyRoute = () => {
    // migracja starych linków z # (np. /#/artykul/a5-...) na czyste ścieżki
    const hash = window.location.hash || '';
    if (hash.indexOf('#/') === 0) {
      try { window.history.replaceState(null, '', hash.slice(1) + window.location.search); } catch (e) {}
    }
    const p = proParseSegments(window.location.pathname);
    if (p.type === 'article') { setArticle(p.article); setRoute({ type: 'article' }); }
    else if (p.type === 'category') { setArticle(null); setRoute({ type: 'category', id: p.id }); }
    else if (p.type === 'page') { setArticle(null); setRoute({ type: 'page', id: p.id }); }
    else { setArticle(null); setRoute({ type: 'home' }); }
    window.scrollTo(0, 0);
  };
  const applyRef = aUseRef(applyRoute);
  applyRef.current = applyRoute;

  // Newsletter popup auto-shows once per session, after a short delay
  aUseEffect(() => {
    if (sessionStorage.getItem('pro_nl_seen')) return;
    nlTimer.current = setTimeout(() => {
      setNlOpen(true);
      sessionStorage.setItem('pro_nl_seen', '1');
    }, 4000);
    return () => clearTimeout(nlTimer.current);
  }, []);

  // Deep link przy wejściu + obsługa wstecz/dalej
  aUseEffect(() => {
    const run = () => applyRef.current();
    const t = setTimeout(run, 0);
    window.addEventListener('popstate', run);
    return () => { clearTimeout(t); window.removeEventListener('popstate', run); };
  }, []);

  // Tytuł strony pod udostępnianie / SEO
  aUseEffect(() => {
    const t_ = window.t;
    let t = t_('pro.portaltaxi.pl — branżowy serwis rynku taxi');
    if (route.type === 'article' && article) t = article.title + ' — pro.portaltaxi.pl';
    else if (route.type === 'category') {
      const c = window.PRO.categories.find((x) => x.id === route.id);
      t = (c ? c.label : (route.id === 'all' ? t_('Wszystkie artykuły') : t_('Kategoria'))) + ' — pro.portaltaxi.pl';
    } else if (route.type === 'page') {
      const pageName = window.PRO_LANG === 'en'
        ? ({ 'o-nas': t_('O nas'), 'kontakt': t_('Kontakt'), 'reklama': t_('Oferta reklamowa') }[route.id] || route.id)
        : route.id.charAt(0).toUpperCase() + route.id.slice(1);
      t = pageName + ' — pro.portaltaxi.pl';
    }
    document.title = t;
  }, [route, article]);

  const nav = (r) => {
    if (r.type === 'newsletter') { setNlOpen(true); return; }
    setArticle(null);
    setRoute(r);
    window.scrollTo(0, 0);
    pushPath(r, null);
  };

  const openArticle = (a, more) => {
    if (more || !a) { nav({ type: 'category', id: window.PRO_LANG === 'en' ? 'all' : 'rynek-polski' }); return; }
    setArticle(a);
    setRoute({ type: 'article' });
    window.scrollTo(0, 0);
    pushPath({ type: 'article' }, a);
  };

  aUseEffect(() => {
    const shiftMain = (px) => {
      const m = document.querySelector('main');
      if (m) m.style.transform = px ? `translateY(-${px}px)` : 'none';
    };
    window.__pro = {
      home: () => { setArticle(null); setRoute({ type: 'home' }); pushPath({ type: 'home' }); },
      go: (id) => { setArticle(null); setRoute({ type: 'category', id }); pushPath({ type: 'category', id }); },
      article: (id) => {
        const a = window.PRO.articles.find(x => x.id === id) || window.PRO.articles[0];
        setArticle(a); setRoute({ type: 'article' }); pushPath({ type: 'article' }, a);
      },
      page: (id) => { setArticle(null); setRoute({ type: 'page', id }); pushPath({ type: 'page', id }); },
      openAI: () => setAiOpen(true),
      closeAI: () => setAiOpen(false),
      openNL: () => setNlOpen(true),
      closeNL: () => setNlOpen(false),
      shift: shiftMain,
      cancelAutoNL: () => { if (nlTimer.current) clearTimeout(nlTimer.current); sessionStorage.setItem('pro_nl_seen', '1'); },
    };
  });

  return (
    <div style={{ background: T.bg, minHeight: '100vh' }}>
      <window.ProHeader route={route} article={article} onNav={nav} onOpenAI={() => setAiOpen(true)} />

      <main>
        {route.type === 'home' && <window.ProHome onOpen={openArticle} onNav={nav} />}
        {route.type === 'category' && <window.CategoryPage catId={route.id} onOpen={openArticle} onOpenAI={() => setAiOpen(true)} />}
        {route.type === 'article' && <window.ArticlePage article={article} onOpen={openArticle} onNav={nav} onOpenAI={() => setAiOpen(true)} />}
        {route.type === 'page' && <window.StaticPage pageId={route.id} />}
      </main>

      <window.ProFooter onNav={nav} />

      {/* Asystent AI wyłączony 5.11.2026 — moduł AIAssistant zostaje w pro-shell.jsx */}
      <window.NewsletterPopup open={nlOpen} onClose={() => setNlOpen(false)} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<ProApp />);
