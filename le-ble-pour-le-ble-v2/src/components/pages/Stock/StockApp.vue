<template>
<div id="StockApp">
<NavBar></NavBar>
<router-view></router-view>
</div>
</template>
/div>
<script>
import NavBar from "../../composants/Nav/NavBar.vue"
export default {
  name: "StockApp",
  components:{
    NavBar
  }
}
</script>

<style scoped>

</style>