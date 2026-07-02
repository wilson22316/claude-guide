import { ref } from 'vue'

const theme = ref('light')

export function useTheme() {
    function setTheme(mode) {
        theme.value = mode
        document.documentElement.classList.toggle('dark', mode === 'dark')
        localStorage.setItem('theme', mode)
    }

    function initTheme() {
        const saved = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(saved || (prefersDark ? 'dark' : 'light'))
    }

    return { theme, setTheme, initTheme }
}
