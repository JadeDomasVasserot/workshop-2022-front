<template>
  <div id="Tache" class="bg-yellow w-50 border border-dark m-l-1">
    <div>
      <p> {{nameTache}} </p>
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