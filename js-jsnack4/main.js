 // Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// creo array vuoto
var array = [];

// chiedo sei volte all'utente di inserire un numero
var numero = parseInt(prompt("Scrivi un numero"));
var numero = parseInt(prompt("Scrivi un altro numero"));
var numero = parseInt(prompt("Scrivi un altro numero"));
var numero = parseInt(prompt("Scrivi un altro numero"));
var numero = parseInt(prompt("Scrivi un altro numero"));
var numero = parseInt(prompt("Scrivi un altro numero"));

var resto = numero % 2;
console.log(resto);

for(var i = 0; i < array.length; i++) {
  console.log(array[i]);

  if(resto == 0) {
      // il numero è pari, non va inserito nell'array
  } else {
      console.log(array);
      // il numero è dispari, bisona inserirlo nell'array
  }
}
