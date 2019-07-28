

namespace catchthefish {

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", steuerung);
    // let address: string ="https://kraemerj.herokuapp.com/";

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let haiArray: Fisch[] = [];
    let kleinerFischArray: Fisch[] = [];
    let scoreArray: Fisch[] = [];
    let fps: number = 30;
    let imageData: ImageData;


    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        background();

        imageData = crc.getImageData(0, 0, 1000, 600);

        //Hai
        for (let i: number = 0; i < 3; i++) {
            let hai: Hai = new Hai();
            haiArray.push(hai);

        }
        //Fisch orange
        for (let i: number = 0; i < 1; i++) {

            let fisch: Fisch = new Fisch();
            kleinerFischArray.push(fisch);

        }
        //Qualle
        for (let i: number = 0; i < 5; i++) {

            let qualle: Qualle = new Qualle();
            haiArray.push(qualle);


        }
        //Opfer fisch
        for (let i: number = 0; i < 8; i++) {

            let opfer: Opfer = new Opfer();
            haiArray.push(opfer);


        }



        update();

    }

    function eatfish(): void {
        for (let i: number = 0; i < haiArray.length; i++) {
            if (haiArray[i].x > kleinerFischArray[0].x - 20 && haiArray[i].x < kleinerFischArray[0].x + 20 && haiArray[i].y > kleinerFischArray[0].y - 20 && haiArray[i].y < kleinerFischArray[0].y + 20) {
                console.log("Treffer");
                
                if (kleinerFischArray[0].size < haiArray[i].size) {
                    alert("Game over");
                    scoreSpeicher();
                    scoreFisch();
                    name();
                }
                if (kleinerFischArray[0].size > haiArray[i].size) {
                    scoreArray.push(haiArray[i]);
                    haiArray.splice(i, 1);
                   

                    let opfer: Opfer = new Opfer();
                    haiArray.push(opfer);
                    scaleFisch();
                    scoreSpeicher();
                    scoreFisch();
                    
                }
            }
        }
    }
    export function scaleFisch(): void {

        kleinerFischArray[0].a += 1;
        console.log("scale");

        scoreFisch();

    }

    function scoreFisch(): void {
        document.getElementById("score").innerHTML = scoreArray.length.toString();

    }

    function scoreSpeicher(): void {
        let query: string;
        query += name;
    }

    function steuerung(_event: KeyboardEvent): void {

        if (_event.keyCode == 38) { // hoch

            kleinerFischArray[0].update(0, - 5);

        }
        if (_event.keyCode == 40) { //runter
            kleinerFischArray[0].update(0, 5);
        }

        if (_event.keyCode == 39) { //left
            kleinerFischArray[0].update(5, 0);
        }
        if (_event.keyCode == 37) { //right
            kleinerFischArray[0].update(- 5, 0);
        }

    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);



        for (let i: number = 0; i < haiArray.length; i++) {
            haiArray[i].update(0, 0);
        }
        for (let i: number = 0; i < kleinerFischArray.length; i++) {
            kleinerFischArray[0].update(0, 0);
        }
        eatfish();
       

    }

    function name(): void {
        let name: string = prompt("Name:");

        find();
        insertquery(name, scoreArray.length);
    }


    function background(): void {
        crc.fillStyle = "lightblue";
        crc.fillRect(0, 0, 1000, 800);
        crc.fillStyle = "lightblue";

    }
}
