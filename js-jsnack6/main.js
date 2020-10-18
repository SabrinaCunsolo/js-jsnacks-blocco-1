 // Stampa le potenze di 2 senza superare il numero 1000.

// creo variabile con limite max 1000
var max1000 = 1000;

// devo trovare le potenze di 2 ma assegnare un limite max, quindi se il massimo è 1000 dovrò dire che le potenze non potranno mai superare quel numero (sono quindi inferiori al 1000)

for (var i = 1; Math.pow(2, i) < max1000; i++){

    var potenze = Math.pow(2, i);

    console.log (potenze); // stampo
}
