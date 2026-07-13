// pro-app.jsx — routing + compose for PortalTaxiPRO
// Hash-based deep links: każdy artykuł/kategoria/strona ma własny, udostępnialny URL,
// działa na statycznym hostingu (bez przekierowań serwera).

const { useState: aUseState, useEffect: aUseEffect, useRef: aUseRef } = React;

// URL-safe slug z tytułu (obsługa polskich znaków)
const proSlug = (s) => (s || '')
  .toLowerCase()
  .replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e').replace(/ł/g, 'l')
  .replace(/ń/g, 'n').replace(/ó/g, 'o').replace(/ś/g, 's').replace(/ż/g, 'z').replace(/ź/g, 'z')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70);

// route -> hash
const proHashFor = (r, a) => {
  if (!r || r.type === 'home') return '#/';
  if (r.type === 'category') return '#/kategoria/' + r.id;
  if (r.type === 'page') return '#/strona/' + r.id;
  if (r.type === 'article' && a) return '#/artykul/' + a.id + '-' + proSlug(a.title);
  return '#/';
};

const ProApp = () => {
  const T = window.T;
  const [route, setRoute] = aUseState({ type: 'home' });
  const [article, setArticle] = aUseState(null);
  const [aiOpen, setAiOpen] = aUseState(false);
  const [nlOpen, setNlOpen] = aUseState(false);
  const nlTimer = aUseRef(null);

  const pushHash = (r, a) => {
    try {
      const h = proHashFor(r, a);
      if (('#' + (window.location.hash || '').replace(/^#/, '')) !== h) {
        window.history.pushState(null, '', h);
      }
    } catch (e) {}
  };

  // hash -> route (bez dopisywania do historii)
  const applyHash = () => {
    const h = (window.location.hash || '').replace(/^#\/?/, '');
    const parts = h.split('/').filter(Boolean);
    if (parts[0] === 'artykul') {
      const m = (parts[1] || '').match(/^(p\d+|a\d+)/);
      const a = m && window.PRO.articles.find((x) => x.id === m[1]);
      if (a) { setArticle(a); setRoute({ type: 'article' }); window.scrollTo(0, 0); return; }
    }
    if (parts[0] === 'kategoria' && parts[1]) {
      setArticle(null); setRoute({ type: 'category', id: parts[1] }); window.scrollTo(0, 0); return;
    }
    if (parts[0] === 'strona' && parts[1]) {
      setArticle(null); setRoute({ type: 'page', id: parts[1] }); window.scrollTo(0, 0); return;
    }
    setArticle(null); setRoute({ type: 'home' });
  };

  // Newsletter popup auto-shows once per session, after a short delay
  aUseEffect(() => {
    if (sessionStorage.getItem('pro_nl_seen')) return;
    nlTimer.current = setTimeout(() => {
      setNlOpen(true);
      sessionStorage.setItem('pro_nl_seen', '1');
    }, 4000);
    return () => clearTimeout(nlTimer.current);
  }, []);

  // Deep link przy wejściu + obsługa wstecz/dalej i ręcznej zmiany adresu
  aUseEffect(() => {
    const hh = window.location.hash || '';
    if (hh && hh !== '#' && hh !== '#/') applyHash();
    const onNavEvent = () => applyHash();
    window.addEventListener('popstate', onNavEvent);
    window.addEventListener('hashchange', onNavEvent);
    return () => {
      window.removeEventListener('popstate', onNavEvent);
      window.removeEventListener('hashchange', onNavEvent);
    };
  }, []);

  const nav = (r) => {
    if (r.type === 'newsletter') { setNlOpen(true); return; }
    setArticle(null);
    setRoute(r);
    window.scrollTo(0, 0);
    pushHash(r, null);
  };

  const openArticle = (a, more) => {
    if (more || !a) { nav({ type: 'category', id: 'rynek-polski' }); return; }
    setArticle(a);
    setRoute({ type: 'article' });
    window.scrollTo(0, 0);
    pushHash({ type: 'article' }, a);
  };

  // ===== Global API for PPTX/screenshot capture (drive views from showJs) =====
  aUseEffect(() => {
    const shiftMain = (px) => {
      const m = document.querySelector('main');
      if (m) m.style.transform = px ? `translateY(-${px}px)` : 'none';
    };
    window.__pro = {
      home: () => { setArticle(null); setRoute({ type: 'home' }); pushHash({ type: 'home' }); },
      go: (id) => { setArticle(null); setRoute({ type: 'category', id }); pushHash({ type: 'category', id }); },
      article: (id) => {
        const a = window.PRO.articles.find(x => x.id === id) || window.PRO.articles[0];
        setArticle(a); setRoute({ type: 'article' }); pushHash({ type: 'article' }, a);
      },
      page: (id) => { setArticle(null); setRoute({ type: 'page', id }); pushHash({ type: 'page', id }); },
      openAI: () => setAiOpen(true),
      closeAI: () => setAiOpen(false),
      openNL: () => setNlOpen(true),
      closeNL: () => setNlOpen(false),
      shift: shiftMain,
      cancelAutoNL: () => { if (nlTimer.current) clearTimeout(nlTimer.current); sessionStorage.setItem('pro_nl_seen', '1'); },
    };
  });

  return (
    <div style={{ background: T.paper, minHeight: '100vh' }}>
      <window.ProTopBar onNav={nav} />
      <window.ProHeader route={route} onNav={nav} onOpenAI={() => setAiOpen(true)} />

      <main>
        {route.type === 'home' && <window.ProHome onOpen={openArticle} onNav={nav} />}
        {route.type === 'category' && <window.CategoryPage catId={route.id} onOpen={openArticle} onOpenAI={() => setAiOpen(true)} />}
        {route.type === 'article' && <window.ArticlePage article={article} onOpen={openArticle} onNav={nav} onOpenAI={() => setAiOpen(true)} />}
        {route.type === 'page' && <window.StaticPage pageId={route.id} />}
      </main>

      <window.ProFooter onNav={nav} />

      <window.AIAssistant open={aiOpen} onClose={() => setAiOpen(false)} />
      <window.NewsletterPopup open={nlOpen} onClose={() => setNlOpen(false)} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<ProApp />);
