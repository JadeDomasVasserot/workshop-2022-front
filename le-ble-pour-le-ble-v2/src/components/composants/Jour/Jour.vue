<template>
    <div id="jourSemaine" class="bg-success w-50 rounded border border-dark m-l-1">
        <p class="border-bottom border-dark "> {{jour}} </p>
    </div>
</template>
      
<script>
export default {
  name: "Jour",
  props: ['jour']
}
</script>
      
    <style scoped>
      
</style>