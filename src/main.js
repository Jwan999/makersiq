import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwindcss.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
    router,
    axios,
    VueAxios,
    render: h => h(App)
}).$mount('#app')

// Vue.use(VueA xios, axios)