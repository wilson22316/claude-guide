// 頂層產品切換。目前有「首頁」與「Claude Code」兩個產品，
// 之後新增 Claude Chat / Claude Cowork 時，只要：
// 1. 幫該產品的 section 都加上 data-product="claude-chat" 之類的標記（或直接沿用這套 show/hide 模式）
// 2. 在這個 function 裡多加一個 else if 分支
function switchProduct(productId, btn) {
  document.querySelectorAll('.product-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.main > .section').forEach(s => s.classList.remove('active'));

  if (productId === 'claude-code') {
    document.body.classList.add('view-claude-code');
    // 記住使用者上次停留在 Claude Code 底下的哪個子分頁，預設回到第一個
    const activeTab = document.querySelector('#navTabs .tab-btn.active') || document.querySelector('#navTabs .tab-btn');
    document.getElementById(activeTab.dataset.target).classList.add('active');
  } else {
    document.body.classList.remove('view-claude-code');
    document.getElementById('home').classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showSection(id, btn) {
  document.querySelectorAll('.main > .section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setTheme(mode) {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  document.getElementById('seg-light').classList.toggle('active', mode === 'light');
  document.getElementById('seg-dark').classList.toggle('active', mode === 'dark');
  localStorage.setItem('theme', mode);
}

// 初始化：優先讀 localStorage，再 fallback 到系統偏好
(function() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const mode = saved || (prefersDark ? 'dark' : 'light');
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    document.getElementById('seg-light').classList.remove('active');
    document.getElementById('seg-dark').classList.add('active');
  }
})();

function toggle(li) {
  li.classList.toggle('done');
  updateProgress();
}

function updateProgress() {
  const total = document.querySelectorAll('.checklist li').length;
  const done = document.querySelectorAll('.checklist li.done').length;
  const pct = Math.round(done / total * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = done + ' / ' + total + ' 完成';
}
