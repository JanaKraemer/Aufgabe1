
namespace assoziative_Arrays {

    window.addEventListener("load", init); // Preis berechnen//
    document.addEventListener("DOMContentLoaded", kaufen); //button//


    function init(_event: Event): void { // über diese Funktion werden alle Fieldsets angesprochen und durchlaufen. Sie bekommen ein change-event//
        console.log(data);
        let fieldsetElement: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsetElement.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsetElement[i];
            fieldset.addEventListener("change", handleChange);

        }

        displayHomoVar(data);


    }
    function displayHomoVar(_homoVar: HomogenousArray): void {

        for (let key in _homoVar) {
            let value: Eis[] = _homoVar[key];

            for (let i: number = 0; i < value.length; i++)

                displayHeteroPredef(value[i]);
        }
    }
    function displayHeteroPredef(_E: Eis): void {

        let formelement: HTMLInputElement = document.createElement("input");
        let legend: HTMLLabelElement = document.createElement("label");


        legend.innerText = _E.wahl;


        formelement.setAttribute("type", _E.type);
        formelement.setAttribute("name", _E.name);
        formelement.setAttribute("step", _E.step);
        formelement.setAttribute("min", _E.min);
        formelement.setAttribute("max", _E.max);
        formelement.setAttribute("id", _E.id);
        formelement.setAttribute("value", _E.value);
        formelement.setAttribute("class", _E.class);
        formelement.setAttribute("wahl", _E.wahl);
        formelement.setAttribute("alt", _E.alt);


        formelement.appendChild(legend);
        document.getElementById("inhalt").appendChild(legend);
        legend.appendChild(formelement);


    }
}
function handleChange(_event: Event): void {
    console.log(_event);
    berechnePreis(_event);

}

function berechnePreis(_event: Event): void {
    let anfangsPreis: number = 0;

    document.getElementById("Übersicht").innerHTML = ''; //Jedes mal, wenn eine neue Angabe gemacht wurde, wird die Überichts erst gelöscht und dann neu berechnet//
    let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    for (let i: number = 0; i < input.length; i++) {
        if (input[i].checked == true) { // Wenn das element aufgrund des events angesprochen wurde, dann wird der value auf den anfangspreis gerechent//
            let preis: number = Number(input[i].value);
            //  let target:number = Number(_event.target)
            anfangsPreis += preis;

            let erstellen = document.createElement("p"); // Die Angaben werden im HTML neu generiert und an die Übersicht gahängt//
            erstellen.innerHTML = `<p>
          
        <p> ${input[i].name}</p>`
            document.getElementById("Übersicht").appendChild(erstellen);
        }
        if (input[i].id == "1") {
            let anzahlKugeln: number = Number(input[i].value);
            let anzahlPreis: number = Number(input[i].alt)
            anfangsPreis += anzahlKugeln * anzahlPreis;
            if (anzahlKugeln > 0) {

                let erstellen = document.createElement("p");
                erstellen.innerHTML = `
                <p>${input[i].value} ${input[i].name}</p>`

                document.getElementById("Übersicht").appendChild(erstellen);
            }
        }
    }
    document.getElementById("preis").innerHTML = anfangsPreis.toFixed(2).toString();
    
}





function kaufen(_event: Event): void {     // Der Button bekommt ein Click-Event zugewiesen//
    let bestellen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buy"); //Der Button wird so über die Id angesprochen//
    bestellen.addEventListener("click", kontrolle);


}
function kontrolle(_event: Event): void {
    let eingabeArray: string[] = []; //Fehlende Angaben, den den Value 0 haben werden in das leere Array gepushed//

    let eingabe: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    for (let i: number = 0; i < eingabe.length; i++) {
        if (eingabe[i].value == "") {   // Wenn das Element einen leeren Value hat, dann wird dessen Name in das Array gepushed//
            let angabenotwendig: string = eingabe[i].name;
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
