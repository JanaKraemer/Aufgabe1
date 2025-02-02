var Zauberbild;
(function (Zauberbild) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", auswahlKreis);
    Zauberbild.serverAddress = "https://kraemerj.herokuapp.com/";
    Zauberbild.kreisArray = [];
    Zauberbild.auswahlArray = [];
    let fps = 30;
    let buttons2 = false;
    Zauberbild.ladebilder = false;
    Zauberbild.bg = "white";
    let auswahl = false; // Boolean ist am Anfang auf false, später wird es geändert 
    function init() {
        Zauberbild.canvas = document.getElementsByTagName("canvas")[0];
        Zauberbild.crc = Zauberbild.canvas.getContext("2d");
        // Es werden Buttons erstellt, mit denen man das Zauberbild bearbeiten kann. Auf jedem Button liegt ein Click-Event, das eine Funktion aufruft
        let klein = document.getElementById("Klein");
        klein.addEventListener("click", Klein);
        let mittel = document.getElementById("Mittel");
        mittel.addEventListener("click", Mittel);
        let gross = document.getElementById("Gross");
        gross.addEventListener("click", Gross);
        let blau = document.getElementById("blau");
        blau.addEventListener("click", Blue);
        let gelb = document.getElementById("gelb");
        gelb.addEventListener("click", Yellow);
        let lila = document.getElementById("purple");
        lila.addEventListener("click", Purple);
        let lauf = document.getElementById("lauf");
        lauf.addEventListener("click", zeichneKreis);
        let wachstum = document.getElementById("wachstum");
        wachstum.addEventListener("click", zeichneWachstum);
        let lauf2 = document.getElementById("lauf2");
        lauf2.addEventListener("click", zeichneDreieck);
        let wachstum2 = document.getElementById("wachstum2");
        wachstum2.addEventListener("click", zeichneWachstum2);
        let save = document.getElementById("save");
        save.addEventListener("click", saveBg);
        let load = document.getElementById("load");
        load.addEventListener("click", loadpicture);
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Zauberbild.crc.clearRect(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
        // crc.putImageData(imageData, 0, 0);
        Zauberbild.crc.rect(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
        Zauberbild.crc.fillStyle = Zauberbild.bg;
        Zauberbild.crc.fill();
        // Die Arrays werden durchlaufen mit Hilfe von I upgedated
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            Zauberbild.kreisArray[i].update(0, 0);
        }
        for (let i = 0; i < Zauberbild.auswahlArray.length; i++) {
            Zauberbild.auswahlArray[i].update(0, 0);
        }
    }
    // Die Event-Listener auf den Buttons rufen die Funktion auf und es werden neue Superklassen und Subklassen erstellt
    function zeichneKreis() {
        let circle = new Zauberbild.Element(); // Superklasse
        Zauberbild.kreisArray.push(circle); // Alle Elemente des Zauberbildes werden nachdem sie erstellt wurden im Kreisarray abgespeichert
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
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) { // Das Array wird durchlaufen
            let x = _event.clientX; // Die x-Position, an der geklickt wird, wird in x gespeichert
            let y = _event.clientY;
            //console.log("Auswahl");
            if (Zauberbild.kreisArray[i].x < x + 5 && Zauberbild.kreisArray[i].x < x + 5 && Zauberbild.kreisArray[i].y < y + 5 && Zauberbild.kreisArray[i].y < y - 5 && x <= Zauberbild.canvas.width && y <= Zauberbild.canvas.height) {
                // Klick mit Kreis vergleichen
                // wenn Klick und Kreis übereinstimmen, kann dieser gelöscht, oder verschoben werden
                //auswahlarray komplett löschen:
                if (Zauberbild.auswahlArray.length >= 1) {
                    Zauberbild.kreisArray.push(Zauberbild.auswahlArray[0]);
                    Zauberbild.auswahlArray.splice(0, 1);
                }
                Zauberbild.ausgewaehltesElement = i; //Das Element, auf das geklickt wurde, wird in I abgespeichert      
                Zauberbild.auswahlArray.push(Zauberbild.kreisArray[i]); // I ist das augewählte Element
                Zauberbild.kreisArray.splice(i, 1); // Das ausgewählte Element wird ins Auswahlarray gepushed und aus dem Kreisarray gespliced
                // Sobald das Mouseevent ausgeführt wird und ein Element ausgewählt wurde, werden 2 Buttons erstellt:
                if (buttons2 == true) {
                    return;
                } // solange buttons2 == false werden buttons erstellt -> verhindert, dass mehr als 2 buttons existieren
                let button = document.createElement("BUTTON"); // Create a <button> element
                button.innerHTML = "Lösche Element aus Bild"; // Insert text
                let div = document.getElementById("buttons");
                div.appendChild(button); // Button wird ans HTML gehängt
                button.addEventListener("click", deleteButton); // Eventlistener + Funktionsaufruf
                let buttonposition = document.createElement("BUTTON"); // Create a <button> element
                buttonposition.innerHTML = "Position verändern mit Pfeilen"; // Insert text
                let divposition = document.getElementById("buttons");
                divposition.appendChild(buttonposition);
                //console.log("buttonposition");
                buttonposition.addEventListener("click", positionButtonKreis);
                buttons2 = true; // erst wenn buttons erstellt wurden, ist boolean true
            }
        }
    }
    function deleteButton() {
        if (Zauberbild.auswahlArray.length > 1) {
            Zauberbild.kreisArray.push(Zauberbild.auswahlArray[0]);
            Zauberbild.auswahlArray.splice(0, 1);
        }
        Zauberbild.auswahlArray.splice(0, 1);
        document.getElementById("buttons").innerHTML = ""; // Alle Buttons verschwinden wieder, sobald ein Element gelöscht wurde
        buttons2 = false; // ausgangssituation boolean
    }
    function positionButtonKreis() {
        auswahl = true;
        document.addEventListener("keydown", steuerung); // Auf dem Document lieft ein Keydown-Event und es wird die Funktion Steuerung aufgerufen
    }
    function steuerung(_event) {
        if (auswahl == true) {
            // Das Auswahlarray wird zu Beginn komplett geleert
            // Steuerung durch Pfeiltasten
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
        document.getElementById("buttons").innerHTML = ""; // Alle Buttons verschwinden wieder, sobald die Position verändert wurde
        buttons2 = false;
    }
    function loadpicture() {
        Zauberbild.find(); // Find wird im Client aufgerufen und ausgeführt
    }
    function ladebild() {
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            Zauberbild.kreisArray.splice(0, Zauberbild.kreisArray.length);
            Zauberbild.auswahlArray.splice(0, Zauberbild.auswahlArray.length);
        }
        // Bilder, die in der Datenbank gespeichert wurden, können wieder hergestellt werden. Die Parameter werden zuvor an die Datenbank übergeben und jetzt können die Eigenschaften der einzelnen Zauberbilder identifiziert werden
        // Zuweisung von Werten:
        let id = this.id; //Jedes CanvasElement besitzt Id -> Position im globalArray
        let xbild = Zauberbild.globalArray[id].x;
        let ybild = Zauberbild.globalArray[id].y;
        let typebild = Zauberbild.globalArray[id].type; // Der Typ der Elemente, die in der Datenbank im Zauberbild gespeichert wurden
        let backgroundC = Zauberbild.globalArray[id].backgroundC; // Die gespeichert Hindergrundfarbe des Bildes
        let size = Zauberbild.globalArray[id].size; // Die gespeicherte Größe des Bildes
        //Wiederherstellung der gespeicherten Canvas-Größe:
        if (size == "400") {
            Klein();
        }
        if (size == "500") {
            Mittel();
        }
        if (size == "600") {
            Gross();
        }
        // Wiederherstellung der Hindergrund-Farbe:
        Zauberbild.bg = backgroundC;
        //Wiederherstellung der einzelnden Elemente:
        for (let i = 0; i < typebild.length; i++) {
            let element = {
                x: xbild[i],
                y: ybild[i],
                type: typebild[i]
            };
            if (element.type == "Wachstum2") {
                let dreieck = new Zauberbild.Wachstum2();
                dreieck.x = parseInt(element.x);
                dreieck.y = parseInt(element.y);
                Zauberbild.kreisArray.push(dreieck);
            }
            if (element.type == "Groese") {
                let kreis = new Zauberbild.Groese();
                kreis.x = parseInt(element.x);
                kreis.y = parseInt(element.y);
                Zauberbild.kreisArray.push(kreis);
            }
            if (element.type == "Test") {
                let dreieck2 = new Zauberbild.Test();
                dreieck2.x = parseInt(element.x);
                dreieck2.y = parseInt(element.y);
                Zauberbild.kreisArray.push(dreieck2);
            }
            if (element.type == "Element") {
                let kreis2 = new Zauberbild.Element();
                kreis2.x = parseInt(element.x);
                kreis2.y = parseInt(element.y);
                Zauberbild.kreisArray.push(kreis2);
            }
        }
        document.getElementById("fertigebilder").innerHTML = "";
        Zauberbild.ladebilder = false;
    }
    Zauberbild.ladebild = ladebild;
    function saveBg() {
        Zauberbild.insert();
    }
    // Die Buttons besitzen einen Event-Listener und rufen die Funktionen auf:
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
    function Yellow() {
        Zauberbild.bg = "yellow";
    }
    function Purple() {
        Zauberbild.bg = "purple";
    }
    function Blue() {
        Zauberbild.bg = "lightblue";
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=main.js.map