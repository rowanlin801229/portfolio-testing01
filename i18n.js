(function () {
  'use strict';

  var STORAGE_KEY = 'portfolio_lang';
  var SUPPORTED = ['en', 'zh'];
  var translations = null;
  var currentLang = 'en';

  function normalizeLang(value) {
    if (!value) return null;
    var code = String(value).trim().toLowerCase();
    if (code === 'zh' || code === 'zh-tw' || code === 'zh-hant' || code.indexOf('zh') === 0) {
      return 'zh';
    }
    if (code === 'en' || code.indexOf('en') === 0) return 'en';
    return SUPPORTED.indexOf(code) !== -1 ? code : null;
  }

  function getLangFromUrl() {
    try {
      var params = new URLSearchParams(window.location.search);
      return normalizeLang(params.get('lang'));
    } catch (err) {
      return null;
    }
  }

  function getLangFromStorage() {
    try {
      return normalizeLang(localStorage.getItem(STORAGE_KEY));
    } catch (err) {
      return null;
    }
  }

  function getLangFromBrowser() {
    if (!navigator.language && !navigator.languages) return null;
    var langs = [navigator.language].concat(navigator.languages || []);
    for (var i = 0; i < langs.length; i += 1) {
      var match = normalizeLang(langs[i]);
      if (match) return match;
    }
    return null;
  }

  function resolveInitialLanguage() {
    return (
      getLangFromUrl() ||
      getLangFromStorage() ||
      getLangFromBrowser() ||
      'en'
    );
  }

  function getDict(lang) {
    if (!translations) return {};
    return translations[lang] || translations.en || {};
  }

  function t(lang, key) {
    var dict = getDict(lang);
    if (dict[key] != null) return dict[key];
    var fallback = getDict('en');
    return fallback[key] != null ? fallback[key] : key;
  }

  function updateLangButtons(lang) {
    document.querySelectorAll('.nav-lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function syncWorkItemTypes(lang) {
    document.querySelectorAll('[data-i18n-work-type]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-work-type');
      var item = el.closest('.work-item');
      var value = t(lang, key);
      if (item) item.dataset.type = value;
    });
    /* Keep data-name in sync so pin / hover preview never stick to English */
    document.querySelectorAll('.work-item[data-project]').forEach(function (item) {
      var slug = item.getAttribute('data-project');
      if (!slug) return;
      var nameKey = 'work.' + slug + '.name';
      var name = t(lang, nameKey);
      if (name && name !== nameKey) item.dataset.name = name;
    });
  }

  function applyTranslations(lang) {
    var dict = getDict(lang);
    currentLang = lang;

    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';

    var titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      var titleKey = titleEl.getAttribute('data-i18n');
      if (titleKey && dict[titleKey] != null) document.title = dict[titleKey];
    } else if (dict['meta.title'] != null) {
      document.title = dict['meta.title'];
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key || dict[key] == null) return;
      el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (!key || dict[key] == null) return;
      el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (!key || dict[key] == null) return;
      el.setAttribute('aria-label', dict[key]);
    });

    syncWorkItemTypes(lang);
    updateLangButtons(lang);

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* ignore */
    }

    if (typeof window.__refreshMobileIntroStackCache === 'function') {
      window.__refreshMobileIntroStackCache();
    }

    if (typeof window.__onPortfolioLanguageChange === 'function') {
      window.__onPortfolioLanguageChange(lang);
    }

    window.dispatchEvent(
      new CustomEvent('portfolio:languagechange', { detail: { lang: lang } }),
    );
  }

  function switchLanguage(lang) {
    var next = normalizeLang(lang) || 'en';
    if (!translations) return;
    applyTranslations(next);
  }

  function bindLangButtons() {
    document.querySelectorAll('.nav-lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  function init() {
    bindLangButtons();
    var initial = resolveInitialLanguage();
    applyTranslations(initial);
  }

  /* Cache-bust so new work.* keys are not stuck on an old translations.json */
  fetch('translations.json?v=' + Date.now())
    .then(function (res) {
      if (!res.ok) throw new Error('Failed to load translations.json');
      return res.json();
    })
    .then(function (data) {
      translations = data;
      init();
    })
    .catch(function (err) {
      console.error('[i18n]', err);
    });

  window.switchLanguage = switchLanguage;
  window.getPortfolioLanguage = function () {
    return currentLang;
  };
  window.tPortfolio = function (key) {
    return t(currentLang, key);
  };
})();
