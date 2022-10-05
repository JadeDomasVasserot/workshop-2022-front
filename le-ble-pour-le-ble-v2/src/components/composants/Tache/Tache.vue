<template>
  <div id="Tache">
    <div>
      <input type="button" v-model="nameTache" class="border border-dark mx-3 px-3 ">

    </div>
  </div>
</template>
    
<script>
export default {
  name: "Tache",
  props: ['nameTache']
}
</script>
    
<style scoped>
    
</style>