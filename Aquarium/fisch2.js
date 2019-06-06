"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
class Fisch2 {
    draw() {
        let fish2 = new Path2D();
        fish2.arc(this.x - 30, this.y + 30, 40, 0.75 * Math.PI, 1.5 * Math.PI);
        main_1.crc.fillStyle = "yellow";
        main_1.crc.fill(fish2);
        main_1.crc.stroke(fish2);
        let flosse2 = new Path2D();
        flosse2.moveTo(this.x - 45, this.y + 20);
        flosse2.lineTo(this.x - 30, this.y + 60);
        flosse2.lineTo(this.x - 10, this.y + 10);
        main_1.crc.fillStyle = "yellow";
        main_1.crc.fill(flosse2);
        main_1.crc.stroke(flosse2);
        let auge2 = new Path2D();
        auge2.arc(this.x - 50, this.y + 10, 5, 0, 360);
        main_1.crc.fillStyle = "black";
        main_1.crc.fill(auge2);
        main_1.crc.stroke(auge2);
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
exports.Fisch2 = Fisch2;
//# sourceMappingURL=fisch2.js.map