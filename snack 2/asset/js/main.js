/*
Snack2
1) Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
2) Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
3) Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
4) Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

let container = document.getElementById("container");

/*
1) Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
2) Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
*/
let club = [
    {
        "nome": "Atalanta",
        "punti": 0,
        "falli": 0,
    },
    {
        "nome": "Gijon",
        "punti": 0,
        "falli": 0,
    },
    {
        "nome": "Benfica",
        "punti": 0,
        "falli": 0,
    },
    {
        "nome": "Vaduz",
        "punti": 0,
        "falli": 0,
    },
];

/*3) Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.*/

function randomNum(tot) {
    let numRandom = Math.floor(Math.random() * tot);
    return numRandom;
};

let newArray = [];

for (i = 0; i < club.length; i++) {
    let points = randomNum(100);
    club[i]["punti"] = points;

    let fouls = randomNum(500);
    club[i]["falli"] = fouls;
    
    /*4) Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/
    let {nome, falli} = club[i];

    container.innerHTML += `<div>${nome}: ${falli} falli subiti</div>`
};
console.log(club);

newArray.push(
    {
        nome,
        falli
    }
);
console.log(newArray);

