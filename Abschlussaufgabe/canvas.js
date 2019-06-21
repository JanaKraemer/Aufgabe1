var catchthefish;
(function (catchthefish) {
    document.addEventListener("DOMContentLoaded", init);
    let haiArray = [];
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
            haiArray.push(fisch);
        }
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
    //document.addEventListener("keydown", _event); {
    //    let keyName: number = event.key;
    //   if (keyName == 38) { // move forward
    update();
    function update() {
        window.setTimeout(update, 1000 / fps);
        catchthefish.crc.clearRect(0, 0, catchthefish.canvas.width, catchthefish.canvas.height);
        catchthefish.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < haiArray.length; i++) {
            haiArray[i].update();
        }
    }
    function background() {
        catchthefish.crc.fillStyle = "lightblue";
        catchthefish.crc.fillRect(0, 0, 1000, 800);
        catchthefish.crc.fillStyle = "lightblue";
    }
})(catchthefish || (catchthefish = {}));
//# sourceMappingURL=canvas.js.map