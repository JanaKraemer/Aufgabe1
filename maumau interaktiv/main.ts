

interface Karte {
    Zahl: string;
    Symbol: string;
    Farbe: string;
    zeichen: string;

}

let Karte_1: Karte = {
    Zahl: "7",
    Symbol: "Herz",
    Farbe: "rot",
    zeichen: "1",
}

let Karte_2: Karte = {
    Zahl: "8",
    Symbol: "Herz",
    Farbe: "rot",
    zeichen: "1",
}

let Karte_3: Karte = {
    Zahl: "9",
    Symbol: "Herz",
    Farbe: "rot",
    zeichen: "1",
}

let Karte_4: Karte = {
    Zahl: "10",
    Symbol: "Herz",
    Farbe: "rot",
    zeichen: "1",
}

let Karte_5: Karte = {
    Zahl: "Bube",
    Symbol: "Herz",
    Farbe: "rot",
    zeichen: "1",
}

let Karte_6: Karte = {
    Zahl: "Dame",
    Symbol: "Herz",
    Farbe: "rot",
    zeichen: "1",
}

let Karte_7: Karte = {
    Zahl: "König",
    Symbol: "Herz",
    Farbe: "rot",
    zeichen: "1",
}

let Karte_8: Karte = {
    Zahl: "Ass",
    Symbol: "Herz",
    Farbe: "rot",
    zeichen: "1",
}

let Karte_9: Karte = {
    Zahl: "7",
    Symbol: "Karo",
    Farbe: "rot",
    zeichen: "2",
}

let Karte_10: Karte = {
    Zahl: "8",
    Symbol: "Karo",
    Farbe: "rot",
    zeichen: "2",
}

let Karte_11: Karte = {
    Zahl: "9",
    Symbol: "Karo",
    Farbe: "rot",
    zeichen: "2",
}

let Karte_12: Karte = {
    Zahl: "10",
    Symbol: "Karo",
    Farbe: "rot",
    zeichen: "2",
}

let Karte_13: Karte = {
    Zahl: "Bube",
    Symbol: "Karo",
    Farbe: "rot",
    zeichen: "2",
}

let Karte_14: Karte = {
    Zahl: "Dame",
    Symbol: "Karo",
    Farbe: "rot",
    zeichen: "2",
}

let Karte_15: Karte = {
    Zahl: "König",
    Symbol: "Karo",
    Farbe: "rot",
    zeichen: "2",
}

let Karte_16: Karte = {
    Zahl: "Ass",
    Symbol: "Karo",
    Farbe: "rot",
    zeichen: "2",
}


let Karte_17: Karte = {
    Zahl: "7",
    Symbol: "Piek",
    Farbe: "schwarz",
    zeichen: "3",
}

let Karte_18: Karte = {
    Zahl: "8",
    Symbol: "Piek",
    Farbe: "schwarz",
    zeichen: "3",
}

let Karte_19: Karte = {
    Zahl: "9",
    Symbol: "Piek",
    Farbe: "schwarz",
    zeichen: "3",
}

let Karte_20: Karte = {
    Zahl: "10",
    Symbol: "Piek",
    Farbe: "schwarz",
    zeichen: "3",
}

let Karte_21: Karte = {
    Zahl: "Bube",
    Symbol: "Piek",
    Farbe: "schwarz",
    zeichen: "3",
}

let Karte_22: Karte = {
    Zahl: "Dame",
    Symbol: "Piek",
    Farbe: "schwarz",
    zeichen: "3",
}

let Karte_23: Karte = {
    Zahl: "König",
    Symbol: "Piek",
    Farbe: "schwarz",
    zeichen: "3",
}

let Karte_24: Karte = {
    Zahl: "Ass",
    Symbol: "Piek",
    Farbe: "schwarz",
    zeichen: "3",
}


let Karte_25: Karte = {
    Zahl: "7",
    Symbol: "Kreuz",
    Farbe: "schwarz",
    zeichen: "4",
}

let Karte_26: Karte = {
    Zahl: "8",
    Symbol: "Kreuz",
    Farbe: "schwarz",
    zeichen: "4",
}

let Karte_27: Karte = {
    Zahl: "9",
    Symbol: "Kreuz",
    Farbe: "schwarz",
    zeichen: "4",
}

let Karte_28: Karte = {
    Zahl: "10",
    Symbol: "Kreuz",
    Farbe: "schwarz",
    zeichen: "4",
}

let Karte_29: Karte = {
    Zahl: "Bube",
    Symbol: "Kreuz",
    Farbe: "schwarz",
    zeichen: "4",
}

let Karte_30: Karte = {
    Zahl: "Dame",
    Symbol: "Kreuz",
    Farbe: "schwarz",
    zeichen: "4",
}

let Karte_31: Karte = {
    Zahl: "König",
    Symbol: "Kreuz",
    Farbe: "schwarz",
    zeichen: "4",
}

let Karte_32: Karte = {
    Zahl: "Ass",
    Symbol: "Kreuz",
    Farbe: "schwarz",
    zeichen: "4",
}

let alleKarten: Karte[] = [Karte_1, Karte_2, Karte_3, Karte_4, Karte_5, Karte_6, Karte_7, Karte_8, Karte_9, Karte_10, Karte_11, Karte_12, Karte_13, Karte_14,
    Karte_15, Karte_16, Karte_17, Karte_18, Karte_19, Karte_20, Karte_21, Karte_21, Karte_22, Karte_23, Karte_24, Karte_25, Karte_26, Karte_27,
    Karte_28, Karte_29, Karte_30, Karte_31, Karte_32]
let ablage: Karte[] = []
let handkarten: Karte[] = []


document.addEventListener("DOMContentLoaded", handAnzahl);


function handAnzahl(): void { //Es wird abgefragt, wie viele Karten der Speiler zu Beginn haben möchte//

    let anzahlHandkarten: string = prompt("Anzahl der Handkarten:");
    console.log(anzahlHandkarten)
    let anzahl = parseInt(anzahlHandkarten)
    Kartengenerator(anzahl);
    document.getElementById("handstapelkarten").addEventListener("click",handkarteablegen);
}

function Kartengenerator(_Anzahl: number): void { //Die Schleife wird so oft durchlaufen, wie i <= die Anzahl der gewünschten Karten ist.//
    //So viele random Karten werden dann in das Handkartenarray gepushed und aus dem anderen entfernt.//
    for (let i: number = 0; i <= _Anzahl - 1; i++) {
        let k: number = Math.floor(Math.random() * alleKarten.length)
        handkarten.push(alleKarten[k])
        alleKarten.splice(k, 1);
     // Die zufällig ausgewählte Karte wird in der neuen Funktion generiert//
        
    }
    handkartenstapel(handkarten);
    ablagekarte()

    for (let i: number = 0; i < 32; i++) {
        ziehstapel(alleKarten[i])


    }

}


function ablagekarte(): void { // Eine Anfangs-Karte wird für den Ablagestapel ausgewählt und in das Ablage-Array gepushed.//
    for (let i: number = 0; i < 1; i++) {
        let k: number = Math.floor(Math.random() * alleKarten.length)
        ablage.push(alleKarten[k])
        let removed = alleKarten.splice(k, 1);
        ablagestapel(ablage[i])

    }
}


function handkartenstapel(_kartenarray: Karte[]): void {
    while(document.getElementById("handstapelkarten").firstChild){
        document.getElementById("handstapelkarten").firstChild.remove();
    }
    for(let i : number = 0 ; i< _kartenarray.length; i++){
    let prodCard : HTMLDivElement= document.createElement('div');
    prodCard.classList.add("Handkarten")
    prodCard.setAttribute("id", i.toString());
    prodCard.innerHTML =`
    <p> ${_kartenarray[i].Zahl}</p>
    <p> ${_kartenarray[i].Symbol}</p>
    <p> ${_kartenarray[i].Farbe}</p>`;
    document.getElementById("handstapelkarten").appendChild(prodCard);    
}
    console.log(handkartenstapel)

    

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
    prodCard.innerHTML = `<div class="Ziehstapel" >`


    console.log(ziehstapel)
    document.getElementById("ziehstapelkarten").appendChild(prodCard);

}


function handkarteablegen(_event:Event): void {
    let clickedCard : HTMLDivElement =<HTMLDivElement> _event.target;
    let index : number = parseInt(clickedCard.getAttribute("id"));
    ablage.push(handkarten[index]);
    ablagestapel(handkarten[index]);
    handkarten.splice(index,1);
    handkartenstapel(handkarten);
}


function handkarteinSpielstapel(_event: Event): void { //Die geklickte Karte bekommt eine ID, damit genau diese auf den Ablagestapel gepushed werden kann.//
    console.log(_event);
    let clickedCard: HTMLFieldSetElement = <HTMLFieldSetElement>_event.target;
    let cardID: string = clickedCard.id;
    let cardIdNumber: number = Number(cardID);
    let karteInSpielstapel: Karte = handkarten[cardIdNumber];
    ablage.push(handkarten[cardIdNumber]);
    handkarten.splice(cardIdNumber, 1);
    ablagestapel(karteInSpielstapel);
    handkartelöschen(cardIdNumber);
    //handkarteablegen();
}


function handkartelöschen(_cardIdNumber: number): void {
    document.getElementById("handstapelkarten").innerHTML = ""; //Der Inhalt des Arrays wird komplett gelöscht//
    for (let i: number = 0; i < handkarten.length; i++) {
        neueHandkarten(handkarten[i], i)
    }
}

function neueHandkarten(_c: Karte, _i: number): void {
    let prodCard = document.createElement('div');
    prodCard.innerHTML = `<fieldset class=Handkarten >
   
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
    let x: number = Math.floor(Math.random() * alleKarten.length); // Eine zufällige Karte wird ausgewählt aus dem alleKarten-Array//
    handkarten.push(alleKarten[x]);
    let removed = alleKarten.splice(x, 1);

    document.getElementById("handstapelkarten").innerHTML = "";
    for (let i: number = 0; i < handkarten.length; i++) {
        aktualisierterHandstapel(handkarten[i], i);

    }
    //handkarteablegen()
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
    if (_event.keyCode == 32) { //Wenn die Leertaste gedrückt wird, dann wir die Funktion aufgerufen, die eine neue Handkarte auswählt und generiert.//
        neuekartenachziehen();
    }

});



function sortieren(): void {
    handkarten.sort(kartensortieren);
    console.log(handkarten);
    document.getElementById("handstapelkarten").innerHTML = "";
    for (let i: number = 0; i < handkarten.length; i++) {
        aktualisierterHandstapel(handkarten[i], i);
    }
   // handkarteablegen()
}


function kartensortieren(_x: Karte, _y: Karte): number {
    if (_x.zeichen < _y.zeichen) { //Die zugewiesenen Werte der Karten werden miteinander verglichen und somit wird eine Reihenfolge erstellt.//
        return -1;
    }
    if (_x.zeichen > _y.zeichen) {
        return 1
    }
    return 0
}




















