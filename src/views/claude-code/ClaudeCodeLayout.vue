<script setup>
const tabs = [
    { path: '/claude-code/setup', label: '啟動 & 基本操作' },
    { path: '/claude-code/commands', label: '⌘ 指令大全' },
    { path: '/claude-code/claude-md', label: 'CLAUDE.md' },
    { path: '/claude-code/prompts', label: '提示詞技巧' },
    { path: '/claude-code/advanced', label: '進階功能' },
    { path: '/claude-code/meetup', label: 'Meetup 筆記' },
    { path: '/claude-code/checklist', label: '✓ 實踐清單' },
]
</script>

<template>
    <nav class="sub-nav">
        <div class="nav-tabs">
            <RouterLink v-for="tab in tabs" :key="tab.path" v-slot="{ isActive, navigate }" :to="tab.path" custom>
                <button :class="['tab-btn', { active: isActive }]" @click="navigate">
                    {{ tab.label }}
                </button>
            </RouterLink>
        </div>
    </nav>
    <section class="section">
        <RouterView />
    </section>
</template>
