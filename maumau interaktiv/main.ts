

interface Karte {
    Zahl: string;
    Symbol: string;
    Farbe: string

}

let Karte_1: Karte = {
    Zahl: "7",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_2: Karte = {
    Zahl: "8",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_3: Karte = {
    Zahl: "9",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_4: Karte = {
    Zahl: "10",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_5: Karte = {
    Zahl: "Bube",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_6: Karte = {
    Zahl: "Dame",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_7: Karte = {
    Zahl: "König",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_8: Karte = {
    Zahl: "Ass",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_9: Karte = {
    Zahl: "7",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_10: Karte = {
    Zahl: "8",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_11: Karte = {
    Zahl: "9",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_12: Karte = {
    Zahl: "10",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_13: Karte = {
    Zahl: "Bube",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_14: Karte = {
    Zahl: "Dame",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_15: Karte = {
    Zahl: "König",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_16: Karte = {
    Zahl: "Ass",
    Symbol: "Karo",
    Farbe: "rot",
}


let Karte_17: Karte = {
    Zahl: "7",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_18: Karte = {
    Zahl: "8",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_19: Karte = {
    Zahl: "9",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_20: Karte = {
    Zahl: "10",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_21: Karte = {
    Zahl: "Bube",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_22: Karte = {
    Zahl: "Dame",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_23: Karte = {
    Zahl: "König",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_24: Karte = {
    Zahl: "Ass",
    Symbol: "Piek",
    Farbe: "schwarz",
}


let Karte_25: Karte = {
    Zahl: "7",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_26: Karte = {
    Zahl: "8",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_27: Karte = {
    Zahl: "9",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_28: Karte = {
    Zahl: "10",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_29: Karte = {
    Zahl: "Bube",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_30: Karte = {
    Zahl: "Dame",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_31: Karte = {
    Zahl: "König",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_32: Karte = {
    Zahl: "Ass",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let alleKarten: Karte[] = [Karte_1, Karte_2, Karte_3, Karte_4, Karte_5, Karte_6, Karte_7, Karte_8, Karte_9, Karte_10, Karte_11, Karte_12, Karte_13, Karte_14,
    Karte_15, Karte_16, Karte_17, Karte_18, Karte_19, Karte_20, Karte_21, Karte_21, Karte_22, Karte_23, Karte_24, Karte_25, Karte_26, Karte_27,
    Karte_28, Karte_29, Karte_30, Karte_31, Karte_32]
let ablage: Karte[] = []
let handkarten: Karte[] = []


document.addEventListener("DOMContentLoaded", handAnzahl);


function handAnzahl(): void {
    let base: number = 10;
    let anzahlHandkarten: string = prompt("Anzahl der Handkarten:");
    console.log(anzahlHandkarten)
    let anzahl = parseInt(anzahlHandkarten, base)
    Kartengenerator(anzahl);
}

function Kartengenerator(_Anzahl: number): void {
    for (let i: number = 0; i <= _Anzahl - 1; i++) {
        let k: number = Math.floor(Math.random() * alleKarten.length)
        handkarten.push(alleKarten[k])
        let removed = alleKarten.splice(k, 1);
        // Ablagestapel(AlleKarten[k]);
        // Ziehstapel(AlleKarten[k]);
        handkartenstapel(handkarten[i], i);
    }
    ablagekarte()

    for (let i: number = 0; i < 32; i++) {
        ziehstapel(alleKarten[i])


    }

}


function ablagekarte(): void {
    for (let i: number = 0; i < 1; i++) {
        let k: number = Math.floor(Math.random() * alleKarten.length)
        ablage.push(alleKarten[k])
        let removed = alleKarten.splice(k, 1);
        ablagestapel(ablage[i])

    }
}


function handkartenstapel(_c: Karte, _i: number): void {
    let prodCard = document.createElement('div');
    prodCard.innerHTML =
        `<div class="Handkarten" id="${_i}">
    <p> ${_c.Zahl}</p>
    <p> ${_c.Symbol}</p>
    <p> ${_c.Farbe}</p>
    </div>`
    console.log(handkartenstapel)

    document.getElementById("handstapelkarten").appendChild(prodCard)

}

function ablagestapel(_c: Karte): void {
    let prodCard = document.createElement('div');
    prodCard.innerHTML =
        `<div class="Ablage">
    <p> ${_c.Zahl}</p>
    <p> ${_c.Symbol}</p>
    <p> ${_c.Farbe}</p>
    </div>`
    console.log(ablagestapel)
    document.getElementById("ablagestapelkarten").appendChild(prodCard)

}
function ziehstapel(_c: Karte): void {

    let prodCard = document.createElement('div');
    prodCard.innerHTML = `<div class="Ziehstapel" >
   
    <p> ${_c.Zahl}</p>
    <p> ${_c.Symbol}</p>
    <p> ${_c.Farbe}</p>
    </div>`
    console.log(ziehstapel)
    document.getElementById("ziehstapelkarten").appendChild(prodCard)

}

document.addEventListener("DOMContentLoaded", handkarteablegen);

function handkarteablegen(): void {

    for (let i: number = 0; i <= handkarten.length; i++) {
        let handkartenEvent: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementsByClassName("Handkarten")[i];
        handkartenEvent.addEventListener("click", handkarteinSpielstapel);
    }

    function handkarteinSpielstapel(_event: Event): void {
        console.log(_event);
        let clickedCard: HTMLFieldSetElement = <HTMLFieldSetElement>_event.target;
        let cardID: string = clickedCard.id;
        let cardIdNumber: number = Number(cardID);
        let karteInSpielstapel: Karte = handkarten[cardIdNumber];
        ablage.push(handkarten[cardIdNumber])
        handkarten.splice(cardIdNumber, 1)
        ablagestapel(karteInSpielstapel)
        handkartelöschen(cardIdNumber);
        handkarteablegen()
    }
}

function handkartelöschen(_cardIdNumber: number): void {
    document.getElementById("handstapelkarten").innerHTML = "";
    for (let i: number = 0; i < handkarten.length; i++) {
        neueHandkarten(handkarten[i], i)
    }
}

function neueHandkarten(_c: Karte, _i: number): void {
    let prodCard = document.createElement('div');
    prodCard.innerHTML = `<fieldset class=Handkarten>
   
    <p> ${_c.Zahl}</p>
    <p> ${_c.Symbol}</p>
    <p> ${_c.Farbe}</p>
    </fieldset>`

    document.getElementById("handstapelkarten").appendChild(prodCard)
}

document.addEventListener("DOMContentLoaded", kartenachziehen);

function kartenachziehen(): void {

    for (let i: number = 0; i < alleKarten.length; i++) {
        let ziehkartenEvent: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementsByClassName("Ziehstapel")[i];
        ziehkartenEvent.addEventListener("click", neuekartenachziehen);
    }
}

function neuekartenachziehen(): void {
    let x: number = Math.floor(Math.random() * alleKarten.length);
    handkarten.push(alleKarten[x]);
    let removed = alleKarten.splice(x, 1);

    document.getElementById("handstapelkarten").innerHTML = "";
    for (let i: number = 0; i < handkarten.length; i++) {
        aktualisierterHandstapel(handkarten[i], i);

    }
    handkarteablegen()
}

function aktualisierterHandstapel(_c: Karte, i: number) {
    let prodCard = document.createElement('div');
    prodCard.innerHTML = `<fieldset class=Handkarten>
   
    <p> ${_c.Zahl}</p>
    <p> ${_c.Symbol}</p>
    <p> ${_c.Farbe}</p>
    </fieldset>`


    document.getElementById("handstapelkarten").appendChild(prodCard)

}

document.addEventListener("keydown", function keydownnachziehen(_event) {
    if (_event.keyCode == 32) {
        neuekartenachziehen();
    }

});

document.addEventListener("DOMContentLoaded", sortieren);

function sortieren() {
    handkarten.sort();
    console.log(handkarten.sort());
}










