
import { crc } from "./main";
export class Stein {
    x: number;
    y: number;
    dx: number;
    dy: number;
    
    
     draw(): void {
        let steine: Path2D = new Path2D();
        steine.arc(this.x + 30, 584, 15, 0, 360);
        crc.fillStyle = "grey";
        crc.fill(steine);
        crc.stroke(steine);
     }
     update(): void {
        this.move();
        this.draw();

    }
    move(): void {
        this.x += this.dx;
        this.y += this.dy;
    }
}