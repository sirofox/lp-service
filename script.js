/* =============================================
   note勇者｜初収益クエスト LP スクリプト
   =============================================
   外部ライブラリ不使用。reduced-motion 設定の利用者には
   派手な演出を発火させない。
   ============================================= */

(function () {
  'use strict';

  /* ---------------------------------------------
     1. スムーズスクロール（# アンカー）
     --------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var hash = this.getAttribute('href');
      if (!hash || hash === '#') return;
      var target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------------------------------------------
     2. スクロールリビール（IntersectionObserver）
     --------------------------------------------- */
  if ('IntersectionObserver' in window) {

    // セレクタごとに段階遅延を設定
    var staggerGroups = [
      { sel: '.bad-list li', step: 80, max: 400 },
      { sel: '.quest-map .quest-node', step: 110, max: 700 },
      { sel: '.equip-grid .equip-card', step: 130, max: 400 },
      { sel: '.guild-benefits li', step: 80, max: 400 }
    ];
    staggerGroups.forEach(function (g) {
      document.querySelectorAll(g.sel).forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i * g.step, g.max) + 'ms';
      });
    });

    // ヒーロー：行ごとに遅延
    document
      .querySelectorAll('.hero-title .reveal-line')
      .forEach(function (el, i) {
        el.style.transitionDelay = 280 + i * 150 + 'ms';
      });
    var heroLabel = document.querySelector('.quest-label');
    if (heroLabel) heroLabel.style.transitionDelay = '100ms';
    var heroSub = document.querySelector('.hero-sub');
    if (heroSub) heroSub.style.transitionDelay = '880ms';
    var heroStatus = document.querySelector('.quest-status');
    if (heroStatus) heroStatus.style.transitionDelay = '1020ms';
    var heroBtns = document.querySelector('.hero-buttons');
    if (heroBtns) heroBtns.style.transitionDelay = '1180ms';

    // リビール対象を .reveal でマーク
    var revealSelectors = [
      '.quest-label',
      '.hero-title .reveal-line',
      '.hero-sub',
      '.quest-status',
      '.hero-buttons',
      '.section-label',
      '.section-title',
      '.section-desc',
      '.lead-text',
      '.bad-list li',
      '.emphasis-text',
      '.body-text',
      '.quest-map .quest-node',
      '.equip-grid .equip-card',
      '.guild-card',
      '.guild-benefits li',
      '.profile-card',
      '.cta-lead',
      '.cta-buttons',
      '.section-cta'
    ];
    var items = document.querySelectorAll(revealSelectors.join(','));
    items.forEach(function (el) {
      el.classList.add('reveal');
    });

    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------------------------------------------
     3. ヘッダー：スクロール状態
     --------------------------------------------- */
  var header = document.querySelector('header');
  if (header) {
    var headerTicking = false;
    function onHeaderScroll() {
      if (headerTicking) return;
      headerTicking = true;
      requestAnimationFrame(function () {
        if (window.scrollY > 80) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        headerTicking = false;
      });
    }
    window.addEventListener('scroll', onHeaderScroll, { passive: true });
  }

  /* ---------------------------------------------
     4. スティッキーCTA：ヒーロー通過後〜最終CTA直前まで表示
     --------------------------------------------- */
  var stickyCta = document.querySelector('.sticky-cta');
  var hero = document.getElementById('hero');
  var ctaSec = document.getElementById('cta');
  if (stickyCta && hero && ctaSec) {
    function updateStickyCta() {
      var heroBottom = hero.getBoundingClientRect().bottom;
      var ctaTop = ctaSec.getBoundingClientRect().top;
      var vh = window.innerHeight;
      if (heroBottom < 80 && ctaTop > vh * 0.55) {
        stickyCta.classList.add('show');
      } else {
        stickyCta.classList.remove('show');
      }
    }
    window.addEventListener('scroll', updateStickyCta, { passive: true });
    window.addEventListener('resize', updateStickyCta);
    updateStickyCta();
  }
})();
