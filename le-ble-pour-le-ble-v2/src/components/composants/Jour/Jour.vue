<template>
    <div id="jourSemaine" class="bg-success w-25 border border-dark ">
        <p class="border-bottom border-dark m-0"> {{jour}} </p>
        <div class="height500">
            <div class="w-100 height250 d-inline-block border-bottom border-dark"></div>
            <div class="w-100 height250 d-inline-block"></div>
        </div>
        
    </div>
</template>
      
<script>
export default {
  name: "Jour",
  props: ['jour']
}
</script>
<style scoped>
    .height500{
        min-height: 500px;
    }
    
    .height250{
        min-height: 250px;
    }
</style>