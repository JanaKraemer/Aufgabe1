var catchthefish;
(function (catchthefish) {
    class Fisch {
        constructor() {
            this.x = Math.random() * catchthefish.canvas.width;
            this.y = Math.random() * catchthefish.canvas.height;
            this.dx = Math.random() * -5;
            this.dy = Math.random() * 0;
        }
        draw() {
            let fisch = new Path2D();
            fisch.arc(this.x + 200, this.y - 200, 15, 0, 360);
            catchthefish.crc.fillStyle = "orange";
            catchthefish.crc.fill(fisch);
            catchthefish.crc.stroke(fisch);
            let flosse = new Path2D();
            flosse.moveTo(this.x + 215, this.y - 200);
            flosse.lineTo(this.x + 230, this.y - 190);
            flosse.lineTo(this.x + 230, this.y - 208);
            flosse.closePath();
            catchthefish.crc.fill(flosse);
            catchthefish.crc.stroke(flosse);
            //super.draw();
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