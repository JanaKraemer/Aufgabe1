var Zauberbild;
(function (Zauberbild) {
    // Kommentare zum Code, warum was......!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", auswahlKreis);
    Zauberbild.serverAddress = "https://kraemerj.herokuapp.com/";
    //let zauberbild: Element[] = [];
    Zauberbild.kreisArray = [];
    //export let newpositionArray: Element[] = [];
    Zauberbild.auswahlArray = [];
    let fps = 30;
    //let imageData: ImageData;
    //export let kreisArraymove: Move[] = [];
    Zauberbild.bg = "white";
    let auswahl = false;
    Zauberbild.input = document.getElementsByTagName("input");
    function ladebild(_event) {
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            Zauberbild.kreisArray.pop();
        }
        let id = this.id;
        let xbild = Zauberbild.globalArray[id].x;
        let ybild = Zauberbild.globalArray[id].y;
        let type = Zauberbild.globalArray[id].type;
        let backgroundC = Zauberbild.globalArray[id].backgroundC;
        let size = Zauberbild.globalArray[id].size;
        if (size == "400") {
            Klein();
        }
        if (size == "500") {
            Mittel();
        }
        if (size == "600") {
            Gross();
        }
        Zauberbild.bg = backgroundC;
        for (let i = 0; i < type.length; i++) {
            let element = {
                x: xbild[i],
                y: ybild[i],
                type: type[i]
            };
            if (type == "Wachstum2") {
                let dreieck = new Zauberbild.Wachstum2();
                dreieck.x = parseInt(element.x);
                dreieck.y = parseInt(element.y);
                Zauberbild.kreisArray.push(dreieck);
            }
            if (type == "Groese") {
                let kreis = new Zauberbild.Groese();
                kreis.x = parseInt(element.x);
                kreis.y = parseInt(element.y);
                Zauberbild.kreisArray.push(kreis);
            }
            if (type == "Test") {
                let dreieck2 = new Zauberbild.Test();
                dreieck2.x = parseInt(element.x);
                dreieck2.y = parseInt(element.y);
                Zauberbild.kreisArray.push(dreieck2);
            }
            if (type == "Element") {
                let kreis2 = new Zauberbild.Element();
                kreis2.x = parseInt(element.x);
                kreis2.y = parseInt(element.y);
                Zauberbild.kreisArray.push(kreis2);
            }
        }
    }
    Zauberbild.ladebild = ladebild;
    let einkreis = false;
    function init() {
        Zauberbild.canvas = document.getElementsByTagName("canvas")[0];
        Zauberbild.crc = Zauberbild.canvas.getContext("2d");
        //imageData = crc.getImageData(0, 0, 600, 600);
        //let test: HTMLButtonElement = <HTMLButtonElement>document.getElementById("test");
        //test.addEventListener("click", zeichneKreis);
        let klein = document.getElementById("Klein");
        klein.addEventListener("click", Klein);
        let mittel = document.getElementById("Mittel");
        mittel.addEventListener("click", Mittel);
        let gross = document.getElementById("Gross");
        gross.addEventListener("click", Gross);
        let schwarz = document.getElementById("schwarz");
        schwarz.addEventListener("click", Schwarz);
        let grau = document.getElementById("grau");
        grau.addEventListener("click", Grau);
        let weiß = document.getElementById("weiß");
        weiß.addEventListener("click", Weiß);
        let lauf = document.getElementById("lauf");
        lauf.addEventListener("click", zeichneKreis);
        let wachstum = document.getElementById("wachstum");
        wachstum.addEventListener("click", zeichneWachstum);
        let lauf2 = document.getElementById("lauf2");
        lauf2.addEventListener("click", zeichneDreieck);
        let wachstum2 = document.getElementById("wachstum2");
        wachstum2.addEventListener("click", zeichneWachstum2);
        let save = document.getElementById("save");
        save.addEventListener("click", saveName);
        let load = document.getElementById("load");
        load.addEventListener("click", loadpicture);
        update();
    }
    function loadpicture() {
        Zauberbild.find();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Zauberbild.crc.clearRect(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
        // crc.putImageData(imageData, 0, 0);
        Zauberbild.crc.rect(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
        Zauberbild.crc.fillStyle = Zauberbild.bg;
        Zauberbild.crc.fill();
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            Zauberbild.kreisArray[i].update(0, 0);
            // console.log("Hiiii");
        }
        for (let i = 0; i < Zauberbild.auswahlArray.length; i++) {
            Zauberbild.auswahlArray[i].update(0, 0);
            // console.log("Hiiii");
        }
    }
    function zeichneKreis() {
        let circle = new Zauberbild.Element();
        Zauberbild.kreisArray.push(circle);
    }
    function zeichneWachstum2() {
        let wachstum2 = new Zauberbild.Wachstum2();
        Zauberbild.kreisArray.push(wachstum2);
    }
    function zeichneWachstum() {
        let circlegroese = new Zauberbild.Groese();
        Zauberbild.kreisArray.push(circlegroese);
    }
    function zeichneDreieck() {
        let dreieck = new Zauberbild.Test();
        Zauberbild.kreisArray.push(dreieck);
    }
    function auswahlKreis(_event) {
        auswahl = false;
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            let x = _event.clientX; // Position, an der geklickt wurde
            let y = _event.clientY;
            //console.log("Auswahl");
            if (Zauberbild.kreisArray[i].x < x + 10 && Zauberbild.kreisArray[i].x < x + 10 && Zauberbild.kreisArray[i].y < y + 10 && Zauberbild.kreisArray[i].y < y - 10 && x <= Zauberbild.canvas.width && y <= Zauberbild.canvas.height) {
                // Klick mit Kreis vergleichen
                // wenn Klick und Kreis übereinstimmen, kann dieser gelöscht, oder verschoben werden
                if (Zauberbild.auswahlArray.length >= 1) {
                    Zauberbild.kreisArray.push(Zauberbild.auswahlArray[0]);
                    Zauberbild.auswahlArray.splice(0, 1);
                }
                Zauberbild.ausgewaehltesElement = i;
                Zauberbild.auswahlArray.push(Zauberbild.kreisArray[i]);
                Zauberbild.kreisArray.splice(i, 1);
                let button = document.createElement("BUTTON"); // Create a <button> element
                button.innerHTML = "Delete"; // Insert text
                let div = document.getElementById("buttons");
                div.appendChild(button);
                button.addEventListener("click", deleteButton);
                let buttonposition = document.createElement("BUTTON"); // Create a <button> element
                buttonposition.innerHTML = "Position"; // Insert text
                let divposition = document.getElementById("buttons");
                divposition.appendChild(buttonposition);
                //console.log("buttonposition");
                buttonposition.addEventListener("click", positionButtonKreis);
                let buttoncolor = document.createElement("BUTTON"); // Create a <button> element
                buttoncolor.innerHTML = "Farbe ändern"; // Insert text
                let divcolor = document.getElementById("buttons");
                divcolor.appendChild(buttoncolor);
                //console.log("buttonposition");
                // buttoncolor.addEventListener("click", colorKreis);
            }
        }
    }
    //function colorKreis(_event: MouseEvent): any {    // Rückgabe return statt void???????????????????????????????????????????????????????????
    //  let elemente: string = "0123456789ABCDEF";
    //let color: string = "#";
    //for (let i: number = 0; i < 6; i++) {
    //  color += elemente[Math.floor(Math.random() * 16)];
    //  }
    //console.log("farbe");
    //document.getElementById("buttons").innerHTML = "";
    //return color;
    //}
    function positionButtonKreis(_event) {
        auswahl = true;
        document.addEventListener("keydown", steuerung);
    }
    function steuerung(_event) {
        if (auswahl == true) {
            if (Zauberbild.auswahlArray.length > 1) {
                Zauberbild.kreisArray.push(Zauberbild.auswahlArray[0]);
                Zauberbild.auswahlArray.splice(0, 1);
            }
            if (_event.keyCode == 38) { // hoch
                Zauberbild.auswahlArray[0].update(0, -5);
                console.group("oben");
            }
            if (_event.keyCode == 40) { //runter
                Zauberbild.auswahlArray[0].update(0, 5);
            }
            if (_event.keyCode == 39) { //left
                Zauberbild.auswahlArray[0].update(5, 0);
            }
            if (_event.keyCode == 37) { //right
                Zauberbild.auswahlArray[0].update(-5, 0);
            }
        }
        document.getElementById("buttons").innerHTML = "";
    }
    function deleteButton() {
        Zauberbild.auswahlArray.splice(0, 1);
        //kreisArray.splice(ausgewaehltesElement, 1);
        //console.log("weg mit dir");
        document.getElementById("buttons").innerHTML = "";
    }
    function saveName() {
        let background = Zauberbild.bg;
        Zauberbild.insert();
    }
    function Klein() {
        Zauberbild.canvas.height = 400;
        Zauberbild.canvas.width = 400;
    }
    function Mittel() {
        Zauberbild.canvas.height = 500;
        Zauberbild.canvas.width = 500;
    }
    function Gross() {
        Zauberbild.canvas.height = 600;
        Zauberbild.canvas.width = 600;
    }
    function Grau() {
        Zauberbild.bg = "yellow";
    }
    function Weiß() {
        Zauberbild.bg = "purple";
    }
    function Schwarz() {
        Zauberbild.bg = "lightblue";
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=main.js.map