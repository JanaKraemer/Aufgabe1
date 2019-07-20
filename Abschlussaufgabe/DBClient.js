var catchthefish;
(function (catchthefish) {
    let serverAddress = "https://kraemerj.herokuapp.com/";
    //let serverAddress: string = "htttp://localhost:8100";
    // let serverAddress: string = "https://eia2-testserver.herokuapp.com/";
    function insertquery(_name, _score) {
        let query = "command=insert";
        query += "&name=" + _name;
        query += "&highscore=" + _score;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    catchthefish.insertquery = insertquery;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function find() {
        let query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    catchthefish.find = find;
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let hightscore = JSON.parse(xhr.response);
            for (let i = 0; i <= hightscore.length; i++) {
                let playerName = hightscore[i].name;
                let playerScore = hightscore[i].score;
                document.getElementById("daten").innerHTML = "Spielername" + playerName + "Spielerscore" + playerScore;
            }
        }
    }
})(catchthefish || (catchthefish = {}));
//# sourceMappingURL=DBClient.js.map