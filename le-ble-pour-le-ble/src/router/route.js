import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/pages/Login/Login";
import Accueil from "@/components/pages/Accueil/Accueil";
import Stock from "@/components/pages/Stock/Stock";
import Calendrier from "@/components/pages/Calendrier/Calendrier";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: 'stock',
            component: Stock
        },
        {
            path: '/',
            name: 'home',
            component: Accueil
        },
        {
            path: '/',
            name: 'calendrier',
            component: Calendrier
        },
    ]
})
