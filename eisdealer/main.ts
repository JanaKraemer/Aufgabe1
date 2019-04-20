
window.addEventListener("load", init); // Preis berechnen//
document.addEventListener("DOMContentLoaded", kaufen); //button//



function init(_event: Event): void { // über diese Funktion werden alle Fieldsets angesprochen und durchlaufen. Sie bekommen ein change-event//
    console.log("init");
    let fieldsetElement: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

    for (let i: number = 0; i < fieldsetElement.length; i++) {
        let fieldset: HTMLFieldSetElement = fieldsetElement[i];
        fieldset.addEventListener("change", handleChange);

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
            anfangsPreis += preis;

            let erstellen = document.createElement("p"); // Die Angaben werden im HTML neu generiert und an die Übersicht gahängt//
            erstellen.innerHTML = `<p>
        <p> ${input[i].className}</p>
        <p> ${input[i].name}</p>`
            document.getElementById("Übersicht").appendChild(erstellen);


        }
        document.getElementById("preis").innerHTML = anfangsPreis.toFixed(2).toString();


    }
}

 function kaufen(_event:Event):void{     // Der Button bekommt ein Click-Event zugewiesen//
     let bestellen : HTMLButtonElement = <HTMLButtonElement>document.getElementById("buy"); //Der Button wird so über die Id angesprochen//
     bestellen.addEventListener("click", kontrolle);
     

 }
  function kontrolle(_event:Event):void{
    let eingabeArray:string[] = []; //Fehlende Angaben, den den Value 0 haben werden in das leere Array gepushed//
    let x:number =0;
     let eingabe: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
     for( let i:number= 0; i< eingabe.length; i++){ 
         if( eingabe[i].value == ""){   // Wenn das Element einen leeren Value hat, dann wird dessen Name in das Array gepushed//
         let angabenotwendig: string = eingabe[i].name;
         eingabeArray.push(angabenotwendig);
         
     }
    }
     if(eingabeArray.length == 0){ // Wenn das Array leer ist, kommt die Rückmeldung:"Ihre Bestellung wurde aufgenommen"//
        alert("Ihre Bestellung wurde aufgenommen");
     }
     else{ // Wenn sich Elemente mit leerem Value im Array befinden, werden diese ausgegeben.//
         alert(`Bitte ${eingabeArray} vervollständigen`);

     }
     
}
