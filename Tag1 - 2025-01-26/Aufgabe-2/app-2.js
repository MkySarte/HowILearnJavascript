/*
    Erstelle eine HTML-Datei mit einem Button (<button>Click me</button>).
    Nutze JavaScript, um:
    Den Button auszuwählen (z. B. mit document.querySelector).
    Einen click-Eventlistener hinzuzufügen, der eine Nachricht in der Konsole ausgibt (z. B. "Button wurde geklickt!").

    Ziel: Erste Schritte mit DOM-Manipulation und Eventhandling machen.
*/

const btnEl = document.querySelector('button')

btnEl.addEventListener('click', output)

function output() {
    console.log("Button wurde geclickt!")
}

/*
**ArrowFunction
btnEl.addEventListener('click', (e) => {
    console.log("Button wurde geclickt!")
})
*/

// theOneLineArrowFunction
// iwie nicht so liesbar wie die anderen 
//document.querySelector('button').addEventListener('click', (e) => console.log("Button wurde geclickt!"))
//btnEl.addEventListener('click', (e) => console.log("Button wurde geclickt!"))


