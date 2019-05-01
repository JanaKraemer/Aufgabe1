"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // Ein http Objekt wird im Code generiert
var L05_Server;
(function (L05_Server) {
    console.log("Starting server"); //Starting server wird in der Konsole ausgegeben.//
    let port = Number(process.env.PORT); // Eine Variable wird deklariert, vom Typ number. Die Umgebungsvariable port sagt dem Server worauf er achten muss.//
    if (!port)
        port = 8100; // Die Variable bekommt eine Zahl zugewiesen.//
    let server = Http.createServer(); //Ein Server wird generiert//
    server.addListener("request", handleRequest); // Der Server bekommt den Event-Listener "request"//
    server.addListener("listening", handleListen); // Der Server bekommt den Event-Listener "listening"//
    server.listen(port);
    function handleListen() {
        console.log("Listening"); //Listening wird  auf der Konsole aufegegeben.//
    }
    function handleRequest(_request, _response) {
        // Http.ServerResponse wird vom HTTP Server erstellt.//
        console.log("I hear voices!"); // I hear voices! wird auf der Konsole ausgegeben.//
        _response.setHeader("content-type", "text/html; charset=utf-8"); // .setHeader liest einen Header aus, der sich in einer Warteschlange befindet und noch nicht an den Client gesendet wurde.//
        _response.setHeader("Access-Control-Allow-Origin", "*"); // .setHeader liest einen Header aus, der sich in einer Warteschlange befindet und noch nicht an den Client gesendet wurde.//
        _response.write(_request.url); // Infos werden an den Client gesendet, wenn die Methode das erste Mal aufgerufen wird. Wenn es erneut aufgerufen wird, werden die neuen Daten von Node.js angenommen und separat geteilt.//
        _response.end(); // Diese Methode signalisiert dem Server, dass alle Antworten gesendet wurden und die Nachricht vollständig ist. Der Befehl muss bei jeder Antwort aufgerufen werden.//
    }
})(L05_Server || (L05_Server = {}));
//# sourceMappingURL=main.js.map