import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAboutUs from './pages/AppAboutUs.vue';
import AppProjects from './pages/AppProjects.vue';
import ProjectInfo from './pages/ProjectInfo.vue';
import NotFound from './pages/NotFound.vue';
import AppContact from './pages/AppContact.vue';

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
        {
            path: '/Contact-us',
            name: 'contact-us',
            component: AppContact
        },
        {
            path: '/Projects/:slug',
            name: 'project-info',
            component: ProjectInfo
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
});
export { router };