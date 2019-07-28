namespace catchthefish {

    export class Qualle extends Fisch {
        
        constructor() {
            super();
            
    
            this.size = 5;
        }

        draw(): void {
            let qualle: Path2D = new Path2D();
            qualle.arc(this.x + 100, this.y - 100, 25,  Math.PI, 2 * Math.PI);
            qualle.closePath();
            crc.fillStyle = "palevioletred";
            crc.fill(qualle);
            crc.stroke(qualle);

            let bein: Path2D = new Path2D();
            bein.rect(this.x + 97, this.y - 100, 5,  20);
            crc.fillStyle = " palevioletred";
            crc.fill(bein);
            crc.stroke(bein);

            let bein2: Path2D = new Path2D();
            bein2.rect(this.x + 120, this.y - 100, + 5, 20);
            crc.fillStyle = " palevioletred";
            crc.fill(bein2);
            crc.stroke(bein2);

            let bein3: Path2D = new Path2D();
            bein3.rect(this.x + 76, this.y - 100, 5,  20);
            crc.fillStyle = " palevioletred";
            crc.fill(bein3);
            crc.stroke(bein3);
            //super.draw();
        }
       
        
        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                
                this.x = 1000;
                this.y = canvas.height * Math.random();
            }
        }
        
    }
}
