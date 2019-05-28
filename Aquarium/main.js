document.addEventListener("DOMContentLoaded", init);
let canvas = document.getElementsByTagName("canvas")[0];
let crc = canvas.getContext("2d");
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        wasser();
    }
    function wasser() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 600, 600);
    }
}
//# sourceMappingURL=main.js.map