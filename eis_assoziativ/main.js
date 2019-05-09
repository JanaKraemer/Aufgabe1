var assoziative_Arrays;
(function (assoziative_Arrays) {
    window.addEventListener("load", init); // Preis berechnen//
    document.addEventListener("DOMContentLoaded", kaufen); //button//
    function init(_event) {
        console.log(assoziative_Arrays.data);
        let fieldsetElement = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsetElement.length; i++) {
            let fieldset = fieldsetElement[i];
            fieldset.addEventListener("change", handleChange);
        }
        displayHomoVar(assoziative_Arrays.data);
    }
    function displayHomoVar(_homoVar) {
        for (let key in _homoVar) {
            let value = _homoVar[key];
            for (let i = 0; i < value.length; i++)
                displayHeteroPredef(value[i]);
        }
    }
    function displayHeteroPredef(_E) {
        let formelement = document.createElement("input");
        let legend = document.createElement("label");
        legend.innerText = _E.class;
        formelement.setAttribute("type", _E.type);
        formelement.setAttribute("name", _E.name);
        formelement.setAttribute("step", _E.step);
        formelement.setAttribute("min", _E.min);
        formelement.setAttribute("max", _E.max);
        formelement.setAttribute("id", _E.id);
        formelement.setAttribute("value", _E.value);
        formelement.setAttribute("class", _E.class);
        formelement.setAttribute("alt", _E.alt);
        formelement.appendChild(legend);
        document.getElementById("inhalt").appendChild(legend);
        legend.appendChild(formelement);
        if (_E.type = "radio") {
            formelement.setAttribute("value", _E.class);
        }
        console.log(_E.name);
    }
})(assoziative_Arrays || (assoziative_Arrays = {}));
function handleChange(_event) {
    console.log(_event);
    berechnePreis(_event);
}
function berechnePreis(_event) {
    let anfangsPreis = 0;
    document.getElementById("Übersicht").innerHTML = ''; //Jedes mal, wenn eine neue Angabe gemacht wurde, wird die Überichts erst gelöscht und dann neu berechnet//
    let input = document.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked == true) { // Wenn das element aufgrund des events angesprochen wurde, dann wird der value auf den anfangspreis gerechent//
            let preis = Number(input[i].alt);
            //  let target:number = Number(_event.target)
            anfangsPreis += preis;
            let erstellen = document.createElement("p"); // Die Angaben werden im HTML neu generiert und an die Übersicht gahängt//
            erstellen.innerHTML = `<p>
          
        <p> ${input[i].className} </p>`;
            document.getElementById("Übersicht").appendChild(erstellen);
        }
        if (input[i].id == "1") {
            let anzahlKugeln = Number(input[i].value);
            let anzahlPreis = Number(input[i].alt);
            anfangsPreis += anzahlKugeln * anzahlPreis;
            if (anzahlKugeln > 0) {
                let erstellen = document.createElement("p");
                erstellen.innerHTML = `
                <p>${input[i].value} ${input[i].className}</p>`;
                document.getElementById("Übersicht").appendChild(erstellen);
            }
        }
    }
    document.getElementById("preis").innerHTML = anfangsPreis.toFixed(2).toString();
}
function kaufen(_event) {
    let bestellen = document.getElementById("buy"); //Der Button wird so über die Id angesprochen//
    bestellen.addEventListener("click", kontrolle);
}
function kontrolle(_event) {
    let eingabeArray = []; //Fehlende Angaben, den den Value 0 haben werden in das leere Array gepushed//
    let eingabe = document.getElementsByTagName("input");
    for (let i = 0; i < eingabe.length; i++) {
        if (eingabe[i].value == "" && eingabe[i].type == "text") { // Wenn das Element einen leeren Value hat, dann wird dessen Name in das Array gepushed//
            let angabenotwendig = eingabe[i].name;
            eingabeArray.push(angabenotwendig);
        }
    }
    if (eingabeArray.length == 0) { // Wenn das Array leer ist, kommt die Rückmeldung:"Ihre Bestellung wurde aufgenommen"//
        alert("Ihre Bestellung wurde aufgenommen");
    }
    else { // Wenn sich Elemente mit leerem Value im Array befinden, werden diese ausgegeben.//
        alert(`Bitte ${eingabeArray} vervollständigen`);
    }
}
//# sourceMappingURL=main.js.map