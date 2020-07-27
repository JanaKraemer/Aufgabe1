var Zauberbild;
(function (Zauberbild) {
    class Farbe extends Zauberbild.Element {
        constructor() {
            super();
            this.x = Math.random() * Zauberbild.canvas.width;
            this.y = Math.random() * Zauberbild.canvas.height;
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 2;
            this.size = 10;
            this.r = Math.random() * 30 + 10;
        }
        draw() {
            let circle = new Path2D();
            circle.arc(this.x, this.y, this.r, 0, 360);
            Zauberbild.crc.fillStyle = "lightgreen";
            Zauberbild.crc.fill(circle);
            Zauberbild.crc.stroke(circle);
            //console.log("rotation rot");
        }
        update() {
            this.move();
            this.draw();
            console.log(this.x, this.y);
        }
        move() {
            // this.x += this.dx;
            this.r += Math.random() * 2;
            if (this.r >= 40) {
                this.r -= Math.random() * 2;
            }
            //this.y += this.dy ;
            //if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
            //  this.x = 0;
            // this.y = canvas.height * Math.random();
            //}
            // console.log(this.x, this.y);
        }
    }
    Zauberbild.Farbe = Farbe;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=farbe.js.map