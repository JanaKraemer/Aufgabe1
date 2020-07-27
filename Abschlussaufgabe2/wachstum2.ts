namespace Zauberbild {

    export class Wachstum2 extends Element {

        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 2;
            this.size = 10;
            this.r = Math.random() * 10 + 10;
        }
        draw(): void {
            let flosse1: Path2D = new Path2D();
            flosse1.moveTo(this.x + 10, this.y - 400);
            flosse1.lineTo(this.x + 50, this.y - 370);
            flosse1.lineTo(this.x + 50, this.y - 430);
            crc.fillStyle = "orange";
            crc.fill(flosse1);
            crc.stroke(flosse1);
        }
        update(x: number, y: number): void {
            this.move(x, y);
            this.draw();
            console.log(this.x, this.y);
        }

        move(x: number, y: number): void {

            this.r += Math.random() * 5;
            if (this.r >= 50) {
                this.r -= Math.random() * 2;
            }

            this.y += y;
            this.x += x;
            
        }

    }
}
