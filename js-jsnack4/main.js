 // Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// creo array vuoto
var array = [];

// chiedo sei volte all'utente di inserire un numero
for (var i = 0; i < 6; i++) {
    var numero = parseInt (prompt("Scrivi un numero"));
    console.log(numero);
}


var risultato = numero % 2;
console.log(risultato);

if(numero == 0) {
    console.log("Numero pari");
      // il numero è pari, non va inserito nell'array
  } else {
      array = ();
      console.log("Numero dispari");
      // il numero è dispari, bisogna inserirlo nell'array
  }
