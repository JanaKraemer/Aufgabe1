namespace Zauberbild {

    interface Symbole {
        type: string;
        x: string;
        y: string;
    }
    interface CanvasElement {
        type: string;
        x: string;
        y: string;
        backgroundC: string;
        size: string;
    }

    

    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://kraemerj.herokuapp.com/";
    export let globalArray: CanvasElement[];

    export function insert(): void {
        
        let query: string = "command=insert";
        
        query += "&bg=" + bg; // farbe und Größe werden nur einmal angelegt und nicht mit jedem Element
        query += "&canvaswidth=" + canvas.width;

        for (let i: number = 0; i < kreisArray.length; i++) {
            let symbol: Symbole = { // für jedes Element wird ein symbol angelegt: type, x, y gespeichert
                type: kreisArray[i].type,
                x: kreisArray[i].x.toString(),
                y: kreisArray[i].y.toString()
            };
            query += "&type=" + symbol.type + "&x=" + symbol.x + "&y=" + symbol.y;

        }


        console.log(query);
        sendRequest(query, handleInsertResponse);
    }



    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log(xhr.response);
            alert(xhr.response);

        }
    }

    export function find(): void {
        let query: string = "command=find";
        sendRequest(query, handleFindResponse);
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            globalArray = JSON.parse(xhr.response); // Infos aus "CanvasElement" werden aus String in globalArray eingefügt
            if (ladebilder == true) { return; } // Wenn bereits Buttons existieren, dh. der Boolean nicht wieder auf false gesetzt wurde, bricht die funktion an der Stelle ab und es werden keine neuen Buttons erstellt
            for (let i: number = 0; i < globalArray.length; i++) { // es werden so viele Buttons erstellt, wie sich "CanvasElemente" im globalArray befinden"
                let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");
                button.innerText = "Bild" + (i + 1); // Bild 1 // Bild 2...
                button.addEventListener("click", ladebild);
                button.setAttribute("id", i.toString());
                document.getElementById("fertigebilder").appendChild(button);

                ladebilder = true;
            }
        }
    }
}