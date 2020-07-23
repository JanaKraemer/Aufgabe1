var Zauberbild;
(function (Zauberbild) {
    // Kommentare zum Code, warum was......!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", auswahlKreis);
    //let zauberbild: Element[] = [];
    Zauberbild.kreisArray = [];
    //export let newpositionArray: Element[] = [];
    Zauberbild.auswahlArray = [];
    let fps = 30;
    let imageData;
    //export let kreisArraymove: Move[] = [];
    let bg = "white";
    Zauberbild.input = document.getElementsByTagName("input");
    let einkreis = false;
    function init() {
        Zauberbild.canvas = document.getElementsByTagName("canvas")[0];
        Zauberbild.crc = Zauberbild.canvas.getContext("2d");
        imageData = Zauberbild.crc.getImageData(0, 0, 600, 600);
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
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Zauberbild.crc.clearRect(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
        Zauberbild.crc.rect(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
        Zauberbild.crc.fillStyle = bg;
        Zauberbild.crc.fill();
        zeichneKreis();
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            Zauberbild.kreisArray[i].update();
            // console.log("Hiiii");
        }
        //for (let i: number = 0; i < newpositionArray.length; i++) {
        //  newpositionArray[i].update();
        // console.log("Hiiii");
        //}
        for (let i = 0; i < Zauberbild.auswahlArray.length; i++) {
            Zauberbild.auswahlArray[i].update();
            // console.log("Hiiii");
        }
    }
    function zeichneKreis() {
        let radio = document.getElementById("rotate");
        if (radio.checked == true && einkreis == false) {
            einkreis = true;
            for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
                Zauberbild.kreisArray.pop();
                //kreisArraymove.pop();
            }
            console.log("what???");
            let circle = new Zauberbild.Element();
            Zauberbild.kreisArray.push(circle);
            // kreisArray[0].update();
        }
        // kreisArray.push(circle);
        let radio2 = document.getElementById("move2");
        if (radio2.checked == true) {
            for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
                //kreisArraymove.pop();
                Zauberbild.kreisArray.pop();
            }
            let circlegroese = new Zauberbild.Groese();
            Zauberbild.kreisArray.push(circlegroese);
            console.log("Ich wachse");
            //}
        }
    }
    function auswahlKreis(_event) {
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            let x = _event.clientX; // Position, an der geklickt wurde
            let y = _event.clientY;
            //console.log("Auswahl");
            if (Zauberbild.kreisArray[i].x < x + 20 && Zauberbild.kreisArray[i].x < x - 20 && Zauberbild.kreisArray[i].y < y + 20 && Zauberbild.kreisArray[i].y < y - 20 && x <= Zauberbild.canvas.width && y <= Zauberbild.canvas.height) {
                Zauberbild.auswahlArray.push(Zauberbild.kreisArray[i]); // Klick mit Kreis vergleichen
                // wenn Klick und Kreis übereinstimmen, kann dieser gelöscht, oder verschoben werden
                //console.log("Auswahl");
                let button = document.createElement("BUTTON"); // Create a <button> element
                button.innerHTML = "Delete Kreis"; // Insert text
                document.body.appendChild(button); //Button erscheint im HTML
                //console.log("button");
                button.addEventListener("click", deleteButton);
                let buttonposition = document.createElement("BUTTON"); // Create a <button> element
                buttonposition.innerHTML = "Kreis Position verändern"; // Insert text
                document.body.appendChild(buttonposition); //Button erscheint im HTML
                //console.log("buttonposition");
                buttonposition.addEventListener("click", positionButtonKreis);
            }
        }
    }
    function positionButtonKreis(_event) {
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            Zauberbild.auswahlArray.splice(i, 1);
            Zauberbild.kreisArray.splice(i, 1);
            // console.log("weg mit dir");
        }
        let x = _event.clientX; // Problem, weil Button nicht in Canvas ist (wegen x,y) ??????????
        let y = _event.clientY;
        if (x < Zauberbild.canvas.width && y < Zauberbild.canvas.height) {
            let newKreis = new Zauberbild.Element(x, y);
            Zauberbild.kreisArray.push(newKreis);
        }
        //if (x < canvas.width && y < canvas.height) {
        //  let circle: Element = new Element(x, y);
        //kreisArray.push(circle);
        //}
    }
    function deleteButton() {
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            Zauberbild.auswahlArray.splice(i, 1);
            Zauberbild.kreisArray.splice(i, 1);
            // console.log("weg mit dir");
        }
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
        bg = "yellow";
    }
    function Weiß() {
        bg = "purple";
    }
    function Schwarz() {
        bg = "lightblue";
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=main.js.map