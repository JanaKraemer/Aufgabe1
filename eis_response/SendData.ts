namespace response {
    window.addEventListener("load", bestellen);
    let adress: string = "https://kraemerj.herokuapp.com/";
    let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

    function bestellen(_event: Event): void {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("senden");
        button.addEventListener("click", datenanServer);
        console.log(button)
    }

    function datenanServer(_event: Event): void {
        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let zutat: string = "?";
        for (let i: number = 0; i < input.length; i++) {
            if (input[i].value != "" && input[i].value != "0") {
                zutat += input[i].name + ":" + input[i].value + "&";
            }
        }
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", adress + zutat, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();

    }

    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) { // Ajax - wartet auf den Server

            console.log("response: " + xhr.response);
            let auflistung = document.createElement("p");
            auflistung.innerHTML = `${xhr.response}`;
            document.getElementById("Bestatigung").appendChild(auflistung);
        }


    }
}
