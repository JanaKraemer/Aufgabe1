var catchthefish;
(function (catchthefish) {
    class Seegras {
        draw() {
            let gras = new Path2D();
            gras.moveTo(this.x + 100, this.y + 400);
            gras.bezierCurveTo(this.x + 200, this.y + 200, this.x + 50, this.y + 100, this.x + 100, this.y + 50);
            catchthefish.crc.fillStyle = "green";
            catchthefish.crc.fill(gras);
            catchthefish.crc.stroke(gras);
        }
    }
    catchthefish.Seegras = Seegras;
})(catchthefish || (catchthefish = {}));
//# sourceMappingURL=seegras.js.map