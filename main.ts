document.addEventListener("DOMContentLoaded", hello);

function hello(): void {

    let person: string = prompt(" Name:")
    console.log("Willkommen" + person)
    document.getElementById("name").innerHTML = "Willkommen" + person + "!"
}

