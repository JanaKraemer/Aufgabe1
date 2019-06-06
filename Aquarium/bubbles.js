"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
class Bubble {
    draw() {
        let blase = new Path2D();
        blase.arc(this.x, this.y - 50, 10, 0, 360);
        main_1.crc.fillStyle = "white";
        main_1.crc.fill(blase);
        main_1.crc.stroke(blase);
        let blase2 = new Path2D();
        blase2.arc(this.x + 70, this.y - 70, 20, 0, 360);
        main_1.crc.fillStyle = "white";
        main_1.crc.fill(blase2);
        main_1.crc.stroke(blase2);
    }
    update() {
        this.move();
        this.draw();
    }
    move() {
        this.x += this.dx;
        this.y += this.dy;
    }
}
exports.Bubble = Bubble;
//# sourceMappingURL=bubbles.js.map