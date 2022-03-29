/*Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.*/

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let newArray = [];
let min = 0;
let max = 5;

//forEach
myArray.forEach (
    (element, index) => {
    if (min < index && max > index) {
        newArray.push(element);
    }  
});
console.log(newArray);

console.log("");

//filter:

//opzione 1:
let newArrayFilter1 = myArray.filter ((element, index) => {
    if ((index > min) && (index < max)) {
        return true
    }
    return false
});
console.log(newArrayFilter1);

console.log("");

//opzione 2
let newArrayFilter2 = myArray.filter ((element, index) => ((index > min) && (index < max)));
console.log(newArrayFilter2);
