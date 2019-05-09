namespace response {
    window.addEventListener("load", init);
    let adress: string = "https://kraemerj.herokuapp.com?";
    let input:HTMLCollectionOf<HTMLInputElement>= document.getElementsByTagName("input");

    function init(_event: Event): void {
        let button: HTMLElement = document.getElementById("buy");
        button.addEventListener("click", handleClickButton);
    }

    function handleClickButton(_event: Event): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", adress);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();

        for (let i:number = 0; i < input.length; i++){
            adress+= input[i].name;
        }
    }

    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) { // Ajax - wartet auf den Server

            console.log("response: " + xhr.response);
        }


    }



















}