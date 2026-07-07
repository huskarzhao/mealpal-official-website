/* ============================================
   饭搭子科技 - 官方网站脚本
   极简交互 · 无框架依赖 · 原生JS · 中英双语
   ============================================ */

/* --- i18n Translation Data --- */
var I18N = {
    zh: {
        /* Page */
        'page.title': '饭搭子科技 | SecBox · 不云记账 | iOS极简隐私工具',

        /* Nav */
        'nav.about':    '关于我们',
        'nav.apps':     '旗下产品',
        'nav.services': '服务能力',
        'nav.contact':  '联系我们',

        /* Hero */
        'hero.title':       '把复杂留给代码<br><span class="hero-title-light">把轻松还给用户</span>',
        'hero.subtitle':    '北京饭搭子网络科技有限公司，专注 iOS 平台极简工具类 App 研发。<br>所有产品<strong>本地离线存储、不收集用户数据</strong>，用买断制交付真正的安心。',
        'hero.btn_apps':    '查看产品',
        'hero.btn_about':   '了解我们',

        /* About */
        'about.title':      '关于我们',
        'about.desc':       '一家用「极简」定义产品的独立开发公司',
        'about.card1.title':'品牌内核',
        'about.card1.desc': '源于互联网从业者高压工作环境，以「同事结伴吃饭、轻松共处」为温暖原点。我们相信好工具不该制造焦虑 —— 它应该像一顿舒心的午餐，简单、直接、恰到好处。',
        'about.card2.title':'产品哲学',
        'about.card2.desc': '所有产品遵循三大原则：<strong>纯本地离线</strong>存储，数据永不离开你的设备；<strong>一次性买断</strong>付费，没有订阅焦虑；<strong>零数据收集</strong>，隐私不是卖点而是底线。',
        'about.card3.title':'开发理念',
        'about.card3.desc': '单人全栈独立开发，不依赖外部团队。从产品设计、iOS 原生开发、ASO 优化到全球发布全链路覆盖。低沟通成本、高交付质量、持续迭代，用最少资源做最扎实的产品。',

        /* Stats */
        'stats.1.label': '离线本地存储',
        'stats.2.label': '服务器运维成本',
        'stats.3.number': '全球',
        'stats.3.label': 'App Store 发布',
        'stats.4.number': '买断制',
        'stats.4.label': '终身购买，无订阅',

        /* Apps */
        'apps.title':          '旗下产品',
        'apps.desc':           '每一款都秉承极简、离线、安全的核心理念',
        'apps.secbox.subname': '密码保险箱',
        'apps.secbox.desc':    '零网络、零依赖的离线密码保险箱。AES-256-GCM 军事级加密，Face ID / Touch ID 生物识别解锁。内置密码生成器、分类管理、加密备份恢复。密码永不离开你的设备。',
        'apps.secbox.tag1':    'AES-256-GCM',
        'apps.secbox.tag2':    '离线加密',
        'apps.secbox.tag3':    'Face ID',
        'apps.secbox.tag4':    '密码生成器',
        'apps.secbox.tag5':    '6语言',
        'apps.secbox.link':    'App Store 下载 →',
        'apps.ledger.subname': 'Offline Ledger',
        'apps.ledger.desc':    '极简离线记账工具。所有数据存储本地，无需注册、不上传任何信息。多账户管理、分类统计、报表导出，一次购买终身使用，真正属于你自己的账本。',
        'apps.ledger.tag1':    '离线记账',
        'apps.ledger.tag2':    '本地存储',
        'apps.ledger.tag3':    '买断制',
        'apps.ledger.tag4':    '无广告',
        'apps.ledger.tag5':    '多账户',
        'apps.ledger.link':    'App Store 下载 →',

        /* Services */
        'services.title':      '服务能力',
        'services.desc':       '全链路 iOS 独立开发，从零到全球发布',
        'services.1.title':    'iOS 原生开发',
        'services.1.desc':     'Swift / SwiftUI / UIKit 全栈能力，支持 iOS 16+ 及最新系统特性适配。从交互原型到 App Store 上架，一站式交付。',
        'services.2.title':    '产品设计',
        'services.2.desc':     '极简交互理念，黑白视觉风格。减少用户认知负担，让每个功能在 3 秒内被理解。不做功能堆砌，只做恰到好处。',
        'services.3.title':    'ASO 优化',
        'services.3.desc':     '关键词覆盖、标题/副标题优化、商店页面本地化（中/英）。自然流量增长策略，零付费投放，纯内容驱动。',
        'services.4.title':    'IAP 变现设计',
        'services.4.desc':     '买断制 + 轻度订阅混合策略设计。合理定价、SKU 配置、审核合规，确保稳定通过 App Store 审核。',
        'services.5.title':    '多语言本地化',
        'services.5.desc':     'App 内文本 + 商店页面双线本地化。覆盖中英日韩等核心市场，按语义而非字面翻译，确保各语言用户理解一致。',
        'services.6.title':    '长期维护迭代',
        'services.6.desc':     '持续适配新系统、修复问题、迭代功能。单人开发响应快，无繁冗流程，用户反馈直达开发者本人。',

        /* Contact */
        'contact.title':  '联系我们',
        'contact.desc':   '合作咨询、产品反馈，欢迎直接联系',
        'contact.label1': '公司名称',
        'contact.label2': '英文名称',
        'contact.label3': '联系邮箱',
        'contact.label4': 'App Store',
        'contact.link':   '查看全部应用 →',

        /* Footer */
        'footer.tagline':   '把复杂留给代码，把轻松还给用户',
        'footer.copyright': '© 2026 北京饭搭子网络科技有限公司. All rights reserved.'
    },

    en: {
        /* Page */
        'page.title': 'Fandazi Tech | SecBox · Offline Ledger | Minimalist iOS Tools',

        /* Nav */
        'nav.about':    'About',
        'nav.apps':     'Products',
        'nav.services': 'Services',
        'nav.contact':  'Contact',

        /* Hero */
        'hero.title':       'Leave Complexity to Code<br><span class="hero-title-light">Return Simplicity to Users</span>',
        'hero.subtitle':    'Beijing Fandazi Network Technology Co., Ltd. — crafting minimalist iOS tools.<br>All products feature <strong>local offline storage with zero data collection</strong>, delivered through one-time purchases for true peace of mind.',
        'hero.btn_apps':    'View Products',
        'hero.btn_about':   'About Us',

        /* About */
        'about.title':      'About Us',
        'about.desc':       'An independent development company defined by minimalism',
        'about.card1.title':'Brand Core',
        'about.card1.desc': 'Born from the high-pressure world of internet professionals, with "colleagues sharing meals and relaxing together" as our warm origin. We believe good tools shouldn\'t create anxiety — they should be like a comforting lunch: simple, direct, and just right.',
        'about.card2.title':'Product Philosophy',
        'about.card2.desc': 'All products follow three principles: <strong>purely local offline</strong> storage — your data never leaves your device; <strong>one-time purchase</strong> — no subscription anxiety; <strong>zero data collection</strong> — privacy is not a feature, it\'s the baseline.',
        'about.card3.title':'Development Philosophy',
        'about.card3.desc': 'Solo full-stack independent development, no external team dependency. Covering the full chain from product design, native iOS development, ASO optimization to global release. Low communication overhead, high delivery quality, continuous iteration — building solid products with minimal resources.',

        /* Stats */
        'stats.1.label': 'Offline Storage',
        'stats.2.label': 'Server Ops Cost',
        'stats.3.number': 'Global',
        'stats.3.label': 'Global Release',
        'stats.4.number': 'One-Time',
        'stats.4.label': 'Lifetime Purchase',

        /* Apps */
        'apps.title':          'Our Products',
        'apps.desc':           'Each product embodies our core values: minimalism, offline-first, and security',
        'apps.secbox.subname': 'Password Vault',
        'apps.secbox.desc':    'A zero-network, zero-dependency offline password vault. AES-256-GCM military-grade encryption with Face ID / Touch ID biometric unlock. Built-in password generator, category management, encrypted backup & restore. Your passwords never leave your device.',
        'apps.secbox.tag1':    'AES-256-GCM',
        'apps.secbox.tag2':    'Offline Encryption',
        'apps.secbox.tag3':    'Face ID',
        'apps.secbox.tag4':    'Password Generator',
        'apps.secbox.tag5':    '6 Languages',
        'apps.secbox.link':    'Download on App Store →',
        'apps.ledger.subname': 'Offline Ledger',
        'apps.ledger.desc':    'A minimalist offline bookkeeping tool. All data stored locally — no registration required, nothing uploaded. Multi-account management, category statistics, report export. One-time purchase for lifetime use. A ledger that truly belongs to you.',
        'apps.ledger.tag1':    'Offline Ledger',
        'apps.ledger.tag2':    'Local Storage',
        'apps.ledger.tag3':    'One-Time Purchase',
        'apps.ledger.tag4':    'Ad-Free',
        'apps.ledger.tag5':    'Multi-Account',
        'apps.ledger.link':    'Download on App Store →',

        /* Services */
        'services.title':      'Our Services',
        'services.desc':       'Full-stack iOS independent development, from zero to global release',
        'services.1.title':    'iOS Native Development',
        'services.1.desc':     'Full-stack Swift / SwiftUI / UIKit capabilities, supporting iOS 16+ and latest system features. From interaction prototypes to App Store launch — one-stop delivery.',
        'services.2.title':    'Product Design',
        'services.2.desc':     'Minimalist interaction philosophy, black-and-white visual style. Reduce cognitive load — every feature should be understood within 3 seconds. No feature bloat, just the right amount.',
        'services.3.title':    'ASO Optimization',
        'services.3.desc':     'Keyword coverage, title/subtitle optimization, store listing localization (ZH/EN). Organic growth strategy, zero paid advertising, purely content-driven.',
        'services.4.title':    'IAP Monetization Design',
        'services.4.desc':     'One-time purchase + light subscription hybrid strategy. Smart pricing, SKU configuration, compliance review — ensuring smooth App Store approval.',
        'services.5.title':    'Multi-Language Localization',
        'services.5.desc':     'Dual-track localization for in-app text and store listings. Covering core markets including ZH/EN/JA/KO, with semantic rather than literal translation for consistent understanding across languages.',
        'services.6.title':    'Long-Term Maintenance',
        'services.6.desc':     'Continuous adaptation to new OS versions, bug fixes, and feature iteration. Solo developer = fast response, no bureaucracy, user feedback reaches the developer directly.',

        /* Contact */
        'contact.title':  'Contact Us',
        'contact.desc':   'For collaboration inquiries and product feedback, feel free to reach out directly.',
        'contact.label1': 'Company',
        'contact.label2': 'English Name',
        'contact.label3': 'Email',
        'contact.label4': 'App Store',
        'contact.link':   'View All Apps →',

        /* Footer */
        'footer.tagline':   'Leave Complexity to Code, Return Simplicity to Users',
        'footer.copyright': '© 2026 Beijing Fandazi Network Technology Co., Ltd. All rights reserved.'
    }
};

/* Meta description for each language */
var I18N_META = {
    zh: '北京饭搭子网络科技有限公司 - 专注iOS离线隐私工具类App开发。旗下产品：SecBox密码保险箱、不云记账。AES-256-GCM加密，本地存储，零数据收集。',
    en: 'Beijing Fandazi Network Technology Co., Ltd. — Crafting offline privacy-first iOS tools. Products: SecBox Password Vault, Offline Ledger. AES-256-GCM encryption, local storage, zero data collection.'
};


document.addEventListener('DOMContentLoaded', function () {

    /* ==========================================
       i18n — Language Detection & Switching
       ========================================== */

    var STORAGE_KEY = 'fandazi-lang';

    function getLang() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'zh' || stored === 'en') return stored;

        var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (browserLang.indexOf('zh') === 0) return 'zh';

        return 'zh';
    }

    function setLang(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
    }

    function applyLang(lang) {
        var dict = I18N[lang];

        /* Update <html> lang attribute */
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

        /* Update meta description */
        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', I18N_META[lang]);
        }

        /* Update data-i18n elements (textContent) */
        var textEls = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < textEls.length; i++) {
            var el = textEls[i];
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        }

        /* Update data-i18n-html elements (innerHTML) */
        var htmlEls = document.querySelectorAll('[data-i18n-html]');
        for (var j = 0; j < htmlEls.length; j++) {
            var hel = htmlEls[j];
            var hkey = hel.getAttribute('data-i18n-html');
            if (dict[hkey] !== undefined) {
                hel.innerHTML = dict[hkey];
            }
        }

        /* Update data-i18n-placeholder elements */
        var phEls = document.querySelectorAll('[data-i18n-placeholder]');
        for (var k = 0; k < phEls.length; k++) {
            var pel = phEls[k];
            var pkey = pel.getAttribute('data-i18n-placeholder');
            if (dict[pkey] !== undefined) {
                pel.setAttribute('placeholder', dict[pkey]);
            }
        }

        /* Update lang switch button */
        var btn = document.getElementById('langSwitch');
        if (btn) {
            if (lang === 'zh') {
                btn.textContent = 'EN';
                btn.setAttribute('title', 'Switch to English');
            } else {
                btn.textContent = '中';
                btn.setAttribute('title', '切换到中文');
            }
        }

        setLang(lang);
    }

    /* --- Init i18n --- */
    var currentLang = getLang();
    applyLang(currentLang);

    var langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', function () {
            currentLang = currentLang === 'zh' ? 'en' : 'zh';
            applyLang(currentLang);
        });
    }


    /* ==========================================
       Mobile Nav Toggle
       ========================================== */

    var toggle = document.getElementById('navToggle');
    var navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            toggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                toggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }


    /* ==========================================
       Nav Shadow on Scroll
       ========================================== */

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


    /* ==========================================
       Smooth Reveal on Scroll
       ========================================== */

    var observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.about-card, .app-card, .service-item').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
