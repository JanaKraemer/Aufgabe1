namespace catchthefish {

    export class Hai {
        x: number;
        y: number;
        dx: number;
        dy: number;
        size: number;

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 5;
            this.dy = Math.random() * 0;
            this.size = 5;
        }
    

        draw(): void {
            let hai: Path2D = new Path2D();
            hai.moveTo(this.x + 100, this.y + 100);
            hai.quadraticCurveTo(this.x + 150, this.y + 50, this.x + 200, this.y + 100);
        
            crc.fillStyle = "grey";
            crc.fill(hai);
            crc.stroke(hai);

            let bauch: Path2D = new Path2D();
            bauch.moveTo(this.x + 100, this.y + 100);
            bauch.quadraticCurveTo(this.x + 150, this.y + 120, this.x + 200, this.y + 100);
            crc.fillStyle = "white";
            crc.fill(bauch);
            crc.stroke(bauch);

            let flosseunten: Path2D = new Path2D();
            flosseunten.moveTo(this.x + 150, this.y + 100);
            flosseunten.lineTo(this.x + 160, this.y + 100);
            flosseunten.lineTo(this.x + 150, this.y + 120);
            crc.fillStyle = "grey";
            crc.fill(flosseunten);
            crc.stroke(flosseunten);

            let flosseoben: Path2D = new Path2D();
            flosseoben.moveTo(this.x + 135, this.y + 80);
            flosseoben.lineTo(this.x + 150, this.y + 55);
            flosseoben.lineTo(this.x + 165, this.y + 80);
            crc.fillStyle = "grey";
            crc.fill(flosseoben);
            crc.stroke(flosseoben);

            let flossehinten: Path2D = new Path2D();
            flossehinten.moveTo(this.x + 100, this.y + 100);
            flossehinten.lineTo(this.x + 80, this.y + 85);
            flossehinten.lineTo(this.x + 80, this.y + 115);
            flossehinten.closePath();
            crc.fillStyle = "grey";
            crc.fill(flossehinten);
            crc.stroke(flossehinten);


        }
        update(): void {
            this.move();
            this.draw();
        }
        
        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                
                this.x = 0;
                this.y = canvas.height * Math.random();
            }
        }
        
    }
}
