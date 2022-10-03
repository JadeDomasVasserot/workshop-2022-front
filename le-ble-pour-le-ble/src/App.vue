<template>
 <Header></Header>
  <Nav></Nav>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/composants/Header/Header.vue";
import Nav from "@/components/composants/Nav/Nav.vue";
import Footer from "@/components/composants/Footer/Footer.vue";

export default{
  name: 'App',
  components: {Header, Nav, Footer}
}
</script>

<style>

</style>
