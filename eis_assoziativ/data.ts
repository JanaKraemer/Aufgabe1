namespace assoziative_Arrays {

    export interface Eis {
        name: string;
        value: string;
        type: string;
        id: string;
        class:string;
        step:string;
        min:string;
        max:string;
        wahl:string;
        alt:string;

    }
    export interface HomogenousArray {
		[key: string]: Eis[];
}

    export let data: HomogenousArray  = {
        "Optionen": [
            { type:"radio", wahl:"Waffel",name:"Waffel/Becher" ,value:"1" ,id:"radio1",class:"0", step:"0", min:"0", max:"0",alt:"1"},
            { type: "radio", wahl:"Becher",name: "Waffel/Becher", value: "1", id: "radio2",class:"0", step:"0", min:"0", max:"0",alt:"1" },
        ],
        "Eissorten": [
            { class: " Kugel/n Haselnuss", wahl:"Haselnuss",type: "number", name: "Stepper", step: "1", min: "0", max: "3", id: "1", value: "1" ,alt:"1"},
            { class: " Kugel/n Schokolade", wahl:"Schokolade",type: "number", name: "Stepper", step: "1", min: "0", max: "3", id: "1", value: "1",alt:"1"},
            { class: " Kugel/n Erdbeer", wahl:"Erdbeere",type: "number", name: "Stepper", step: "1", min: "0", max: "3", id: "1", value: "1" ,alt:"1"},
            { class: " Kugel/n Vanille", wahl:"Vanille",type: "number", name: "Stepper", step: "1", min: "0", max: "3", id: "1", value: "1",alt:"1"},
            { class: " Kugel/n Mango", type: "number", wahl:"Mango", name: "Stepper", step: "1", min: "0", max: "3", id: "1", value: "1",alt:"1" },
            { class: " Kugel/n Joghurt", type: "number", wahl:"Joghurt",name: "Stepper", step: "1", min: "0", max: "3", id: "1", value: "1",alt:"1"},

        ],

        "Toppings": [
            { type: "checkbox", wahl:"Sahne",name: "Sahne", value: "0.50", id: "check1.1",class:"0", step:"1", min:"0", max:"0",alt:"0.5" },
            { type: "checkbox", wahl:" Streußel",name: "Streußel", value: "0.50", id: "check2.1" ,class:"1", step:"0", min:"0", max:"0",alt:"0.5"  },
            { type: "checkbox", wahl:"Schoko_soße",name: "Schoko-Soße", value: "0.50", id: "check3.1",class:"1", step:"0", min:"0", max:"0",alt:"0.5"  },
            { type: "checkbox",wahl:"Erdbeer-Soße", name: "Erdbeer-Sopße", value: "0.50", id: "check4.1" ,class:"1", step:"0", min:"0", max:"0",alt:"0.5"  },

        ]
    }


}