import { crc } from "./main";
export class Bubble {

    x: number;
    y: number;
    dx: number;
    dy: number;

    draw(): void {
        let blase: Path2D = new Path2D();
        blase.arc(this.x, this.y - 50, 10, 0, 360);
        crc.fillStyle = "white";
        crc.fill(blase);
        crc.stroke(blase);

        let blase2: Path2D = new Path2D();
        blase2.arc(this.x + 70, this.y - 70, 20, 0, 360);
        crc.fillStyle = "white";
        crc.fill(blase2);
        crc.stroke(blase2);
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


