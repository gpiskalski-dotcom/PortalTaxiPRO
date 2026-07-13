// pro-home.jsx — homepage: hero slider + main news grid + sidebar (Najnowsze/Popularne)

const { useState: hUseState, useEffect: hUseEffect } = React;

// ===== Hero slider =====
const HeroSlider = ({ onOpen }) => {
  const T = window.T;
  const slides = window.PRO.slider;
  const [i, setI] = hUseState(0);
  const [paused, setPaused] = hUseState(false);

  hUseEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const go = (n) => setI((n + slides.length) % slides.length);
  const s = slides[i];

  return (
    <section
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      style={{ position: 'relative', background: T.ink, overflow: 'hidden' }}>
      <div className="pro-slider" style={{ position: 'relative', height: 480 }}>
        {slides.map((sl, idx) =>
        <div key={sl.id} style={{
          position: 'absolute', inset: 0, opacity: idx === i ? 1 : 0,
          transition: 'opacity .6s ease', pointerEvents: idx === i ? 'auto' : 'none'
        }}>
            <img src={window.proImg(sl.img)} onError={function (e) {e.currentTarget.style.opacity = '0.1';}} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15,14,10,0.75) 0%, rgba(15,14,10,0.55) 38%, rgba(15,14,10,0.1) 100%)' }} />
          </div>
        )}
        {/* Content */}
        <div style={{ position: 'relative', height: '100%', maxWidth: 1240, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center' }}>
          <div className="pro-slide-content" style={{ maxWidth: 640 }}>
            <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
            {s.source ?
              <>
                <span style={{ fontFamily: T.ui, fontWeight: 700, fontSize: 11.5, color: T.ink, background: T.yellow, padding: '5px 11px', letterSpacing: '0.07em', textTransform: 'uppercase' }}>Przegląd prasy</span>
                <span style={{ fontFamily: T.ui, fontSize: 14, color: '#d8d3c6', fontStyle: 'italic', fontWeight: 500 }}>{s.source}</span>
              </> :
              <window.Badge cat={s.cat} />}
          </div>
            <h1 style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 40, lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 16px' }}>
              {s.title}
            </h1>
            <p style={{ fontFamily: T.serif, fontSize: 17, lineHeight: 1.55, color: '#d8d3c6', margin: '0 0 24px' }}>
              {s.lead}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <button onClick={() => onOpen(window.PRO.articles.find((a) => a.id === s.id) || s)} style={{
                fontFamily: T.ui, fontWeight: 700, fontSize: 14, color: T.ink, background: T.yellow,
                border: 'none', padding: '13px 22px', cursor: 'pointer', letterSpacing: '0.01em'
              }}>Czytaj więcej →</button>
              <span style={{ fontFamily: T.ui, fontSize: 12.5, color: '#9a9384' }}>{s.date} · {s.read} min czytania</span>
            </div>
          </div>
        </div>
        {/* Arrows */}
        <button onClick={() => go(i - 1)} aria-label="Poprzedni" style={arrowStyle('left')}>
          <svg width="22" height="22" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" fill="none"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button onClick={() => go(i + 1)} aria-label="Następny" style={arrowStyle('right')}>
          <svg width="22" height="22" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" fill="none"><path d="m9 18 6-6-6-6" /></svg>
        </button>
        {/* Indicators */}
        <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, alignItems: 'center' }}>
          {slides.map((_, idx) =>
          <button key={idx} onClick={() => setI(idx)} aria-label={`Slajd ${idx + 1}`} style={{
            width: idx === i ? 28 : 10, height: 4, borderRadius: 2, border: 'none', cursor: 'pointer',
            background: idx === i ? T.yellow : 'rgba(255,255,255,0.4)', transition: 'all .3s', padding: 0
          }} />
          )}
          <span style={{ fontFamily: T.ui, fontSize: 11, color: '#9a9384', marginLeft: 10, fontVariantNumeric: 'tabular-nums' }}>
            {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>);

};
const arrowStyle = (side) => ({
  position: 'absolute', top: '50%', transform: 'translateY(-50%)', [side]: 16,
  width: 44, height: 44, borderRadius: '50%', background: 'rgba(21,20,15,0.55)',
  border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', display: 'flex',
  alignItems: 'center', justifyContent: 'center', zIndex: 5
});

// ===== Article row card (main list) =====
const ArticleRow = ({ a, onOpen }) => {
  const T = window.T;
  return (
    <article className="pro-art-row" onClick={() => onOpen(a)} style={{
      display: 'grid', gridTemplateColumns: '220px 1fr', gap: 20, padding: '22px 0',
      borderBottom: `1px solid ${T.line}`, cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.querySelector('h3').style.color = window.catColor(a.cat)}
    onMouseLeave={(e) => e.currentTarget.querySelector('h3').style.color = T.ink}>
      <div style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden', background: T.paper3 }}>
        <img src={window.proThumb(a.img)} onError={function (e) {e.currentTarget.style.opacity = '0.1';}} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          {(a.cats || [a.cat]).includes('przeglad-prasy') && a.source ?
          <>
              <span style={{ fontFamily: T.ui, fontWeight: 700, fontSize: 11, color: T.ink, background: T.yellow, padding: '3px 8px', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Przegląd prasy</span>
              <span style={{ fontFamily: T.ui, fontSize: 12.5, color: T.ink2, fontWeight: 600, fontStyle: 'italic' }}>{a.source}</span>
            </> :
          <window.Badge cat={a.cat} small />}
          <span style={{ fontFamily: T.ui, fontSize: 12, color: T.inkSoft }}>{a.date}</span>
        </div>
        <h3 style={{ fontFamily: T.ui, fontWeight: 700, fontSize: 21, lineHeight: 1.2, letterSpacing: '-0.015em', color: T.ink, margin: '0 0 8px', transition: 'color .15s' }}>
          {a.title}
        </h3>
        <p style={{ fontFamily: T.serif, fontSize: 15, lineHeight: 1.5, color: T.ink2, margin: 0 }}>
          {a.lead}
        </p>
      </div>
    </article>);

};
window.ArticleRow = ArticleRow;

// ===== Sidebar: Najnowsze / Popularne =====
const SideTabs = ({ onOpen }) => {
  const T = window.T;
  const [tab, setTab] = hUseState('najnowsze');
  const all = window.PRO.articles;
  const najnowsze = all.slice(0, 6);
  const popularne = all.filter((a) => a.hot).concat(all).slice(0, 6);
  const list = tab === 'najnowsze' ? najnowsze : popularne;

  return (
    <aside style={{ position: 'sticky', top: 130 }}>
      <div style={{ border: `1px solid ${T.line}` }}>
        <div style={{ display: 'flex', borderBottom: `2px solid ${T.ink}` }}>
          {[['najnowsze', 'Najnowsze'], ['popularne', 'Popularne']].map(([id, l]) =>
          <button key={id} onClick={() => setTab(id)} style={{
            flex: 1, fontFamily: T.ui, fontWeight: 800, fontSize: 14, letterSpacing: '0.02em',
            color: tab === id ? T.ink : T.inkSoft, background: tab === id ? T.paper : T.paper2,
            border: 'none', borderBottom: tab === id ? `3px solid ${T.yellow}` : '3px solid transparent',
            cursor: 'pointer', padding: '14px 0', textTransform: 'uppercase', marginBottom: -2
          }}>{l}</button>
          )}
        </div>
        <div>
          {list.map((a, idx) =>
          <div key={a.id + idx} onClick={() => onOpen(a)} style={{
            display: 'grid', gridTemplateColumns: tab === 'najnowsze' ? '54px 1fr' : '24px 1fr', gap: 12,
            padding: '14px 16px', borderBottom: idx < list.length - 1 ? `1px solid ${T.lineSoft}` : 'none', cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = T.paper2}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              {tab === 'najnowsze' ?
            <span style={{ fontFamily: T.ui, fontWeight: 700, fontSize: 12, color: window.catColor(a.cat), lineHeight: 1.25 }}>{a.date.replace(/^(\d+)\s+(\w{3})\w*/, '$1 $2')}</span> :
            <span style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 16, color: T.yellow, lineHeight: 1 }}>{idx + 1}</span>}
              <div>
                <div style={{ fontFamily: T.ui, fontWeight: 600, fontSize: 14, lineHeight: 1.3, color: T.ink }}>{a.title}</div>
              </div>
            </div>
          )}
        </div>
        <button onClick={() => onOpen(null, true)} style={{
          width: '100%', fontFamily: T.ui, fontWeight: 700, fontSize: 12.5, letterSpacing: '0.08em',
          color: T.ink, background: T.yellow, border: 'none', padding: '14px', cursor: 'pointer', textTransform: 'uppercase'
        }}>Więcej wiadomości →</button>
      </div>

      {/* Newsletter mini box */}
      <div style={{ marginTop: 24, background: T.ink, padding: '24px 20px' }}>
        <div style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 17, color: '#fff', marginBottom: 8, letterSpacing: '-0.01em' }}>
          {window.PRO.newsletter.heading}
        </div>
        <p style={{ fontFamily: T.serif, fontSize: 13.5, lineHeight: 1.5, color: '#9a9384', margin: '0 0 14px' }}>
          Najważniejsze informacje branżowe prosto na skrzynkę.
        </p>
        <NewsletterInline />
      </div>
    </aside>);

};

const NewsletterInline = () => {
  const T = window.T;
  const [email, setEmail] = hUseState('');
  const [state, setState] = hUseState('idle'); // idle | sending | ok | err | neterr
  if (state === 'ok') return <div style={{ fontFamily: T.ui, fontSize: 13, color: T.yellow, fontWeight: 600 }}>✓ Dziękujemy! Zapis potwierdzony.</div>;
  const submit = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) { setState('err'); return; }
    setState('sending');
    try { await window.PRO_subscribe(email, 'pro:mini-box'); setState('ok'); }
    catch (err) { setState('neterr'); }
  };
  return (
    <form onSubmit={submit}>
      <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); if (state === 'err' || state === 'neterr') setState('idle'); }} placeholder="Twój e-mail" style={{
        width: '100%', fontFamily: T.ui, fontSize: 13.5, padding: '11px 12px', border: 'none',
        borderRadius: 2, outline: 'none', marginBottom: 8, boxSizing: 'border-box'
      }} />
      {state === 'err' && <div style={{ fontFamily: T.ui, fontSize: 12, color: '#ffd9cf', marginBottom: 8 }}>Podaj poprawny e-mail.</div>}
      {state === 'neterr' && <div style={{ fontFamily: T.ui, fontSize: 12, color: '#ffd9cf', marginBottom: 8 }}>Nie udało się zapisać — spróbuj ponownie.</div>}
      <button type="submit" disabled={state === 'sending'} style={{
        width: '100%', fontFamily: T.ui, fontWeight: 700, fontSize: 13, color: T.ink, background: T.yellow,
        border: 'none', borderRadius: 2, padding: '11px', cursor: state === 'sending' ? 'default' : 'pointer', opacity: state === 'sending' ? 0.6 : 1
      }}>{state === 'sending' ? 'Zapisuję…' : 'Zapisz mnie'}</button>
    </form>);

};

// ===== Section heading =====
const SectionHead = ({ children, accent }) => {
  const T = window.T;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, paddingBottom: 12, borderBottom: `2px solid ${T.ink}` }}>
      <span style={{ width: 14, height: 14, background: accent || T.yellow, display: 'inline-block' }} />
      <h2 style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 20, letterSpacing: '-0.01em', color: T.ink, margin: 0, textTransform: 'uppercase' }}>
        {children}
      </h2>
    </div>);

};
window.SectionHead = SectionHead;

// ===== Category strip (smaller cards) =====
const CategoryStrip = ({ catId, onOpen, onNav }) => {
  const T = window.T;
  const cat = window.PRO.categories.find((c) => c.id === catId);
  const arts = window.PRO.articles.filter((a) => (a.cats || [a.cat]).includes(catId)).slice(0, 3);
  if (arts.length === 0) return null;
  return (
    <div style={{ marginTop: 40 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, paddingBottom: 12, borderBottom: `2px solid ${T.ink}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 14, height: 14, background: window.catColor(catId), display: 'inline-block' }} />
          <h2 style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 20, letterSpacing: '-0.01em', color: T.ink, margin: 0, textTransform: 'uppercase' }}>{cat.label}</h2>
        </div>
        <button onClick={() => onNav({ type: 'category', id: catId })} style={{
          fontFamily: T.ui, fontWeight: 600, fontSize: 13, color: T.inkSoft, background: 'transparent', border: 'none', cursor: 'pointer'
        }}>Wszystkie →</button>
      </div>
      <div className="pro-cat-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 20 }}>
        {arts.map((a) =>
        <article key={a.id} onClick={() => onOpen(a)} style={{ cursor: 'pointer' }}
        onMouseEnter={(e) => e.currentTarget.querySelector('h3').style.color = window.catColor(a.cat)}
        onMouseLeave={(e) => e.currentTarget.querySelector('h3').style.color = T.ink}>
            <div style={{ aspectRatio: '3/2', overflow: 'hidden', background: T.paper3, marginBottom: 12 }}>
              <img src={window.proThumb(a.img)} onError={function (e) {e.currentTarget.style.opacity = '0.1';}} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ fontFamily: T.ui, fontSize: 11.5, color: T.inkSoft, marginBottom: 6 }}>{a.date} · {a.read} min</div>
            <h3 style={{ fontFamily: T.ui, fontWeight: 700, fontSize: 16.5, lineHeight: 1.25, letterSpacing: '-0.01em', color: T.ink, margin: 0, transition: 'color .15s' }}>{a.title}</h3>
          </article>
        )}
      </div>
    </div>);

};

// ===== Homepage =====
const ProHome = ({ onOpen, onNav }) => {
  const T = window.T;
  const main = window.PRO.articles.slice(0, 5);
  return (
    <div>
      <HeroSlider onOpen={onOpen} />
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '44px 24px 0' }}>
        <div className="pro-home-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 48 }}>
          {/* Main column */}
          <div>
            <window.SectionHead>Najnowsze artykuły</window.SectionHead>
            <div>
              {main.map((a) => <window.ArticleRow key={a.id} a={a} onOpen={onOpen} />)}
            </div>
            <CategoryStrip catId="regulacje-ue" onOpen={onOpen} onNav={onNav} />
            <CategoryStrip catId="przeglad-prasy" onOpen={onOpen} onNav={onNav} />
            <CategoryStrip catId="analizy" onOpen={onOpen} onNav={onNav} />
            <CategoryStrip catId="rynki-zagraniczne" onOpen={onOpen} onNav={onNav} />
          </div>
          {/* Sidebar */}
          <SideTabs onOpen={onOpen} />
        </div>
      </div>
    </div>);

};
window.ProHome = ProHome;