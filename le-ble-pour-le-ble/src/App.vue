<template>
 <div id="App">
   <Header></Header>
   <Nav></Nav>
   <router-view></router-view>
   <Footer></Footer>
 </div>
</template>

<script>
import Header from "@/components/composants/Header/Header-component.vue";
import Nav from "@/components/composants/Nav/Nav-component.vue";
import Footer from "@/components/composants/Footer/Footer-component.vue";

export default{
  name: 'App',
  components: {Header, Nav, Footer}
}
</script>

<style>

</style>
