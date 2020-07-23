namespace Zauberbild {

    // Kommentare zum Code, warum was......!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", auswahlKreis);


    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    //let zauberbild: Element[] = [];
    export let kreisArray: Element[] = [];
    //export let newpositionArray: Element[] = [];
    export let auswahlArray: Element[] = [];
    let fps: number = 30;
    let imageData: ImageData;
    //export let kreisArraymove: Move[] = [];

    let bg: string = "white";
    export let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");



    let einkreis: Boolean = false;

    function init(): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        imageData = crc.getImageData(0, 0, 600, 600);

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


        update();

    }


    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);

        crc.rect(0, 0, canvas.width, canvas.height);
        crc.fillStyle = bg;
        crc.fill();

        zeichneKreis();




        for (let i: number = 0; i < kreisArray.length; i++) {
            kreisArray[i].update();
            // console.log("Hiiii");
        }

        //for (let i: number = 0; i < newpositionArray.length; i++) {
          //  newpositionArray[i].update();
            // console.log("Hiiii");
        //}

        for (let i: number = 0; i < auswahlArray.length; i++) {
            auswahlArray[i].update();
            // console.log("Hiiii");
        }
    }



    function zeichneKreis(): void {

        let radio: HTMLInputElement = <HTMLInputElement>document.getElementById("rotate");
        if (radio.checked == true && einkreis == false) {
            einkreis = true;

            for (let i: number = 0; i < kreisArray.length; i++) {
                kreisArray.pop();
                //kreisArraymove.pop();
            }

            console.log("what???");
            let circle: Element = new Element();
            kreisArray.push(circle);
            // kreisArray[0].update();

        }
        // kreisArray.push(circle);
        let radio2: HTMLInputElement = <HTMLInputElement>document.getElementById("move2");
        if (radio2.checked == true) {

            for (let i: number = 0; i < kreisArray.length; i++) {
                //kreisArraymove.pop();
                kreisArray.pop();
            }
            let circlegroese: Groese = new Groese();
            kreisArray.push(circlegroese);


            console.log("Ich wachse");
            //}

        }
    }

    function auswahlKreis(_event: MouseEvent): void {

        for (let i: number = 0; i < kreisArray.length; i++) {

            let x: number = _event.clientX; // Position, an der geklickt wurde
            let y: number = _event.clientY;
            //console.log("Auswahl");

            if (kreisArray[i].x < x + 20 && kreisArray[i].x < x - 20 && kreisArray[i].y < y + 20 && kreisArray[i].y < y - 20 && x <= canvas.width && y <= canvas.height) {
                auswahlArray.push(kreisArray[i]); // Klick mit Kreis vergleichen
                // wenn Klick und Kreis übereinstimmen, kann dieser gelöscht, oder verschoben werden


                //console.log("Auswahl");

                let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");   // Create a <button> element
                button.innerHTML = "Delete Kreis";   // Insert text
                document.body.appendChild(button); //Button erscheint im HTML
                //console.log("button");
                button.addEventListener("click", deleteButton);

                let buttonposition: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");   // Create a <button> element
                buttonposition.innerHTML = "Kreis Position verändern";   // Insert text
                document.body.appendChild(buttonposition); //Button erscheint im HTML
                //console.log("buttonposition");
                buttonposition.addEventListener("click", positionButtonKreis);

            }

        }
    }

    function positionButtonKreis(_event: MouseEvent): void {
        for (let i: number = 0; i < kreisArray.length; i++) {
            
            auswahlArray.splice(i, 1);
            kreisArray.splice(i, 1);
            // console.log("weg mit dir");
        }
        let x: number = _event.clientX; // Problem, weil Button nicht in Canvas ist (wegen x,y) ??????????
        let y: number = _event.clientY;
        if (x < canvas.width && y < canvas.height) {
            let newKreis: Element = new Element(x, y);

            kreisArray.push(newKreis);
        }
        //if (x < canvas.width && y < canvas.height) {
        //  let circle: Element = new Element(x, y);

        //kreisArray.push(circle);
        //}
    }

    function deleteButton(): void {
        for (let i: number = 0; i < kreisArray.length; i++) {
            auswahlArray.splice(i, 1);
            kreisArray.splice(i, 1);
            // console.log("weg mit dir");
        }

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


