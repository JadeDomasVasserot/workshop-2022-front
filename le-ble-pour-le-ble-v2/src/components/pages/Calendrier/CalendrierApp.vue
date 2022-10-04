<template>
<div id="CalendrierApp" class="">
  <div id="head" class="d-flex justify-content-evenly align-items-stretch border border-dark p-1">
    <Tache nameTache="Météo" id="meteo" class="tache"></Tache>
    <Tache nameTache="Arrosage" id="arrosage" class="tache"></Tache>
    <Tache nameTache="+" id="ajouter" class="modification"></Tache>
    <Tache nameTache="-" id="supprimer" class="modification"></Tache>
  </div>
    <Semaine></Semaine>
  <div id="body">
    
  </div>
  </div>
</template>

<script>
  import Tache from '../../composants/Tache/Tache.vue';
  import Semaine from '../../composants/Semaine/Semaine.vue';
  export default {
    components: {Tache,Semaine},
    name: "CalendrierApp"
  }
</script>

<style scoped>

</style>