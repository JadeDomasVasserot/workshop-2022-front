<template>
 <div id="app">
   <HeaderMain></HeaderMain>
   <NavBar></NavBar>
   <router-view></router-view>
   <FooterMain></FooterMain>
 </div>
</template>

<script>
import NavBar from "@/components/composants/Nav/NavBar.vue";
import FooterMain from "@/components/composants/Footer/FooterMain.vue";
import HeaderMain from "@/components/composants/Header/HeaderMain";

export default{
  name: 'App',
  components: {FooterMain, HeaderMain, NavBar}
}
</script>

<style>

</style>
