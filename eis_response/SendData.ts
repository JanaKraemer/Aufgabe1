namespace response {
    window.addEventListener("load", bestellen);
    let adress: string = "https://kraemerj.herokuapp.com/";

    function bestellen(_event: Event): void {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Datensenden");
        button.addEventListener("click", datenanServer);

    }

    function datenanServer(_event: Event): void {
        let zutat: string = "?";
        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

        for (let i: number = 0; i < input.length; i++) {

            if (input[i].type == "checkbox" || input[i].type == "radio") {
                if (input[i].checked == true) {
                    zutat += input[i].name + ":" + input[i].value + "&";

                }
            }
            

            if(input[i].type == "text" || input[i].type == "email"){
                if(input[i].value != "0"){
                    zutat += input[i].name + ":" + input[i].value + "&";
                }
            }

            if(input[i].type == "number"){
                if(input[i].value > "0"){
                    zutat += input[i].name + ":" + input[i].value + "&";
                }
            }
        }
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", adress + zutat, true);
        xhr.addEventListener("readystatechange", Serverantwort);
        xhr.send();

    }

    function Serverantwort(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) { // Ajax - wartet auf den Server

            console.log("response:" + xhr.response);
            let auflistung = document.createElement("p");
            auflistung.innerHTML = `${xhr.response}`;
            document.getElementById("Bestatigung").appendChild(auflistung);
        }


    }
}
