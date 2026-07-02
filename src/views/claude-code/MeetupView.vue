<template>
    <div>
        <div class="hero">
            <div class="hero-label">Claude Code Meetup Taipei — 2026.04</div>
            <h1>Meetup<br /><em>實戰筆記</em></h1>
            <p>David Chu & Jeffrey Lin 的演講重點整理，從混亂到系統化 Agent 架構的完整路徑。</p>
        </div>

        <div class="section-label">講者</div>
        <div class="speaker-card">
            <div class="avatar avatar-green">DC</div>
            <div>
                <div style="font-weight: 700; margin-bottom: 4px">
                    David Chu <span class="badge badge-green" style="margin-left: 8px">前 ENS 團隊</span>
                </div>
                <div style="color: var(--text2); font-size: 14px">
                    從 100% Claude 生成程式碼的混亂實踐，到系統化的 CLAUDE.md 管理策略與 5 層 Agent 進化框架。
                </div>
            </div>
        </div>
        <div class="speaker-card">
            <div class="avatar avatar-blue">JL</div>
            <div>
                <div style="font-weight: 700; margin-bottom: 4px">
                    Jeffrey Lin <span class="badge badge-blue" style="margin-left: 8px">ABConvert 創辦人</span>
                </div>
                <div style="color: var(--text2); font-size: 14px">
                    年收超過 100 萬美金的 Shopify A/B 測試應用，從自學開發者到多 Agent 架構的真實演進歷程。
                </div>
            </div>
        </div>

        <hr class="divider" />

        <div class="section-label">David Chu — 5 層進化框架</div>
        <h2>AI 代理進化路徑</h2>
        <div class="level-track" style="margin-bottom: 36px">
            <div class="level-item reached">
                <div class="level-dot">L1</div>
                <div class="level-title">對話式（Conversational）</div>
                <div class="level-desc">你輸入提示 → Claude 回應 → 你作出反應。最基礎的互動模式。</div>
                <div class="level-tag">▲ 大多數人停留在此</div>
            </div>
            <div class="level-item reached">
                <div class="level-dot">L2</div>
                <div class="level-title">配置式（Configured）</div>
                <div class="level-desc">CLAUDE.md 引導行為，記憶保留學習成果。開始積累知識。</div>
                <div class="level-tag">▲ 大多數人停留在此</div>
            </div>
            <div class="level-item partial">
                <div class="level-dot">L3</div>
                <div class="level-title">自動化（Automated）⭐</div>
                <div class="level-desc">
                    Hooks 強制執行規則 + Skills 將工作流程編碼。自動執行常見工作流，減少重複提示。
                </div>
                <div class="level-tag">▲ 第一個進階目標</div>
            </div>
            <div class="level-item">
                <div class="level-dot">L4</div>
                <div class="level-title">編排式（Orchestrated）⭐</div>
                <div class="level-desc">自訂 Agents 具備特定角色、工具與記憶。多個 Agent 協同工作，角色分工明確。</div>
                <div class="level-tag">▲ 進階目標</div>
            </div>
            <div class="level-item">
                <div class="level-dot">L5</div>
                <div class="level-title">自主式（Autonomous）</div>
                <div class="level-desc">Agent 團隊獨立運作並相互驗證成果。大多數企業目前還不可達。</div>
            </div>
        </div>

        <hr class="divider" />

        <div class="section-label">Jeffrey Lin — ABConvert 案例</div>
        <h2>實績數據</h2>
        <div class="stat-row">
            <div class="stat-card">
                <div class="stat-num">2K+</div>
                <div class="stat-label">用戶數</div>
            </div>
            <div class="stat-card">
                <div class="stat-num">$1M+</div>
                <div class="stat-label">年營收</div>
            </div>
            <div class="stat-card">
                <div class="stat-num">2.5x</div>
                <div class="stat-label">上季 PR = 過去 2.5 年總和</div>
            </div>
        </div>

        <div class="section-label" style="margin-top: 32px">4 層技術架構</div>
        <div class="arch">
            <div class="arch-layer">
                <div
                    class="arch-num"
                    style="background: var(--tip-bg); color: var(--accent); border: 1px solid var(--border)"
                >
                    4
                </div>
                <div class="arch-content">
                    <div class="arch-title">編排層（Orchestration Layer）</div>
                    <div class="arch-sub">原則 & 協調：n8n、Linear、OpenClaw</div>
                </div>
            </div>
            <div class="arch-layer">
                <div
                    class="arch-num"
                    style="background: var(--tip-bg); color: var(--accent2); border: 1px solid var(--tip-border)"
                >
                    3
                </div>
                <div class="arch-content">
                    <div class="arch-title">Context 層（Context Layer）</div>
                    <div class="arch-sub">策略內容：GitHub、Notion、Skills.md</div>
                </div>
            </div>
            <div class="arch-layer">
                <div
                    class="arch-num"
                    style="
                        background: rgba(184, 115, 51, 0.1);
                        color: var(--accent3);
                        border: 1px solid rgba(184, 115, 51, 0.2);
                    "
                >
                    2
                </div>
                <div class="arch-content">
                    <div class="arch-title">資料層（Data Layer）</div>
                    <div class="arch-sub">信息來源：PostHog、Intercom、MongoDB、Google Cloud</div>
                </div>
            </div>
            <div class="arch-layer">
                <div
                    class="arch-num"
                    style="
                        background: rgba(192, 57, 43, 0.08);
                        color: var(--accent4);
                        border: 1px solid rgba(192, 57, 43, 0.18);
                    "
                >
                    1
                </div>
                <div class="arch-content">
                    <div class="arch-title">執行層（Execution Layer）</div>
                    <div class="arch-sub">構建交付：Claude Code、GitHub Actions、Cron、腳本</div>
                </div>
            </div>
        </div>

        <div class="section-label" style="margin-top: 32px">4 大 Agent 角色</div>
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Agent</th>
                    <th>職責</th>
                    <th>輸入源</th>
                    <th>運作模式</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>SRE Agent</td>
                    <td>監控日誌、推送修復</td>
                    <td>應用日誌</td>
                    <td><span class="badge badge-red">24/7 持續</span></td>
                </tr>
                <tr>
                    <td>技術支援 Agent</td>
                    <td>抓取對話、問題排查</td>
                    <td>Intercom</td>
                    <td><span class="badge badge-orange">按需觸發</span></td>
                </tr>
                <tr>
                    <td>產品工程 Agent</td>
                    <td>接收工單、交付功能</td>
                    <td>Linear</td>
                    <td><span class="badge badge-blue">按優先級</span></td>
                </tr>
                <tr>
                    <td>知識 Agent</td>
                    <td>回答內部問題、數據提取</td>
                    <td>Slack/PostHog</td>
                    <td><span class="badge badge-green">常駐 Slack</span></td>
                </tr>
            </tbody>
        </table>

        <hr class="divider" />

        <div class="section-label">核心結論</div>
        <h2>兩位講者的共同洞察</h2>
        <div class="quote">
            <p>工具成長來自實際摩擦，不是提前優化。基礎決定上限——基礎差，AI 也無法放大優勢。</p>
        </div>
        <div class="card-grid" style="margin-top: 20px">
            <div class="card">
                <h3>David 的路徑</h3>
                <pre class="code-block" style="font-size: 12px; margin-top: 8px">
遇到問題
→ 加規則到 CLAUDE.md
→ 不遵守
→ 升級為 Hook/Skill/Agent</pre>
            </div>
            <div class="card">
                <h3>Jeffrey 的路徑</h3>
                <pre class="code-block" style="font-size: 12px; margin-top: 8px">
清理代碼
→ 建立 context
→ 試驗 agents
→ 測量改善 → 持續委派</pre>
            </div>
        </div>
    </div>
</template>
