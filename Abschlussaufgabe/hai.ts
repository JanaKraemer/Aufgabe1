namespace catchthefish {

    export class Hai extends Fisch {


        constructor() {
            super();
          
            this.dx = Math.random() * 5;
            this.dy = Math.random() * 0;
            this.size = 5;

        }


        draw(): void {
            let hai: Path2D = new Path2D();
            hai.moveTo(this.x + 50, this.y + 50);
            hai.quadraticCurveTo(this.x + 100, this.y + 0, this.x + 150, this.y + 50);

            crc.fillStyle = "grey";
            crc.fill(hai);
            crc.stroke(hai);

            let bauch: Path2D = new Path2D();
            bauch.moveTo(this.x + 50, this.y + 50);
            bauch.quadraticCurveTo(this.x + 100, this.y + 70, this.x + 150, this.y + 50);
            crc.fillStyle = "white";
            crc.fill(bauch);
            crc.stroke(bauch);

            let flosseunten: Path2D = new Path2D();
            flosseunten.moveTo(this.x + 100, this.y + 50);
            flosseunten.lineTo(this.x + 110, this.y + 50);
            flosseunten.lineTo(this.x + 100, this.y + 70);
            crc.fillStyle = "grey";
            crc.fill(flosseunten);
            crc.stroke(flosseunten);

            let flosseoben: Path2D = new Path2D();
            flosseoben.moveTo(this.x + 85, this.y + 30);
            flosseoben.lineTo(this.x + 100, this.y + 5);
            flosseoben.lineTo(this.x + 115, this.y + 30);
            crc.fillStyle = "grey";
            crc.fill(flosseoben);
            crc.stroke(flosseoben);

            let flossehinten: Path2D = new Path2D();
            flossehinten.moveTo(this.x + 50, this.y + 50);
            flossehinten.lineTo(this.x + 30, this.y + 35);
            flossehinten.lineTo(this.x + 30, this.y + 65);
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
