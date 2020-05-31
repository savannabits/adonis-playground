// ... other imports
import Index from '@/components/Index'
import About from '@/components/About'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    // ... other settings
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
    ]
})