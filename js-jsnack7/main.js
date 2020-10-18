// Calcola la somma e la media dei numeri da 1 a 10.

// Prima di tutto assegno dei valori alla somma, che sarà uguale a zero
var somma = 0;
// successivamente indico il 10 come numero massimo e l'1 come numero minimo, per poter poi calcolare somma e media
var numero1 = 1;
var numero10 = 10;

// Calcolo la somma dei numeri da 1 a 10
for (var i = 1; i <= 10; i++) {
    somma = (i + somma);
}
// verifico se stampa i numeri indicati e se li somma correttamente
console.log ("Se sommo i numeri da" +numero1+ "a" +numero10+ "ottengo la somma:" +somma);

// Calcolo la media
var media = (somma / numero10);

// verifico se stampa la media dei numeri indicati
console.log ("La media dei numeri da" +numero1+ "a" +numero10+ "sarà:" +media);
