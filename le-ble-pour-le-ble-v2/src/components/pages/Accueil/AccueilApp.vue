<template>
<div id="AccueilApp">
<NavBar></NavBar>
<HeaderMain></HeaderMain>
<router-view></router-view>
<FooterMain></FooterMain>
</div>
</template>

<script>
import NavBar from "../../composants/Nav/NavBar.vue"
import HeaderMain from "../../composants/Header/HeaderMain.vue"
import FooterMain from "../../composants/Footer/FooterMain.vue"
export default {
  name: "AccueilApp",
  components:{NavBar, HeaderMain, FooterMain}
}
</script>
<style scoped>

</style>