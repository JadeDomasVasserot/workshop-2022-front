<template>
<div id="Footer">
  <h1>LE BLE POUR LE BLE</h1>
<div id="socialmedia">
  <img width="50px" src="@/assets/icons/facebook.svg">
  <img width="50px" src="@/assets/icons/instagram.svg">
  <img width="50px" src="@/assets/icons/discord.svg">
  <img width="50px" src="@/assets/icons/youtube.svg">
</div>
<div id="apropos">
  Application ERP pour faciliter la vie de nos agriculteurs et ne pas leur donner un logiciel compliqué.
</div>
<hr>
<div class="mention">
  2022 - <span class="copyright">LeBlePourLeBle WORKSHOP LYON</span> 
</div>
</div>
</template>

<script>
export default {
  name: "FooterMain"
}
</script>

<style scoped>
#Footer{
  background-color: #76BA99;
  margin-top: 10%;
}
.mention {
  color: white;
}
#apropos{
  margin-top: 50px;
  margin-bottom: 50px;
}
h1{
  text-align: center;
  color: white;
  font-size: 40px;
}
hr{
  color: white;
}

img {
margin: 2%;
}
.copyright {
  font-weight: bold;
  font-size: 16px;
}
</style>