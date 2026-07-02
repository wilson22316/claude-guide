<template>
    <div>
        <div class="hero">
            <div class="hero-label">溝通技巧</div>
            <h1>提示詞<em>實戰技巧</em></h1>
            <p>好的提示詞能大幅提升 AI 協作效率。依情境分類的常用策略。</p>
        </div>

        <div class="section-label">6.1 需求描述</div>
        <h2>明確功能需求</h2>
        <pre class="code-block">請參考 @xxx 檔案，幫我實作 A 功能</pre>
        <div style="margin-top: 16px">
            <h3>跨檔案複雜需求</h3>
            <pre class="code-block">
@/xxx 是 API 的資料回應，現在在 @/頁面 的 XX 下拉式選單...
期望可以做到……

@/OOO 是欄位的相關檔案

你可能需要知道的 context 是 @OOO @BBB @AAA
幫我分析此次需求，對於需求有疑問的部分請使用 AskUserQuestion 工具</pre>
        </div>

        <hr class="divider" />

        <div class="section-label">6.2 引導式對話</div>
        <h2>先建立共識，再動手</h2>
        <div class="level-track" style="margin-bottom: 24px">
            <div class="level-item reached">
                <div class="level-dot">1</div>
                <div class="level-title">載入 context</div>
                <div class="level-desc">「你有看到 XXX 功能嗎？這個是 xxx」</div>
            </div>
            <div class="level-item reached">
                <div class="level-dot">2</div>
                <div class="level-title">確認理解</div>
                <div class="level-desc">「先不要做，先回答你目前理解的需求是什麼？」</div>
            </div>
            <div class="level-item reached">
                <div class="level-dot">3</div>
                <div class="level-title">分階段追問</div>
                <div class="level-desc">針對某些部分追問更詳細的實作細節，對齊後再開始執行。</div>
            </div>
        </div>

        <hr class="divider" />

        <div class="section-label">6.3 範圍控制</div>
        <h2>避免一次做太多</h2>
        <pre class="code-block">我預計先做某某功能，針對某某部分先不要做，先用 TODO 標記</pre>
        <div class="tip" style="margin-top: 12px">
            <strong>大檔案策略：</strong
            >需求變動頻繁時，先將功能集中在一個大檔案開發，等需求穩定後再拆分模組。過早拆分反而增加維護成本。
        </div>

        <hr class="divider" />

        <div class="section-label">6.4 Debug 協作</div>
        <h2>一起縮小排查範圍</h2>
        <pre class="code-block">
我跟你一起 debug，幫我在相關的地方添加 console.log

我遇到了 XX 問題，你覺得可能的原因有哪些？幫我加 log 驗證</pre>

        <hr class="divider" />

        <div class="section-label">6.5 & 6.6</div>
        <h2>方案比較 & 驗證回答</h2>
        <div class="card-grid">
            <div class="card">
                <h3>比較方案</h3>
                <pre class="code-block" style="margin-top: 10px; font-size: 12px">
請提出不同方案，分析各自的優缺點

請給我五種命名</pre>
            </div>
            <div class="card">
                <h3>驗證 AI 回答</h3>
                <pre class="code-block" style="margin-top: 10px; font-size: 12px">
真的嗎？請用 web search 搜尋官方文件

親自去官方文件比對一下</pre>
                <p style="color: var(--text2); font-size: 13px; margin-top: 10px">
                    AI 有時會 hallucination，涉及第三方套件 API 用法時務必對照官方文件。
                </p>
            </div>
        </div>
    </div>
</template>
