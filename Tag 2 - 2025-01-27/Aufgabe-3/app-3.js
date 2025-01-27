/*

Mini-Projekt: Dynamische Begrüßung

Erstelle ein Eingabefeld (<input>) und einen Button.
Wenn der Nutzer seinen Namen eingibt und auf den Button klickt, soll eine Begrüßung im <h1> erscheinen, z. B.: "Hallo, [Name]!".

*/
const bodyEl = document.body
const divEl = document.createElement('div')
const h1El = document.createElement('h1')

const inputEL = document.createElement('input')
inputEL.setAttribute("placeholder", 'Gib hier dein Name ein')

const btnEl = document.createElement('button')
btnEl.innerText = "Eingeben"

bodyEl.appendChild(divEl)
bodyEl.appendChild(h1El)
divEl.appendChild(inputEL)
divEl.appendChild(btnEl)

btnEl.addEventListener('click', (e) => {
    let name = document.querySelector('Input').value
    document.querySelector('h1').innerText = `Hallo, ${name}!`
}, '')

/*
    btnEl.addEventListener('click', ausgabeDesInputs)

    function ausgabeDesInputs() {
        let name = document.querySelector('Input').value
        document.querySelector('h1').innerText = `Hallo, ${name}!`
    }
*/