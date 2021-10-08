// Constructeur
function Stagiaire(id, nom, prenom, email, etude, bio) {
  this.id = id;
  this.nom = nom;
  this.prenom = prenom;
  this.email = email;
  this.etude = etude;
  this.bio = bio;
}
// déclaration variable
const nom = document.querySelector("#validationServer01");
const prenom = document.querySelector("#validationServer02");
const email = document.querySelector("#exampleInputEmail1");
const etude = document.querySelector("#validationServer04");
const bio = document.querySelector("#validationTextarea");
const formStagiaire = document.querySelector("#formStagiaire");
const regex = RegExp("[0123456789]");
const regexMail1 = RegExp("[@]");
const regexMail2 = RegExp(".fr$|.com$|.net$");

//Vérification du nom
nom.addEventListener("keyup", function () {
  if (nom.value.length < 3) {
    nom.classList.add("is-invalid");
  } else if (regex.test(nom.value)) {
    nom.classList.add("is-invalid");
  } else {
    nom.classList.remove("is-invalid");
    nom.classList.add("is-valid");
  }
});
nom.addEventListener("input", function () {
  nom.setCustomValidity("");
  nom.checkValidity();
});
nom.addEventListener("invalid", function () {
  if (nom.value === "") {
    nom.setCustomValidity("Veuillez saisir votre nom !");
  } else {
    nom.setCustomValidity(
      "Votre nom ne peut contenir que des lettres minuscules et majuscules, veuillez réessayer"
    );
  }
});

//Vérification du prénom
prenom.addEventListener("keyup", function () {
  if (prenom.value.length < 3) {
    prenom.classList.add("is-invalid");
  } else if (regex.test(prenom.value)) {
    prenom.classList.add("is-invalid");
  } else {
    prenom.classList.remove("is-invalid");
    prenom.classList.add("is-valid");
  }
});
prenom.addEventListener("input", function () {
  prenom.setCustomValidity("");
  prenom.checkValidity();
});
prenom.addEventListener("invalid", function () {
  if (prenom.value === "") {
    prenom.setCustomValidity("Veuillez saisir votre prénom !");
  } else {
    prenom.setCustomValidity(
      "Votre prénom ne peut contenir que des lettres minuscules et majuscules, veuillez réessayer"
    );
  }
});

//Vérification du mail
email.addEventListener("keyup", function () {
  if (regexMail1.test(email.value) === false) {
    email.classList.add("is-invalid");
  } else if (regexMail2.test(email.value) === false) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  }
});
email.addEventListener("input", function () {
  email.setCustomValidity("");
  email.checkValidity();
});
email.addEventListener("invalid", function () {
  if (email.value === "") {
    email.setCustomValidity("Veuillez saisir votre email !");
  } else {
    email.setCustomValidity("Votre email doit contenir un @ !");
  }
});

//Vérification de la bio
bio.addEventListener("input", function () {
  bio.setCustomValidity("");
  bio.checkValidity();
  if (bio.value.length === 0) {
    bio.classList.add("is-invalid");
  } else {
    bio.classList.remove("is-invalid");
  }
});
bio.addEventListener("invalid", function () {
  if (bio.value === "") {
    bio.setCustomValidity("Veuillez saisir votre bio !");
  }
});

// Listener sur le submit
formStagiaire.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = uuid.v4();
  const newStagiaire = new Stagiaire(
    (id.value = id),
    nom.value,
    prenom.value,
    email.value,
    etude.value,
    bio.value
  );
  let stagiaires = localStorage.getItem("stagiaires");
  if (stagiaires === null) {
    let listeStagiaire = [];
    listeStagiaire.push(newStagiaire);
    localStorage.setItem("stagiaires", JSON.stringify(listeStagiaire));
  } else {
    stagiaires = JSON.parse(stagiaires);
    stagiaires.push(newStagiaire);
    localStorage.setItem("stagiaires", JSON.stringify(stagiaires));
  }

  window.location = "./listesDesStagiaires.html";
});
