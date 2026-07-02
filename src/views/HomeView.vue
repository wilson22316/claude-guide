<template>
    <section class="section">
        <div class="hero">
            <div class="hero-label">Claude Code — 完整指南 · 2026.07 更新</div>
            <h1>從 Prompt 到 <em>Agent</em><br />AI 協作完整指南</h1>
            <p>整合入門教學與 Taipei Meetup 實戰經驗，帶你從基礎操作到多 Agent 架構。</p>
        </div>

        <div class="section-label">AI 協作演進</div>
        <div class="level-track" style="margin-bottom: 36px">
            <div class="level-item reached">
                <div class="level-dot">23</div>
                <div class="level-title">2023 — Prompt Engineering</div>
                <div class="level-desc">ChatGPT 帶動 AI 寫程式風潮，開發者學習撰寫好的 prompt。</div>
                <div class="level-tag">▲ 生成式 AI 元年</div>
            </div>
            <div class="level-item reached">
                <div class="level-dot">24</div>
                <div class="level-title">2024 — Context Engineering</div>
                <div class="level-desc">GitHub Copilot 讓 AI 成為日常副駕駛，AI 與你協作程式碼。</div>
                <div class="level-tag">▲ AI 協作時代</div>
            </div>
            <div class="level-item partial">
                <div class="level-dot">25</div>
                <div class="level-title">2025 — Harness Engineering</div>
                <div class="level-desc">
                    Claude Code 等 AI Agent
                    自主讀取檔案、執行指令、規劃步驟。開發者從「逐行指揮」轉變為「設定目標、審閱成果」。
                </div>
                <div class="level-tag">▲ Agent 元年</div>
            </div>
        </div>

        <hr class="divider" />

        <div class="section-label">核心名詞</div>
        <h2>基礎概念</h2>
        <table class="styled-table" style="margin-bottom: 36px">
            <thead>
                <tr>
                    <th>名詞</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Session（對話）</td>
                    <td>
                        一次與 Claude Code 的互動過程。每個 session 各自獨立，擁有自己的對話歷史。可命名方便日後恢復。
                    </td>
                </tr>
                <tr>
                    <td>Context Window</td>
                    <td>
                        Claude 在單次對話中能「記住」的資訊量上限。超出範圍的早期內容會被壓縮或捨棄，適時使用 /clear。
                    </td>
                </tr>
                <tr>
                    <td>Prompt（提示詞）</td>
                    <td>你輸入給 Claude 的文字指令。好的 prompt 能讓 AI 更精準理解你的意圖，減少來回修正。</td>
                </tr>
            </tbody>
        </table>

        <div class="section-label">模型選擇</div>
        <h2>三種模型</h2>
        <div class="card-grid">
            <div class="card">
                <div style="margin-bottom: 12px"><span class="badge badge-green">最快 / 最省</span></div>
                <h3>Haiku 4.5</h3>
                <p style="color: var(--text2); font-size: 14px">簡單任務或詳細的 prompt 步驟。速度優先，成本最低。</p>
            </div>
            <div class="card" style="border-color: var(--accent); position: relative; overflow: hidden">
                <div
                    style="
                        position: absolute;
                        top: 0;
                        right: 0;
                        background: var(--accent);
                        color: var(--bg);
                        font-family: var(--mono);
                        font-size: 10px;
                        font-weight: 700;
                        padding: 4px 10px;
                        border-radius: 0 0 0 8px;
                    "
                >
                    推薦
                </div>
                <div style="margin-bottom: 12px"><span class="badge badge-orange">速度 × 能力</span></div>
                <h3>Sonnet 5</h3>
                <p style="color: var(--text2); font-size: 14px">日常開發首選，適合大多數任務。平衡速度與推理能力。</p>
            </div>
            <div class="card">
                <div style="margin-bottom: 12px"><span class="badge badge-blue">最強推理</span></div>
                <h3>Opus 4.8</h3>
                <p style="color: var(--text2); font-size: 14px">
                    複雜跨檔案開發、困難 debug、多步驟任務。搭配 <span class="cmd">/effort</span> 調整思考深度（low ~
                    xhigh）。
                </p>
            </div>
        </div>

        <div class="tip" style="margin-top: 24px">
            <strong>Context 容量：</strong>訂閱制為 200K tokens，使用付費 API 則可達 1M tokens。
        </div>
        <div class="tip">
            <strong>模型分層：</strong>Opus 之上還有新的 Mythos 分層（Claude Mythos 5 / Claude Fable
            5），目前因出口管制指令暫停對外開放，屬於較新的動態，細節可留意 Anthropic 官方公告。
        </div>

        <div class="quote" style="margin-top: 24px">
            <p>可讀性不只是為了人類與未來的自己——也是為了讓 LLM 能更好地閱讀與理解你的程式碼。</p>
        </div>
    </section>
</template>
