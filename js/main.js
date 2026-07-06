/* ============================================
   饭搭子科技 - 官方网站脚本
   极简交互 · 无框架依赖 · 原生JS
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* --- Mobile Nav Toggle --- */
    var toggle = document.getElementById('navToggle');
    var navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            toggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close nav on link click (mobile)
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                toggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    /* --- Nav Shadow on Scroll --- */
    var nav = document.getElementById('nav');
    if (nav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    /* --- Smooth Reveal on Scroll --- */
    var observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate cards
    document.querySelectorAll('.about-card, .app-card, .service-item').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
