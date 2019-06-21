namespace catchthefish {

    export class Fisch {

        x: number;
        y: number;
        dx: number;
        dy: number;
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * - 5;
            this.dy = Math.random() * 0;
        }
        draw(): void {
            let fisch: Path2D = new Path2D();
            fisch.arc(this.x + 200, this.y - 200, 15, 0, 360);
            crc.fillStyle = "orange";
            crc.fill(fisch);
            crc.stroke(fisch);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + 215, this.y - 200);
            flosse.lineTo(this.x + 230, this.y - 190);
            flosse.lineTo(this.x + 230, this.y - 208);
            flosse.closePath();
            crc.fill(flosse);
            crc.stroke(flosse);
            //super.draw();

        }

        update(x: number, y: number): void {
            this.move(x, y);
            this.draw();
        }

        move(x: number, y: number): void {

            this.x += x;
            this.y += y;
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {

                this.x = 600;
                this.y = canvas.height * Math.random();
            }
        }
    }
}
