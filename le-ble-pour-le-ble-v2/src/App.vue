<template>
  <div id="app">
  <header-main></header-main>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <footer-main></footer-main>
  </div>
</template>

<script>
import HeaderMain from "./components/composants/Header/HeaderMain.vue"
import NavBar from "./components/composants/Nav/NavBar.vue"
import FooterMain from "./components/composants/Footer/FooterMain.vue"

export default {
  components: { HeaderMain, NavBar, FooterMain },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
