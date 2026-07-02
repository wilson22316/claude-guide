import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClaudeCodeLayout from '../views/claude-code/ClaudeCodeLayout.vue'

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/claude-code',
        component: ClaudeCodeLayout,
        redirect: '/claude-code/setup',
        children: [
            { path: 'setup', component: () => import('../views/claude-code/SetupView.vue') },
            { path: 'commands', component: () => import('../views/claude-code/CommandsView.vue') },
            { path: 'claude-md', component: () => import('../views/claude-code/ClaudeMdView.vue') },
            { path: 'prompts', component: () => import('../views/claude-code/PromptsView.vue') },
            { path: 'advanced', component: () => import('../views/claude-code/AdvancedView.vue') },
            { path: 'meetup', component: () => import('../views/claude-code/MeetupView.vue') },
            { path: 'checklist', component: () => import('../views/claude-code/ChecklistView.vue') },
        ],
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior: () => ({ top: 0 }),
})
