import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwindcss.css'
import VueRouter from 'vue-router'
// import router from './router'

// Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
    VueRouter,
    render: h => h(App)
}).$mount('#app')
