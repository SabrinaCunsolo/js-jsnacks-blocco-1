 // Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
 // chiedo numero utente

 var numero = parseInt(prompt("Scrivi un numero"));


 for (var i = 1; i <= numero; i++){

     var cubo = Math.pow(i, 3);
     console.log(cubo);
 }
