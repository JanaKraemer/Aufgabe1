import { Stein } from "./steine";
import { Fisch } from "./animationfish";
import { Bubble } from "./bubbles";


document.addEventListener("DOMContentLoaded", init);

export let crc: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement;
let fishArray: Fisch[] = [];
let stoneArray: Stein[] = [];
let bubbleArray: Bubble[] = [];
let fps: number = 30;
let imageData: ImageData;

function init(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    wasser();
    //Fisch1
    for (let i: number = 0; i < 10; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let dx: number = Math.random() * 10 - 5;
        let dy: number = Math.random() * 10 - 5;
        let fish: Fisch = new Fisch();
        fish.x = x;
        fish.y = y;
        fish.dx = dx;
        fish.dy = dy;
        fishArray.push(fish);
        fish.draw();

    }
    //Steine
    for (let i: number = 0; i < 20; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        let dx: number = Math.random() * 10 - 5;
        let dy: number = Math.random() * 10 - 5;
        let stone: Stein;
        stone = new Stein();
        stone.x = x;
        stone.y = y;
        stone.dx = dx;
        stone.dy = dy;
        stoneArray.push(stone);
        stone.draw();

    }
    update();
}

for (let i: number = 0; i < 10; i++) {
    let x: number = Math.random() * canvas.width;
    let y: number = Math.random() * canvas.height;
    let dx: number = Math.random() * 10 - 5;
    let dy: number = Math.random() * 10 - 5;
    let blase: Bubble;
    blase = new Bubble();
    blase.x = x;
    blase.y = y;
    blase.dx = dx;
    blase.dy = dy;
    bubbleArray.push(blase);
    blase.draw();

}

function update(): void {
    window.setTimeout(update, 1000 / fps);
    crc.clearRect(0, 0, canvas.width, canvas.height);
    crc.putImageData(imageData, 0, 0);

    for (let i: number = 0; i < fishArray.length; i++) {
        fishArray[i].x += fishArray[i].dx;
    }
    for (let i: number = 0; i < stoneArray.length; i++) {
        stoneArray[i].update();
    }
    for (let i: number = 0; i < bubbleArray.length; i++) {
        bubbleArray[i].update();
    }
}



function wasser(): void {
    let wasser: Path2D = new Path2D();
    wasser.rect(0, 0, 600, 600);
    crc.fillStyle = "lightblue";
    crc.fill(wasser);
    crc.stroke(wasser);

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





