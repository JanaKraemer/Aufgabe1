var catchthefish;
(function (catchthefish) {
    class Qualle extends catchthefish.Hai {
        draw() {
            let qualle = new Path2D();
            qualle.arc(this.x + 100, this.y - 100, 25, Math.PI, 2 * Math.PI);
            qualle.closePath();
            catchthefish.crc.fillStyle = "palevioletred";
            catchthefish.crc.fill(qualle);
            catchthefish.crc.stroke(qualle);
            let bein = new Path2D();
            bein.rect(this.x + 97, this.y - 100, 5, 20);
            catchthefish.crc.fillStyle = " palevioletred";
            catchthefish.crc.fill(bein);
            catchthefish.crc.stroke(bein);
            let bein2 = new Path2D();
            bein2.rect(this.x + 120, this.y - 100, +5, 20);
            catchthefish.crc.fillStyle = " palevioletred";
            catchthefish.crc.fill(bein2);
            catchthefish.crc.stroke(bein2);
            let bein3 = new Path2D();
            bein3.rect(this.x + 76, this.y - 100, 5, 20);
            catchthefish.crc.fillStyle = " palevioletred";
            catchthefish.crc.fill(bein3);
            catchthefish.crc.stroke(bein3);
            super.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > catchthefish.canvas.width || this.x < 0 || this.y > catchthefish.canvas.height || this.y < 0) {
                this.x = 1000;
                this.y = catchthefish.canvas.height * Math.random();
            }
        }
    }
    catchthefish.Qualle = Qualle;
})(catchthefish || (catchthefish = {}));
//# sourceMappingURL=gegner.js.map