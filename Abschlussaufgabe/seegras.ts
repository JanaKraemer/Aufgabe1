namespace catchthefish {

    export class Seegras {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {
            let gras: Path2D = new Path2D();
            gras.moveTo(this.x + 100, this.y + 400);
            gras.bezierCurveTo(this.x + 200, this.y + 200, this.x + 50, this.y + 100, this.x + 100, this.y + 50);
            crc.fillStyle = "green";
            crc.fill(gras);
            crc.stroke(gras);
        }
    }
}