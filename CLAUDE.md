# Claude Guide — 專案規範

## 技術棧
- Vue 3 + Vite + Vue Router（hash mode）
- 純前端靜態站，無後端

## 程式碼風格
- Vue 元件一律使用 Composition API（`<script setup>`）
- 縮排：4 格空白，禁用 Tab
- 元件命名：PascalCase（如 `ProductNav.vue`）
- CSS：沿用全域 CSS variable，不引入額外 CSS 框架

## 專案結構
- `src/views/` — 頁面元件，大分頁放獨立資料夾（如 `claude-code/`）
- `src/components/` — 跨頁共用元件
- `src/composables/` — 可重用邏輯（如 `useTheme.js`）
- `src/router/index.js` — 路由定義

## 新增大分頁流程
1. 在 `src/views/新產品/` 建 Layout + View 元件
2. 在 `src/router/index.js` 新增 route
3. 在 `src/components/ProductNav.vue` 的 `products` 陣列新增按鈕