import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import VueRouter from 'vue-router'

Vue.use(VueRouter);

new Vue({
    router,
    components: {App},
    template: '<App/>',
    created() {
        this.$router.push('/map')
    },
}).$mount('#app');
