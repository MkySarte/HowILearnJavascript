/*
    Mini-Aufgabe:

    Schreibe ein JavaScript-Skript, das in der Konsole ausgibt:
    Eine Begrüßung mit deinem Namen.
    Die aktuelle Uhrzeit.
    Den Text: "JavaScript lernen macht Spaß!"

    Hinweis: Nutze new Date() für die Uhrzeit.
*/

const fname = 'Mky'
const uhrZeit = new Date()
const spass = 'JavaScript lernen macht Spaß!'
// bin ich ganz ehrlich habe ich einfach von W3school
console.log(uhrZeit.toLocaleTimeString())
// ausgabe mit + spass + oder so neuer
console.log(`Hi, mein Name ist ${fname} und es ist ${uhrZeit.toLocaleTimeString()} Uhr`)
console.log(spass)

//hier hat man ein obj gemacht mit key und val seinbar geht es auch so !
const optionsHourSecond = {
    hour: '2-digit',
    minute: '2-digit',
    //second: '2-digit',
    hour12: true
  };
  console.log(uhrZeit.toLocaleTimeString('de-DE', optionsHourSecond)); // Beispiel: "22:00"