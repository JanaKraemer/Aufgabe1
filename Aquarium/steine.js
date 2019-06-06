"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
class Stein {
    draw() {
        let steine = new Path2D();
        steine.arc(this.x + 30, 584, 15, 0, 360);
        main_1.crc.fillStyle = "grey";
        main_1.crc.fill(steine);
        main_1.crc.stroke(steine);
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
exports.Stein = Stein;
//# sourceMappingURL=steine.js.map