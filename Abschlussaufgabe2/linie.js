var Zauberbild;
(function (Zauberbild) {
    class Element {
        constructor() {
            this.x = Math.random() * Zauberbild.canvas.width;
            this.y = Math.random() * Zauberbild.canvas.height;
            this.dx = 2;
            //this.dy = 0;
        }
        draw() {
            let circle = new Path2D();
            circle.arc(this.x, this.y, 20, 0, 360);
            Zauberbild.crc.fillStyle = "pink";
            Zauberbild.crc.fill(circle);
            Zauberbild.crc.stroke(circle);
            //console.log("rotation rot");
        }
        update(x, y) {
            this.move(x, y);
            this.draw();
            // console.log(this.x, this.y);
        }
        move(x, y) {
            this.x += this.dx;
            this.y += y;
            this.x += x;
            //this.y += this.dy ;
            if (this.x > Zauberbild.canvas.width || this.x < 0 || this.y > Zauberbild.canvas.height || this.y < 0) {
                this.x = 0;
                // this.y = canvas.height * Math.random();
            }
            // console.log(this.x, this.y);
        }
    }
    Zauberbild.Element = Element;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=linie.js.map