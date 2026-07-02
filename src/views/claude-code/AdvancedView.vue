<template>
    <div>
        <div class="hero">
            <div class="hero-label">進階擴充</div>
            <h1>進階功能</h1>
            <p>MCP、Plugin、Skill、Agent、Git Worktree — 擴充 Claude Code 能力的完整工具箱。</p>
        </div>

        <div class="section-label">MCP</div>
        <h2>Model Context Protocol</h2>
        <p style="color: var(--text2); font-size: 14px; margin-bottom: 20px">
            擴充 Claude Code 能力的外掛協議，透過第三方工具提供額外的上下文來源與操作能力。
        </p>
        <table class="styled-table" style="margin-bottom: 24px">
            <thead>
                <tr>
                    <th>工具</th>
                    <th>說明</th>
                    <th>使用範例</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Context7</td>
                    <td>查詢元件 props、API 文件等技術文檔</td>
                    <td><span class="cmd">請用 context7 查詢某某 props</span></td>
                </tr>
                <tr>
                    <td>DeepWiki</td>
                    <td>查詢 GitHub 開源專案的文件與架構</td>
                    <td><span class="cmd">請用 deepwiki 查詢某套件</span></td>
                </tr>
                <tr>
                    <td>Serena</td>
                    <td>內建 LSP，支援 30+ 語言符號查找與分析</td>
                    <td>符號定位、程式碼分析</td>
                </tr>
            </tbody>
        </table>

        <hr class="divider" />

        <div class="section-label">Skill vs Agent</div>
        <h2>選哪個？</h2>
        <table class="styled-table" style="margin-bottom: 20px">
            <thead>
                <tr>
                    <th>維度</th>
                    <th>Skill</th>
                    <th>Agent</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>目標</td>
                    <td>特定任務</td>
                    <td>專屬角色（人設）</td>
                </tr>
                <tr>
                    <td>System Prompt</td>
                    <td>預設設定</td>
                    <td>由 Agent 自定義</td>
                </tr>
                <tr>
                    <td>應用場景</td>
                    <td>單一可重複工作流</td>
                    <td>跨多種任務執行相同角色</td>
                </tr>
                <tr>
                    <td>最適情境</td>
                    <td>不常使用的工作流</td>
                    <td>打造持續性「人設」</td>
                </tr>
            </tbody>
        </table>
        <div class="tip">
            <strong>Skill 最大陷阱：</strong>數量過多觸發衝突，類似 RAG 文件碰撞。50 份文件運作很好，800
            份碰撞率高。Skill 越少越好，定期合併相似 Skill。
        </div>
        <div class="tip">
            <strong>最新變化：</strong>自訂 slash commands（<span class="cmd">.claude/commands/</span>）已正式併入
            Skills（<span class="cmd">.claude/skills/</span>）。舊的
            <span class="cmd">.claude/commands/</span> 檔案仍可運作，但官方建議新指令一律改用 Skill
            的目錄結構撰寫，完整指令分類請見「⌘ 指令大全」分頁。
        </div>

        <hr class="divider" />

        <div class="section-label">Git Worktree</div>
        <h2>真正的平行開發</h2>
        <p style="color: var(--text2); font-size: 14px; margin-bottom: 16px">
            讓你從同一個 repository 建立多個獨立工作目錄，每個對應不同分支，搭配 Claude Code 實現真正平行開發。
        </p>
        <pre class="code-block">
cd my-project && claude          # 主目錄正常開發

# 開另一個終端，處理其他任務
git worktree add ../my-project-fix-bug fix/login-bug
cd ../my-project-fix-bug && claude</pre>
        <div class="card-grid" style="margin-top: 16px">
            <div class="card">
                <h3>適用情境</h3>
                <ul style="color: var(--text2); font-size: 14px; padding-left: 18px; line-height: 2">
                    <li>主分支開發新功能同時修 bug</li>
                    <li>在獨立 worktree 中 Code Review PR</li>
                    <li>實驗性開發，失敗直接刪除</li>
                </ul>
            </div>
            <div class="card">
                <h3>注意事項</h3>
                <ul style="color: var(--text2); font-size: 14px; padding-left: 18px; line-height: 2">
                    <li>每個 worktree 佔完整磁碟空間</li>
                    <li>不同 worktree 不能同時 checkout 同一分支</li>
                    <li>每個 session 有獨立 context，不互相干擾</li>
                </ul>
            </div>
        </div>

        <hr class="divider" />

        <div class="section-label">Hooks</div>
        <h2>自動化執行機制</h2>
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Hook 類型</th>
                    <th>觸發時機</th>
                    <th>用途</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>PreToolUse</td>
                    <td>工具執行前</td>
                    <td>防止特定檔案被讀取或修改（如 .env）</td>
                </tr>
                <tr>
                    <td>PostToolUse</td>
                    <td>工具執行後</td>
                    <td>執行格式化工具、linter、logger</td>
                </tr>
                <tr>
                    <td>Stop</td>
                    <td>Claude 嘗試完成時</td>
                    <td>加驗證器，強制通過前無法停止</td>
                </tr>
            </tbody>
        </table>
        <div class="tip" style="margin-top: 16px">
            <strong>Stop Hook + Verifier 威力：</strong>5 步驟 × 80% 可靠度 = 33% 整體成功率。加上 Verifier 重試機制 →
            99% 成功率（4 次嘗試）。
        </div>
    </div>
</template>
