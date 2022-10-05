<template>
<div id="CalendrierApp" class="">
  <div id="head" class="d-flex justify-content-between border-bottom border-dark p-3">
    <div class="d-flex">
      <Tache nameTache="Météo" id="meteo" class="tache"></Tache>
      <Tache nameTache="Arrosage" id="arrosage" class="tache"></Tache>
    </div>
    <div class="d-flex">
      <Tache nameTache="+" id="ajouter" class="modification"></Tache>
      <Tache nameTache="-" id="supprimer" class="modification"></Tache>
    </div>
  </div>
  <div id="body" class="h-100">
    <Semaine ></Semaine>
    <Semaine></Semaine>
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