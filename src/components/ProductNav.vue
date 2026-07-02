<script setup>
import { useRoute, useRouter } from 'vue-router'

defineProps({ theme: { type: String, default: 'light' } })
const emit = defineEmits(['set-theme'])
const route = useRoute()
const router = useRouter()

const products = [
    {
        id: 'home',
        label: '首頁',
        path: '/',
        isActive: () => route.path === '/',
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    },
    {
        id: 'claude-code',
        label: 'Claude Code',
        path: '/claude-code',
        isActive: () => route.path.startsWith('/claude-code'),
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    },
    // 之後新增產品只需要在這裡加一筆：
    // { id: 'claude-cowork', label: 'Claude Cowork', path: '/claude-cowork', isActive: () => route.path.startsWith('/claude-cowork'), icon: '...' }
]
</script>

<template>
    <nav class="product-nav">
        <a class="nav-logo" href="#">$ claude</a>
        <div class="product-tabs">
            <button
                v-for="p in products"
                :key="p.id"
                :class="['product-btn', { active: p.isActive() }]"
                @click="router.push(p.path)"
            >
                <!-- icon 為程式內寫死的 SVG 字串，非使用者輸入 -->
                <!-- eslint-disable-next-line vue/no-v-html -->
                <span style="display: flex; align-items: center" v-html="p.icon"></span>
                {{ p.label }}
            </button>
        </div>
        <div class="theme-toggle">
            <div
                :class="['theme-seg', { active: theme === 'light' }]"
                title="淺色模式"
                @click="emit('set-theme', 'light')"
            >
                ☀
            </div>
            <div
                :class="['theme-seg', { active: theme === 'dark' }]"
                title="深色模式"
                @click="emit('set-theme', 'dark')"
            >
                ☽
            </div>
        </div>
    </nav>
</template>
