import Vue from 'vue'
import Router from 'vue-router'
import HomeView from "@/Views/HomeView";
import AboutMakersView from "@/Views/AboutMakersView";
import ProductsView from "@/Views/ProductsView";
import PreviousProjectsView from "@/Views/PreviousProjectsView";
import StartupsCommunityView from "@/Views/StartupsCommunityView";
import AboutIRADA from "@/Views/AboutIRADA";

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/irada',
        component: AboutIRADA
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

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
