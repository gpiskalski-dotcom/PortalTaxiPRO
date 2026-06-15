// pro-pages.jsx — category listing, single article view, static pages

const { useEffect: pgUseEffect } = React;

// ===== Category listing =====
const CategoryPage = ({ catId, onOpen, onOpenAI }) => {
  const T = window.T;
  const cat = window.PRO.categories.find((c) => c.id === catId);
  const arts = window.PRO.articles.filter((a) => (a.cats || [a.cat]).includes(catId));
  const [lead, ...rest] = arts;

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '36px 24px 0' }}>
      {/* Category header */}
      <div style={{ borderBottom: `2px solid ${T.ink}`, paddingBottom: 18, marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <span style={{ width: 18, height: 18, background: window.catColor(catId), display: 'inline-block' }} />
          <h1 style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 34, letterSpacing: '-0.025em', color: T.ink, margin: 0 }}>{cat.label}</h1>
        </div>
        <p style={{ fontFamily: T.serif, fontSize: 16.5, lineHeight: 1.5, color: T.ink2, margin: 0, maxWidth: 720 }}>{cat.desc}</p>
      </div>

      <div className="pro-home-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48 }}>
        <div>
          {/* Lead article — big */}
          {lead &&
          <article onClick={() => onOpen(lead)} style={{ cursor: 'pointer', marginBottom: 8, paddingBottom: 28, borderBottom: `1px solid ${T.line}` }}
          onMouseEnter={(e) => e.currentTarget.querySelector('h2').style.color = window.catColor(catId)}
          onMouseLeave={(e) => e.currentTarget.querySelector('h2').style.color = T.ink}>
              <div style={{ aspectRatio: '16/8', overflow: 'hidden', background: T.paper3, marginBottom: 16 }}>
                <img src={window.proImg(lead.img)} onError={function(e){e.currentTarget.style.opacity='0.1';}} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <window.Badge cat={lead.cat} small /><span style={{ fontFamily: T.ui, fontSize: 12, color: T.inkSoft }}>{lead.date} · {lead.read} min</span>
              </div>
              <h2 style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 28, lineHeight: 1.15, letterSpacing: '-0.02em', color: T.ink, margin: '0 0 10px', transition: 'color .15s' }}>{lead.title}</h2>
              <p style={{ fontFamily: T.serif, fontSize: 16, lineHeight: 1.55, color: T.ink2, margin: 0 }}>{lead.lead}</p>
            </article>
          }
          {rest.map((a) => <window.ArticleRow key={a.id} a={a} onOpen={onOpen} />)}
          {arts.length === 0 &&
          <p style={{ fontFamily: T.serif, fontSize: 16, color: T.inkSoft }}>Brak artykułów w tej kategorii.</p>
          }
        </div>

        {/* Sidebar: AI promo + popular */}
        <aside>
          <div style={{ background: T.ink, padding: '24px 20px', marginBottom: 24 }}>
            <div style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: '50%', background: T.yellow, alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill={T.ink}><path d="M12 2l2.4 6.3L21 9l-5 4.2L17.6 21 12 17.3 6.4 21 8 13.2 3 9l6.6-.7z" /></svg>
            </div>
            <div style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 18, color: '#fff', marginBottom: 8, lineHeight: 1.2 }}>Zapytaj asystenta AI</div>
            <p style={{ fontFamily: T.serif, fontSize: 13.5, lineHeight: 1.5, color: '#9a9384', margin: '0 0 16px' }}>
              Masz pytanie o regulacje, rynek lub platformy? Zapytaj naszego asystenta.
            </p>
            <button onClick={onOpenAI} style={{
              width: '100%', fontFamily: T.ui, fontWeight: 700, fontSize: 13, color: T.ink, background: T.yellow,
              border: 'none', padding: '12px', cursor: 'pointer'
            }}>Otwórz asystenta →</button>
          </div>
          <div style={{ border: `1px solid ${T.line}` }}>
            <div style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 14, letterSpacing: '0.02em', color: T.ink, padding: '14px 16px', borderBottom: `2px solid ${T.ink}`, textTransform: 'uppercase' }}>Popularne</div>
            {window.PRO.articles.filter((a) => a.hot).slice(0, 5).map((a, idx) =>
            <div key={a.id} onClick={() => onOpen(a)} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 12, padding: '14px 16px', borderBottom: idx < 4 ? `1px solid ${T.lineSoft}` : 'none', cursor: 'pointer' }}>
                <span style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 16, color: T.yellow, lineHeight: 1 }}>{idx + 1}</span>
                <div style={{ fontFamily: T.ui, fontWeight: 600, fontSize: 14, lineHeight: 1.3, color: T.ink }}>{a.title}</div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>);

};
window.CategoryPage = CategoryPage;

// ===== Single article view =====
const ArticlePage = ({ article, onOpen, onNav, onOpenAI }) => {
  const T = window.T;
  pgUseEffect(() => {window.scrollTo(0, 0);}, [article && article.id]);
  if (!article) return null;
  const myCats = article.cats || [article.cat];
  const related = window.PRO.articles.filter((a) => a.id !== article.id && (a.cats || [a.cat]).some((c) => myCats.includes(c))).slice(0, 3);

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
      {/* Breadcrumb */}
      <div style={{ fontFamily: T.ui, fontSize: 12.5, color: T.inkSoft, padding: '20px 0 0' }}>
        <button onClick={() => onNav({ type: 'home' })} style={crumbBtn}>Strona główna</button>
        <span style={{ margin: '0 8px' }}>›</span>
        <button onClick={() => onNav({ type: 'category', id: article.cat })} style={crumbBtn}>{window.catLabel(article.cat)}</button>
      </div>

      <div className="pro-article-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,760px) 1fr', gap: 56, padding: '24px 0 0' }}>
        <article>
          <div style={{ marginBottom: 16 }}><window.Badge cat={article.cat} /></div>
          <h1 style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 38, lineHeight: 1.12, letterSpacing: '-0.025em', color: T.ink, margin: '0 0 18px' }}>
            {article.title}
          </h1>
          <p style={{ fontFamily: T.serif, fontSize: 20, lineHeight: 1.5, color: T.ink2, fontWeight: 500, margin: '0 0 22px', fontStyle: 'italic' }}>
            {article.lead}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderTop: `1px solid ${T.line}`, borderBottom: `1px solid ${T.line}`, marginBottom: 28 }}>
            <span style={{ fontFamily: T.ui, fontSize: 13, color: T.inkSoft }}>
              {article.author ?
              article.author :
              article.source ?
              article.source + (article.sourceAuthor && !/redakcja|komunikat/i.test(article.sourceAuthor) ? ' · ' + article.sourceAuthor : '') :
              'Redakcja PortalTaxiPRO'}
            </span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: T.inkSoft }} />
            <span style={{ fontFamily: T.ui, fontSize: 13, color: T.inkSoft }}>{article.date}</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: T.inkSoft }} />
            <span style={{ fontFamily: T.ui, fontSize: 13, color: T.inkSoft }}>{article.read} min czytania</span>
          </div>
          <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: T.paper3, marginBottom: 28 }}>
            <img src={window.proImg(article.img)} onError={function(e){e.currentTarget.style.opacity='0.1';}} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {(article.body || [article.lead]).map((p, i) => {
            const isHeader = /^\d+\.\s/.test(p);
            const isDisclaimer = p.startsWith('Zastrzeżenie');
            const renderText = (text) => {
              if (!text.includes('**')) return text;
              return text.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
                part.startsWith('**') ? <strong key={j}>{part.slice(2, -2)}</strong> : part
              );
            };
            const headerText = isHeader ? p.replace(/^\d+\.\s+/, '') : p;
            return isHeader
              ? <h2 key={i} style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 20, letterSpacing: '-0.01em', color: T.ink, margin: '32px 0 12px' }}>{headerText}</h2>
              : <p key={i} style={{ fontFamily: T.serif, fontSize: isDisclaimer ? 14 : 18, lineHeight: 1.7, color: isDisclaimer ? T.inkSoft : T.ink, margin: '0 0 22px', fontStyle: isDisclaimer ? 'italic' : 'normal' }}>{renderText(p)}</p>;
          })}

          {article.author && (
            <p style={{ fontFamily: T.ui, fontWeight: 700, fontSize: 16, color: T.ink, margin: '8px 0 28px', textAlign: 'right', letterSpacing: '-0.01em' }}>
              — {article.author}
            </p>
          )}

          {article.sources && article.sources.length > 0 && (
            <div style={{ marginTop: 40, paddingTop: 24, borderTop: `1px solid ${T.line}` }}>
              <h3 style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 15, letterSpacing: '0.04em', textTransform: 'uppercase', color: T.inkSoft, margin: '0 0 16px' }}>Źródła</h3>
              <ol style={{ margin: 0, padding: '0 0 0 20px' }}>
                {article.sources.map((src, i) => {
                  const urlMatch = src.match(/https?:\/\/\S+/);
                  const url = urlMatch ? urlMatch[0] : null;
                  const text = url ? src.replace(url, '').replace(/\s*—\s*$/, '').trim() : src;
                  return (
                    <li key={i} style={{ fontFamily: T.ui, fontSize: 12.5, lineHeight: 1.6, color: T.inkSoft, marginBottom: 6 }}>
                      {text}{url && <> — <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: T.ink, fontWeight: 600, textDecoration: 'underline' }}>{url.replace(/https?:\/\//, '').slice(0, 60)}{url.length > 63 ? '…' : ''}</a></>}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}

          {article.link &&
          <div style={{ border: `1px solid ${T.line}`, background: T.paper2, padding: '18px 20px', margin: '4px 0 8px' }}>
              <div style={{ fontFamily: T.ui, fontSize: 11, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.inkSoft, marginBottom: 8 }}>Źródło materiału</div>
              <div style={{ fontFamily: T.ui, fontSize: 15, fontWeight: 700, color: T.ink }}>{article.source}{article.sourceAuthor && !/redakcja|komunikat/i.test(article.sourceAuthor) ? ' — ' + article.sourceAuthor : ''}</div>
              {article.region && <div style={{ fontFamily: T.ui, fontSize: 12.5, color: T.inkSoft, marginTop: 2 }}>{article.region} · {article.date}</div>}
              <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 12, fontFamily: T.ui, fontWeight: 700, fontSize: 13, color: T.ink, background: T.yellow, padding: '10px 16px', textDecoration: 'none' }}>Czytaj w oryginale →</a>
            </div>
          }

          {/* Tags / share */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '24px 0', borderTop: `1px solid ${T.line}`, marginTop: 12 }}>
            <span style={{ fontFamily: T.ui, fontSize: 12.5, color: T.inkSoft }}>{(article.cats || [article.cat]).length > 1 ? 'Kategorie:' : 'Kategoria:'}</span>
            {(article.cats || [article.cat]).map((cid) =>
            <button key={cid} onClick={() => onNav({ type: 'category', id: cid })} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
                <window.Badge cat={cid} small />
              </button>
            )}
          </div>
        </article>

        {/* Sidebar */}
        <aside>
          <div style={{ position: 'sticky', top: 130 }}>
            <div style={{ background: T.ink, padding: '24px 20px', marginBottom: 24 }}>
              <div style={{ display: 'inline-flex', width: 34, height: 34, borderRadius: '50%', background: T.yellow, alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={T.ink}><path d="M12 2l2.4 6.3L21 9l-5 4.2L17.6 21 12 17.3 6.4 21 8 13.2 3 9l6.6-.7z" /></svg>
              </div>
              <div style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 17, color: '#fff', marginBottom: 8, lineHeight: 1.2 }}>Pogłęb temat z AI</div>
              <p style={{ fontFamily: T.serif, fontSize: 13.5, lineHeight: 1.5, color: '#9a9384', margin: '0 0 16px' }}>
                Zadaj pytanie o szczegóły tego tematu naszemu asystentowi AI.
              </p>
              <button onClick={onOpenAI} style={{ width: '100%', fontFamily: T.ui, fontWeight: 700, fontSize: 13, color: T.ink, background: T.yellow, border: 'none', padding: '12px', cursor: 'pointer' }}>Otwórz asystenta →</button>
            </div>
            {related.length > 0 &&
            <div style={{ border: `1px solid ${T.line}` }}>
                <div style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 14, letterSpacing: '0.02em', color: T.ink, padding: '14px 16px', borderBottom: `2px solid ${T.ink}`, textTransform: 'uppercase' }}>Powiązane</div>
                {related.map((a, idx) =>
              <div key={a.id} onClick={() => onOpen(a)} style={{ padding: '14px 16px', borderBottom: idx < related.length - 1 ? `1px solid ${T.lineSoft}` : 'none', cursor: 'pointer' }}
              onMouseEnter={(e) => e.currentTarget.style.background = T.paper2}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                    <div style={{ fontFamily: T.ui, fontSize: 11, color: T.inkSoft, marginBottom: 4 }}>{a.date}</div>
                    <div style={{ fontFamily: T.ui, fontWeight: 600, fontSize: 14, lineHeight: 1.3, color: T.ink }}>{a.title}</div>
                  </div>
              )}
              </div>
            }
          </div>
        </aside>
      </div>

      {/* More from category */}
      <div style={{ marginTop: 24, paddingTop: 32, borderTop: `2px solid ${T.ink}` }}>
        <window.SectionHead accent={window.catColor(article.cat)}>Więcej: {window.catLabel(article.cat)}</window.SectionHead>
        <div className="pro-cat-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 20 }}>
          {related.map((a) =>
          <article key={a.id} onClick={() => onOpen(a)} style={{ cursor: 'pointer' }}>
              <div style={{ aspectRatio: '3/2', overflow: 'hidden', background: T.paper3, marginBottom: 12 }}>
                <img src={window.proImg(a.img)} onError={function(e){e.currentTarget.style.opacity='0.1';}} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ fontFamily: T.ui, fontSize: 11.5, color: T.inkSoft, marginBottom: 6 }}>{a.date}</div>
              <h3 style={{ fontFamily: T.ui, fontWeight: 700, fontSize: 16, lineHeight: 1.25, color: T.ink, margin: 0 }}>{a.title}</h3>
            </article>
          )}
        </div>
      </div>
    </div>);

};
const crumbBtn = { fontFamily: '"Archivo", sans-serif', fontSize: 12.5, color: '#5c5648', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 };
window.ArticlePage = ArticlePage;

// ===== Static pages (O nas / Kontakt / legal) =====
const StaticPage = ({ pageId }) => {
  const T = window.T;
  pgUseEffect(() => {window.scrollTo(0, 0);}, [pageId]);
  const content = {
    'o-nas': {
      title: window.PRO.about.title,
      body: [window.PRO.about.lead, window.PRO.about.body]
    },
    'kontakt': {
      title: 'Kontakt',
      body: ['Redakcja PortalTaxiPRO.eu jest otwarta na sygnały, materiały i współpracę branżową.', 'E-mail redakcji: redakcja@portaltaxipro.eu', 'Oferta reklamowa i współpraca: biuro@portaltaxipro.eu']
    },
    'regulamin': { title: 'Regulamin', body: ['Treść regulaminu serwisu zostanie opublikowana wraz z uruchomieniem produkcyjnym portalu.'] },
    'reklama': { title: 'Oferta reklamowa', body: ['PortalTaxiPRO.eu oferuje formaty reklamowe dla firm z sektora mobilności, flot, ubezpieczeń i technologii. Skontaktuj się: biuro@portaltaxipro.eu'] },
    'prywatnosc': { title: 'Polityka prywatności', body: ['Pełna polityka prywatności zostanie opublikowana wraz z uruchomieniem produkcyjnym.'] },
    'ustawienia': { title: 'Ustawienia prywatności', body: ['Panel zarządzania zgodami będzie dostępny w wersji produkcyjnej.'] },
    'cookies': { title: 'Polityka cookies', body: ['Informacje o plikach cookies zostaną opublikowane wraz z uruchomieniem produkcyjnym.'] }
  }[pageId] || { title: 'Strona', body: ['Treść w przygotowaniu.'] };

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 0' }}>
      <h1 style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 38, letterSpacing: '-0.025em', color: T.ink, margin: '0 0 24px', paddingBottom: 18, borderBottom: `2px solid ${T.ink}` }}>{content.title}</h1>
      {content.body.map((p, i) =>
      <p key={i} style={{ fontFamily: T.serif, fontSize: i === 0 ? 19 : 17, lineHeight: 1.65, color: i === 0 ? T.ink : T.ink2, margin: '0 0 20px', fontWeight: i === 0 ? 500 : 400 }}>{p}</p>
      )}
    </div>);

};
window.StaticPage = StaticPage;