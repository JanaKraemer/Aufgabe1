var Zauberbild;
(function (Zauberbild) {
    let plusStyle = 0;
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://kraemerj.herokuapp.com/";
    function insert(_name) {
        //let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query = "command=insert";
        //query += "&name=" + _name,
        query += "&bg=" + Zauberbild.bg;
        query += "&canvaswidth=" + Zauberbild.canvas.width;
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            let symbol = {
                type: Zauberbild.kreisArray[i].type,
                x: Zauberbild.kreisArray[i].x.toString(),
                y: Zauberbild.kreisArray[i].y.toString()
            };
            query += "&type=" + symbol.type + "&x=" + symbol.x + "&y=" + symbol.y;
            //plusStyle += 1;
            // query += "&symbol=" + symbol.type +  "&sy"
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
            // let playerList: Circle[] = JSON.parse(xhr.response);
            // for (let i: number = 0; i <= playerList.length; i++) {
            //     let nickname: string = playerList[i].name;
            //     let playerscore: string = playerList[i].score;
            //     document.getElementById("highscoreList").innerHTML = "Name:" + nickname + "Score:" + playerscore;
            //}
        }
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=client.js.map