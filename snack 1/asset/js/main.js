/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

/*
1) Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
*/
let container = document.getElementById("container");
let scuderia = [
    {
        "nome": "Basso",
        "peso": 20
    },
    {
        "nome": "Aru",
        "peso": 25
    },
    {
        "nome": "Nibali",
        "peso": 15
    },
    {
        "nome": "Bonen",
        "peso": 18
    },
];

//2) Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let arrayPeso = [];

//1o metodo
// for (i = 0; i < scuderia.length; i++) {
//     arrayPeso.push(scuderia[i]["peso"]);
// };
// console.log(arrayPeso);

// arrayPeso.sort( function(a, b) {
//     return a - b;
// });
// console.log(arrayPeso[0]);

//2o metodo
let big = scuderia[0];

for (i = 0; i < scuderia.length; i++) {
    let x = scuderia[i];
    if (big["peso"] > x["peso"]) {
        big = x;
        console.log(big);
    }
}

let {nome, peso} = big;
console.log(nome, peso);

container.innerHTML += 
`
<div>${nome}</div>
<div>${peso}</div>
`
//opppure
// container.innerHTML += 
// `
// <div>${big["nome"]}</div>
// <div>${big["peso"]}</div>
// `
