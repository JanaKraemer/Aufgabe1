namespace catchthefish {

    document.addEventListener("DOMContentLoaded", init);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let haiArray: Hai[] = [];

    let fps: number = 30;
    let imageData: ImageData;



    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        background();

        imageData = crc.getImageData(0, 0, 1000, 1000);

        //Hai
        for (let i: number = 0; i < 3; i++) {
            let hai: Hai = new Hai();
            haiArray.push(hai);

        }
        //Fisch orange
        for (let i: number = 0; i < 1; i++) {

            let fisch: Fisch = new Fisch();
            haiArray.push(fisch);

        }



    }
    //Qualle
    for (let i: number = 0; i < 5; i++) {

        let qualle: Qualle = new Qualle();
        haiArray.push(qualle);


    }
    //Opfer fisch
    for (let i: number = 0; i < 8; i++) {

        let opfer: Opfer = new Opfer();
        haiArray.push(opfer);


    }

    //document.addEventListener("keydown", _event); {
    //    let keyName: number = event.key;
    //   if (keyName == 38) { // move forward





    update();



    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);


        for (let i: number = 0; i < haiArray.length; i++) {
            haiArray[i].update();
        }

    }


    function background(): void {
        crc.fillStyle = "lightblue";
        crc.fillRect(0, 0, 1000, 800);
        crc.fillStyle = "lightblue";

    }
}
