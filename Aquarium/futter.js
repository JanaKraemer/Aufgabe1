var aquarium;
(function (aquarium) {
    class Futter extends aquarium.Fisch {
        constructor(x, y) {
            super();
            this.x = x;
            this.y = y;
            this.dy = Math.random() * 10;
        }
        draw() {
            let futter = new Path2D();
            futter.arc(this.x, this.y - 1, 5, 0, 360);
            aquarium.crc.fillStyle = "brown";
            aquarium.crc.fill(futter);
            aquarium.crc.stroke(futter);
        }
        move() {
            this.y += this.dy;
            if (this.y >= aquarium.canvas.height) {
                this.dy = 0;
            }
        }
    }
    aquarium.Futter = Futter;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=futter.js.map