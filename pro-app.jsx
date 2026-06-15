// pro-app.jsx — routing + compose for PortalTaxiPRO

const { useState: aUseState, useEffect: aUseEffect, useRef: aUseRef } = React;

const ProApp = () => {
  const T = window.T;
  const [route, setRoute] = aUseState({ type: 'home' });
  const [article, setArticle] = aUseState(null);
  const [aiOpen, setAiOpen] = aUseState(false);
  const [nlOpen, setNlOpen] = aUseState(false);
  const nlTimer = aUseRef(null);

  // Newsletter popup auto-shows once per session, after a short delay
  aUseEffect(() => {
    if (sessionStorage.getItem('pro_nl_seen')) return;
    nlTimer.current = setTimeout(() => {
      setNlOpen(true);
      sessionStorage.setItem('pro_nl_seen', '1');
    }, 4000);
    return () => clearTimeout(nlTimer.current);
  }, []);

  const nav = (r) => {
    if (r.type === 'newsletter') { setNlOpen(true); return; }
    setArticle(null);
    setRoute(r);
    window.scrollTo(0, 0);
  };

  const openArticle = (a, more) => {
    if (more || !a) { nav({ type: 'category', id: 'rynek-polski' }); return; }
    setArticle(a);
    setRoute({ type: 'article' });
    window.scrollTo(0, 0);
  };

  // ===== Global API for PPTX/screenshot capture (drive views from showJs) =====
  aUseEffect(() => {
    const shiftMain = (px) => {
      const m = document.querySelector('main');
      if (m) m.style.transform = px ? `translateY(-${px}px)` : 'none';
    };
    window.__pro = {
      home: () => { setArticle(null); setRoute({ type: 'home' }); },
      go: (id) => { setArticle(null); setRoute({ type: 'category', id }); },
      article: (id) => {
        const a = window.PRO.articles.find(x => x.id === id) || window.PRO.articles[0];
        setArticle(a); setRoute({ type: 'article' });
      },
      page: (id) => { setArticle(null); setRoute({ type: 'page', id }); },
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
