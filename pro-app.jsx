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

// hash -> {type,id?,article?}
const proParseHash = () => {
  const h = (window.location.hash || '').replace(/^#\/?/, '');
  const parts = h.split('/').filter(Boolean);
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

  const pushHash = (r, a) => {
    try {
      const h = proHashFor(r, a);
      if (('#' + (window.location.hash || '').replace(/^#/, '')) !== h) {
        window.history.pushState(null, '', h);
      }
    } catch (e) {}
  };

  // Zastosuj bieżący hash do stanu (bez dopisywania do historii)
  const applyRoute = () => {
    const p = proParseHash();
    if (p.type === 'article') { setArticle(p.article); setRoute({ type: 'article' }); }
    else if (p.type === 'category') { setArticle(null); setRoute({ type: 'category', id: p.id }); }
    else if (p.type === 'page') { setArticle(null); setRoute({ type: 'page', id: p.id }); }
    else { setArticle(null); setRoute({ type: 'home' }); }
    window.scrollTo(0, 0);
  };
  // ref, żeby nasłuch zdarzeń wołał ZAWSZE najnowszą wersję (bez nieaktualnego domknięcia)
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

  // Deep link przy wejściu + obsługa wstecz/dalej i ręcznej zmiany adresu
  aUseEffect(() => {
    const run = () => applyRef.current();
    // przy wejściu z linku — po pierwszym renderze (unik wyścigu ze stanem początkowym)
    const t = setTimeout(run, 0);
    window.addEventListener('popstate', run);
    window.addEventListener('hashchange', run);
    return () => {
      clearTimeout(t);
      window.removeEventListener('popstate', run);
      window.removeEventListener('hashchange', run);
    };
  }, []);

  // Tytuł strony pod udostępnianie / SEO
  aUseEffect(() => {
    const base = 'pro.portaltaxi.pl — branżowy serwis rynku taxi';
    let t = base;
    if (route.type === 'article' && article) t = article.title + ' — pro.portaltaxi.pl';
    else if (route.type === 'category') {
      const c = window.PRO.categories.find((x) => x.id === route.id);
      t = (c ? c.label : 'Kategoria') + ' — pro.portaltaxi.pl';
    } else if (route.type === 'page') {
      t = route.id.charAt(0).toUpperCase() + route.id.slice(1) + ' — pro.portaltaxi.pl';
    }
    document.title = t;
  }, [route, article]);

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

  // ===== Global API (napęd widoków z zewnątrz / screenshoty) =====
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
