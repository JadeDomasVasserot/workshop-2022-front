<template>
<div id="Header">
  
  <div class="menu">
    <router-link to="/home"><img class="icone" src="@/assets/icons/house-fill.svg"></router-link>
    <router-link to="/home"><p> <img class="logo" src="@/assets/logo_site.png" alt=""></p></router-link>
    <router-link to="/profil"><img class="icone"  src="@/assets/icons/person-fill.svg"></router-link>
  </div>
 
</div>
</template>

<script>
export default {
  name: "HeaderMain",
  data () {
    return {

    }
  },
  methods:{

  }
}
</script>

<style scoped>
  #Header{
    background-color: #CA955C;
    padding-top: 1%;
  }
.menu{
  display: flex;
  justify-content: space-around;
}
p{
  color: white;
  font-size: 30px;
  
}
a{
  text-decoration: none;
}
.logo{
  width: 250PX;
}
.icone{
  width: 75px;
}
</style>