<template>
    <div id="ForgetPassword">
      <div class="container title">
        <h2>Le Blé pour le Blé</h2>
      </div>
      <div class="container form">
        <h2 class="Inscription">Récupération mot de passe</h2>
        <form action="/forgetPassword">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Adresse Email</label>
          </div>
        </form>
        <router-link class="password" to="/"
          >Mot de passe oublié ?</router-link
        >
        <button type="submit" class="btn btn-success button">
          Envoyé
        </button>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ForgetPassword",
    data() {
      return {};
    },
    methods: {}
  };
  </script>
  
  <style scoped>
  #ForgetPassword {
    display: flex;
    background-image: url("../../../assets/login_img.jpg");
    /* Fixe l'image en haut à gauche de la page */
    position: fixed;
    top: 0;
    left: 0;
    /* Préserve le ratio de l'image */
    min-width: 100%;
    min-height: 100%;
  }
  .button {
    margin-top: 5%;
    margin-left: 15%;
  }
  .button-google {
      margin-top: 5%;
  }
  .password {
    float: right;
    margin-top: 3%;
  }
  .Inscription {
    color: darkgreen;
    margin-top: 10%;
  }
  form {
    margin-top: 10%;
    color: green;
    width: 80%;
    margin-left: 10%;
  }
  
  .form {
    background-color: white;
    width: 100%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .title {
    text-align: center;
    color: white;
  }
  .title h2 {
    font-size: 50px;
    font-weight: bold;
    margin-top: 40%;
  
  }
  </style>
  