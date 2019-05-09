var response;
(function (response) {
    window.addEventListener("load", init);
    let adress = "https://kraemerj.herokuapp.com?";
    let input = document.getElementsByTagName("input");
    function init(_event) {
        let button = document.getElementById("buy");
        button.addEventListener("click", handleClickButton);
    }
    function handleClickButton(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", adress);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        for (let i = 0; i < input.length; i++) {
            adress += input[i].name;
        }
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) { // Ajax - wartet auf den Server
            console.log("response: " + xhr.response);
        }
    }
})(response || (response = {}));
//# sourceMappingURL=SendData.js.map