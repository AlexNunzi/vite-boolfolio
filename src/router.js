import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAboutUs from './pages/AppAboutUs.vue';
import AppProjects from './pages/AppProjects.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/About-us',
            name: 'about-us',
            component: AppAboutUs
        },
        {
            path: '/Projects',
            name: 'projects',
            component: AppProjects
        },
    ]
});
export { router };