// FAQ アコーディオン
document.querySelectorAll('.faq-question').forEach(function(question) {
  question.addEventListener('click', function() {
    var item = this.parentElement;
    var isOpen = item.classList.contains('open');

    // 他を閉じる
    document.querySelectorAll('.faq-item').forEach(function(el) {
      el.classList.remove('open');
    });

    // クリックしたものを開く（すでに開いていれば閉じる）
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

// スムーズスクロール（iOS対応）
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
