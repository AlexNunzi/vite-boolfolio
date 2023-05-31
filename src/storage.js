import {reactive} from 'vue';

export const storage = reactive(
    {
        navLinks: [
            {
                label: 'Home',
                routeName: 'home'
            },
            {
                label: 'About-us',
                routeName: 'about-us'
            },
            {
                label: 'Projects',
                routeName: 'projects'
            }
        ],
        baseUrl: 'http://localhost:8000',
    }
);