<template>
    <div id="semaine" class="d-flex justify-content-evenly align-items-stretch">
        <Jour jour="Lundi" class="jour"></Jour>
        <Jour jour="Mardi" class="jour"></Jour>
        <Jour jour="Mercredi" class="jour"></Jour>
        <Jour jour="Jeudi" class="jour"></Jour>
        <Jour jour="Vendredi" class="jour"></Jour>
        <Jour jour="Samedi" class="jour"></Jour>
        <Jour jour="Dimanche" class="jour"></Jour>
    </div>
    <!-- 
        <div id="semaine" class="container row text-center m-0 p-0">
        <Jour jour="Lundi" class="jour col"></Jour>
        <Jour jour="Mardi" class="jour col"></Jour>
        <Jour jour="Mercredi" class="jour col"></Jour>
        <Jour jour="Jeudi" class="jour col"></Jour>
        <Jour jour="Vendredi" class="jour col"></Jour>
        <Jour jour="Samedi" class="jour col"></Jour>
        <Jour jour="Dimanche" class="jour col"></Jour>
    </div>
    -->
</template>
      
<script>
  import Jour from '../../composants/Jour/Jour.vue';

export default {
  name: "Semaine",
  components: {Jour}
}
</script>
      
    <style scoped>
      
</style>