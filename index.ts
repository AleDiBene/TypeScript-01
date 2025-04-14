// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
let firstName: string = "ale";
let age: number = 22;
let studyTs: boolean = true;

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
const greet = (name: string) => {
  return "Ciao " + name;
};

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
const sum = (a: number, b: number): number => {
  return a + b;
};

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
function calculatePriceWithVAT(price: number): number {
  const vatRate = 0.22;
  const vatAmount = price * vatRate;
  return price + vatAmount;
}
calculatePriceWithVAT(30);

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
function concatenateAndGetLength(string1: string, string2: string): number {
  const combinedString = string1 + string2;
  return combinedString.length;
}

const totalLength = concatenateAndGetLength("ciao", "mondo");
console.log(totalLength);

// 7) Cos'è un Type Union e come si scrive?
let value: string | number;
value = "ciao";
value = 42;

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let container: number | null | undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type GiornoDellaSettimana =
  | "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica";

// 10) Tipizza il seguente array di numeri:
// const numbers = [1, 2, 3]
const numbers: number[] = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const myTupla: [string, string, string, number, number] = [
  "stringa1",
  "stringa2",
  "stringa3",
  10,
  20,
];

// 12) Qual è la differenza tra type e interface?
// il type è una dichiarazione esplicità, interface possono essere dichiarate una sola volta

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface utente {
  email: string;
  phone?: number;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Studente {
  nome: string;
  voto: number;
}

let newArray: Studente[] = [];

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo {
  nome: string;
  targa: number;
}

interface Auto extends Veicolo {
  numeroPorte: number;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.
const miaAuto2: Auto = {
  nome: "Audi",
  targa: 12345,
  numeroPorte: 5,
};

// 20) Crea un'interfaccia generica per una risposta API.
interface ApiResponse<T> {
  data: T | null;
  statusCode: number;
  message?: string;
  success: boolean;
}
