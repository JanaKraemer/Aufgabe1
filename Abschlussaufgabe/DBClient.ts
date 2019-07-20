
namespace catchthefish {
  
   
    let serverAddress: string = "https://kraemerj.herokuapp.com/";
    //let serverAddress: string = "htttp://localhost:8100";
    // let serverAddress: string = "https://eia2-testserver.herokuapp.com/";

    


    export function insertquery(_name: string, _score: number): void {

        let query: string = "command=insert";
        query += "&name=" + _name;
        query += "&highscore=" + _score;

        console.log(query);
        sendRequest(query, handleInsertResponse);
    }


    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    export function find(): void {
        let query: string = "command=find";
        sendRequest(query, handleFindResponse);
    }
    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    
    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let hightscore: Player[] = JSON.parse(xhr.response);
            for (let i: number = 0; i <= hightscore.length; i++) {
                let playerName: string = hightscore[i].name;
                let playerScore: string = hightscore[i].score;
                document.getElementById("daten").innerHTML = "Spielername" + playerName + "Spielerscore" + playerScore;
            }
        }
    }
}