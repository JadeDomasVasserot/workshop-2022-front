import Vue from 'vue';
import Router from 'vue-router';
import Login from "@/components/pages/Login/LoginApp";
import SignIn from "@/components/pages/Login/SignIn";
import ForgetPassword from "@/components/pages/Login/ForgetPassword";
import Stock from "@/components/pages/Stock/StockApp";
import Accueil from "@/components/pages/Accueil/AccueilApp";
import AccueilComponent from "@/components/pages/Accueil/AccueilComponent";
import Calendrier from "@/components/pages/Calendrier/CalendrierApp";
import ProfilComponent from "@/components/pages/Profil/ProfilComponent";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/password',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/home',
      name: 'AccueilApp',
      component: Accueil,
      children: [
        {
          path: '/',
          name: 'AccueilComponent',
          component: AccueilComponent
        },
        {
          path: '/profil',
          name: 'Profil',
          component: ProfilComponent
        },
        {
          path: '/stock',
          name: 'StockApp',
          component: Stock
        },
       
        {
          path: '/calendrier',
          name: 'CalendrierApp',
          component: Calendrier
        },
      ]
    },
   
  ]
})
