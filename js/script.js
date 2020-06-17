
var invia = document.getElementById("invia");

// pulstante "invia"

invia.addEventListener("click", function () {

  // assegnazione variabili

  var nome = document.getElementById("nome").value;
  var km = document.getElementById("km").value;
  var eta = document.getElementById("eta").value;

  // calcolo prezzo

  var prezzo1 = km * 0.21;

  // calcolo sconto

  if (eta == "Minorenne"){
    prezzo1 = prezzo1 - ((prezzo1 * 20) / 100);
  }else if (eta == "Over65"){
    prezzo1 = prezzo1 - ((prezzo1 * 40) / 100);
  }

  var prezzo = prezzo1.toFixed(2);

  // gen carrozza

  var carrozza = Math.floor (Math.random() * (100000 - 90000) + 90000);

  // stampa del biglietto

  document.getElementById("nomeBiglietto").innerHTML = nome;
  document.getElementById("kmBiglietto").innerHTML = km;
  document.getElementById("etaBiglietto").innerHTML = eta;
  document.getElementById("prezzoBiglietto").innerHTML = prezzo + "€";
  document.getElementById("carrozza").innerHTML = carrozza;

  document.getElementsByClassName('biglietto')[0].style.display = "block";

})

// pulsante annulla

annulla.addEventListener("click", function(){

  // cancellamento biglietto

  document.getElementsByClassName('biglietto')[0].style.display = "none";

  document.getElementById("nome").value = " ";
  document.getElementById("km").value = " ";
  document.getElementById("eta").value = "seleziona";

})
