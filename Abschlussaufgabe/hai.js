var catchthefish;
(function (catchthefish) {
    class Hai {
        constructor() {
            this.x = Math.random() * catchthefish.canvas.width;
            this.y = Math.random() * catchthefish.canvas.height;
            this.dx = Math.random() * 5;
            this.dy = Math.random() * 0;
            this.size = 5;
        }
        draw() {
            let hai = new Path2D();
            hai.moveTo(this.x + 100, this.y + 100);
            hai.quadraticCurveTo(this.x + 150, this.y + 50, this.x + 200, this.y + 100);
            catchthefish.crc.fillStyle = "grey";
            catchthefish.crc.fill(hai);
            catchthefish.crc.stroke(hai);
            let bauch = new Path2D();
            bauch.moveTo(this.x + 100, this.y + 100);
            bauch.quadraticCurveTo(this.x + 150, this.y + 120, this.x + 200, this.y + 100);
            catchthefish.crc.fillStyle = "white";
            catchthefish.crc.fill(bauch);
            catchthefish.crc.stroke(bauch);
            let flosseunten = new Path2D();
            flosseunten.moveTo(this.x + 150, this.y + 100);
            flosseunten.lineTo(this.x + 160, this.y + 100);
            flosseunten.lineTo(this.x + 150, this.y + 120);
            catchthefish.crc.fillStyle = "grey";
            catchthefish.crc.fill(flosseunten);
            catchthefish.crc.stroke(flosseunten);
            let flosseoben = new Path2D();
            flosseoben.moveTo(this.x + 135, this.y + 80);
            flosseoben.lineTo(this.x + 150, this.y + 55);
            flosseoben.lineTo(this.x + 165, this.y + 80);
            catchthefish.crc.fillStyle = "grey";
            catchthefish.crc.fill(flosseoben);
            catchthefish.crc.stroke(flosseoben);
            let flossehinten = new Path2D();
            flossehinten.moveTo(this.x + 100, this.y + 100);
            flossehinten.lineTo(this.x + 80, this.y + 85);
            flossehinten.lineTo(this.x + 80, this.y + 115);
            flossehinten.closePath();
            catchthefish.crc.fillStyle = "grey";
            catchthefish.crc.fill(flossehinten);
            catchthefish.crc.stroke(flossehinten);
        }
        update() {
            this.move();
            this.draw();
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
    catchthefish.Hai = Hai;
})(catchthefish || (catchthefish = {}));
//# sourceMappingURL=hai.js.map