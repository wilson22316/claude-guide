<script setup>
import { reactive, computed } from 'vue'

const categories = reactive([
    {
        label: '基礎建設',
        items: [
            { text: '建立初版 CLAUDE.md（~50 行）', done: false },
            { text: '設置 Stop hook + verifier', done: false },
            { text: '建立 CI/CD 與程式碼審查流程', done: false },
            { text: '定義可衡量的產出指標（聚焦產出，不聚焦投入）', done: false },
        ],
    },
    {
        label: '進階自動化',
        items: [
            { text: '識別可拆分為 Skill 的工作流', done: false },
            { text: '設計首個自訂 Agent', done: false },
            { text: '每週檢查 CLAUDE.md 遵守率', done: false },
            { text: '根據信號逐步升級規則（Rule → Hook/Skill/Agent）', done: false },
        ],
    },
    {
        label: '團隊建立',
        items: [
            { text: '教導團隊成員撰寫好的提示詞', done: false },
            { text: '用 agents 解決真實任務建立信任', done: false },
        ],
    },
])

const total = computed(() => categories.flatMap((c) => c.items).length)
const done = computed(() => categories.flatMap((c) => c.items).filter((i) => i.done).length)
const percent = computed(() => Math.round((done.value / total.value) * 100))
</script>

<template>
    <div>
        <div class="hero">
            <div class="hero-label">實踐清單</div>
            <h1>你的<em> Claude Code</em><br />導入路徑</h1>
            <p>點擊項目標記完成，追蹤你的導入進度。</p>
        </div>

        <!-- 進度條 -->
        <div style="background: var(--bg3); border-radius: 99px; height: 6px; margin-bottom: 8px; overflow: hidden">
            <div
                :style="{ width: percent + '%' }"
                style="height: 100%; background: var(--accent); border-radius: 99px; transition: width 0.3s"
            ></div>
        </div>
        <div style="font-family: var(--mono); font-size: 12px; color: var(--text3); margin-bottom: 32px">
            {{ done }} / {{ total }} 完成
        </div>

        <!-- 各分類 -->
        <template v-for="cat in categories" :key="cat.label">
            <div class="section-label" style="margin-top: 28px">{{ cat.label }}</div>
            <ul class="checklist">
                <li
                    v-for="item in cat.items"
                    :key="item.text"
                    :class="{ done: item.done }"
                    @click="item.done = !item.done"
                >
                    <div class="check-box"></div>
                    <span>{{ item.text }}</span>
                </li>
            </ul>
        </template>

        <!-- 延伸資源 -->
        <div
            style="
                margin-top: 40px;
                padding: 24px;
                background: var(--bg2);
                border-radius: var(--radius-lg);
                border: 1px solid var(--border);
                text-align: center;
            "
        >
            <div style="font-size: 13px; color: var(--text3); margin-bottom: 8px; font-family: var(--mono)">
                延伸資源
            </div>
            <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap">
                <a
                    href="https://docs.anthropic.com/en/docs/claude-code/overview"
                    target="_blank"
                    style="color: var(--accent2); font-size: 14px; text-decoration: none"
                    >官方文件 →</a
                >
                <a
                    href="https://kaochenlong.com/openspec"
                    target="_blank"
                    style="color: var(--accent2); font-size: 14px; text-decoration: none"
                    >OpenSpec 1.0.0 →</a
                >
                <a
                    href="https://kaochenlong.com/ai-superpowers-skills"
                    target="_blank"
                    style="color: var(--accent2); font-size: 14px; text-decoration: none"
                    >AI Superpowers →</a
                >
            </div>
        </div>
    </div>
</template>
