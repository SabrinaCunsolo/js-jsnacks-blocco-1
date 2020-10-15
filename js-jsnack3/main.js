 // Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

 // chiedo 5 volte all'utente 5 numeri
var somma = 0;

 for (var i = 0; i < 5; i++) {
    var numero = parseInt (prompt("Scrivi un numero"));
    // console.log(numero);
    somma = (numero + somma);
    // somma += numero è la stessa cosa di sopra
 }


// // devo stampare la somma
document.writeln("somma =" + somma);
