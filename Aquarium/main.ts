namespace aquarium {

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedwon", futter);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let fishArray: Fisch[] = [];
    let fps: number = 30;
    let imageData: ImageData;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        wasser();
        imageData = crc.getImageData(0, 0, 600, 600);

        //Fisch1
        for (let i: number = 0; i < 5; i++) {

            let fish: Fisch = new Fisch();
            fishArray.push(fish);


        }
        //fish2
        for (let i: number = 0; i < 5; i++) {

            let fish2: Fisch2 = new Fisch2();
            fishArray.push(fish2);


        }
        //bubbles
        for (let i: number = 0; i < 20; i++) {

            let blase: Bubble = new Bubble();
            fishArray.push(blase);

        }
        update();

    }


    function futter(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        if (x < canvas.width && y < canvas.height) {
        let futter: Futter = new Futter(x, y);

        fishArray.push(futter);
        } 

    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
    }


    function wasser(): void {

        crc.fillStyle = "lightblue";
        crc.fillRect(0, 0, 600, 600);
        crc.fillStyle = "lightblue";

        let sand: Path2D = new Path2D();
        sand.rect(0, 500, 600, 100);
        crc.fillStyle = "burlywood";
        crc.fill(sand);
        crc.stroke(sand);

        let pflanze: Path2D = new Path2D();
        pflanze.bezierCurveTo(100, 300, 100, 150, 200, 600);
        crc.fillStyle = "darkgreen";
        crc.fill(pflanze);
        crc.stroke(pflanze);


        let pflanze2: Path2D = new Path2D();
        pflanze2.bezierCurveTo(500, 300, 400, 250, 400, 600);
        crc.fillStyle = "darkgreen";
        crc.fill(pflanze2);
        crc.stroke(pflanze2);

        for (let i: number = 0; i < 20; i++) {
            let x: number = Math.random() * canvas.width;

            let steine: Path2D = new Path2D();
            steine.arc(x + 30, 584, 10, 0, 360);
            crc.fillStyle = "grey";
            crc.fill(steine);
            crc.stroke(steine);
        }

        let schiff: Path2D = new Path2D();
        schiff.arc(300, 450, 50, 2 * Math.PI, Math.PI);
        crc.fillStyle = "brown";
        crc.fill(schiff);
        crc.stroke(schiff);

        let mast: Path2D = new Path2D();
        mast.moveTo(300, 450);
        mast.lineTo(300, 380);
        crc.fillStyle = "brown";
        crc.fill(mast);
        crc.stroke(mast);

        let segel: Path2D = new Path2D();
        segel.moveTo(260, 380);
        segel.lineTo(300, 350);
        segel.lineTo(300, 400);
        crc.fillStyle = "orange";
        crc.fill(segel);
        crc.stroke(segel);
    }

}




