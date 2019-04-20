let Karte_1 = {
    Zahl: "7",
    Symbol: "Herz",
    Farbe: "rot",
};
let Karte_2 = {
    Zahl: "8",
    Symbol: "Herz",
    Farbe: "rot",
};
let Karte_3 = {
    Zahl: "9",
    Symbol: "Herz",
    Farbe: "rot",
};
let Karte_4 = {
    Zahl: "10",
    Symbol: "Herz",
    Farbe: "rot",
};
let Karte_5 = {
    Zahl: "Bube",
    Symbol: "Herz",
    Farbe: "rot",
};
let Karte_6 = {
    Zahl: "Dame",
    Symbol: "Herz",
    Farbe: "rot",
};
let Karte_7 = {
    Zahl: "König",
    Symbol: "Herz",
    Farbe: "rot",
};
let Karte_8 = {
    Zahl: "Ass",
    Symbol: "Herz",
    Farbe: "rot",
};
let Karte_9 = {
    Zahl: "7",
    Symbol: "Karo",
    Farbe: "rot",
};
let Karte_10 = {
    Zahl: "8",
    Symbol: "Karo",
    Farbe: "rot",
};
let Karte_11 = {
    Zahl: "9",
    Symbol: "Karo",
    Farbe: "rot",
};
let Karte_12 = {
    Zahl: "10",
    Symbol: "Karo",
    Farbe: "rot",
};
let Karte_13 = {
    Zahl: "Bube",
    Symbol: "Karo",
    Farbe: "rot",
};
let Karte_14 = {
    Zahl: "Dame",
    Symbol: "Karo",
    Farbe: "rot",
};
let Karte_15 = {
    Zahl: "König",
    Symbol: "Karo",
    Farbe: "rot",
};
let Karte_16 = {
    Zahl: "Ass",
    Symbol: "Karo",
    Farbe: "rot",
};
let Karte_17 = {
    Zahl: "7",
    Symbol: "Piek",
    Farbe: "schwarz",
};
let Karte_18 = {
    Zahl: "8",
    Symbol: "Piek",
    Farbe: "schwarz",
};
let Karte_19 = {
    Zahl: "9",
    Symbol: "Piek",
    Farbe: "schwarz",
};
let Karte_20 = {
    Zahl: "10",
    Symbol: "Piek",
    Farbe: "schwarz",
};
let Karte_21 = {
    Zahl: "Bube",
    Symbol: "Piek",
    Farbe: "schwarz",
};
let Karte_22 = {
    Zahl: "Dame",
    Symbol: "Piek",
    Farbe: "schwarz",
};
let Karte_23 = {
    Zahl: "König",
    Symbol: "Piek",
    Farbe: "schwarz",
};
let Karte_24 = {
    Zahl: "Ass",
    Symbol: "Piek",
    Farbe: "schwarz",
};
let Karte_25 = {
    Zahl: "7",
    Symbol: "Kreuz",
    Farbe: "schwarz",
};
let Karte_26 = {
    Zahl: "8",
    Symbol: "Kreuz",
    Farbe: "schwarz",
};
let Karte_27 = {
    Zahl: "9",
    Symbol: "Kreuz",
    Farbe: "schwarz",
};
let Karte_28 = {
    Zahl: "10",
    Symbol: "Kreuz",
    Farbe: "schwarz",
};
let Karte_29 = {
    Zahl: "Bube",
    Symbol: "Kreuz",
    Farbe: "schwarz",
};
let Karte_30 = {
    Zahl: "Dame",
    Symbol: "Kreuz",
    Farbe: "schwarz",
};
let Karte_31 = {
    Zahl: "König",
    Symbol: "Kreuz",
    Farbe: "schwarz",
};
let Karte_32 = {
    Zahl: "Ass",
    Symbol: "Kreuz",
    Farbe: "schwarz",
};
let AlleKarten = [Karte_1, Karte_2, Karte_3, Karte_4, Karte_5, Karte_6, Karte_7, Karte_8, Karte_9, Karte_10, Karte_11, Karte_12, Karte_13, Karte_14,
    Karte_15, Karte_16, Karte_17, Karte_18, Karte_19, Karte_20, Karte_21, Karte_21, Karte_22, Karte_23, Karte_24, Karte_25, Karte_26, Karte_27,
    Karte_28, Karte_29, Karte_30, Karte_31, Karte_32];
let Ablage = [];
let Handkarten = [];
document.addEventListener("DOMContentLoaded", HandAnzahl);
function HandAnzahl() {
    let base = 10;
    let AnzahlHandkarten = prompt("Anzahl der Handkarten:");
    console.log(AnzahlHandkarten);
    let Anzahl = parseInt(AnzahlHandkarten, base);
    Kartengenerator(Anzahl);
}
function Kartengenerator(_Anzahl) {
    for (let i = 0; i <= _Anzahl - 1; i++) {
        let k = Math.floor(Math.random() * AlleKarten.length);
        Handkarten.push(AlleKarten[k]);
        let removed = AlleKarten.splice(k, 1);
        // Ablagestapel(AlleKarten[k]);
        // Ziehstapel(AlleKarten[k]);
        Kartenausgabe(Handkarten[i]);
    }
    Ablagekarte();
    for (let i = 0; i < 32; i++) {
        Kartenausgabe(AlleKarten[i]);
    }
}
function Ablagekarte() {
    let k = Math.floor(Math.random() * AlleKarten.length);
    Ablage.push(AlleKarten[k]);
    let removed = AlleKarten.splice(k, 1);
    Kartenausgabe(Ablage[k]);
}
function Kartenausgabe(_c) {
    let prodCard = document.createElement('div');
    prodCard.innerHTML =
        ` class="Handkarten"
        
    <p> ${_c.Zahl}</p>
    <p> ${_c.Symbol}</p>
    <p> ${_c.Farbe}</p>`;
    document.getElementById("Spielplan").appendChild(prodCard);
}
document.addEventListener("DOMContentLoaded", Handkarteablegen);
function Handkarteablegen() {
    for (let i = 0; i <= Handkarten.length; i++) {
        let HandkartenEvent = document.getElementById("Spielplan");
        HandkartenEvent.addEventListener("click", HandkarteinSpielstapel);
    }
    function HandkarteinSpielstapel(_event) {
        console.log(_event);
        console.log(_event.target);
        _event.target;
    }
}
//# sourceMappingURL=main.js.map