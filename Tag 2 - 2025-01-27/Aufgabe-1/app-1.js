/*
Objekte und Arrays:

Erstelle ein Objekt, das deinen Namen, dein Alter und deine Lieblingsprogrammiersprache enthält.
Erstelle ein Array von mindestens 5 Zahlen.
Berechne die Summe aller Zahlen im Array und gib sie aus.

*/

const aboutMe = 
{
    name: 'Mky',
    age: 35,
    proglang: 'JavaScript'
}

console.log(`Hallo, mein Name ist ${aboutMe.name}. Ich bin ${aboutMe.age} Jahre alt und meine LieblingsProgrammierSprache ist ${aboutMe.proglang}.`)

const zahlenArr = [2, 3, 4, 5, 6]

//reduce(): total ist die erste wert und currentEl ist der nächste Wert und zurückgegeben wird die summe
const neueZahlenArr = zahlenArr.reduce((total, currentEl) => {
    return total + currentEl
}, 0)

console.log(`Ausgabe von neueZahlenArr: ${neueZahlenArr}`) // = 20

const total = zahlenArr.reduce(sum)

function sum(previousEl, nextEL) {
    return previousEl + nextEL
}
    console.log(`Ausgabe von price : ${total.toFixed(2)} €`) //.toFixed(2) zwei stellen nach komma

let lgth = 0;
for (let i = 0; i < zahlenArr.length; i++) {
      lgth += zahlenArr[i]
    
  }
console.log(`In C-Basic haben wir einfach eine Normale for genutzt und es klappt auch : ${lgth}`)

let result = 0
zahlenArr.forEach((zahl) => {
    result += zahl;
}, 0);

console.log(`Mit forEach: ${result}`)