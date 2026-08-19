import { trip, luggageGuide, transportGuide, foodGuide, packingList, budget } from './data.js';

const app = document.getElementById('app');

// ===== 工具函数 =====
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ===== 顶部导航 =====
function renderNav() {
  const links = [
    { href: '#overview', label: '行程总览' },
    ...trip.days.map((d) => ({ href: `#day-${d.day}`, label: `Day${d.day}` })),
    { href: '#luggage', label: '行李托运' },
    { href: '#transport', label: '交通' },
    { href: '#food', label: '美食' },
    { href: '#checklist', label: '打包清单' }
  ];
  document.getElementById('nav-links').innerHTML = links
    .map((l) => `<a href="${l.href}" class="nav-link relative" data-nav>${l.label}</a>`)
    .join('');
}

// ===== Hero 封面 =====
function renderHero() {
  const d1 = trip.days[0];
  const cities = ['大阪', '京都', '神户', '天桥立'];
  return `
  <section id="top" class="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
    <img src="${trip.heroImage}" alt="京都清水寺" class="absolute inset-0 w-full h-full object-cover" />
    <div class="hero-overlay absolute inset-0"></div>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center text-white">
      <div class="flex items-center gap-3 mb-5 fade-up visible">
        <span class="stamp inline-block px-4 py-1.5 text-sm font-bold rounded">国庆 · 2026</span>
        <span class="text-sm tracking-widest text-white/80">${trip.season}</span>
      </div>
      <h1 class="font-brush text-6xl sm:text-7xl md:text-8xl leading-tight drop-shadow-lg">${trip.title}</h1>
      <p class="mt-4 font-serif-sc text-2xl sm:text-3xl tracking-widest text-white/90">${trip.subtitle}</p>
      <p class="mt-4 text-lg text-white/75">${trip.dates}</p>
      <div class="mt-8 flex flex-wrap gap-3">
        ${cities.map((c) => `<span class="px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-sm font-medium">${c}</span>`).join('')}
      </div>
      <div class="mt-10 flex gap-4">
        <a href="#overview" class="px-6 py-3 rounded-full bg-[#C73E3A] hover:bg-[#A3302D] font-medium transition shadow-lg">开始阅读攻略</a>
        <a href="#checklist" class="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 font-medium transition">查看打包清单</a>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-6 text-white/70 text-2xl animate-bounce">↓</div>
  </section>`;
}

// ===== 行程总览 =====
function renderOverview() {
  const cards = trip.days.map((d, i) => `
    <a href="#day-${d.day}" class="card-hover block bg-white rounded-2xl border border-[#eee3d1] p-6 shadow-sm">
      <div class="flex items-center justify-between">
        <span class="text-5xl font-serif-sc font-black" style="color:${d.color}">${d.day}</span>
        <span class="text-3xl">${d.emoji}</span>
      </div>
      <p class="mt-3 text-sm font-medium" style="color:${d.color}">${d.date} ${d.weekday}</p>
      <h3 class="mt-1 font-serif-sc text-lg font-bold text-[#1F2A44] leading-snug">${d.theme}</h3>
      <p class="mt-2 text-sm text-gray-500 line-clamp-2">${d.summary}</p>
      <div class="mt-4 flex items-center justify-between text-xs text-gray-400">
        <span>🏨 ${d.hotel}</span>
        <span class="font-medium" style="color:${d.color}">查看详情 →</span>
      </div>
    </a>`).join('');
  return `
  <section id="overview" class="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
    <div class="text-center mb-10">
      <p class="text-sm tracking-[0.3em] text-[#C73E3A] font-medium">ITINERARY</p>
      <h2 class="mt-2 font-serif-sc text-4xl font-bold text-[#1F2A44]">行程总览</h2>
      <div class="divider-washi w-24 mx-auto mt-4"></div>
      <p class="mt-4 text-gray-500 max-w-2xl mx-auto">五天四夜，横跨大阪、京都、神户与「日本三景」天桥立，一次看尽关西精华。</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      ${cards}
    </div>
  </section>`;
}

// ===== 每日详情 =====
function renderActivity(a) {
  const tips = (a.tips || []).map((t) => `<li class="flex gap-2"><span class="text-[#C73E3A]">·</span><span>${esc(t)}</span></li>`).join('');
  const imgBlock = a.image
    ? `<div class="img-zoom h-48"><img src="${a.image}" alt="${esc(a.title)}" loading="lazy" class="w-full h-full object-cover" /></div>`
    : '';
  return `
  <div class="card-hover bg-white rounded-2xl border border-[#eee3d1] shadow-sm overflow-hidden">
    ${imgBlock}
    <div class="p-5">
      <div class="flex items-center gap-2 text-sm">
        <span class="px-2.5 py-0.5 rounded-full bg-[#C73E3A]/10 text-[#C73E3A] font-bold">${a.time}</span>
        <span class="text-gray-400 text-xs">📍 ${esc(a.location)}</span>
      </div>
      <h4 class="mt-3 font-serif-sc text-lg font-bold text-[#1F2A44]">${esc(a.title)}</h4>
      <p class="mt-2 text-sm text-gray-600 leading-relaxed">${esc(a.desc)}</p>
      ${tips ? `<ul class="mt-3 space-y-1 text-xs text-gray-500 border-t border-dashed border-[#eee3d1] pt-3">${tips}</ul>` : ''}
    </div>
  </div>`;
}

function renderDayDetail(d) {
  const acts = d.activities.map(renderActivity).join('');
  const food = d.food.map((f) => `<span class="px-3 py-1 rounded-full bg-[#D4A24E]/15 text-[#8a6d2f] text-xs font-medium">🍽️ ${esc(f)}</span>`).join('');
  return `
  <section id="day-${d.day}" class="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
    <div class="bg-white rounded-3xl border border-[#eee3d1] shadow-sm overflow-hidden">
      <div class="px-6 sm:px-10 py-8 border-b border-[#eee3d1]" style="background: linear-gradient(120deg, ${d.color}12, transparent)">
        <div class="flex flex-wrap items-center gap-4">
          <span class="text-5xl">${d.emoji}</span>
          <div>
            <p class="text-sm font-medium" style="color:${d.color}">DAY ${d.day} · ${d.date} ${d.weekday}</p>
            <h3 class="font-serif-sc text-2xl sm:text-3xl font-bold text-[#1F2A44]">${esc(d.theme)}</h3>
          </div>
        </div>
        <p class="mt-4 text-gray-600 max-w-3xl">${esc(d.summary)}</p>
        <div class="mt-4 flex flex-wrap gap-2">${food}</div>
      </div>
      <div class="px-6 sm:px-10 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${acts}
        </div>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="rounded-xl bg-[#FBF7F0] border border-[#eee3d1] p-5">
            <p class="text-sm font-bold text-[#1F2A44] flex items-center gap-2">🚄 交通方式</p>
            <p class="mt-2 text-sm text-gray-600 leading-relaxed">${esc(d.transport)}</p>
          </div>
          <div class="rounded-xl bg-[#FBF7F0] border border-[#eee3d1] p-5">
            <p class="text-sm font-bold text-[#1F2A44] flex items-center gap-2">🧳 行李安排</p>
            <p class="mt-2 text-sm text-gray-600 leading-relaxed">${esc(d.luggage)}</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

// ===== 行李托运 =====
function renderLuggage() {
  const steps = luggageGuide.steps.map((s, i) => `
    <div class="relative flex items-start gap-4">
      <div class="flex flex-col items-center">
        <span class="w-10 h-10 rounded-full bg-[#C73E3A] text-white flex items-center justify-center font-bold shrink-0">${i + 1}</span>
        ${i < luggageGuide.steps.length - 1 ? '<span class="w-0.5 flex-1 min-h-[40px] timeline-line"></span>' : ''}
      </div>
      <div class="pb-8">
        <h4 class="font-serif-sc font-bold text-[#1F2A44]">${esc(s.title)}</h4>
        <p class="text-sm text-gray-600 mt-1">${esc(s.detail)}</p>
      </div>
    </div>`).join('');
  const tips = luggageGuide.tips.map((t) => `<li class="flex gap-2 text-sm text-gray-600"><span class="text-[#C73E3A]">✓</span><span>${esc(t)}</span></li>`).join('');
  return `
  <section id="luggage" class="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
    <div class="text-center mb-10">
      <p class="text-sm tracking-[0.3em] text-[#C73E3A] font-medium">LUGGAGE</p>
      <h2 class="mt-2 font-serif-sc text-4xl font-bold text-[#1F2A44]">行李托运全攻略</h2>
      <div class="divider-washi w-24 mx-auto mt-4"></div>
      <p class="mt-4 text-gray-500 max-w-2xl mx-auto">${esc(luggageGuide.desc)}</p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div class="bg-white rounded-3xl border border-[#eee3d1] p-8 shadow-sm">${steps}</div>
      <div class="bg-[#1F2A44] rounded-3xl p-8 text-white shadow-lg">
        <h4 class="font-serif-sc text-xl font-bold mb-4">💡 使用小贴士</h4>
        <ul class="space-y-3">${tips}</ul>
      </div>
    </div>
  </section>`;
}

// ===== 交通 =====
function renderTransport() {
  const cards = transportGuide.map((t) => `
    <div class="card-hover bg-white rounded-2xl border border-[#eee3d1] p-6 shadow-sm">
      <div class="flex items-center gap-3">
        <span class="text-3xl">${t.emoji}</span>
        <div>
          <h4 class="font-serif-sc font-bold text-[#1F2A44]">${esc(t.name)}</h4>
          <p class="text-xs text-gray-400">${esc(t.route)}</p>
        </div>
      </div>
      <div class="mt-4 flex items-center justify-between text-sm">
        <span class="px-2.5 py-1 rounded-full bg-[#D4A24E]/15 text-[#8a6d2f] font-medium">${esc(t.time)}</span>
      </div>
      <p class="mt-2 text-xs text-gray-500">${esc(t.note)}</p>
    </div>`).join('');
  return `
  <section id="transport" class="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
    <div class="text-center mb-10">
      <p class="text-sm tracking-[0.3em] text-[#C73E3A] font-medium">TRANSPORT</p>
      <h2 class="mt-2 font-serif-sc text-4xl font-bold text-[#1F2A44]">交通全攻略</h2>
      <div class="divider-washi w-24 mx-auto mt-4"></div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">${cards}</div>
  </section>`;
}

// ===== 美食 =====
function renderFood() {
  const cards = foodGuide.map((f) => `
    <div class="card-hover bg-white rounded-2xl border border-[#eee3d1] p-6 shadow-sm">
      <span class="text-4xl">${f.emoji}</span>
      <h4 class="mt-3 font-serif-sc text-lg font-bold text-[#1F2A44]">${esc(f.name)}</h4>
      <p class="text-xs text-[#C73E3A] font-medium mt-1">${esc(f.area)}</p>
      <p class="mt-2 text-sm text-gray-600 leading-relaxed">${esc(f.desc)}</p>
    </div>`).join('');
  return `
  <section id="food" class="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
    <div class="text-center mb-10">
      <p class="text-sm tracking-[0.3em] text-[#C73E3A] font-medium">FOOD MAP</p>
      <h2 class="mt-2 font-serif-sc text-4xl font-bold text-[#1F2A44]">美食地图</h2>
      <div class="divider-washi w-24 mx-auto mt-4"></div>
      <p class="mt-4 text-gray-500">关西是美食天堂，从街边小吃到顶级和牛，一站吃遍。</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">${cards}</div>
  </section>`;
}

// ===== 打包清单（可交互） =====
function renderChecklist() {
  let idx = 0;
  const cats = packingList.map((c) => {
    const items = c.items.map((it) => {
      const id = `ck-${idx++}`;
      return `
      <div class="check-item flex items-center gap-3 py-2 border-b border-[#eee3d1] last:border-0" data-check="${id}">
        <span class="check-box w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center text-white text-xs shrink-0 cursor-pointer transition">✓</span>
        <label for="${id}" class="check-label text-sm text-gray-700 cursor-pointer select-none">${esc(it)}</label>
      </div>`;
    }).join('');
    return `
    <div class="bg-white rounded-2xl border border-[#eee3d1] p-6 shadow-sm">
      <h4 class="font-serif-sc font-bold text-[#1F2A44] mb-3">${esc(c.cat)}</h4>
      ${items}
    </div>`;
  }).join('');
  return `
  <section id="checklist" class="max-w-7xl mx-auto px-4 sm:px-6 pt-20">
    <div class="text-center mb-10">
      <p class="text-sm tracking-[0.3em] text-[#C73E3A] font-medium">CHECKLIST</p>
      <h2 class="mt-2 font-serif-sc text-4xl font-bold text-[#1F2A44]">出行打包清单</h2>
      <div class="divider-washi w-24 mx-auto mt-4"></div>
      <p class="mt-4 text-gray-500">点击勾选，逐项核对，出行不遗漏。</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">${cats}</div>
  </section>`;
}

// ===== 预算 =====
function renderBudget() {
  const rows = budget.map((b) => `
    <div class="flex items-center justify-between py-3 border-b border-[#eee3d1] last:border-0">
      <div class="flex items-center gap-3">
        <span class="text-2xl">${b.emoji}</span>
        <span class="text-sm font-medium text-gray-700">${esc(b.item)}</span>
      </div>
      <span class="text-sm font-bold text-[#1F2A44]">${esc(b.amount)}</span>
    </div>`).join('');
  return `
  <section id="budget" class="max-w-4xl mx-auto px-4 sm:px-6 pt-20">
    <div class="text-center mb-10">
      <p class="text-sm tracking-[0.3em] text-[#C73E3A] font-medium">BUDGET</p>
      <h2 class="mt-2 font-serif-sc text-4xl font-bold text-[#1F2A44]">预算参考</h2>
      <div class="divider-washi w-24 mx-auto mt-4"></div>
    </div>
    <div class="bg-white rounded-3xl border border-[#eee3d1] p-8 shadow-sm">
      ${rows}
      <div class="mt-5 flex items-center justify-between pt-2">
        <span class="font-serif-sc font-bold text-[#1F2A44]">人均总预算</span>
        <span class="font-serif-sc font-black text-2xl text-[#C73E3A]">约 ¥6700 – 10800</span>
      </div>
      <p class="mt-2 text-xs text-gray-400 text-right">不含购物消费 · 按淡旺季与汇率浮动</p>
    </div>
  </section>`;
}

// ===== 渲染全部 =====
function render() {
  app.innerHTML = [
    renderHero(),
    renderOverview(),
    ...trip.days.map(renderDayDetail),
    renderLuggage(),
    renderTransport(),
    renderFood(),
    renderChecklist(),
    renderBudget()
  ].join('');
}

// ===== 交互逻辑 =====
function initInteractions() {
  // 滚动进度条 + 返回顶部 + 导航高亮
  const progressBar = document.getElementById('progress-bar');
  const backTop = document.getElementById('back-top');
  const navLinks = [...document.querySelectorAll('[data-nav]')];

  const sections = ['overview', ...trip.days.map((d) => `day-${d.day}`), 'luggage', 'transport', 'food', 'checklist']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const onScroll = () => {
    const st = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (h > 0 ? (st / h) * 100 : 0) + '%';
    backTop.classList.toggle('hidden', st < 600);
    backTop.classList.toggle('flex', st >= 600);

    let current = '';
    for (const s of sections) {
      if (s && s.offsetTop - 120 <= st) current = s.id;
    }
    navLinks.forEach((l) => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // 淡入动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  // 打包清单交互（事件委托）
  document.addEventListener('click', (e) => {
    const item = e.target.closest('.check-item');
    if (item) item.classList.toggle('checked');
  });
}

render();
renderNav();
initInteractions();
