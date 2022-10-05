<template>
  <div id="SignIn">
    <div class="container title">
      <h2>Le Blé pour le Blé</h2>
    </div>
    <div class="container form">
      <h2 class="Inscription">Inscription</h2>
      <form class="row g-3" action="/sign-in">
  <div class="col-md-6">
    <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="mail"
            name="mail"
          />
          <label for="floatingInput" class="form-label">Adresse Email</label>
        </div>
  </div>
  <div class="col-md-6">
    <div class="form-floating mb-3">
          <input
            type="tel"
            class="form-control"
            id="floatingInput"
            placeholder="tel"
            name="tel"
          />
          <label for="floatingInput" class="form-label">Téléphone</label>
        </div>
  </div>
  <div class="col-md-6">
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="nom" name="nom">
        <label for="floatingInput" class="form-label">Nom</label>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="prenom" name="prenom">
        <label for="floatingInput" class="form-label">Prénom</label>
    </div>
  </div>
  <div class="col-12">
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="adresse" name="adresse">
        <label for="floatingInput" class="form-label">Adresse</label>
    </div>
  </div>
  <div class="col-md-6">
        <div class="form-floating  mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Mot de passe"
          />
          <label for="floatingPassword">Mot de passe</label>
        </div>
</div>  
<div class="col-md-6">
        <div class="form-floating  mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword2"
            placeholder="Confirmation du mot de passe"
          />
          <label for="floatingPassword">Confirmation du Mot de passe</label>
        </div>
    </div>
      </form>
      <p class="password">Vous avez déjà un compte ?
      <router-link  to="/"
        >Connexion</router-link
      >
    </p>
      <button type="submit" class="btn btn-success">
        Créer son compte
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
            S'inscrire avec Google
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
            S'inscrire avec facebook
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#SignIn {
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
