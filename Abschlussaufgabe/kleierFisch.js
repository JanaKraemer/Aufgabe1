var catchthefish;
(function (catchthefish) {
    class Fisch extends catchthefish.Hai {
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
            super.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > catchthefish.canvas.width || this.x < 0 || this.y > catchthefish.canvas.height || this.y < 0) {
                this.x = 600;
                this.y = catchthefish.canvas.height * Math.random();
            }
        }
    }
    catchthefish.Fisch = Fisch;
})(catchthefish || (catchthefish = {}));
//# sourceMappingURL=kleierFisch.js.map