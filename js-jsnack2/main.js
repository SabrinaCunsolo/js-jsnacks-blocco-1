// JSnack 2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// chedo all'utente le parole
var parola1 = prompt("Scrivi un'altra parola");

var parola2 = prompt("Scrivi un'altra parola");

console.log("Parola 1 lunghezza =" + parola1);

console.log("Parola 2 lunghezza =" + parola2);

// calcolo lunghezza parole
var lunghezza1 = parola1.lenght;

var lunghezza2 = parola2.lenght;

console.log( "lunghezza 1 =" + lunghezza1);
console.log( "lunghezza 2 =" + lunghezza2);

if(lunghezza1 > lunghezza2) {
    console.log(parola2);
    console.log(parola1);
} else if(lunghezza2 > lunghezza1) {
    console.log(parola1);
    console.log(parola2);
} else {
    console.log("Le parole hanno la stessa lunghezza");
}
