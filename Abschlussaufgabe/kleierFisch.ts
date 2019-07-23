namespace catchthefish {

    export class Fisch {

        
        x: number;
        y: number;
        dx: number;
        dy: number;
        a: number;
        size: number;
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * - 5;
            this.dy = Math.random() * 0;
            this.a = 1;
            this.size = 4;

        }
        draw(x: number, y: number): void {
            let fisch: Path2D = new Path2D();
            fisch.arc(this.x + 200 + this.a, this.y - 200 + this.a, 15 + this.a, 0, 360);
            crc.fillStyle = "orange";
            crc.fill(fisch);
            crc.stroke(fisch);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + 215 + this.a, this.y - 200 + this.a );
            flosse.lineTo(this.x + 230 + this.a, this.y - 190 + this.a);
            flosse.lineTo(this.x + 230 + this.a, this.y - 208 + this.a);
            flosse.closePath();
            crc.fill(flosse);
            crc.stroke(flosse);
            
            if (crc.isPointInPath(fisch, x, y)) {
            console.log("I´m here");
            }

        }

        update(x: number, y: number): void {
            this.move(x, y);
            this.draw(x, y);
        }

        move(x: number, y: number): void {

            if (this.x <= 0 ||  this.x >= 1000 || this.y <= 0 || this.y >= 700) {
                this.x = 1000;
                this.y = Math.floor(Math.random() * crc.canvas.height);
            }
            this.x += this.dx;
            this.y += this.dy;
            }
        }
    }

