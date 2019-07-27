namespace catchthefish {

    export class Fisch {


        x: number;
        y: number;
        dx: number;
        dy: number;
        a: number;
        size: number;
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * - 5;
            this.dy = Math.random() * 0;
            this.a = 1;
            this.size = 2;

        }
        draw(): void {
            let fisch: Path2D = new Path2D();
            fisch.arc(this.x + 100 + this.a, this.y - 100 + this.a, 15 + this.a, 0, 360);
            crc.fillStyle = "orange";
            crc.fill(fisch);
            crc.stroke(fisch);

    }

    update(x: number, y: number): void {
        this.move(x, y);
        this.draw();
    }

    move(x: number, y: number): void {

        this.x += x;
        this.y += y;
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {

        this.x = 600 + this.dx;
        this.y = canvas.height * Math.random();
    }
}
    }
}
