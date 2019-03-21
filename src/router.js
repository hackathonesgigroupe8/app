
import Router from 'vue-router'

import Map from './components/Map.vue'
import Services from './components/Services.vue'
import Platform from './components/Platform.vue'



export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/map',
            name: 'Map',
            component: Map
        },
        {
            path: '/services',
            name: 'Services',
            component: Services
        },
        {
            path: '/platform',
            name: 'Platform',
            component: Platform
        },

    ]
})
