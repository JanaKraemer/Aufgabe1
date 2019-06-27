var catchthefish;
(function (catchthefish) {
    class Opfer extends catchthefish.Hai {
        constructor() {
            super();
            this.x = Math.random() * catchthefish.canvas.width;
            this.y = Math.random() * catchthefish.canvas.height;
            this.dx = Math.random() * 5;
            this.dy = Math.random() * 0;
            this.size = 2;
        }
        draw() {
            let opfer = new Path2D();
            opfer.moveTo(this.x + 20, this.y + 1);
            opfer.quadraticCurveTo(this.x + 50, this.y - 20, this.x + 70, this.y + 1);
            catchthefish.crc.fillStyle = "blue";
            catchthefish.crc.fill(opfer);
            catchthefish.crc.stroke(opfer);
            let bauch = new Path2D();
            bauch.moveTo(this.x + 20, this.y + 1);
            bauch.quadraticCurveTo(this.x + 50, this.y + 10, this.x + 70, this.y + 1);
            catchthefish.crc.fillStyle = "yellow";
            catchthefish.crc.fill(bauch);
            catchthefish.crc.stroke(bauch);
            let flosse = new Path2D();
            flosse.moveTo(this.x + 20, this.y + 1);
            flosse.lineTo(this.x + 10, this.y - 10);
            flosse.lineTo(this.x + 10, this.y + 10);
            catchthefish.crc.fillStyle = "blue";
            catchthefish.crc.fill(flosse);
            catchthefish.crc.stroke(flosse);
            //  super.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > catchthefish.canvas.width || this.x < 0 || this.y > catchthefish.canvas.height || this.y < 0) {
                this.x = 0;
                this.y = catchthefish.canvas.height * Math.random();
            }
        }
    }
    catchthefish.Opfer = Opfer;
})(catchthefish || (catchthefish = {}));
//# sourceMappingURL=opfer.js.map