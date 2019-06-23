var catchthefish;
(function (catchthefish) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", steuerung);
    let haiArray = [];
    let kleinerFischArray = [];
    let fps = 30;
    let imageData;
    function init() {
        catchthefish.canvas = document.getElementsByTagName("canvas")[0];
        catchthefish.crc = catchthefish.canvas.getContext("2d");
        background();
        imageData = catchthefish.crc.getImageData(0, 0, 1000, 1000);
        //Hai
        for (let i = 0; i < 3; i++) {
            let hai = new catchthefish.Hai();
            haiArray.push(hai);
        }
        //Fisch orange
        for (let i = 0; i < 1; i++) {
            let fisch = new catchthefish.Fisch();
            kleinerFischArray.push(fisch);
        }
        //Qualle
        for (let i = 0; i < 5; i++) {
            let qualle = new catchthefish.Qualle();
            haiArray.push(qualle);
        }
        //Opfer fisch
        for (let i = 0; i < 8; i++) {
            let opfer = new catchthefish.Opfer();
            haiArray.push(opfer);
        }
        update();
    }
    function steuerung(_event) {
        if (_event.keyCode == 38) { // move forward
            kleinerFischArray[0].update(0, -5);
        }
        if (_event.keyCode == 40) { //runter
            kleinerFischArray[0].update(0, 5);
        }
        if (_event.keyCode == 39) { //left
            kleinerFischArray[0].update(5, 0);
        }
        if (_event.keyCode == 37) { //right
            kleinerFischArray[0].update(-5, 0);
        }
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        catchthefish.crc.clearRect(0, 0, catchthefish.canvas.width, catchthefish.canvas.height);
        catchthefish.crc.putImageData(imageData, 0, 0);
        let i = 0;
        for (let i = 0; i < haiArray.length; i++) {
            haiArray[i].update();
        }
        for (let i = 0; i < kleinerFischArray.length; i++) {
            kleinerFischArray[0].update(0, 0);
        }
        if (kleinerFischArray[i].x == haiArray[i].x || kleinerFischArray[i].y == haiArray[i].y) {
            console.log("hii");
        }
    }
    function background() {
        catchthefish.crc.fillStyle = "lightblue";
        catchthefish.crc.fillRect(0, 0, 1000, 800);
        catchthefish.crc.fillStyle = "lightblue";
    }
})(catchthefish || (catchthefish = {}));
//# sourceMappingURL=canvas.js.map