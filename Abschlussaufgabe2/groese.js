var Zauberbild;
(function (Zauberbild) {
    class Groese extends Zauberbild.Element {
        constructor() {
            super();
            this.x = Math.random() * Zauberbild.canvas.width;
            this.y = Math.random() * Zauberbild.canvas.height;
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 2;
            this.size = 10;
            this.r = Math.random() * 10 + 10;
            this.type = "Groese";
        }
        draw() {
            let circle = new Path2D();
            circle.arc(this.x, this.y, this.r, 0, 360);
            Zauberbild.crc.fillStyle = "lightgreen";
            Zauberbild.crc.fill(circle);
            Zauberbild.crc.stroke(circle);
            //console.log("rotation rot");
        }
        update(x, y) {
            this.move(x, y);
            this.draw();
            //console.log(this.x, this.y);
        }
        move(x, y) {
            this.r += Math.random() * 2;
            if (this.r >= 40) {
                this.r -= Math.random() * 2;
            }
            this.y += y;
            this.x += x;
        }
    }
    Zauberbild.Groese = Groese;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=groese.js.map