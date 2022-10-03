import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/pages/Login/LoginApp";
import Accueil from "@/components/pages/Accueil/AccueilApp";
import Stock from "@/components/pages/Stock/StockApp";
import Calendrier from "@/components/pages/Calendrier/CalendrierApp";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'LoginApp',
            component: Login
        },
        {
            path: '/stock',
            name: 'StockApp',
            component: Stock
        },
        {
            path: '/home',
            name: 'AccueilApp',
            component: Accueil
        },
        {
            path: '/calendrier',
            name: 'CalendrierApp',
            component: Calendrier
        },
    ]
})
