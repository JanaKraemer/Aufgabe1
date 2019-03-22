document.addEventListener("DOMContentLoaded", hello);
function hello() {
    var person = prompt(" Name:");
    console.log("Willkommen" + person);
    document.getElementById("name").innerHTML = "Willkommen" + person + "!";
}
//# sourceMappingURL=main.js.map