const lista_email = [
  "Crocifissa@gmail.com",
  "LitterioScalisi@gmail.com",
  "SalvoLaRosa@gmail.com",
  "RenatoZero@gmail.com",
  "AldoBaglio@gmail.com",
];

const button = document.getElementById("accedi-button");

button.addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let email_confermata = false;

  for (let i = 0; i < lista_email.length; i++) {
    if (lista_email[i].toLowerCase() === email.toLowerCase()) {
      email_confermata = true;
    }
  }

  if (email_confermata === true) {
    document.getElementById("messaggio").innerText =
      "Autenticazione effettuata con successo";
  } else {
    document.getElementById("messaggio").innerText = "Autenticazione fallita";
  }
});
