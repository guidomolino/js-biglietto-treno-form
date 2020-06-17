
var nome = document.getElementById("nome").value;
var km = document.getElementById("km").value;
var eta = document.getElementById("eta").value;

// calcolo prezzo

var prezzo1 = km * 0.21;

// calcolo sconto

if (eta = Minorenne){
  prezzo1 = prezzo1 - ((prezzo1 * 20) / 100);
}else if (eta = Over65){
  prezzo1 = prezzo1 - ((prezzo1 * 40) / 100);
}

var prezzo = prezzo1.toFixed(2);

// gen carrozza

var carrozza = Math.floor (Math.random() * (100000 - 90000) + 90000);

document.getElementById("nomeBiglietto") = var nome;
document.getElementById("kmBiglietto") = var km;
document.getElementById("etaBiglietto") = var eta;
document.getElementById("prezzoBiglietto") = var prezzo;
document.getElementById("carrozza") = var carrozza;
