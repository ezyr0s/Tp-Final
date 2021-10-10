const stagiaires = JSON.parse(localStorage.getItem("stagiaires"));

const listeStag = document.querySelector("#listeStag");
for (let i = 0; i < stagiaires.length; i++) {
  const tr = document.createElement("tr");
  const tdNom = document.createElement("td");
  tdNom.innerText = stagiaires[i].nom;

  const tdPrenom = document.createElement("td");
  tdPrenom.innerText = stagiaires[i].prenom;

  const tdEmail = document.createElement("td");
  tdEmail.innerText = stagiaires[i].email;

  const tdEtudes = document.createElement("td");
  tdEtudes.innerText = stagiaires[i].etude;

  const tdBio = document.createElement("td");
  tdBio.innerText = stagiaires[i].bio;

  const tdDelete = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-outline-danger", "mx-2");
  tdDelete.classList.add("text-center");
  const tdsee = document.createElement("td");
  const seeButton = document.createElement("button");
  seeButton.classList.add("btn", "btn-outline-dark");
  deleteButton.innerText = "Supprimer";
  tdDelete.append(seeButton, deleteButton);

  seeButton.innerHTML = "<i class='fa fa-eye'></i>";
  deleteButton.innerHTML = "<i class='fa fa-trash'></i>";

  seeButton.addEventListener("click", function () {
    const voirNom = document.querySelector("#voirNom");
    voirNom.innerText = "Nom du stagiaire : " + stagiaires[i].nom;

    const voirPrenom = document.querySelector("#voirPrenom");
    voirPrenom.innerText = "Prénom du stagiaire : " + stagiaires[i].prenom;

    const voirEmail = document.querySelector("#voirEmail");
    voirEmail.innerText = "Email du stagiaire : " + stagiaires[i].email;

    const voirEtudes = document.querySelector("#voirEtudes");
    voirEtudes.innerText =
      "Etudes effecutées par stagiaire : " + stagiaires[i].etude;

    const voirBio = document.querySelector("#voirBio");
    voirBio.innerText = "Bio du stagiaire : " + stagiaires[i].bio;

    const voir = document.querySelector("#voir");
    voir.classList.add("voir");
    voir.classList.remove("hidden");
  });

  deleteButton.addEventListener("click", function () {
    const index = stagiaires.findIndex(function (stagiaire) {
      return (stagiaire.id = stagiaires[i].id);
    });

    stagiaires.splice(index, 1);
    localStorage.setItem("stagiaires", JSON.stringify(stagiaires));
    window.location = "./listesDesStagiaires.html";
  });

  listeStag.appendChild(tr);
  tr.append(tdNom, tdPrenom, tdEmail, tdEtudes, tdBio, tdDelete);
}
