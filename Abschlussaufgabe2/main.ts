

namespace Zauberbild {

    // Kommentare zum Code, warum was......!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", auswahlKreis);


    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let ausgewaehltesElement: number;
    export let color: string;
    export let serverAddress: string = "https://kraemerj.herokuapp.com/";
    export let kreisArray: Element[] = [];
    export let auswahlArray: Element[] = [];
    let fps: number = 30;

    export let bg: string = "white";
    let auswahl: Boolean = false; // Boolean ist am Anfang auf false, später wird es geändert ????????????????????????????????????????
    //export let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");



    //let einkreis: Boolean = false;

    function init(): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");


        // Es werden Buttons erstellt, mit denen man das Zauberbild bearbeiten kann. Auf jedem Button liegt ein Click-Event, das eine Funktion aufruft

        let klein: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Klein");
        klein.addEventListener("click", Klein);
        let mittel: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Mittel");
        mittel.addEventListener("click", Mittel);
        let gross: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Gross");
        gross.addEventListener("click", Gross);

        let blau: HTMLButtonElement = <HTMLButtonElement>document.getElementById("blau");
        blau.addEventListener("click", Blue);
        let gelb: HTMLButtonElement = <HTMLButtonElement>document.getElementById("gelb");
        gelb.addEventListener("click", Yellow);
        let lila: HTMLButtonElement = <HTMLButtonElement>document.getElementById("purple");
        lila.addEventListener("click", Purple);

        let lauf: HTMLButtonElement = <HTMLButtonElement>document.getElementById("lauf");
        lauf.addEventListener("click", zeichneKreis);

        let wachstum: HTMLButtonElement = <HTMLButtonElement>document.getElementById("wachstum");
        wachstum.addEventListener("click", zeichneWachstum);

        let lauf2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("lauf2");
        lauf2.addEventListener("click", zeichneDreieck);

        let wachstum2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("wachstum2");
        wachstum2.addEventListener("click", zeichneWachstum2);

        let save: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save");
        save.addEventListener("click", saveBg);

        let load: HTMLButtonElement = <HTMLButtonElement>document.getElementById("load");
        load.addEventListener("click", loadpicture);

        update();

    }



    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        // crc.putImageData(imageData, 0, 0);


        crc.rect(0, 0, canvas.width, canvas.height);
        crc.fillStyle = bg;
        crc.fill();

        // Die Arrays werden durchlaufen mit Hilfe von I und werden upgedated

        for (let i: number = 0; i < kreisArray.length; i++) {
            kreisArray[i].update(0, 0);
            // console.log("Hiiii");
        }


        for (let i: number = 0; i < auswahlArray.length; i++) {
            auswahlArray[i].update(0, 0);

        }
    }

    // Die Event-Listener auf den Buttons rufen die Funktion auf und es werden neue Superklassen und Subklassen erstellt

    function zeichneKreis(): void {
        let circle: Element = new Element(); // Superklasse
        kreisArray.push(circle);    // Alle Elemente des Zauberbildes werden nachdem sie erstellt wurden im Kreisarray abgespeichert
    }

    function zeichneWachstum2(): void {
        let wachstum2: Wachstum2 = new Wachstum2();
        kreisArray.push(wachstum2);
    }


    function zeichneWachstum(): void {

        let circlegroese: Groese = new Groese();
        kreisArray.push(circlegroese);
    }

    function zeichneDreieck(): void {
        let dreieck: Test = new Test();
        kreisArray.push(dreieck);
    }




    function auswahlKreis(_event: MouseEvent): void { // Beim Klick auf den Canvas wird die Funktion aufgerufen

        auswahl = false;
        
        
        for (let i: number = 0; i < kreisArray.length; i++) { // Das Array wird durchlaufen

            let x: number = _event.clientX;  // Die x-Position, an der geklickt wird, wird in x gespeichert
            let y: number = _event.clientY;
            //console.log("Auswahl");

            if (kreisArray[i].x < x + 5 && kreisArray[i].x < x + 5 && kreisArray[i].y < y + 5 && kreisArray[i].y < y - 5 && x <= canvas.width && y <= canvas.height) {
                // Klick mit Kreis vergleichen
                // wenn Klick und Kreis übereinstimmen, kann dieser gelöscht, oder verschoben werden


                //auswahlarray komplett löschen:
                if (auswahlArray.length >= 1) {
                    kreisArray.push(auswahlArray[0]);
                    auswahlArray.splice(0, 1);
                }
                ausgewaehltesElement = i; //Das Element, auf das geklickt wurde, wird in I abgespeichert       ????????????????????????????????????? welches i wird genommen ???????????????????????????????????????
                auswahlArray.push(kreisArray[i]); // I ist das augewählte Element
                kreisArray.splice(i, 1); // Das ausgewählte Element wird ins Auswahlarray gepushed und aus dem Kreisarray gespliced

                // Sobald das Mouseevent ausgeführt wird und ein Element ausgewählt wurde, werden 2 Buttons erstellt

                
                let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");   // Create a <button> element
                button.innerHTML = "Delete";   // Insert text
                let div: HTMLDivElement = <HTMLDivElement>document.getElementById("buttons");
                div.appendChild(button); // Button wird ans HTML gehängt
                button.addEventListener("click", deleteButton); // Eventlistener + Funktionsaufruf

                let buttonposition: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");   // Create a <button> element
                buttonposition.innerHTML = "Position";   // Insert text
                let divposition: HTMLDivElement = <HTMLDivElement>document.getElementById("buttons");
                divposition.appendChild(buttonposition);
                //console.log("buttonposition");
                buttonposition.addEventListener("click", positionButtonKreis);


            }

        }
    }
    function deleteButton(): void { // Bei Klick auf "Delete" wird die Funktion aufgerufen
        if (auswahlArray.length > 1) {
            kreisArray.push(auswahlArray[0]);
            auswahlArray.splice(0, 1);
        }

        auswahlArray.splice(0, 1);
        //kreisArray.splice(ausgewaehltesElement, 1);
        //console.log("weg mit dir");

        document.getElementById("buttons").innerHTML = ""; // Alle Buttons verschwinden wieder, sobald ein Element gelöscht wurde
    }


    function positionButtonKreis(): void { // Bei Klick auf "Position" wird die Function aufgerufen

        auswahl = true;

        document.addEventListener("keydown", steuerung); // Auf dem Document lieft ein Keydown-Event und es wird die Funktion Steuerung aufgerufen

    }

    function steuerung(_event: KeyboardEvent): void {

        if (auswahl == true) { //??????????????????????????????????????????
            // Das Auswahlarray wird zu Beginn komplett geleert

            // Steuerung durch Pfeiltasten

            if (auswahlArray.length > 1) {
                kreisArray.push(auswahlArray[0]);
                auswahlArray.splice(0, 1);
            }
            if (_event.keyCode == 38) { // hoch

                auswahlArray[0].update(0, - 5);
                console.group("oben");

            }
            if (_event.keyCode == 40) { //runter
                auswahlArray[0].update(0, 5);

            }

            if (_event.keyCode == 39) { //left
                auswahlArray[0].update(5, 0);

            }
            if (_event.keyCode == 37) { //right
                auswahlArray[0].update(- 5, 0);

            }
        }

        document.getElementById("buttons").innerHTML = ""; // Alle Buttons verschwinden wieder, sobald die Position verändert wurde

    }




    function loadpicture(): void {
        find(); // Find wird im Client aufgerufen und ausgeführt
    }

    export function ladebild(): void {
        //console.log(globalArray);
        for (let i: number = 0; i < kreisArray.length; i++) {
            kreisArray.pop();
            auswahlArray.pop();
        }

        // Bilder, die in der Datenbank gespeichert wurden, können wieder hergestellt werden. Die Parameter werden zuvor an die Datenbank übergeben und jetzt können die Eigenschaften der einzelnen Zauberbilder identifiziert werden
        // Zuweisung von Werten:

        let id: number = this.id; //Jedes der Elemente besitzt eine ID ?????????????????????????????????????????????????ß
        let xbild: string = globalArray[id].x; // X-Position der einzelnden Elemente
        let ybild: string = globalArray[id].y;
        let typebild: string = globalArray[id].type; // Der Typ der Elemente, die in der Datenbank im Zauberbild gespeichert wurden
        let backgroundC: string = globalArray[id].backgroundC; // Die gespeichert Hindergrundfarbe des Bildes
        let size: string = globalArray[id].size; // Die gespeicherte Größe des Bildes

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
        bg = backgroundC;

        //Wiederherstellung der einzelnden Elemente:

        for (let i: number = 0; i < typebild.length; i++) {
            let element: Symbole = { // Neue Elemente werden "angelegt" -> bzw wieder hergestellt, die x und y Position & der Type wurden in der Datenbank abgespeichert 
                x: xbild[i],  // ????????????????????????????????????????????????????????????????????????
                y: ybild[i],
                type: typebild[i]
            };

            if (element.type == "Wachstum2") {
                let dreieck: Wachstum2 = new Wachstum2();
                dreieck.x = parseInt(element.x);
                dreieck.y = parseInt(element.y);
                kreisArray.push(dreieck);
            }

            if (element.type == "Groese") {
                let kreis: Groese = new Groese();
                kreis.x = parseInt(element.x);
                kreis.y = parseInt(element.y);
                kreisArray.push(kreis);
            }

            if (element.type == "Test") {
                let dreieck2: Test = new Test();
                dreieck2.x = parseInt(element.x);
                dreieck2.y = parseInt(element.y);
                kreisArray.push(dreieck2);
            }
            if (element.type == "Element") {
                let kreis2: Element = new Element();
                kreis2.x = parseInt(element.x);
                kreis2.y = parseInt(element.y);
                kreisArray.push(kreis2);
            }
        }
        document.getElementById("buttons").innerHTML = ""; // ?????????????????????????????????? buttons werden nicht gelöscht????????????????????????????????????


    }


    function saveBg(): void {
        //let background: string = bg;
        insert();
    }


    // Die Buttons besitzen einen Event-Listener und rufen die Funktionen auf:

    function Klein(): void {
        canvas.height = 400;
        canvas.width = 400;

    }

    function Mittel(): void {
        canvas.height = 500;
        canvas.width = 500;
    }

    function Gross(): void {
        canvas.height = 600;
        canvas.width = 600;
    }

    function Yellow(): void {
        bg = "yellow";

    }

    function Purple(): void {
        bg = "purple";

    }

    function Blue(): void {
        bg = "lightblue";
    }



}


