"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener("DOMContentLoaded", init);
let canvas;
let crc;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        wasser(x, y);
    }
    for (let i = 0; i < 5; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        blase(x, y);
    }
    for (let i = 0; i < 4; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        fish2(x, y);
    }
    for (let i = 0; i < 15; i++) {
        let x = 15 * canvas.height;
        steine(x);
    }
}
function steine(_x) {
    let steine = new Path2D();
    steine.arc(_x + 30, 584, 15, 0, 360);
    steine.closePath();
    crc.fillStyle = "grey";
    crc.fill(steine);
    crc.stroke(steine);
}
function wasser(_x, _y) {
    let wasser = new Path2D();
    wasser.rect(0, 0, 600, 600);
    wasser.closePath();
    crc.fillStyle = "lightblue";
    crc.fill(wasser);
    crc.stroke(wasser);
    let sand = new Path2D();
    sand.rect(0, 500, 600, 100);
    sand.closePath();
    crc.fillStyle = "burlywood";
    crc.fill(sand);
    crc.stroke(sand);
    let fish1 = new Path2D();
    fish1.arc(200, 200, 30, 0, 360);
    crc.fillStyle = "red";
    crc.fill(fish1);
    crc.stroke(fish1);
    let flosse1 = new Path2D();
    flosse1.moveTo(210, 200);
    flosse1.lineTo(250, 170);
    flosse1.lineTo(250, 230);
    flosse1.closePath();
    crc.fillStyle = "red";
    crc.fill(flosse1);
    crc.stroke(flosse1);
    let blase = new Path2D();
    blase.arc(_x, _y - 50, 10, 0, 360);
    blase.closePath();
    crc.fillStyle = "white";
    crc.fill(blase);
    crc.stroke(blase);
    let blase2 = new Path2D();
    blase2.arc(_x + 70, _y - 70, 30, 0, 360);
    blase2.closePath();
    crc.fillStyle = "white";
    crc.fill(blase2);
    crc.stroke(blase2);
    let pflanze = new Path2D();
    pflanze.bezierCurveTo(100, 300, 100, 150, 200, 600);
    crc.fillStyle = "darkgreen";
    crc.fill(pflanze);
    crc.stroke(pflanze);
    let pflanze2 = new Path2D();
    pflanze2.bezierCurveTo(500, 300, 400, 250, 400, 600);
    crc.fillStyle = "darkgreen";
    crc.fill(pflanze2);
    crc.stroke(pflanze2);
    let schiff = new Path2D();
    schiff.arc(300, 450, 50, 2 * Math.PI, Math.PI);
    crc.fillStyle = "brown";
    crc.fill(schiff);
    crc.stroke(schiff);
    let mast = new Path2D();
    mast.moveTo(300, 450);
    mast.lineTo(300, 380);
    crc.fillStyle = "brown";
    crc.fill(mast);
    crc.stroke(mast);
    let segel = new Path2D();
    segel.moveTo(330, 380);
    segel.lineTo(330, 350);
    segel.lineTo(330, 400);
    crc.fillStyle = "orange";
    crc.fill(segel);
    crc.stroke(segel);
}
function blase(_x, _y) {
    let blase = new Path2D();
    blase.arc(_x, _y - 50, 10, 0, 360);
    blase.closePath();
    crc.fillStyle = "white";
    crc.fill(blase);
    crc.stroke(blase);
    let blase2 = new Path2D();
    blase2.arc(_x + 70, _y - 70, 30, 0, 360);
    blase2.closePath();
    crc.fillStyle = "white";
    crc.fill(blase2);
    crc.stroke(blase2);
}
function fish2(_x, _y) {
    let fish2 = new Path2D();
    fish2.arc(_x - 30, _y + 30, 40, 0.75 * Math.PI, 1.5 * Math.PI);
    fish2.closePath();
    crc.fillStyle = "yellow";
    crc.fill(fish2);
    crc.stroke(fish2);
    let flosse2 = new Path2D();
    flosse2.moveTo(_x - 45, _y + 20);
    flosse2.lineTo(_x - 30, _y + 60);
    flosse2.lineTo(_x - 10, _y + 10);
    crc.closePath();
    crc.fillStyle = "yellow";
    crc.fill(flosse2);
    crc.stroke(flosse2);
    let auge2 = new Path2D();
    auge2.arc(_x - 50, _y + 10, 5, 0, 360);
    crc.fillStyle = "black";
    crc.fill(auge2);
    crc.stroke(auge2);
}
//# sourceMappingURL=main.js.map