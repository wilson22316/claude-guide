<template>
    <div>
        <div class="hero">
            <div class="hero-label">指令大全 · 2026.07</div>
            <h1>Claude Code<br /><em>指令速查表</em></h1>
            <p>
                官方目前內建 60+ 個 slash commands，依使用情境分類整理。輸入
                <span class="cmd">/</span> 可隨時看到完整清單，輸入 <span class="cmd">/</span> + 關鍵字可篩選。
            </p>
        </div>

        <div class="tip">
            <strong>重要變化：</strong>自訂 slash commands（<span class="cmd">.claude/commands/</span>）已併入
            Skills（<span class="cmd">.claude/skills/</span>）。舊檔案仍可運作，但官方建議新指令一律用 Skill
            的方式撰寫。
        </div>

        <hr class="divider" />

        <div class="section-label">Step 1 · 專案啟動</div>
        <h2>第一次進入 repo</h2>
        <table class="styled-table" style="margin-bottom: 32px">
            <thead>
                <tr>
                    <th>指令</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="cmd">/init</span></td>
                    <td>分析專案並產生初版 CLAUDE.md</td>
                </tr>
                <tr>
                    <td><span class="cmd">/memory</span></td>
                    <td>編輯 CLAUDE.md，管理 auto-memory 項目</td>
                </tr>
                <tr>
                    <td><span class="cmd">/mcp</span></td>
                    <td>管理 MCP server 連線與 OAuth 認證</td>
                </tr>
                <tr>
                    <td><span class="cmd">/agents</span></td>
                    <td>管理 subagent 設定（角色、工具、記憶）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/permissions</span></td>
                    <td>設定 allow / ask / deny 權限規則（別名 /allowed-tools）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/skills</span></td>
                    <td>列出可用 Skills，可依 token 數排序或隱藏特定 skill</td>
                </tr>
            </tbody>
        </table>

        <div class="section-label">Step 2 · 任務進行中</div>
        <h2>調整推理與 Context</h2>
        <table class="styled-table" style="margin-bottom: 32px">
            <thead>
                <tr>
                    <th>指令</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="cmd">/plan [描述]</span></td>
                    <td>進入 Plan Mode，先規劃步驟再執行</td>
                </tr>
                <tr>
                    <td><span class="cmd">/model [名稱]</span></td>
                    <td>切換模型，可設為此次 session 或永久預設</td>
                </tr>
                <tr>
                    <td><span class="cmd">/effort [level]</span></td>
                    <td>調整推理深度：low / medium / high / xhigh / max</td>
                </tr>
                <tr>
                    <td><span class="cmd">/context [all]</span></td>
                    <td>視覺化目前 context 使用量，顯示優化建議</td>
                </tr>
                <tr>
                    <td><span class="cmd">/compact [指示]</span></td>
                    <td>壓縮對話歷史，可指定保留重點方向</td>
                </tr>
                <tr>
                    <td><span class="cmd">/btw &lt;問題&gt;</span></td>
                    <td>side question，不會污染主對話串</td>
                </tr>
                <tr>
                    <td><span class="cmd">/goal &lt;條件&gt;</span></td>
                    <td>設定目標，Claude 會持續工作直到條件達成才停下</td>
                </tr>
            </tbody>
        </table>

        <div class="section-label">Step 3 · 平行 / 背景工作</div>
        <h2>多 Agent 協作</h2>
        <table class="styled-table" style="margin-bottom: 20px">
            <thead>
                <tr>
                    <th>指令</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="cmd">/background [prompt]</span></td>
                    <td>把整個 session 丟到背景執行，釋放終端機（別名 /bg）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/batch &lt;需求&gt;</span></td>
                    <td>大範圍變更自動拆成 5-30 個獨立任務，各自在 worktree 中並行完成並開 PR</td>
                </tr>
                <tr>
                    <td><span class="cmd">/fork &lt;指令&gt;</span></td>
                    <td>衍生背景 subagent 處理旁支任務，完成後結果會併回目前對話</td>
                </tr>
                <tr>
                    <td><span class="cmd">/branch [名稱]</span></td>
                    <td>在目前節點分支對話，另闢方向而不遺失原本對話</td>
                </tr>
                <tr>
                    <td><span class="cmd">/tasks</span></td>
                    <td>檢視並管理所有背景中的任務（別名 /bashes）</td>
                </tr>
            </tbody>
        </table>
        <div class="tip" style="margin-bottom: 32px">
            <strong>/batch 使用時機：</strong>不適合單一檔案修改，適合橫跨整個 codebase 的大改動，例如 migration
            或大規模重構。範例：<span class="cmd">/batch migrate src/ 從 Options API 改為 Composition API</span>
        </div>

        <div class="section-label">Step 4 · 出貨前檢查</div>
        <h2>Code Review</h2>
        <table class="styled-table" style="margin-bottom: 32px">
            <thead>
                <tr>
                    <th>指令</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="cmd">/diff</span></td>
                    <td>互動式 diff 檢視器，看未 commit 的變更或每輪 Claude 的修改</td>
                </tr>
                <tr>
                    <td><span class="cmd">/code-review [--fix]</span></td>
                    <td>審查目前 diff 的正確性與可簡化之處，--fix 可直接套用</td>
                </tr>
                <tr>
                    <td><span class="cmd">/simplify [目標]</span></td>
                    <td>只做清理（重用 / 簡化 / 效能），不找 bug，找 bug 請用 /code-review</td>
                </tr>
                <tr>
                    <td><span class="cmd">/review [PR]</span></td>
                    <td>對 GitHub PR 執行同一套 review 引擎</td>
                </tr>
                <tr>
                    <td><span class="cmd">/security-review</span></td>
                    <td>針對目前分支變更做安全性深度檢查</td>
                </tr>
                <tr>
                    <td><span class="cmd">/code-review ultra</span></td>
                    <td>在雲端執行多 Agent 深度審查（別名 /ultrareview）</td>
                </tr>
            </tbody>
        </table>

        <div class="section-label">Step 5 · Session 之間 & 遠端控制</div>
        <h2>跨裝置接續工作</h2>
        <table class="styled-table" style="margin-bottom: 20px">
            <thead>
                <tr>
                    <th>指令</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="cmd">/clear [名稱]</span></td>
                    <td>開新對話（保留專案記憶），舊對話仍可從 /resume 找回（別名 /reset、/new）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/resume [session]</span></td>
                    <td>依 ID 或名稱恢復對話，或開啟選擇清單（別名 /continue）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/rename [名稱]</span></td>
                    <td>為目前 session 命名，方便日後在多裝置間尋找</td>
                </tr>
                <tr>
                    <td><span class="cmd">/remote-control</span></td>
                    <td>讓目前這個本機 session 可從 claude.ai / 手機 App 遠端操作（別名 /rc）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/teleport</span></td>
                    <td>把一個 Claude Code on the web 的 session 拉回終端機繼續（別名 /tp）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/mobile</span></td>
                    <td>顯示 QR code 下載 Claude 手機 App（別名 /ios、/android）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/desktop</span></td>
                    <td>把目前 session 接續到 Claude Code 桌面 App（別名 /app）</td>
                </tr>
            </tbody>
        </table>
        <div class="tip" style="margin-bottom: 32px">
            <strong>Remote Control 是什麼：</strong>2026 年新功能，讓本機終端機的 session 同步到 claude.ai/code 與手機
            App。檔案系統、MCP server、工具都還是跑在你的電腦上，手機只是多一個視窗，不是搬到雲端。輸入
            <span class="cmd">/remote-control</span> 後會產生連結與 QR code。
        </div>

        <div class="section-label">Step 6 · 排解問題</div>
        <h2>Debug & 回報</h2>
        <table class="styled-table" style="margin-bottom: 32px">
            <thead>
                <tr>
                    <th>指令</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="cmd">/rewind</span></td>
                    <td>把程式碼和／或對話回溯到先前的 checkpoint（別名 /checkpoint、/undo）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/doctor</span></td>
                    <td>診斷安裝與設定狀態，按 f 可自動修復</td>
                </tr>
                <tr>
                    <td><span class="cmd">/debug [描述]</span></td>
                    <td>開啟 debug log 並協助排查問題</td>
                </tr>
                <tr>
                    <td><span class="cmd">/feedback [報告]</span></td>
                    <td>回報 bug 或分享對話（別名 /bug、/share）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/insights</span></td>
                    <td>分析你自己的使用習慣與卡關模式</td>
                </tr>
            </tbody>
        </table>

        <div class="section-label">其他實用指令</div>
        <h2>設定 & 自動化</h2>
        <table class="styled-table">
            <thead>
                <tr>
                    <th>指令</th>
                    <th>說明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="cmd">/schedule [描述]</span></td>
                    <td>建立排程執行的 Routines（雲端跑，別名 /routines）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/loop [間隔] [prompt]</span></td>
                    <td>在 session 保持開啟時重複執行某個 prompt（別名 /proactive）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/usage</span></td>
                    <td>查看用量、費用與方案限制（別名 /cost、/stats）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/config [key=value]</span></td>
                    <td>調整主題、模型、output style 等設定（別名 /settings）</td>
                </tr>
                <tr>
                    <td><span class="cmd">/hooks</span></td>
                    <td>檢視目前設定的 hook 配置</td>
                </tr>
                <tr>
                    <td><span class="cmd">/export [檔名]</span></td>
                    <td>將目前對話匯出成純文字</td>
                </tr>
                <tr>
                    <td><span class="cmd">/team-onboarding</span></td>
                    <td>根據近 30 天使用紀錄自動產生團隊 onboarding 文件</td>
                </tr>
            </tbody>
        </table>

        <div class="quote" style="margin-top: 24px">
            <p>
                Slash commands 是 session 層級的控制，不是給 Claude 的任務指示——它們控制「怎麼運作」，而一般 prompt
                是告訴 Claude「要做什麼」。
            </p>
        </div>
    </div>
</template>
