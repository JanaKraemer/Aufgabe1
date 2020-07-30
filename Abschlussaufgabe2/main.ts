

namespace Zauberbild {

    // Kommentare zum Code, warum was......!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", auswahlKreis);


    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let ausgewaehltesElement: number;
    export let color: string;
    export let serverAddress: string = "https://kraemerj.herokuapp.com/";

    //let zauberbild: Element[] = [];
    export let kreisArray: Element[] = [];
    //export let newpositionArray: Element[] = [];
    export let auswahlArray: Element[] = [];
    let fps: number = 30;
    //let imageData: ImageData;
    //export let kreisArraymove: Move[] = [];

    export let bg: string = "white";
    let auswahl: Boolean = false;
    export let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");



    let einkreis: Boolean = false;

    function init(): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        //imageData = crc.getImageData(0, 0, 600, 600);

        //let test: HTMLButtonElement = <HTMLButtonElement>document.getElementById("test");
        //test.addEventListener("click", zeichneKreis);

        let klein: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Klein");
        klein.addEventListener("click", Klein);
        let mittel: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Mittel");
        mittel.addEventListener("click", Mittel);
        let gross: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Gross");
        gross.addEventListener("click", Gross);

        let schwarz: HTMLButtonElement = <HTMLButtonElement>document.getElementById("schwarz");
        schwarz.addEventListener("click", Schwarz);
        let grau: HTMLButtonElement = <HTMLButtonElement>document.getElementById("grau");
        grau.addEventListener("click", Grau);
        let weiß: HTMLButtonElement = <HTMLButtonElement>document.getElementById("weiß");
        weiß.addEventListener("click", Weiß);

        let lauf: HTMLButtonElement = <HTMLButtonElement>document.getElementById("lauf");
        lauf.addEventListener("click", zeichneKreis);

        let wachstum: HTMLButtonElement = <HTMLButtonElement>document.getElementById("wachstum");
        wachstum.addEventListener("click", zeichneWachstum);

        let lauf2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("lauf2");
        lauf2.addEventListener("click", zeichneDreieck);

        let wachstum2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("wachstum2");
        wachstum2.addEventListener("click", zeichneWachstum2);

        let save: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save");
        save.addEventListener("click", saveName);

        update();

    }


    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        // crc.putImageData(imageData, 0, 0);


        crc.rect(0, 0, canvas.width, canvas.height);
        crc.fillStyle = bg;
        crc.fill();


        for (let i: number = 0; i < kreisArray.length; i++) {
            kreisArray[i].update(0, 0);
            // console.log("Hiiii");
        }


        for (let i: number = 0; i < auswahlArray.length; i++) {
            auswahlArray[i].update(0, 0);
            // console.log("Hiiii");
        }
    }



    function zeichneKreis(): void {
        let circle: Element = new Element();
        kreisArray.push(circle);

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




    function auswahlKreis(_event: MouseEvent): void {

        auswahl = false;

        for (let i: number = 0; i < kreisArray.length; i++) {

            let x: number = _event.clientX; // Position, an der geklickt wurde
            let y: number = _event.clientY;
            //console.log("Auswahl");

            if (kreisArray[i].x < x + 10 && kreisArray[i].x < x + 10 && kreisArray[i].y < y + 10 && kreisArray[i].y < y - 10 && x <= canvas.width && y <= canvas.height) {
                // Klick mit Kreis vergleichen
                // wenn Klick und Kreis übereinstimmen, kann dieser gelöscht, oder verschoben werden

                if (auswahlArray.length >= 1) {
                    kreisArray.push(auswahlArray[0]);
                    auswahlArray.splice(0, 1);
                }
                ausgewaehltesElement = i;
                auswahlArray.push(kreisArray[i]);
                kreisArray.splice(i, 1);

                let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");   // Create a <button> element
                button.innerHTML = "Delete";   // Insert text
                let div: HTMLDivElement = <HTMLDivElement>document.getElementById("buttons");
                div.appendChild(button);
                button.addEventListener("click", deleteButton);

                let buttonposition: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");   // Create a <button> element
                buttonposition.innerHTML = "Position";   // Insert text
                let divposition: HTMLDivElement = <HTMLDivElement>document.getElementById("buttons");
                divposition.appendChild(buttonposition);
                //console.log("buttonposition");
                buttonposition.addEventListener("click", positionButtonKreis);

                let buttoncolor: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");   // Create a <button> element
                buttoncolor.innerHTML = "Farbe ändern";   // Insert text
                let divcolor: HTMLDivElement = <HTMLDivElement>document.getElementById("buttons");
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

    function positionButtonKreis(_event: MouseEvent): void {

        auswahl = true;

        document.addEventListener("keydown", steuerung);

    }

    function steuerung(_event: KeyboardEvent): void {



        if (auswahl == true) {
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

        document.getElementById("buttons").innerHTML = "";

    }


    function deleteButton(): void {

        auswahlArray.splice(0, 1);
        //kreisArray.splice(ausgewaehltesElement, 1);
        //console.log("weg mit dir");

        document.getElementById("buttons").innerHTML = "";
    }

    function saveName(): void {
        let save: string = prompt("Name");
        let background: string = bg;
        insert(save);
    }

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

    function Grau(): void {
        bg = "yellow";

    }

    function Weiß(): void {
        bg = "purple";

    }

    function Schwarz(): void {
        bg = "lightblue";
    }



}


