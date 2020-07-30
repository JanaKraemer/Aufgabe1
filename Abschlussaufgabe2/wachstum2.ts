namespace Zauberbild {

    export class Wachstum2 extends Element {

        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 3;
            this.dy = Math.random() * 2;
            this.size = 10;
            this.type = "Wachstum2";
            this.r = Math.random() * 10 + 10;
        }
        draw(): void {
            let flosse1: Path2D = new Path2D();
            flosse1.moveTo(this.x, this.y);
            flosse1.lineTo(this.x + 40, this.y);
            flosse1.lineTo(this.x + 20, this.y + 40);
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

            this.y += this.dy;
            this.y += y;
            this.x += x;
           // this.y += this.dy ;
            console.log("drawtest");
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {

                this.x = 0;
                this.y = canvas.height * Math.random();
            }
            
        }

    }
}
