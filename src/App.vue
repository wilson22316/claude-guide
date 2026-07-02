<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from './composables/useTheme'
import ProductNav from './components/ProductNav.vue'

const route = useRoute()
const { theme, setTheme, initTheme } = useTheme()

onMounted(initTheme)
</script>

<template>
    <ProductNav :theme="theme" @set-theme="setTheme" />
    <div :class="['main', { 'view-claude-code': route.path.startsWith('/claude-code') }]">
        <RouterView />
    </div>
</template>
