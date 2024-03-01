import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AdvancedSearchPage from '../pages/AdvancedSearchPage.vue'

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/advanced-search', name: 'advanced-search', component: AdvancedSearchPage }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router