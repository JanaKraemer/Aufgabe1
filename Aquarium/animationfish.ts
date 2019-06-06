import { crc } from "./main";

export class Fisch {
    x: number;
    y: number;
    dx: number;
    dy: number;

    draw(): void {
        let fish1: Path2D = new Path2D();
        fish1.arc(this.x + 200, this.y - 200, 30, 0, 360);
        crc.fillStyle = "red";
        crc.fill(fish1);
        crc.stroke(fish1);
    
        let flosse1: Path2D = new Path2D();
        flosse1.moveTo(this.x + 210, this.y - 200);
        flosse1.lineTo(this.x + 250, this.y - 170);
        flosse1.lineTo(this.x + 250, this.y - 230);
        crc.fillStyle = "red";
        crc.fill(flosse1);
        crc.stroke(flosse1);
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
 