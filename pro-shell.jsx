// pro-shell.jsx — chrome for PortalTaxiPRO: tokens, topbar, header+menu,
// AI assistant module, newsletter popup, footer. Exposes pieces on window.

const { useState: pUseState, useEffect: pUseEffect, useRef: pUseRef } = React;

// ===== Design tokens =====
const T = {
  ink: '#15140f',
  ink2: '#3f3a2e',
  inkSoft: '#5c574a',
  inkFaint: '#7c7462',
  line: '#e0d8c6',
  lineSoft: '#f2ede1',
  paper: '#ffffff',
  paper2: '#f2ede1',
  paper3: '#faf7f0',
  bg: '#faf7f0',
  yellow: '#F2C200',
  yellowInk: '#15140f',
  goldText: '#8a6d00',
  navy: '#16202e',
  accentRed: '#a33a2b',
  ok: '#1f7a4d',
  up: '#1f7a4d',
  down: '#a33a2b',
  ui: '"Archivo", system-ui, sans-serif',
  serif: '"Archivo", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};
window.T = T;

const catColor = (id) => ({
  'rynek-polski': '#2f6f4f',
  'regulacje-ue': '#1c4fa0',
  'rynki-zagraniczne': '#7a3fb0',
  'newsy-platform': '#0f8a7e',
  'przeglad-prasy': '#9a6a1a',
  'analizy': '#b5482a',
  'bezpieczenstwo': '#9c2b2b',
  'autonomiczne': '#3a7d8c',
}[id] || T.ink);
window.catColor = catColor;

const catLabel = (id) => (window.PRO.categories.find(c => c.id === id) || {}).label || id;
window.catLabel = catLabel;

// ===== Category badge =====
const Badge = ({ cat, small }) => (
  <span style={{
    display: 'inline-block', fontFamily: T.mono, fontWeight: 700,
    fontSize: small ? 10 : 11, letterSpacing: '0.1em', textTransform: 'uppercase',
    color: T.yellow, background: T.ink, padding: small ? '4px 8px' : '5px 9px', borderRadius: 5,
  }}>
    {catLabel(cat)}
  </span>
);
window.Badge = Badge;

// ===== Top utility bar =====
const ProTopBar = ({ onNav }) => (
  <div style={{ background: T.ink, color: '#cfcabc' }}>
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', height: 38, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ fontFamily: T.ui, fontSize: 11.5, letterSpacing: '0.04em', color: '#9a9384' }}>
        Branżowy serwis informacyjny rynku taxi
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {/* Language switcher — EN version opens in a new tab */}
        <a href="en.html" target="_blank" rel="noopener" aria-label="English version" style={{
          display: 'inline-flex', alignItems: 'center', gap: 7, textDecoration: 'none',
          background: T.yellow, color: T.ink, fontFamily: T.ui, fontWeight: 700, fontSize: 11.5,
          letterSpacing: '0.05em', padding: '0 12px', height: 24, marginRight: 8,
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>
          EN
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17 17 7M9 7h8v8"/></svg>
        </a>
        <span style={{ width: 1, height: 18, background: '#3a382f', marginRight: 4 }} />
        <a href="https://www.linkedin.com/in/grzegorz-piskalski/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" style={topIconStyle}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.07c.62-1.17 2.14-2.4 4.4-2.4 4.7 0 5.57 3.1 5.57 7.14V24h-5v-6.96c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.8-2.68 3.68V24h-5V8z"/></svg>
        </a>
        <button onClick={() => onNav({ type: 'newsletter' })} style={topLinkStyle}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
          Newsletter
        </button>
        <button onClick={() => onNav({ type: 'page', id: 'kontakt' })} style={topLinkStyle}>Kontakt</button>
        <button onClick={() => onNav({ type: 'page', id: 'o-nas' })} style={topLinkStyle}>O nas</button>
      </div>
    </div>
  </div>
);
const topIconStyle = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, color: '#cfcabc', textDecoration: 'none', background: 'transparent', border: 'none', cursor: 'pointer' };
const topLinkStyle = { display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: T.ui, fontSize: 12, fontWeight: 500, color: '#cfcabc', background: 'transparent', border: 'none', cursor: 'pointer', padding: '0 10px', height: 30, letterSpacing: '0.02em' };

// ===== Logo =====
const Logo = ({ onClick, size = 1 }) => (
  <button onClick={onClick} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'baseline', gap: 0 }}>
    <span style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 30 * size, letterSpacing: '-0.03em', color: T.ink, background: T.yellow, padding: `0 ${6 * size}px`, borderRadius: 4, marginRight: 1 }}>PRO</span>
    <span style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 30 * size, letterSpacing: '-0.03em', color: T.ink }}>.portaltaxi.pl</span>
    <span style={{ fontFamily: T.mono, fontWeight: 700, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.inkFaint, border: `1px solid ${T.line}`, borderRadius: 4, padding: '1px 5px', marginLeft: 7, alignSelf: 'center' }}>beta</span>
  </button>
);
window.Logo = Logo;

// ===== Header (minimal, wg makiety) =====
const PRO_NAV = [
  { id: 'rynek-polski', label: 'Rynek PL' },
  { id: 'regulacje-ue', label: 'Regulacje' },
  { id: 'rynki-zagraniczne', label: 'Rynki zagraniczne' },
  { id: 'newsy-platform', label: 'Platformy' },
  { id: 'analizy', label: 'Analizy' },
];
const ProHeader = ({ route, onNav, onOpenAI }) => {
  const [mobileOpen, setMobileOpen] = pUseState(false);
  const activeCat = route.type === 'category' ? route.id : null;
  return (
    <header style={{ background: T.paper, borderBottom: `1px solid ${T.line}`, position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="pro-head-inner" style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <Logo onClick={() => onNav({ type: 'home' })} size={0.62} />
        <nav className="pro-nav-inner" style={{ display: 'flex', gap: 26, flex: 1, justifyContent: 'center' }}>
          {PRO_NAV.map(c => {
            const active = activeCat === c.id;
            return (
              <button key={c.id} onClick={() => onNav({ type: 'category', id: c.id })} style={{
                fontFamily: T.ui, fontSize: 15, fontWeight: active ? 700 : 600,
                color: active ? T.ink : T.ink2, background: 'transparent', border: 'none',
                borderBottom: active ? `2px solid ${T.yellow}` : '2px solid transparent',
                cursor: 'pointer', padding: '4px 0', whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = T.ink; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = T.ink2; }}>
                {c.label}
              </button>
            );
          })}
        </nav>
        <div className="pro-head-right" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a href="https://portaltaxi.pl" className="pro-kierowcy-link" style={{ fontFamily: T.ui, fontSize: 14, fontWeight: 600, color: T.inkSoft, textDecoration: 'none', whiteSpace: 'nowrap' }}>portaltaxi.pl dla kierowców →</a>
          <button onClick={() => onNav({ type: 'newsletter' })} style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 14, color: T.yellowInk, background: T.yellow, border: 'none', borderRadius: 8, padding: '10px 18px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Newsletter</button>
          <button className="pro-burger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu" style={{
            display: 'none', background: 'transparent', border: `1px solid ${T.line}`, cursor: 'pointer', padding: 9, borderRadius: 8,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" stroke={T.ink} strokeWidth="2"><path d="M3 7h18M3 17h18"/></svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="pro-mobile-menu" style={{ borderTop: `1px solid ${T.line}`, background: T.paper, padding: '8px 24px 16px' }}>
          {PRO_NAV.map(c => (
            <button key={c.id} onClick={() => { onNav({ type: 'category', id: c.id }); setMobileOpen(false); }} style={{
              display: 'block', width: '100%', textAlign: 'left', fontFamily: T.ui, fontSize: 15, fontWeight: 600,
              color: T.ink, background: 'transparent', border: 'none', borderBottom: `1px solid ${T.lineSoft}`,
              cursor: 'pointer', padding: '14px 0',
            }}>{c.label}</button>
          ))}
          <a href="https://portaltaxi.pl" style={{
            display: 'block', width: '100%', textAlign: 'left', fontFamily: T.ui, fontSize: 15, fontWeight: 700,
            color: T.goldText, textDecoration: 'none', padding: '14px 0',
          }}>portaltaxi.pl dla kierowców →</a>
        </div>
      )}
    </header>
  );
};
window.ProHeader = ProHeader;

// ===== AI Assistant modal =====
const AIAssistant = ({ open, onClose }) => {
  const [messages, setMessages] = pUseState([]);
  const [input, setInput] = pUseState('');
  const [busy, setBusy] = pUseState(false);
  const scrollRef = pUseRef(null);

  pUseEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, busy]);

  pUseEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const ask = async (q) => {
    const question = (q || input).trim();
    if (!question || busy) return;
    setInput('');
    setMessages(m => [...m, { role: 'user', text: question }]);
    setBusy(true);

    const system = `Jesteś asystentem AI portalu branżowego pro.portaltaxi.pl — serwisu dla profesjonalistów rynku taxi w Polsce (właścicieli flot, operatorów, decydentów, dziennikarzy). Odpowiadasz rzeczowo, profesjonalnie, po polsku, zwięźle (2-4 akapity). Skupiasz się na rynku, regulacjach (lex Uber 2.0, dyrektywa UE 2024/2831 o pracy platformowej z terminem wdrożenia 2.12.2026), platformach (Uber, Bolt, FreeNow przejęty przez Lyft za 175 mln EUR), ekonomii flot (realny koszt ~0,72 zł/km, prowizje realnie 28-31% z VAT), licencjonowaniu (licencja vs wypis, pułapka obszarowa) i trendach. Nie udzielasz porad dla kierowców-amatorów — mówisz językiem biznesowym B2B. Jeśli nie znasz konkretnej liczby, zaznacz to.`;

    try {
      if (window.claude && typeof window.claude.complete === 'function') {
        const reply = await window.claude.complete({
          model: 'claude-sonnet-4-20250514',
          system,
          messages: [{ role: 'user', content: question }],
          max_tokens: 700,
        });
        const text = typeof reply === 'string' ? reply : (reply && reply.text ? reply.text : '');
        setMessages(m => [...m, { role: 'ai', text: text || 'Brak odpowiedzi.' }]);
      } else {
        setMessages(m => [...m, { role: 'ai', text: 'Asystent AI działa po wdrożeniu na serwerze z podłączonym modelem. W wersji demo zadaj pytanie — w produkcji otrzymasz pełną analityczną odpowiedź dotyczącą rynku, regulacji i platform.' }]);
      }
    } catch (err) {
      setMessages(m => [...m, { role: 'ai', text: 'Nie udało się połączyć z modelem. Spróbuj ponownie za chwilę.' }]);
    }
    setBusy(false);
  };

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(21,20,15,0.55)',
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '7vh 16px 16px',
      backdropFilter: 'blur(2px)',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', maxWidth: 720, background: T.paper, borderRadius: 4, overflow: 'hidden',
        boxShadow: '0 24px 80px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', maxHeight: '82vh',
      }}>
        {/* Header */}
        <div style={{ background: T.ink, padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'inline-flex', width: 30, height: 30, borderRadius: '50%', background: T.yellow, alignItems: 'center', justifyContent: 'center' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill={T.ink}><path d="M12 2l2.4 6.3L21 9l-5 4.2L17.6 21 12 17.3 6.4 21 8 13.2 3 9l6.6-.7z"/></svg>
            </span>
            <div>
              <div style={{ fontFamily: T.ui, fontWeight: 700, fontSize: 15, color: '#fff' }}>Asystent AI</div>
              <div style={{ fontFamily: T.ui, fontSize: 11.5, color: '#9a9384' }}>rynek · regulacje · platformy · trendy</div>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#9a9384', padding: 6 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Body */}
        <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '22px', background: T.paper2 }}>
          {messages.length === 0 && (
            <div>
              <p style={{ fontFamily: T.serif, fontSize: 16, lineHeight: 1.55, color: T.ink2, margin: '0 0 18px' }}>
                Zapytaj asystenta AI o rynek taxi, regulacje, platformy lub trendy branżowe.
                Odpowiada językiem biznesowym, na podstawie wiedzy o polskim i europejskim rynku przewozów.
              </p>
              <div style={{ display: 'grid', gap: 8 }}>
                {window.PRO.aiSuggestions.map((s, i) => (
                  <button key={i} onClick={() => ask(s)} style={{
                    textAlign: 'left', fontFamily: T.ui, fontSize: 13.5, color: T.ink,
                    background: T.paper, border: `1px solid ${T.line}`, borderRadius: 2,
                    padding: '12px 14px', cursor: 'pointer',
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = T.yellow}
                    onMouseLeave={e => e.currentTarget.style.borderColor = T.line}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} style={{ marginBottom: 16, display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '85%', fontFamily: m.role === 'user' ? T.ui : T.serif,
                fontSize: m.role === 'user' ? 14 : 15, lineHeight: 1.55,
                color: m.role === 'user' ? '#fff' : T.ink,
                background: m.role === 'user' ? T.ink : T.paper,
                border: m.role === 'user' ? 'none' : `1px solid ${T.line}`,
                padding: '12px 16px', borderRadius: 4, whiteSpace: 'pre-wrap',
              }}>
                {m.text}
              </div>
            </div>
          ))}
          {busy && (
            <div style={{ fontFamily: T.ui, fontSize: 13, color: T.inkSoft, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="pro-dot" /> Analizuję…
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={e => { e.preventDefault(); ask(); }} style={{ display: 'flex', gap: 8, padding: 16, borderTop: `1px solid ${T.line}`, background: T.paper }}>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Zadaj pytanie o rynek taxi…" autoFocus style={{
            flex: 1, fontFamily: T.ui, fontSize: 14, padding: '12px 14px', border: `1px solid ${T.line}`,
            borderRadius: 2, outline: 'none', color: T.ink,
          }} />
          <button type="submit" disabled={busy} style={{
            fontFamily: T.ui, fontWeight: 700, fontSize: 13, color: T.ink, background: T.yellow,
            border: 'none', borderRadius: 2, padding: '0 20px', cursor: busy ? 'default' : 'pointer', opacity: busy ? 0.6 : 1,
          }}>Wyślij</button>
        </form>
      </div>
    </div>
  );
};
window.AIAssistant = AIAssistant;

// ===== Newsletter popup =====
// ===== Zapis na newsletter -> Supabase (tylko INSERT; anon key jest publiczny z zalozenia,
// dostep ograniczony regula RLS do samego dodawania wierszy) =====
const PRO_SB_URL = 'https://mysvdwfdthhbppdnicuz.supabase.co';
const PRO_SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15c3Zkd2ZkdGhoYnBwZG5pY3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5ODEzNjAsImV4cCI6MjA5ODU1NzM2MH0.2R0WFqje8kFqKTqdNuQhT2T9mHo_5eZmEqWqzdiSDrc';
window.PRO_subscribe = async function (email, source) {
  const res = await fetch(PRO_SB_URL + '/rest/v1/newsletter_subscribers', {
    method: 'POST',
    headers: {
      'apikey': PRO_SB_KEY,
      'Authorization': 'Bearer ' + PRO_SB_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify({ email: String(email).trim().toLowerCase(), zrodlo: source || 'pro.portaltaxi.pl' }),
  });
  // 201 = zapisano; 409 = juz zapisany (unikat email) -> tez traktujemy jako sukces
  if (res.status === 201 || res.status === 204 || res.status === 409) return true;
  throw new Error('HTTP ' + res.status);
};

const NewsletterPopup = ({ open, onClose }) => {
  const [email, setEmail] = pUseState('');
  const [status, setStatus] = pUseState('idle');
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 180, background: 'rgba(21,20,15,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, backdropFilter: 'blur(2px)',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', maxWidth: 460, background: T.paper, borderRadius: 4, overflow: 'hidden',
        boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
      }}>
        <div style={{ height: 6, background: T.yellow }} />
        <div style={{ padding: '32px 32px 28px', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'transparent', border: 'none', cursor: 'pointer', color: T.inkSoft, padding: 4 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
          <div style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: '50%', background: T.paper3, alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.ink} strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
          </div>
          <h3 style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 24, color: T.ink, margin: '0 0 10px', letterSpacing: '-0.02em' }}>
            {window.PRO.newsletter.heading}
          </h3>
          <p style={{ fontFamily: T.serif, fontSize: 15, lineHeight: 1.5, color: T.ink2, margin: '0 0 22px' }}>
            {window.PRO.newsletter.text}
          </p>
          {status === 'ok' ? (
            <div style={{ fontFamily: T.ui, fontSize: 14, color: T.ok, fontWeight: 600, padding: '14px 0' }}>
              ✓ Dziękujemy! Zapis potwierdzony.
            </div>
          ) : (
            <form onSubmit={async e => {
              e.preventDefault();
              if (!/\S+@\S+\.\S+/.test(email)) { setStatus('err'); return; }
              setStatus('sending');
              try { await window.PRO_subscribe(email, 'pro:popup'); setStatus('ok'); }
              catch (err) { setStatus('neterr'); }
            }}>
              <input type="email" value={email} onChange={e => { setEmail(e.target.value); setStatus('idle'); }} placeholder="Twój adres e-mail" style={{
                width: '100%', fontFamily: T.ui, fontSize: 15, padding: '13px 14px', border: `1px solid ${status === 'err' ? T.accentRed : T.line}`,
                borderRadius: 2, outline: 'none', marginBottom: 10, boxSizing: 'border-box', color: T.ink,
              }} />
              {status === 'err' && <div style={{ fontFamily: T.ui, fontSize: 12, color: T.accentRed, marginBottom: 10 }}>Podaj poprawny adres e-mail.</div>}
              {status === 'neterr' && <div style={{ fontFamily: T.ui, fontSize: 12, color: T.accentRed, marginBottom: 10 }}>Nie udało się zapisać — spróbuj ponownie za chwilę.</div>}
              <button type="submit" disabled={status === 'sending'} style={{
                width: '100%', fontFamily: T.ui, fontWeight: 700, fontSize: 14, color: T.ink, background: T.yellow,
                border: 'none', borderRadius: 2, padding: '14px', cursor: status === 'sending' ? 'default' : 'pointer', marginBottom: 8, opacity: status === 'sending' ? 0.6 : 1,
              }}>{status === 'sending' ? 'Zapisuję…' : 'Zapisz mnie'}</button>
              <button type="button" onClick={onClose} style={{
                width: '100%', fontFamily: T.ui, fontWeight: 500, fontSize: 13, color: T.inkSoft, background: 'transparent',
                border: 'none', cursor: 'pointer', padding: '6px',
              }}>Nie teraz</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
window.NewsletterPopup = NewsletterPopup;

// ===== Footer (4 kolumny, jasny — wg makiety) =====
const footColHead = { fontFamily: T.mono, fontWeight: 700, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.inkFaint, marginBottom: 14 };
const footLink = { display: 'block', fontFamily: T.ui, fontSize: 14, color: T.ink2, background: 'transparent', border: 'none', cursor: 'pointer', padding: '5px 0', textAlign: 'left', textDecoration: 'none' };
const ProFooter = ({ onNav }) => (
  <footer style={{ background: T.sunk, color: T.ink, marginTop: 64, borderTop: `1px solid ${T.line}` }}>
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: '40px 24px 28px' }}>
      <div className="pro-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32, paddingBottom: 32, borderBottom: `1px solid ${T.line}` }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 14 }}>
            <span style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 22, color: T.ink, background: T.yellow, padding: '0 6px', borderRadius: 4, marginRight: 1 }}>PRO</span>
            <span style={{ fontFamily: T.ui, fontWeight: 800, fontSize: 22, color: T.ink, letterSpacing: '-0.03em' }}>.portaltaxi.pl</span>
          </div>
          <p style={{ fontFamily: T.ui, fontSize: 14, lineHeight: 1.55, color: T.inkSoft, maxWidth: 300, margin: 0 }}>
            Branżowy serwis rynku taxi. Część ekosystemu taxiportal.pl.
          </p>
        </div>
        <div>
          <div style={footColHead}>Serwis</div>
          {[['rynek-polski','Rynek PL'],['regulacje-ue','Regulacje'],['newsy-platform','Platformy'],['analizy','Analizy']].map(([id,l]) => (
            <button key={id} onClick={() => onNav({ type: 'category', id })} style={footLink}>{l}</button>
          ))}
        </div>
        <div>
          <div style={footColHead}>Dla firm</div>
          <button onClick={() => onNav({ type: 'page', id: 'reklama' })} style={footLink}>Oferta reklamowa</button>
          <button onClick={() => onNav({ type: 'page', id: 'reklama' })} style={footLink}>Patronat raportu</button>
          <button onClick={() => onNav({ type: 'page', id: 'kontakt' })} style={footLink}>Kontakt redakcji</button>
          <a href="https://www.linkedin.com/in/grzegorz-piskalski/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" style={{ ...footLink, display: 'inline-flex', alignItems: 'center', gap: 8, color: '#0A66C2' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            LinkedIn
          </a>
        </div>
        <div>
          <div style={footColHead}>Newsletter</div>
          <button onClick={() => onNav({ type: 'newsletter' })} style={footLink}>Zapisz się</button>
          <a href="/polityka-prywatnosci.html" style={footLink}>Polityka prywatności</a>
          <a href="/polityka-cookies.html" style={footLink}>Polityka cookies</a>
        </div>
      </div>
      <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: '0.06em', color: T.inkFaint }}>© 2026 PRO.PORTALTAXI.PL</span>
        <a href="https://portaltaxi.pl" style={{ fontFamily: T.mono, fontSize: 10.5, letterSpacing: '0.06em', color: T.goldText, textDecoration: 'none' }}>SERWIS DLA KIEROWCÓW: PORTALTAXI.PL →</a>
      </div>
    </div>
  </footer>
);
window.ProFooter = ProFooter;
