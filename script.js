// FAQ アコーディオン
document.querySelectorAll('.faq-question').forEach(function(question) {
  question.addEventListener('click', function() {
    var item = this.parentElement;
    var isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(function(el) {
      el.classList.remove('open');
    });

    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
