"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const steine_1 = require("./steine");
const animationfish_1 = require("./animationfish");
const bubbles_1 = require("./bubbles");
document.addEventListener("DOMContentLoaded", init);
let canvas;
let fishArray = [];
let stoneArray = [];
let bubbleArray = [];
let fps = 30;
let imageData;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    exports.crc = canvas.getContext("2d");
    wasser();
    //Fisch1
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = Math.random() * 10 - 5;
        let dy = Math.random() * 10 - 5;
        let fish = new animationfish_1.Fisch();
        fish.x = x;
        fish.y = y;
        fish.dx = dx;
        fish.dy = dy;
        fishArray.push(fish);
        fish.draw();
    }
    //Steine
    for (let i = 0; i < 20; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = Math.random() * 10 - 5;
        let dy = Math.random() * 10 - 5;
        let stone;
        stone = new steine_1.Stein();
        stone.x = x;
        stone.y = y;
        stone.dx = dx;
        stone.dy = dy;
        stoneArray.push(stone);
        stone.draw();
    }
    update();
}
for (let i = 0; i < 10; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let dx = Math.random() * 10 - 5;
    let dy = Math.random() * 10 - 5;
    let blase;
    blase = new bubbles_1.Bubble();
    blase.x = x;
    blase.y = y;
    blase.dx = dx;
    blase.dy = dy;
    bubbleArray.push(blase);
    blase.draw();
}
function update() {
    window.setTimeout(update, 1000 / fps);
    exports.crc.clearRect(0, 0, canvas.width, canvas.height);
    exports.crc.putImageData(imageData, 0, 0);
    for (let i = 0; i < fishArray.length; i++) {
        fishArray[i].x += fishArray[i].dx;
    }
    for (let i = 0; i < stoneArray.length; i++) {
        stoneArray[i].update();
    }
    for (let i = 0; i < bubbleArray.length; i++) {
        bubbleArray[i].update();
    }
}
function wasser() {
    let wasser = new Path2D();
    wasser.rect(0, 0, 600, 600);
    exports.crc.fillStyle = "lightblue";
    exports.crc.fill(wasser);
    exports.crc.stroke(wasser);
    let sand = new Path2D();
    sand.rect(0, 500, 600, 100);
    exports.crc.fillStyle = "burlywood";
    exports.crc.fill(sand);
    exports.crc.stroke(sand);
    let pflanze = new Path2D();
    pflanze.bezierCurveTo(100, 300, 100, 150, 200, 600);
    exports.crc.fillStyle = "darkgreen";
    exports.crc.fill(pflanze);
    exports.crc.stroke(pflanze);
    let pflanze2 = new Path2D();
    pflanze2.bezierCurveTo(500, 300, 400, 250, 400, 600);
    exports.crc.fillStyle = "darkgreen";
    exports.crc.fill(pflanze2);
    exports.crc.stroke(pflanze2);
    let schiff = new Path2D();
    schiff.arc(300, 450, 50, 2 * Math.PI, Math.PI);
    exports.crc.fillStyle = "brown";
    exports.crc.fill(schiff);
    exports.crc.stroke(schiff);
    let mast = new Path2D();
    mast.moveTo(300, 450);
    mast.lineTo(300, 380);
    exports.crc.fillStyle = "brown";
    exports.crc.fill(mast);
    exports.crc.stroke(mast);
    let segel = new Path2D();
    segel.moveTo(260, 380);
    segel.lineTo(300, 350);
    segel.lineTo(300, 400);
    exports.crc.fillStyle = "orange";
    exports.crc.fill(segel);
    exports.crc.stroke(segel);
}
//# sourceMappingURL=main.js.map