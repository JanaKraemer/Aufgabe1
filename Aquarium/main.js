var aquarium;
(function (aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    let fishArray = [];
    let bubbleArray = [];
    let fish2Array = [];
    let fps = 30;
    let imageData;
    function init() {
        aquarium.canvas = document.getElementsByTagName("canvas")[0];
        aquarium.crc = aquarium.canvas.getContext("2d");
        wasser();
        imageData = aquarium.crc.getImageData(0, 0, 600, 600);
        //Fisch1
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            let dx = -5;
            let dy = 0;
            let fish = new aquarium.Fisch();
            fish.x = x;
            fish.y = y;
            fish.dx = dx;
            fish.dy = dy;
            fishArray.push(fish);
            fish.draw();
        }
        //fish2
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            let dx = -3;
            let dy = 0;
            let fish2 = new aquarium.Fisch2();
            fish2.x = x;
            fish2.y = y;
            fish2.dx = dx;
            fish2.dy = dy;
            fish2Array.push(fish2);
            fish2.draw();
        }
        //bubbles
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            let dx = 0;
            let dy = -3;
            let blase;
            blase = new aquarium.Bubble();
            blase.x = x;
            blase.y = y;
            blase.dx = dx;
            blase.dy = dy;
            bubbleArray.push(blase);
            blase.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        aquarium.crc.clearRect(0, 0, aquarium.canvas.width, aquarium.canvas.height);
        aquarium.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        for (let i = 0; i < fish2Array.length; i++) {
            fish2Array[i].update();
        }
    }
    function wasser() {
        aquarium.crc.fillStyle = "lightblue";
        aquarium.crc.fillRect(0, 0, 600, 600);
        aquarium.crc.fillStyle = "lightblue";
        let sand = new Path2D();
        sand.rect(0, 500, 600, 100);
        aquarium.crc.fillStyle = "burlywood";
        aquarium.crc.fill(sand);
        aquarium.crc.stroke(sand);
        let pflanze = new Path2D();
        pflanze.bezierCurveTo(100, 300, 100, 150, 200, 600);
        aquarium.crc.fillStyle = "darkgreen";
        aquarium.crc.fill(pflanze);
        aquarium.crc.stroke(pflanze);
        let pflanze2 = new Path2D();
        pflanze2.bezierCurveTo(500, 300, 400, 250, 400, 600);
        aquarium.crc.fillStyle = "darkgreen";
        aquarium.crc.fill(pflanze2);
        aquarium.crc.stroke(pflanze2);
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let steine = new Path2D();
            steine.arc(x + 30, 584, 10, 0, 360);
            aquarium.crc.fillStyle = "grey";
            aquarium.crc.fill(steine);
            aquarium.crc.stroke(steine);
        }
        let schiff = new Path2D();
        schiff.arc(300, 450, 50, 2 * Math.PI, Math.PI);
        aquarium.crc.fillStyle = "brown";
        aquarium.crc.fill(schiff);
        aquarium.crc.stroke(schiff);
        let mast = new Path2D();
        mast.moveTo(300, 450);
        mast.lineTo(300, 380);
        aquarium.crc.fillStyle = "brown";
        aquarium.crc.fill(mast);
        aquarium.crc.stroke(mast);
        let segel = new Path2D();
        segel.moveTo(260, 380);
        segel.lineTo(300, 350);
        segel.lineTo(300, 400);
        aquarium.crc.fillStyle = "orange";
        aquarium.crc.fill(segel);
        aquarium.crc.stroke(segel);
    }
})(aquarium || (aquarium = {}));
//# sourceMappingURL=main.js.map