/* =============================================
   HP/LP制作サービス LP スクリプト
   =============================================
   外部ライブラリ不使用。すべて素のJavaScript。
   reduced-motion 設定の利用者には派手な演出を発火させない。
   ============================================= */

(function () {
  'use strict';

  var prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------
     1. FAQ アコーディオン
     --------------------------------------------- */
  document.querySelectorAll('.faq-question').forEach(function (question) {
    question.addEventListener('click', function () {
      var item = this.parentElement;
      var isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('open');
      });

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  /* ---------------------------------------------
     2. スムーズスクロール
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
     3. スクロールリビール（IntersectionObserver）
     --------------------------------------------- */
  if ('IntersectionObserver' in window) {
    // グループごとに段階遅延を設定
    var staggerGroups = [
      { sel: '.target-list li', step: 70, max: 600 },
      { sel: '.problem-points li', step: 80, max: 400 },
      { sel: '.contents-grid .content-item', step: 55, max: 500 },
      { sel: '.benefit-list .benefit-item', step: 90, max: 400 },
      { sel: '.ba-pair', step: 120, max: 400 },
      { sel: '.prepare-list li', step: 55, max: 400 },
      { sel: '.features-list li', step: 90, max: 700 },
      { sel: '.about-points li', step: 70, max: 500 },
      { sel: '.note-topics li', step: 70, max: 500 },
      { sel: '.flow-item', step: 110, max: 700 },
      { sel: '.plans-grid > .plan-card', step: 130, max: 500 },
      { sel: '.delivery-grid > .delivery-card', step: 130, max: 400 }
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
        el.style.transitionDelay = 300 + i * 150 + 'ms';
      });
    var heroLabel = document.querySelector('.hero-label');
    if (heroLabel) heroLabel.style.transitionDelay = '100ms';
    var heroSub = document.querySelector('.hero-sub');
    if (heroSub) heroSub.style.transitionDelay = '900ms';
    var heroMeta = document.querySelector('.hero-meta');
    if (heroMeta) heroMeta.style.transitionDelay = '1000ms';
    var heroBtns = document.querySelector('.hero-buttons');
    if (heroBtns) heroBtns.style.transitionDelay = '1150ms';

    // 対象セレクタを .reveal でマーク
    var revealSelectors = [
      '.hero-label',
      '.hero-title .reveal-line',
      '.hero-sub',
      '.hero-meta',
      '.hero-buttons',
      '.section-label',
      '.section-title',
      '.section-desc',
      '.divider',
      '.problem-lead',
      '.problem-points li',
      '.problem-emphasis',
      '.problem-body',
      '.target-list li',
      '.benefit-list .benefit-item',
      '.contents-grid .content-item',
      '.ba-pair',
      '.monitor-reason',
      '.prepare-list li',
      '.prepare-note',
      '.about-points li',
      '.flow-item',
      '.plan-card',
      '.faq-item',
      '.sample-card',
      '.about-box',
      '.target-note',
      '.section-cta',
      '.cta-disclaimer',
      '.cta-buttons'
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
     4. ヘッダー：スクロール状態
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
     5. スティッキーCTA：ヒーロー通過後〜CTAセクション直前まで表示
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

  /* ---------------------------------------------
     6. 数字のカウントアップ（料金・統計）
     --------------------------------------------- */
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var countEls = document.querySelectorAll(
      '.plan-price, .transfer-price, .stat-num'
    );

    function animateCount(el) {
      var node = el.firstChild;
      if (!node || node.nodeType !== 3) return; // TEXT_NODE
      var text = node.nodeValue;
      var m = text.match(/^(\D*)(\d[\d,]*)(.*)$/);
      if (!m) return;
      var prefix = m[1];
      var rest = m[3] || '';
      var target = parseInt(m[2].replace(/,/g, ''), 10);
      if (isNaN(target)) return;
      var duration = 1100;
      var start = performance.now();
      function step(now) {
        var t = Math.min(1, (now - start) / duration);
        var eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        var val = Math.round(target * eased);
        node.nodeValue = prefix + val.toLocaleString('en-US') + rest;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    var countObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    countEls.forEach(function (el) {
      countObs.observe(el);
    });
  }

  /* ---------------------------------------------
     7. ヒーローの軽い視差（スクロールでフェード）
     --------------------------------------------- */
  if (!prefersReducedMotion) {
    var heroInner = document.querySelector('.hero-inner');
    if (heroInner) {
      var heroTicking = false;
      function onHeroScroll() {
        if (heroTicking) return;
        heroTicking = true;
        requestAnimationFrame(function () {
          var y = window.scrollY;
          var vh = window.innerHeight;
          if (y < vh) {
            heroInner.style.transform = 'translate3d(0,' + y * 0.18 + 'px,0)';
            heroInner.style.opacity = String(Math.max(0, 1 - y / (vh * 0.85)));
          }
          heroTicking = false;
        });
      }
      window.addEventListener('scroll', onHeroScroll, { passive: true });
    }
  }
})();
