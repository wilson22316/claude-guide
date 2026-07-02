<template>
    <div>
        <div class="hero">
            <div class="hero-label">專案設定</div>
            <h1><em>CLAUDE.md</em><br />專案記憶</h1>
            <p>Claude Code 每次啟動都會自動讀取的 Markdown 檔案——給 AI 看的 README。</p>
        </div>

        <div class="section-label">放置位置</div>
        <h2>三種層級</h2>
        <table class="styled-table" style="margin-bottom: 36px">
            <thead>
                <tr>
                    <th>路徑</th>
                    <th>用途</th>
                    <th>Git 追蹤</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="cmd">./CLAUDE.md</span></td>
                    <td>專案層級，與團隊共用</td>
                    <td><span class="badge badge-green">是</span></td>
                </tr>
                <tr>
                    <td><span class="cmd">./.claude/CLAUDE.local.md</span></td>
                    <td>個人專用的專案設定</td>
                    <td><span class="badge badge-red">否（自動 gitignore）</span></td>
                </tr>
                <tr>
                    <td><span class="cmd">~/.claude/CLAUDE.md</span></td>
                    <td>全域設定，所有專案共用</td>
                    <td>不適用</td>
                </tr>
            </tbody>
        </table>

        <hr class="divider" />

        <div class="section-label">管理策略 — Meetup 重點</div>
        <h2>兩派哲學</h2>
        <div class="card-grid" style="margin-bottom: 24px">
            <div class="card">
                <div style="margin-bottom: 8px"><span class="badge badge-blue">Boris Cherny 派</span></div>
                <h3>持續迭代累積</h3>
                <ul style="color: var(--text2); font-size: 14px; padding-left: 18px; line-height: 2">
                    <li>CLAUDE.md 約 2,500 tokens</li>
                    <li>遇到問題就加進去</li>
                    <li>搭配 Verifier 驗證</li>
                    <li>適合：成熟產品、持續改進</li>
                </ul>
            </div>
            <div class="card">
                <div style="margin-bottom: 8px"><span class="badge badge-orange">RPI 學派</span></div>
                <h3>早期優化精簡</h3>
                <ul style="color: var(--text2); font-size: 14px; padding-left: 18px; line-height: 2">
                    <li>60 行以內</li>
                    <li>避免冗余，保持乾淨</li>
                    <li>核心理念：早期優化</li>
                    <li>適合：初期探索階段</li>
                </ul>
            </div>
        </div>

        <div class="quote">
            <p>每次 Claude 做錯了什麼，就把它加進 CLAUDE.md，讓它永遠不再重蹈覆轍。</p>
            <div class="attr">— Boris Cherny（Claude Code 創作者）</div>
        </div>

        <hr class="divider" />

        <div class="section-label">何時拆分</div>
        <h2>3 個移出信號</h2>
        <div class="level-track">
            <div class="level-item reached">
                <div class="level-dot">1</div>
                <div class="level-title">檔案大小達臨界</div>
                <div class="level-desc">約 50 行時開始考慮拆分，識別可獨立的規則。</div>
            </div>
            <div class="level-item reached">
                <div class="level-dot">2</div>
                <div class="level-title">Rule 遵守率下降</div>
                <div class="level-desc">Claude 不再持續遵守某條規則，升級為 Hook / Skill / Agent。</div>
            </div>
            <div class="level-item reached">
                <div class="level-dot">3</div>
                <div class="level-title">定期審查時間</div>
                <div class="level-desc">建議每週例行檢查，評估規則成熟度。</div>
            </div>
        </div>

        <div class="tip" style="margin-top: 24px">
            <strong>效能上限：</strong>當 context window 超過 40% 被佔用時效能下降（「笨蛋區」）。理論上限約 100
            條規則，包含 Claude Code 自身的 50 條 system prompt。
        </div>

        <pre class="code-block">
# CLAUDE.md 漸進設計流程
遇到問題 → 加入 CLAUDE.md → Claude 不遵守 → 升級為 Hook/Skill/Agent</pre>
    </div>
</template>
