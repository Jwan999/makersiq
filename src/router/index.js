import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../App.vue'
import AboutMakersView from "@/Views/AboutMakersView";
import ProductsView from "@/Views/ProductsView";
import PreviousProjectsView from "@/Views/PreviousProjectsView";
import StartupsCommunityView from "@/Views/StartupsCommunityView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/about',
        component: AboutMakersView
    },
    {
        path: '/products',

        component: ProductsView
    },
    {
        path: '/projects',

        component: PreviousProjectsView
    },
    {
        path: '/startups',

        component: StartupsCommunityView
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
