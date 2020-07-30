var Zauberbild;
(function (Zauberbild) {
    class Test extends Zauberbild.Element {
        constructor() {
            super();
            this.x = Math.random() * Zauberbild.canvas.width;
            this.y = Math.random() * Zauberbild.canvas.height;
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 2;
            this.size = 10;
            this.r = Math.random() * 10 + 10;
            this.type = "Test";
        }
        draw() {
            let flosse1 = new Path2D();
            flosse1.moveTo(this.x, this.y);
            flosse1.lineTo(this.x + 40, this.y);
            flosse1.lineTo(this.x + 20, this.y + 40);
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
            this.x += this.dx;
            this.y += y;
            this.x += x;
            // this.y += this.dy ;
            console.log("drawtest");
            if (this.x > Zauberbild.canvas.width || this.x < 0 || this.y > Zauberbild.canvas.height || this.y < 0) {
                this.x = 0;
                this.y = Zauberbild.canvas.height * Math.random();
            }
        }
    }
    Zauberbild.Test = Test;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=test.js.map