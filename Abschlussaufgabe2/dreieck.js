var Zauberbild;
(function (Zauberbild) {
    class Dreieck extends Zauberbild.Element {
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
            Zauberbild.crc.fillStyle = "red";
            Zauberbild.crc.fill(flosse1);
            Zauberbild.crc.stroke(flosse1);
        }
        update(x, y) {
            this.move(x, y);
            this.draw();
            console.log(this.x, this.y);
        }
        move(x, y) {
            // this.x += this.dx;
            this.r += Math.random() * 2;
            if (this.r >= 40) {
                this.r -= Math.random() * 2;
            }
            this.y += y;
            this.x += x;
            //this.y += this.dy ;
            //if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
            //  this.x = 0;
            // this.y = canvas.height * Math.random();
            //}
            // console.log(this.x, this.y);
        }
    }
    Zauberbild.Dreieck = Dreieck;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=dreieck.js.map