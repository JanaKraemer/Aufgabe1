import { crc } from "./main";
export class Fisch2 {
    x: number;
    y: number;
    dx: number;
    dy: number;

    draw(): void {
        let fish2: Path2D = new Path2D();
        fish2.arc(this.x - 30, this.y + 30, 40, 0.75 * Math.PI, 1.5 * Math.PI);
        crc.fillStyle = "yellow";
        crc.fill(fish2);
        crc.stroke(fish2);
    
        let flosse2: Path2D = new Path2D();
        flosse2.moveTo(this.x - 45, this.y + 20);
        flosse2.lineTo(this.x - 30, this.y + 60);
        flosse2.lineTo(this.x - 10, this.y + 10);
        crc.fillStyle = "yellow";
        crc.fill(flosse2);
        crc.stroke(flosse2);
    
        let auge2: Path2D = new Path2D();
        auge2.arc(this.x - 50, this.y + 10, 5, 0, 360);
        crc.fillStyle = "black";
        crc.fill(auge2);
        crc.stroke(auge2);
    
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