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
    Symbol: "Karo" ,
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

let AlleKarten: Karte[] = [Karte_1, Karte_2, Karte_3, Karte_4, Karte_5, Karte_6, Karte_7, Karte_8, Karte_9, Karte_10, Karte_11, Karte_12, Karte_13, Karte_14,
    Karte_15, Karte_16, Karte_17, Karte_18, Karte_19, Karte_20, Karte_21, Karte_21, Karte_22, Karte_23, Karte_24, Karte_25, Karte_26, Karte_27,
    Karte_28, Karte_29, Karte_30, Karte_31, Karte_32]
let Ablage: Karte[] = [];
let Handkarten: Karte[] = [];

document.addEventListener("DOMContentLoaded", HandAnzahl);


function HandAnzahl():void {
    let base: number = 10;
    let AnzahlHandkarten: string = prompt("Anzahl der Handkarten:");
    console.log(AnzahlHandkarten);
    let Anzahl = parseInt(AnzahlHandkarten, base);
    Kartengenerator(Anzahl);
}

function Kartengenerator(_Anzahl: number):void {
    for (let i: number = 0; i <= _Anzahl - 1; i++) {
        let k: number = Math.floor(Math.random() * AlleKarten.length);
        Handkarten.push(AlleKarten[k]);
        let removed = AlleKarten.splice(k, 1);
        // Ablagestapel(AlleKarten[k]);
        // Ziehstapel(AlleKarten[k]);
        Kartenausgabe(Handkarten[i]);
    }
    Ablagekarte()

    for(let i:number=0; i<32; i++){
        Kartenausgabe(AlleKarten[i]);
        

    }
    
}


function Ablagekarte():void {

        let k: number = Math.floor(Math.random() * AlleKarten.length);
        Ablage.push(AlleKarten[k]);
        let removed = AlleKarten.splice(k, 1);
        Kartenausgabe(Ablage[k]);

    
}


function Kartenausgabe(_c: Karte):void {
    let prodCard = document.createElement('div');
    prodCard.innerHTML =
        ` class="Handkarten"
        
    <p> ${_c.Zahl}</p>
    <p> ${_c.Symbol}</p>
    <p> ${_c.Farbe}</p>`
    

    document.getElementById("Spielplan").appendChild(prodCard);

}
document.addEventListener("DOMContentLoaded", Handkarteablegen);

function Handkarteablegen(): void{
    
    for(let i:number=0; i<=Handkarten.length;i++){
    let HandkartenEvent:HTMLFieldSetElement =<HTMLFieldSetElement>document.getElementById("Spielplan");
    HandkartenEvent.addEventListener("click", HandkarteinSpielstapel);
}


function HandkarteinSpielstapel(_event:Event){
    console.log(_event);
    console.log(_event.target);
    _event.target

}
}


