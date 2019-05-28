
document.addEventListener("DOMContentLoaded", init);

let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
let crc: CanvasRenderingContext2D = canvas.getContext("2d");

function init(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    for (let i: number = 0; i < 10; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        wasser();




    }

    function wasser(): void {
        let wasser: Path2D = new Path2D();
        wasser.rect(0, 0, 600, 600);
    }
}