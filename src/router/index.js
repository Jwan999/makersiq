import Vue from 'vue'
import Router from 'vue-router'
import HomeView from "@/Views/HomeView";
import AboutMakersView from "@/Views/AboutMakersView";
import ProductsView from "@/Views/ProductsView";
import PreviousProjectsView from "@/Views/PreviousProjectsView";
import StartupsCommunityView from "@/Views/StartupsCommunityView";

Vue.use(Router)

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


    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
