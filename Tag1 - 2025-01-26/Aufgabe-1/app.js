/*
    Schreibe ein JavaScript-Skript, das folgende Variablen definiert:
    Eine Konstante für den Wert von Pi.
    Eine Variable für deinen Namen.
    Eine Variable für dein Alter.
    Gib alle Variablen mit console.log() aus.
    Teste den Unterschied zwischen let und var in einer Funktion (z. B. durch eine Schleife).

Ziel: Unterschiede in der Nutzung erkennen und verstehen, warum let und const bevorzugt werden.
*/

const pi = 3.14
//let fname = 'Mky'
//var age = 35
let arrTest = [1, 2, 3, 4, 5, 6]
//console.log(pi, fname, age)

/*
for(let l = 0;l < 5; l++) {
    console.log(l)
}*/
// l ist nicht mehr im scope deshalb wird es ausserhalb als not defined angezeigt

for (var v = 0; v < arrTest;v++){
    //console.log(v)
}
//hier ist es so das man var noch aus der scope nutzen kann jedoch nicht 0 bis 4 sondern übernimmt die zahl wie oft es durchgelaufen ist 
//in C würde es nicht definiert sein 
console.log(v) 