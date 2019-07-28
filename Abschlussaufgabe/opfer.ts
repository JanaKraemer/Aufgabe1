namespace catchthefish {

    export class Opfer extends Hai {
       
        constructor() {
            super();
         
            
            this.size = 1;
        }

        draw(): void {
            let opfer: Path2D = new Path2D();
            opfer.moveTo(this.x + 20, this.y + 1);
            opfer.quadraticCurveTo(this.x + 50, this.y - 20, this.x + 70, this.y + 1);
            crc.fillStyle = "blue";
            crc.fill(opfer);
            crc.stroke(opfer);

            let bauch: Path2D = new Path2D();
            bauch.moveTo(this.x + 20, this.y + 1);
            bauch.quadraticCurveTo(this.x + 50, this.y + 10, this.x + 70, this.y + 1);
            crc.fillStyle = "yellow";
            crc.fill(bauch);
            crc.stroke(bauch);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + 20, this.y + 1);
            flosse.lineTo(this.x + 10, this.y - 10);
            flosse.lineTo(this.x + 10, this.y + 10);
            crc.fillStyle = "blue";
            crc.fill(flosse);
            crc.stroke(flosse);
          //  super.draw();
            
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
