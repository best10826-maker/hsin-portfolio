(function () {
  var CATS = window.CATS, ORDER = window.CAT_ORDER, CONTACT = window.CONTACT || {};
  var page = document.body.dataset.page || '';
  var CONTACT_HREF = page === 'home' ? '#inquiry' : 'index.html#inquiry';

  // "meifu:20" 或 "bridal:4" → 指定尺寸的圖片網址
  function url(ref, size) {
    var a = ref.split(':');
    return a[0] === 'meifu' ? window.meifu(+a[1], size) : window.setImg(a[0], +a[1], size);
  }
  function orient(ref) {
    var a = ref.split(':');
    if (a[0] === 'meifu') return 'L';
    return ((window.SETS[a[0]].o || '')[+a[1]]) || 'L';
  }
  function srcset(ref) {
    return url(ref, 'L') + ' 800w, ' + url(ref, 'X2') + ' 1280w';
  }
  function fill(img, ref, sizes) {
    img.addEventListener('load', function () { img.classList.add('loaded'); });
    img.sizes = sizes || '100vw';
    img.srcset = srcset(ref);
    img.src = url(ref, 'XL');
    if (img.complete && img.naturalWidth) img.classList.add('loaded');
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // ---------- 共用頁首與選單 ----------
  var links = ORDER.map(function (k) {
    return '<a href="' + CATS[k].page + '"' + (k === page ? ' class="cur"' : '') + '>' + CATS[k].title + '</a>';
  }).join('');
  var head = document.createElement('header');
  head.className = 'site-head';
  head.innerHTML =
    '<a class="brand" href="index.html">Hsin<small>PHOTOGRAPHY</small></a>' +
    '<nav class="nav">' + links + '</nav>' +
    '<div class="head-r"><a class="nav-cta" href="' + CONTACT_HREF + '">聯絡</a>' +
    '<button class="menu-btn" aria-expanded="false" aria-controls="menu">MENU</button></div>';
  document.body.insertBefore(head, document.body.firstChild);

  var menu = document.createElement('div');
  menu.className = 'menu';
  menu.id = 'menu';
  menu.innerHTML = '<nav><a href="index.html">首頁</a>' + links + '<a href="' + CONTACT_HREF + '">聯絡</a></nav>';
  document.body.appendChild(menu);
  var menuBtn = head.querySelector('.menu-btn');
  function setMenu(open) {
    menu.classList.toggle('on', open);
    head.classList.toggle('menu-open', open);
    menuBtn.textContent = open ? 'CLOSE' : 'MENU';
    menuBtn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  menuBtn.addEventListener('click', function () { setMenu(!menu.classList.contains('on')); });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });

  // ---------- 聯絡資訊 ----------
  function contactList() {
    var rows = [['Email', CONTACT.email, CONTACT.email && 'mailto:' + CONTACT.email],
      ['LINE', CONTACT.line, ''],
      ['Instagram', CONTACT.instagram, CONTACT.instagram && 'https://instagram.com/' + String(CONTACT.instagram).replace(/^@/, '')],
      ['電話', CONTACT.phone, CONTACT.phone && 'tel:' + CONTACT.phone]];
    return '<dl class="contact-list">' + rows.map(function (r) {
      var v = r[1] ? (r[2] ? '<a href="' + esc(r[2]) + '">' + esc(r[1]) + '</a>' : esc(r[1])) : '<span class="tbd">待補</span>';
      return '<dt>' + r[0] + '</dt><dd>' + v + '</dd>';
    }).join('') + '</dl>';
  }
  document.querySelectorAll('[data-contact-list]').forEach(function (el) { el.innerHTML = contactList(); });

  // 首頁以外：頁尾前插入聯絡區
  if (page !== 'home') {
    var c = document.createElement('section');
    c.className = 'contact';
    c.innerHTML =
      '<div class="contact-in"><div class="rv"><span class="label">CONTACT</span>' +
      '<h2 class="h2">聊聊你的拍攝</h2>' +
      '<p>告訴我日期、地點與想拍的內容，我會回覆檔期與方案。</p>' +
      '<a class="btn-line" href="' + CONTACT_HREF + '">聯絡 Hsin</a></div>' +
      '<div class="rv" style="--d:.12s">' + contactList() + '</div></div>';
    var foot = document.querySelector('.site-foot');
    foot.parentNode.insertBefore(c, foot);
  }

  // ---------- 分類頁：自動排出錯位版面 ----------
  // 每個樣式吃 1～2 張；L/P 分別是橫幅、直幅照片的 [桌機欄位, 手機欄位]
  var PATTERNS = [
    [{ L: ['1/9', 'full'], P: ['2/6', '1/5'] }, { L: ['9/13', '3/7'], P: ['9/12', '4/7'], mt: '11vw' }],
    [{ L: ['3/11', 'full'], P: ['5/9', '2/6'] }],
    [{ L: ['2/6', '1/5'], P: ['2/5', '1/4'], mt: '9vw' }, { L: ['7/13', 'full'], P: ['8/12', '3/7'] }],
    [{ L: ['1/7', '1/6'], P: ['2/6', '1/5'] }, { L: ['8/12', '3/7'], P: ['8/11', '4/7'], mt: '8vw' }]
  ];
  function figure(ref, slot, delay) {
    var o = orient(ref), s = slot[o], full = s[1] === 'full';
    var cols = +s[0].split('/')[1] - +s[0].split('/')[0];
    var st = '--c:' + s[0] + ';' + (full ? '' : '--mc:' + s[1] + ';') + (slot.mt ? '--mt:' + slot.mt + ';' : '') + (delay ? '--d:.12s;' : '');
    return '<figure class="ph rv' + (o === 'P' ? ' p' : '') + (full ? ' full-m' : '') + '" data-zoom data-src="' + ref +
      '" data-sizes="(max-width:760px) ' + (full ? 100 : 70) + 'vw, ' + Math.round(cols / 12 * 100) + 'vw" style="' + st + '"></figure>';
  }
  function montage(photos, offset) {
    var html = '', i = 0, p = offset;
    while (i < photos.length) {
      var pat = PATTERNS[p % PATTERNS.length];
      if (pat.length === 2 && i === photos.length - 1) pat = PATTERNS[1];
      html += '<div class="row">';
      pat.forEach(function (slot, k) { html += figure(photos[i++], slot, k); });
      html += '</div>';
      p++;
    }
    return html;
  }
  function ytId(u) { var m = String(u).match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : ''; }
  function films(list) {
    if (!list.length) {
      return '<div class="films"><div class="film empty rv"><div class="film-frame"><span>影片連結待補</span></div>' +
        '<div class="work-cap"><span>YouTube 連結貼入 js/data.js 後會顯示在這裡</span></div></div>' +
        '<div class="film empty rv" style="--d:.12s"><div class="film-frame"><span>影片連結待補</span></div></div></div>';
    }
    return '<div class="films">' + list.map(function (v, i) {
      var id = ytId(v.url);
      return '<div class="film rv"' + (i % 2 ? ' style="--d:.12s"' : '') + '><button class="film-frame" data-yt="' + esc(id) + '" aria-label="播放 ' + esc(v.title || '影片') + '">' +
        '<img loading="lazy" alt="" src="https://i.ytimg.com/vi/' + esc(id) + '/hqdefault.jpg"><i></i></button>' +
        '<div class="work-cap"><span>' + esc(v.title || '') + '</span><span>FILM</span></div></div>';
    }).join('') + '</div>';
  }
  var cat = CATS[page], catRoot = document.querySelector('[data-category]');
  if (cat && catRoot) {
    var h = '<div class="page-head"><span class="label rv">' + cat.en + '</span><h1 class="rv">' + cat.title + '</h1>' +
      '<p class="rv" style="--d:.1s">' + cat.lead + '</p>';
    if (cat.video) {
      h += '<div class="tabs rv" style="--d:.16s" role="tablist"><button role="tab" data-tab="photo" class="on">平面</button>' +
        '<button role="tab" data-tab="film">動態</button></div>';
    }
    h += '</div><div class="pane on" data-pane="photo">';
    cat.albums.forEach(function (al, n) {
      h += '<div class="album-head rv"><span class="no">' + ('0' + (n + 1)).slice(-2) + '</span><h2>' + esc(al.t) + '</h2>' +
        (al.s ? '<p>' + esc(al.s) + '</p>' : '') + '</div>' + montage(al.photos, n) +
        '<div class="album-more rv"><a class="more" href="' + al.href + '"' + (al.case ? '' : ' target="_blank" rel="noopener"') + '>' +
        (al.case ? '看完整案例' : '看完整相簿') + '</a></div>';
    });
    h += '</div>';
    if (cat.video) h += '<div class="pane" data-pane="film">' + films((window.VIDEOS || {})[page] || []) + '</div>';
    catRoot.innerHTML = h;

    function showTab(name) {
      catRoot.querySelectorAll('.tabs button').forEach(function (b) { b.classList.toggle('on', b.dataset.tab === name); });
      catRoot.querySelectorAll('.pane').forEach(function (p) { p.classList.toggle('on', p.dataset.pane === name); });
    }
    catRoot.addEventListener('click', function (e) {
      var tab = e.target.closest('.tabs button');
      if (tab) { showTab(tab.dataset.tab); try { history.replaceState(null, '', tab.dataset.tab === 'film' ? '#film' : location.pathname); } catch (err) {} }
      var yt = e.target.closest('button[data-yt]');
      if (yt && yt.dataset.yt) {
        var f = document.createElement('div');
        f.className = 'film-frame';
        f.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + yt.dataset.yt + '?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="YouTube 影片"></iframe>';
        yt.parentNode.replaceChild(f, yt);
      }
    });
    if (cat.video && location.hash === '#film') showTab('film');
  }

  // ---------- 照片：<figure class="ph" data-src="meifu:20" data-alt="..."> ----------
  var zoomable = [];
  document.querySelectorAll('.ph[data-src]').forEach(function (fig) {
    var frame = document.createElement('span');
    frame.className = 'frame';
    var img = document.createElement('img');
    img.alt = fig.dataset.alt || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    frame.appendChild(img);
    fig.insertBefore(frame, fig.firstChild);
    fill(img, fig.dataset.src, fig.dataset.sizes || '(max-width: 760px) 100vw, 60vw');
    if (fig.hasAttribute('data-zoom')) {
      var idx = zoomable.push(fig.dataset.src) - 1;
      frame.addEventListener('click', function () { openLb(idx); });
    }
  });

  // ---------- 首屏跑馬燈 ----------
  var slides = [].slice.call(document.querySelectorAll('.hero .slide'));
  slides.forEach(function (s, n) {
    var mobile = window.matchMedia('(max-width: 760px)').matches;
    var ref = (mobile && s.dataset.srcM) || s.dataset.src;
    var img = document.createElement('img');
    img.alt = s.dataset.alt || '';
    if (mobile && s.dataset.posM) s.style.setProperty('--pos', s.dataset.posM);
    else if (s.dataset.pos) s.style.setProperty('--pos', s.dataset.pos);
    s.appendChild(img);
    // 第一張優先載入，其餘等頁面載完再抓，避免四張大圖同時搶頻寬
    if (n === 0) { img.fetchPriority = 'high'; fill(img, ref, '100vw'); }
    else if (document.readyState === 'complete') fill(img, ref, '100vw');
    else window.addEventListener('load', function () { fill(img, ref, '100vw'); });
  });
  if (slides.length) {
    var cur = 0;
    slides[0].classList.add('on', 'zoom');
    if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInterval(function () {
        var prev = slides[cur];
        prev.classList.remove('on');
        setTimeout(function () { prev.classList.remove('zoom'); }, 1300); // 淡出結束後才把縮放歸零
        cur = (cur + 1) % slides.length;
        slides[cur].classList.add('on', 'zoom');
      }, 5000);
    }
  }

  // ---------- 捲動進場 ----------
  var rv = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rv.forEach(function (el) { io.observe(el); });
  } else {
    rv.forEach(function (el) { el.classList.add('in'); });
  }

  // ---------- 頁首狀態 ----------
  var hero = document.querySelector('.hero');
  function onScroll() {
    head.classList.toggle('solid', !hero || window.scrollY > hero.offsetHeight - 70);
    // 首屏捲動進度 0～1，樣式用它讓照片變暗、文字淡出
    if (hero) hero.style.setProperty('--p', Math.min(1, window.scrollY / hero.offsetHeight).toFixed(3));
  }
  var cue = hero && hero.querySelector('.hero-scroll');
  if (cue) {
    cue.addEventListener('click', function () {
      var smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: hero.offsetHeight - 56, behavior: smooth ? 'smooth' : 'auto' });
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  // ---------- 詢問表單（原型：不送出資料，只顯示確認訊息） ----------
  var form = document.querySelector('form.ask');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.style.display = 'none';
      document.querySelector('.sent').classList.add('on');
    });
  }

  // ---------- 燈箱 ----------
  var lb, lbImg, lbCount, lbIdx = 0;
  function buildLb() {
    lb = document.createElement('div');
    lb.className = 'lb';
    lb.innerHTML = '<button class="x" aria-label="關閉">×</button><button class="pv" aria-label="上一張">‹</button><img alt=""><button class="nx" aria-label="下一張">›</button><div class="count"></div>';
    document.body.appendChild(lb);
    lbImg = lb.querySelector('img');
    lbCount = lb.querySelector('.count');
    lbImg.addEventListener('load', function () { lbImg.classList.add('loaded'); });
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('x')) closeLb(); });
    lb.querySelector('.pv').addEventListener('click', function () { show(lbIdx - 1); });
    lb.querySelector('.nx').addEventListener('click', function () { show(lbIdx + 1); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('on')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') show(lbIdx - 1);
      if (e.key === 'ArrowRight') show(lbIdx + 1);
    });
  }
  function show(i) {
    lbIdx = (i + zoomable.length) % zoomable.length;
    lbImg.classList.remove('loaded');
    setTimeout(function () {
      lbImg.src = url(zoomable[lbIdx], window.innerWidth > 1100 ? 'X3' : 'X2');
    }, 180);
    lbCount.textContent = (lbIdx + 1) + ' / ' + zoomable.length;
  }
  function openLb(i) {
    if (!lb) buildLb();
    show(i);
    lb.classList.add('on');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('on');
    document.body.style.overflow = '';
  }
})();
