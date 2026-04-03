//-- SKILL BAR ANIMATION
var skillFills = document.querySelectorAll('.skill-fill');

var skillObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var el = entry.target;
      el.style.width = el.dataset.width + '%';
      skillObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });

skillFills.forEach(function (fill) {
  skillObserver.observe(fill);
});

// ACTIVE NAV LINK HIGHLIGHT ON SCROLL
var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-links a:not(.dicoding-link)');

window.addEventListener('scroll', function () {
  var current = '';

  sections.forEach(function (sec) {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.getAttribute('id');
    }
  });

  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    } else {
      link.style.color = '';
    }
  });
});

// HAMBURGER MENU TOGGLE MOBILE
var hamburger   = document.getElementById('nav-hamburger');
var navMenuList = document.getElementById('nav-links');
var navItems    = document.querySelectorAll('.nav-item');

if (hamburger && navMenuList) {
  hamburger.addEventListener('click', function () {
    var isOpen = navMenuList.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

navItems.forEach(function (item) {
  item.addEventListener('click', function () {
    navMenuList.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});
 
document.addEventListener('click', function (e) {
  if (
    navMenuList.classList.contains('is-open') &&
    !navMenuList.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    navMenuList.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});
 

// CONTACT FORM HANDLER
var submitBtn = document.getElementById('btn-submit');

if (submitBtn) {
  submitBtn.addEventListener('click', function () {
    var name    = document.getElementById('name').value.trim();
    var email   = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Mohon lengkapi semua field terlebih dahulu.');
      return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Format email tidak valid. Silakan periksa kembali.');
      return;
    }

    alert('Terima kasih, ' + name + '! Pesan Anda telah diterima. Saya akan segera menghubungi Anda.');

    document.getElementById('name').value    = '';
    document.getElementById('email').value   = '';
    document.getElementById('message').value = '';
  });
}

// HEADER SHADOW ON SCROLL
var header = document.querySelector('header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.4)';
  } else {
    header.style.boxShadow = 'none';
  }
});

var expImages  = document.querySelectorAll('.exp-thumb img');
var fallback = ['Hmtiudayana', 'Karier.mu', 'Unud'];

expImages.forEach(function (img, index) {
  img.addEventListener('error', function () {
    var thumb = img.parentElement;
    img.remove();
    thumb.style.fontSize   = '4rem';
    thumb.style.background = 'linear-gradient(135deg, #0d1a1a, #050a0a)';
    thumb.textContent      = fallback[index] || 'Folder';
  });
});