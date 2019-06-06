"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
class Fisch {
    draw() {
        let fish1 = new Path2D();
        fish1.arc(this.x + 200, this.y - 200, 30, 0, 360);
        main_1.crc.fillStyle = "red";
        main_1.crc.fill(fish1);
        main_1.crc.stroke(fish1);
        let flosse1 = new Path2D();
        flosse1.moveTo(this.x + 210, this.y - 200);
        flosse1.lineTo(this.x + 250, this.y - 170);
        flosse1.lineTo(this.x + 250, this.y - 230);
        main_1.crc.fillStyle = "red";
        main_1.crc.fill(flosse1);
        main_1.crc.stroke(flosse1);
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
exports.Fisch = Fisch;
//# sourceMappingURL=animationfish.js.map