namespace Zauberbild {

    export class Groese extends Element {

        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 0;
            this.dy = Math.random() * 2;
            this.size = 10;
        }

        draw(): void {
           

            let circle: Path2D = new Path2D();
            circle.arc(this.x , this.y, 20, 0, 360);
        
            crc.fillStyle = "green";
            crc.fill(circle);
            crc.stroke(circle);

            console.log("rotation rot");
            


        }
        update(): void {
            this.move();
            this.draw();
            console.log(this.x, this.y);
        }

        move(): void {
            this.x += this.dx;
            //this.y += this.dy ;
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {

                this.x = 0;
               // this.y = canvas.height * Math.random();
            }
           // console.log(this.x, this.y);
        }

    }
}
