var catchthefish;
(function (catchthefish) {
    class Fisch {
        constructor() {
            this.x = Math.random() * catchthefish.canvas.width;
            this.y = Math.random() * catchthefish.canvas.height;
            this.dx = Math.random() * -5;
            this.dy = Math.random() * 0;
            this.a = 1;
            this.size = 2;
        }
        draw() {
            let fisch = new Path2D();
            fisch.arc(this.x + 100 + this.a, this.y - 100 + this.a, 15 + this.a, 0, 360);
            catchthefish.crc.fillStyle = "orange";
            catchthefish.crc.fill(fisch);
            catchthefish.crc.stroke(fisch);
        }
        update(x, y) {
            this.move(x, y);
            this.draw();
        }
        move(x, y) {
            this.x += x;
            this.y += y;
            if (this.x > catchthefish.canvas.width || this.x < 0 || this.y > catchthefish.canvas.height || this.y < 0) {
                this.x = 600;
                this.y = catchthefish.canvas.height * Math.random();
            }
        }
    }
    catchthefish.Fisch = Fisch;
})(catchthefish || (catchthefish = {}));
//# sourceMappingURL=kleierFisch.js.map