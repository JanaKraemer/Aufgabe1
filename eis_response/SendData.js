var response;
(function (response) {
    window.addEventListener("load", bestellen);
    let adress = "https://kraemerj.herokuapp.com/";
    function bestellen(_event) {
        let button = document.getElementById("senden");
        button.addEventListener("click", datenanServer);
    }
    function datenanServer(_event) {
        let input = document.getElementsByTagName("input");
        let zutat = "?";
        for (let i = 0; i < input.length; i++) {
            if (input[i].value != "" && input[i].value != "0") {
                zutat += input[i].name + ":" + input[i].value + "&";
            }
        }
        let xhr = new XMLHttpRequest();
        xhr.open("GET", adress + zutat, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) { // Ajax - wartet auf den Server
            console.log("response: " + xhr.response);
            let auflistung = document.createElement("p");
            auflistung.innerHTML = `${xhr.response}`;
            document.getElementById("Bestatigung").appendChild(auflistung);
        }
    }
})(response || (response = {}));
//# sourceMappingURL=SendData.js.map