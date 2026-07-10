document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }

  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) { o.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // pack selector on product page
  var packs = document.querySelectorAll('.pack[data-amount]');
  var mainCta = document.getElementById('mainCta');
  if (packs.length) {
    packs.forEach(function (pack) {
      pack.addEventListener('click', function () {
        packs.forEach(function (p) { p.classList.remove('selected'); });
        pack.classList.add('selected');
        var amount = pack.getAttribute('data-amount');
        if (mainCta) mainCta.setAttribute('href', 'checkout.html?amount=' + encodeURIComponent(amount));
      });
    });
  }

  // gallery thumbnail switcher
  var galleryImg = document.getElementById('galleryImg');
  var thumbs = document.querySelectorAll('.thumbs div');
  if (galleryImg && thumbs.length) {
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        var src = thumb.getAttribute('data-src');
        if (src) {
          galleryImg.setAttribute('src', src);
        }
      });
    });
  }
});
