var Zauberbild;
(function (Zauberbild) {
    class Wachstum2 extends Zauberbild.Element {
        constructor() {
            super();
            this.x = Math.random() * Zauberbild.canvas.width;
            this.y = Math.random() * Zauberbild.canvas.height;
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 2;
            this.size = 10;
            this.r = Math.random() * 10 + 10;
        }
        draw() {
            let flosse1 = new Path2D();
            flosse1.moveTo(this.x + 10, this.y - 400);
            flosse1.lineTo(this.x + 50, this.y - 370);
            flosse1.lineTo(this.x + 50, this.y - 430);
            Zauberbild.crc.fillStyle = "orange";
            Zauberbild.crc.fill(flosse1);
            Zauberbild.crc.stroke(flosse1);
        }
        update(x, y) {
            this.move(x, y);
            this.draw();
            console.log(this.x, this.y);
        }
        move(x, y) {
            this.r += Math.random() * 5;
            if (this.r >= 50) {
                this.r -= Math.random() * 2;
            }
            this.y += y;
            this.x += x;
        }
    }
    Zauberbild.Wachstum2 = Wachstum2;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=wachstum2.js.map