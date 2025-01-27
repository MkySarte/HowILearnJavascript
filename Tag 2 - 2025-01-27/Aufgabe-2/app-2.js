/*
DOM-Manipulation:

Ergänze deine HTML-Datei mit einem <h1>-Element.
Nutze JavaScript, um den Text in <h1> dynamisch zu ändern (z. B. mit einer Begrüßung wie "Hallo, [Name]!").
*/

const h1El = document.querySelector('h1')
const fname = 'Mky'

h1El.append(`Hallo ${fname}! `)
h1El.append('Hallo ' + [fname] + ' !')
