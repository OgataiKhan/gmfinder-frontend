import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AdvancedSearchPage from '../pages/AdvancedSearchPage.vue'
import GameMasterPage from '../pages/GameMasterPage.vue'
import ErrorPage from '../pages/ErrorPage.vue'


const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/advanced-search', name: 'advanced-search', component: AdvancedSearchPage },
    { path: '/game-master', name: 'game-master', component: GameMasterPage },
    { path: '/:pathMatch(.*)*', name: 'error', component: ErrorPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    //add scroll behavior
    scrollBehavior() {
        return { top: 0, behavior: 'auto' }
    }
})

export default router

