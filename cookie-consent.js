/* ============================================================
   Portal Taxi PRO — baner zgody cookie + PostHog (RODO/EU)
   Samodzielny plik, bez zależności. Wystarczy dołączyć w index.html:
   <script src="/cookie-consent.js" defer></script>

   1) Wpisz swój Project API key PostHog poniżej (POSTHOG_KEY).
   2) Region EU jest już ustawiony (POSTHOG_HOST).
   Klucz phc_... jest publiczny — można go trzymać w kodzie.
   ============================================================ */
(function () {
  "use strict";

  // --- KONFIGURACJA ---------------------------------------------------------
  var POSTHOG_KEY = "phc_wzKM7XQU74GhCxAZWGn7dDz5mhpH5BJGMAqHpDJpwCph";
  var POSTHOG_HOST = "https://eu.i.posthog.com"; // region EU (RODO)
  var CONSENT_KEY = "portaltaxi_cookie_consent_v1";
  // -------------------------------------------------------------------------

  var phLoaded = false;

  function readConsent() {
    try {
      var raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      var p = JSON.parse(raw);
      return typeof p.statistics === "boolean" ? p : null;
    } catch (e) {
      return null;
    }
  }

  function writeConsent(statistics) {
    var state = { necessary: true, statistics: statistics, ts: Date.now() };
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
    } catch (e) {}
    applyConsent(state);
  }

  // Oficjalny loader PostHog (kolejkuje wywołania do czasu załadowania)
  function loadPosthog() {
    if (phLoaded) return;
    if (!POSTHOG_KEY || POSTHOG_KEY.indexOf("phc_") !== 0) return; // brak klucza = nie ładuj
    phLoaded = true;
    !(function (t, e) {
      var o, n, p, r;
      e.__SV ||
        ((window.posthog = e),
        (e._i = []),
        (e.init = function (i, s, a) {
          function g(t, e) {
            var o = e.split(".");
            2 == o.length && ((t = t[o[0]]), (e = o[1]));
            t[e] = function () {
              t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            };
          }
          ((p = t.createElement("script")).type = "text/javascript"),
            (p.async = !0),
            (p.src = s.api_host + "/static/array.js"),
            (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
          var u = e;
          for (
            void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
              u.people = u.people || [],
              u.toString = function (t) {
                var e = "posthog";
                return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e;
              },
              u.people.toString = function () {
                return u.toString(1) + ".people (stub)";
              },
              o =
                "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep setPersonProperties".split(
                  " "
                ),
              n = 0;
            n < o.length;
            n++
          )
            g(u, o[n]);
          e._i.push([i, s, a]);
        }),
        (e.__SV = 1));
    })(document, window.posthog || []);

    window.posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: false,
      capture_pageleave: false,
      disable_session_recording: true,
      autocapture: false,
      opt_out_capturing_by_default: true,
      persistence: "localStorage", // tryb bez cookie — identyfikator tylko w localStorage
      loaded: function (ph) {
        var c = readConsent();
        if (c && c.statistics) {
          ph.opt_in_capturing();
          try {
            ph.register({ jezyk: (navigator.language || "pl").slice(0, 2) });
          } catch (e) {}
          ph.capture("$pageview");
        }
      },
    });
  }

  function applyConsent(state) {
    if (state.statistics) {
      loadPosthog();
      if (window.posthog && phLoaded) {
        try {
          window.posthog.opt_in_capturing();
          window.posthog.register({
            jezyk: (navigator.language || "pl").slice(0, 2),
          });
          window.posthog.capture("$pageview");
        } catch (e) {}
      }
    } else if (window.posthog) {
      try {
        window.posthog.opt_out_capturing();
      } catch (e) {}
    }
  }

  // --- UI -------------------------------------------------------------------
  function injectStyles() {
    if (document.getElementById("ptc-styles")) return;
    var css =
      "#ptc-banner{position:fixed;left:0;right:0;bottom:0;z-index:99999;background:rgba(20,20,20,.97);color:#eee;" +
      "border-top:1px solid #333;padding:16px;font:14px/1.5 system-ui,Segoe UI,Roboto,sans-serif;backdrop-filter:blur(6px)}" +
      "#ptc-banner .ptc-wrap{max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:12px}" +
      "#ptc-banner a{color:#ffd200;text-decoration:underline}" +
      "#ptc-banner .ptc-opts{background:rgba(255,255,255,.05);border:1px solid #333;border-radius:4px;padding:10px;display:none;gap:8px;flex-direction:column}" +
      "#ptc-banner .ptc-opts.show{display:flex}" +
      "#ptc-banner label{display:flex;gap:8px;align-items:flex-start}" +
      "#ptc-banner .ptc-btns{display:flex;flex-wrap:wrap;gap:8px}" +
      "#ptc-banner button{cursor:pointer;border-radius:4px;padding:9px 16px;font-size:12px;font-weight:700;" +
      "text-transform:uppercase;letter-spacing:.05em;border:1px solid #444;background:transparent;color:#eee}" +
      "#ptc-banner button.ptc-primary{background:#ffd200;color:#111;border-color:#ffd200}" +
      "#ptc-banner .ptc-link{background:none;border:none;text-decoration:underline;color:#ffd200;padding:9px 4px}";
    var s = document.createElement("style");
    s.id = "ptc-styles";
    s.textContent = css;
    document.head.appendChild(s);
  }

  function buildBanner(showSettings) {
    injectStyles();
    var existing = document.getElementById("ptc-banner");
    if (existing) existing.remove();

    var current = readConsent();
    var statsChecked = current ? current.statistics : false;

    var el = document.createElement("div");
    el.id = "ptc-banner";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", "Ustawienia plików cookie");
    el.innerHTML =
      '<div class="ptc-wrap">' +
      "<p>Używamy plików cookie. Niezbędne są konieczne do działania serwisu. " +
      "Statystyczne (PostHog) pomagają nam rozwijać serwis — włączamy je tylko za Twoją zgodą. " +
      "Nie sprzedajemy ani nie udostępniamy Twoich danych reklamodawcom. " +
      '<a href="/polityka-cookies.html">Więcej informacji</a>.</p>' +
      '<div class="ptc-opts' +
      (showSettings ? " show" : "") +
      '" id="ptc-opts">' +
      '<label><input type="checkbox" checked disabled> <span><b>Niezbędne</b> — zawsze aktywne. Wymagane do działania serwisu.</span></label>' +
      '<label><input type="checkbox" id="ptc-stats"' +
      (statsChecked ? " checked" : "") +
      "> <span><b>Statystyka</b> — PostHog (region EU), anonimowe metryki użycia.</span></label>" +
      "</div>" +
      '<div class="ptc-btns">' +
      '<button class="ptc-primary" id="ptc-accept">Akceptuję wszystkie</button>' +
      '<button id="ptc-reject">Tylko niezbędne</button>' +
      '<button class="ptc-link" id="ptc-toggle">' +
      (showSettings ? "Zapisz wybór" : "Ustawienia") +
      "</button>" +
      "</div>" +
      "</div>";
    document.body.appendChild(el);

    document.getElementById("ptc-accept").onclick = function () {
      writeConsent(true);
      el.remove();
    };
    document.getElementById("ptc-reject").onclick = function () {
      writeConsent(false);
      el.remove();
    };
    document.getElementById("ptc-toggle").onclick = function () {
      var opts = document.getElementById("ptc-opts");
      if (!opts.classList.contains("show")) {
        opts.classList.add("show");
        this.textContent = "Zapisz wybór";
      } else {
        writeConsent(document.getElementById("ptc-stats").checked);
        el.remove();
      }
    };
  }

  // Publiczna funkcja do ponownego otwarcia (link „Ustawienia cookie" w stopce):
  // <a href="#" onclick="portalTaxiCookieSettings();return false">Ustawienia cookie</a>
  window.portalTaxiCookieSettings = function () {
    buildBanner(true);
  };

  function start() {
    var consent = readConsent();
    if (consent) {
      applyConsent(consent); // zgoda już zapisana — zastosuj, nie pokazuj banera
    } else {
      buildBanner(false); // pierwsza wizyta — pokaż baner
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
