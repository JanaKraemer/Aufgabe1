let erdbeer = {
    option: "0",
    sorte: "erdbeer",
    topping: "0",
    preis: 1,
};
let eissorten = [erdbeer];
let zusammenstellung = [];
var Formelemente;
(function (Formelemente) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        console.log(_event);
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        zusammenstellung.push(_event.target);
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
        zusammenstellung.push(_event.target);
        console.log(zusammenstellung);
    }
})(Formelemente || (Formelemente = {}));
function preisanzeige() {
    if (erdbeer.preis == 1) {
        zusammenstellung.push(erdbeer);
        preis.push();
    }
}
let preis = [];
function addtoCart(item) {
    preis.push(item);
    console.info(preis);
    console.info(preis.length);
    Gesamtsumme();
    document.getElementById('preis').innerHTML = preis.length.toString();
}
function Gesamtsumme() {
    for (var i = 0; i <= zusammenstellung.length - 1; i++) {
        var sum = 0;
        sum += eissorten[i].price;
        console.info(sum);
        console.info('sum is', sum.toFixed(2));
    }
    document.getElementById('preis').innerHTML = sum.toFixed(2).toString();
}
//# sourceMappingURL=main.js.map