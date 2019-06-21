namespace aquarium {

    export class Futter extends Fisch {

        constructor(x: number , y: number) {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            
            this.dy = Math.random() * 0;
        }
        draw(): void {
            let futter: Path2D = new Path2D();
            futter.arc(this.x, this.y - 1, 5, 0, 360);
            crc.fillStyle = "brown";
            crc.fill(futter);

            crc.stroke(futter);
            
        }
        move(): void {
            
            this.y += this.dy;
            if (this.y >= canvas.height) {
                
               
                this.dy = 0;
            }
        
        
    }
}
}
