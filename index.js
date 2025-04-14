// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var firstName = "ale";
var age = 22;
var studyTs = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
function calculatePriceWithVAT(price) {
    var vatRate = 0.22;
    var vatAmount = price * vatRate;
    return price + vatAmount;
}
calculatePriceWithVAT(30);
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
function concatenateAndGetLength(string1, string2) {
    var combinedString = string1 + string2;
    return combinedString.length;
}
var totalLength = concatenateAndGetLength("ciao", "mondo");
console.log(totalLength);
// 7) Cos'è un Type Union e come si scrive?
var value;
value = "ciao";
value = 42;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var container;
// 10) Tipizza il seguente array di numeri:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var myTupla = [
    "stringa1",
    "stringa2",
    "stringa3",
    10,
    20,
];
var newArray = [];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var miaAuto2 = {
    nome: "Audi",
    targa: 12345,
    numeroPorte: 5,
};
