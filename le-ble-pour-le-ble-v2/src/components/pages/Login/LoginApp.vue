<template>
  <div id="LoginApp">
    <div class="container title">
      <h2>Le Blé pour le Blé</h2>
    </div>
    <div class="container form">
      <h2 class="Inscription">Connexion</h2>
      <form action="/login">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Adresse Email</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Mot de passe</label>
        </div>
      </form>
      <router-link class="password" to="/password"
        >Mot de passe oublié ?</router-link
      >
      <button type="submit" class="btn btn-success button">
        Se connecter
      </button>

      <div class="row g-3">
        <div class="col-md-3 button" >
          <a
            class="btn btn-outline-dark  button-google"
            href="/users/googleauth"
            role="button"
            style="text-transform:none;  width: 300px"
          >
            <img
              width="20px"
              style="margin-bottom:3px; margin-right:5px"
              alt="Google sign-in"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            />
            Se connecter avec Google
          </a>
        </div>
        <div class="col-md-3 button" >
          <a
            class="btn btn-outline-dark  button-google"
            href="/users/googleauth"
            role="button"
            style="text-transform:none;  width: 300px"
          >
            <img
              width="20px"
              style="margin-bottom:3px; margin-right:5px"
              alt="Google sign-in"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
            />
            Se connecter avec facebook
          </a>
        </div>
      </div>
    <p class="sign-up">Pas encore de compte ?
      <router-link  to="/sign-in"> S'inscrire </router-link>
    </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginApp",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#LoginApp {
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
.sign-up{
  margin-top: 5%;
  font-size: 20px;
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
