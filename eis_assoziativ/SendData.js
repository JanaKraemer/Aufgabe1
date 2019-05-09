var assoziative_Arrays;
(function (assoziative_Arrays) {
    let address = "https://janakraemer.github.io/EIA2-Aufgabe/eis_assoziativ/";
    function sendRequestWithCustomData(_color) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(assoziative_Arrays || (assoziative_Arrays = {}));
//# sourceMappingURL=SendData.js.map