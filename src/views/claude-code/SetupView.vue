<template>
    <div>
        <div class="hero">
            <div class="hero-label">基礎入門</div>
            <h1>啟動 & <em>基本操作</em></h1>
            <p>從啟動到常用指令，快速上手 Claude Code 的日常開發流程。</p>
        </div>

        <div class="section-label">啟動</div>
        <h2>啟動方式</h2>
        <pre class="code-block">
cd your-project     # 確認進入正確的專案目錄
claude              # 啟動 Claude Code</pre>
        <div class="tip">
            <strong>注意：</strong>Claude Code 以當前目錄作為工作範圍，影響它讀取檔案和理解專案結構的能力。啟動前請先
            <code style="color: var(--accent2)">pwd</code> 確認位置。
        </div>

        <hr class="divider" />

        <div class="section-label">輸入技巧</div>
        <h2>輸入方式</h2>
        <table class="styled-table" style="margin-bottom: 36px">
            <thead>
                <tr>
                    <th>操作</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>直接打字 + Enter</td>
                    <td>送出訊息給 Claude</td>
                </tr>
                <tr>
                    <td>Option + Enter（Mac）</td>
                    <td>換行（多行輸入），適合撰寫較長的指令</td>
                </tr>
                <tr>
                    <td>@檔案路徑</td>
                    <td>引用檔案作為上下文，支援自動補全</td>
                </tr>
                <tr>
                    <td>! 開頭</td>
                    <td>直接執行 Bash 指令，執行結果會留在 context 中</td>
                </tr>
            </tbody>
        </table>

        <div class="section-label">操作模式</div>
        <h2>三種模式 — Shift+Tab 切換</h2>
        <div class="card-grid" style="margin-bottom: 36px">
            <div class="card">
                <div style="margin-bottom: 8px"><span class="badge badge-green">預設</span></div>
                <h3>Normal</h3>
                <p style="color: var(--text2); font-size: 14px">每個檔案編輯與指令執行都需要手動確認。最謹慎。</p>
            </div>
            <div class="card">
                <div style="margin-bottom: 8px"><span class="badge badge-orange">推薦</span></div>
                <h3>Plan Mode</h3>
                <p style="color: var(--text2); font-size: 14px">
                    Claude 先規劃步驟，確認後才執行。複雜任務必用，可搭配手動或自動同意。
                </p>
            </div>
            <div class="card">
                <div style="margin-bottom: 8px"><span class="badge badge-blue">快速</span></div>
                <h3>Auto-Accept</h3>
                <p style="color: var(--text2); font-size: 14px">
                    自動接受檔案編輯，終端機指令仍需手動確認。搭配 VS Code diff 使用更安心。
                </p>
            </div>
        </div>

        <div class="section-label">常用指令</div>
        <h2>新手必記 5 個</h2>
        <table class="styled-table" style="margin-bottom: 16px">
            <thead>
                <tr>
                    <th>指令</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="cmd">/init</span></td>
                    <td>初始化，自動產生 CLAUDE.md</td>
                </tr>
                <tr>
                    <td><span class="cmd">/clear</span></td>
                    <td>清除當前對話歷史，開始新任務</td>
                </tr>
                <tr>
                    <td><span class="cmd">/compact</span></td>
                    <td>壓縮對話內容，釋放 context 空間</td>
                </tr>
                <tr>
                    <td><span class="cmd">/model</span></td>
                    <td>切換模型（Haiku / Sonnet / Opus）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/rewind</span></td>
                    <td>撤銷最近一次變更（別名 /undo）</td>
                </tr>
            </tbody>
        </table>
        <div class="tip">
            <strong>完整指令表：</strong>Claude Code 內建指令已超過 60 個（含 Plan Mode、平行 Agent、Remote Control
            等），完整分類整理請見上方「⌘ 指令大全」分頁。
        </div>
    </div>
</template>
