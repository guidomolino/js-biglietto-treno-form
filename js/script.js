
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

document.getElementById("nomeBiglietto").innerHTML = var nome;
document.getElementById("kmBiglietto").innerHTML = var km;
document.getElementById("etaBiglietto").innerHTML = var eta;
document.getElementById("prezzoBiglietto").innerHTML = var prezzo;
document.getElementById("carrozza").innerHTML = var carrozza;
