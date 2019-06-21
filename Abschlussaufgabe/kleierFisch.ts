namespace catchthefish {

    export class Fisch extends Hai {
       
        draw(): void {
            let fisch: Path2D = new Path2D();
            fisch.arc(this.x + 200, this.y - 200, 15, 0, 360);
            crc.fillStyle = "orange";
            crc.fill(fisch);
            crc.stroke(fisch);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + 215, this.y -  200);
            flosse.lineTo(this.x + 230, this.y - 190);
            flosse.lineTo(this.x + 230, this.y - 208);
            flosse.closePath();
            crc.fill(flosse);
            crc.stroke(flosse);
            super.draw();

        }
       
        
        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                
                this.x = 600;
                this.y = canvas.height * Math.random();
            }
        }
        
    }
}