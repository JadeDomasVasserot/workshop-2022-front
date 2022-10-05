<template>
<div id="StockList">
  <div class="container form">
    <table class="table table-success table-striped">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom</th>
      <th scope="col">Description</th>
      <th scope="col">Photo</th>
      <th scope="col">Quantité</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>

    </table>
  </div>
</div>
</template>

<script>
import axios from "axios"
export default {
  name: "StockList",
  data() {
    return {
     produits:  axios.get('http://127.0.0.1:8000/api/produits').then(rep => this.produits = rep.data),
    };
  },
  methods: {

  },
}
</script>

<style scoped>

</style>