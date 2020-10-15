 // Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// creo array vuoto
var array = [];

// chiedo sei volte all'utente di inserire un numero
for (var i = 0; i < 6; i++) {
    var numero = parseInt (prompt("Scrivi un numero"));

    var risultato = numero % 2;

    if (risultato != 0) {
        array.push(numero);
        console.log(numero);
        
      }
}
