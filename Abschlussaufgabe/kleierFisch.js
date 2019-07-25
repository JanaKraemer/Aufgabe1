var catchthefish;
(function (catchthefish) {
    class Fisch {
        constructor() {
            this.x = Math.random() * catchthefish.canvas.width;
            this.y = Math.random() * catchthefish.canvas.height;
            this.dx = Math.random() * -5;
            this.dy = Math.random() * 0;
            this.a = 1;
            this.size = 4;
        }
        draw(x, y) {
            let fisch = new Path2D();
            fisch.arc(this.x + 200 + this.a, this.y - 200 + this.a, 15 + this.a, 0, 360);
            catchthefish.crc.fillStyle = "orange";
            catchthefish.crc.fill(fisch);
            catchthefish.crc.stroke(fisch);
            let flosse = new Path2D();
            flosse.moveTo(this.x + 215 + this.a, this.y - 200 + this.a);
            flosse.lineTo(this.x + 230 + this.a, this.y - 190 + this.a);
            flosse.lineTo(this.x + 230 + this.a, this.y - 208 + this.a);
            flosse.closePath();
            catchthefish.crc.fill(flosse);
            catchthefish.crc.stroke(flosse);
            if (catchthefish.crc.isPointInPath(fisch, x, y)) {
                console.log("I´m here");
            }
        }
        update(x, y) {
            this.move(x, y);
            this.draw(x, y);
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