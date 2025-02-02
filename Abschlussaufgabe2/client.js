var Zauberbild;
(function (Zauberbild) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://kraemerj.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&bg=" + Zauberbild.bg; // farbe und Größe werden nur einmal angelegt und nicht mit jedem Element
        query += "&canvaswidth=" + Zauberbild.canvas.width;
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            let symbol = {
                type: Zauberbild.kreisArray[i].type,
                x: Zauberbild.kreisArray[i].x.toString(),
                y: Zauberbild.kreisArray[i].y.toString()
            };
            query += "&type=" + symbol.type + "&x=" + symbol.x + "&y=" + symbol.y;
        }
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    Zauberbild.insert = insert;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log(xhr.response);
            alert(xhr.response);
        }
    }
    function find() {
        let query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    Zauberbild.find = find;
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            Zauberbild.globalArray = JSON.parse(xhr.response); // Infos aus "CanvasElement" werden aus String in globalArray eingefügt
            if (Zauberbild.ladebilder == true) {
                return;
            } // Wenn bereits Buttons existieren, dh. der Boolean nicht wieder auf false gesetzt wurde, bricht die funktion an der Stelle ab und es werden keine neuen Buttons erstellt
            for (let i = 0; i < Zauberbild.globalArray.length; i++) { // es werden so viele Buttons erstellt, wie sich "CanvasElemente" im globalArray befinden"
                let button = document.createElement("BUTTON");
                button.innerText = "Bild" + (i + 1); // Bild 1 // Bild 2...
                button.addEventListener("click", Zauberbild.ladebild);
                button.setAttribute("id", i.toString());
                document.getElementById("fertigebilder").appendChild(button);
                Zauberbild.ladebilder = true;
            }
        }
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=client.js.map