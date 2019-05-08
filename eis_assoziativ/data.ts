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
        alt:string;

    }
    export interface HomogenousArray {
		[key: string]: Eis[];
}

    export let data: HomogenousArray  = {
        "Optionen": [
            { type:"radio", name:"Waffel" ,value:"1" ,id:"radio1",class:"Becher", step:"0", min:"0", max:"0",alt:"1"},
            { type: "radio",name: "Becher", value: "1", id: "radio1",class:"Becher", step:"0", min:"0", max:"0",alt:"1" },
        ],
        "Eissorten": [
            { class: " Haselnuss",type: "number", name: "Haselnuss", step: "1", min: "0", max: "3", id: "1", value: "0" ,alt:"1"},
            { class: "Schokolade", type: "number", name: "Schokolade", step: "1", min: "0", max: "3", id: "1", value: "0",alt:"1"},
            { class: " Erdbeer", type: "number", name: "Erdbeer", step: "1", min: "0", max: "3", id: "1", value: "0" ,alt:"1"},
            { class: " Vanille", type: "number", name: "Vanille", step: "1", min: "0", max: "3", id: "1", value: "0",alt:"1"},
            { class: " Mango", type: "Stepper",  name: "Mango", step: "1", min: "0", max: "3", id: "1", value: "0",alt:"1" },
            { class: " Joghurt", type: "Stepper", name: "Joghurt", step: "1", min: "0", max: "3", id: "1", value: "0",alt:"1"},

        ],

        "Toppings": [
            { type: "checkbox", name: "Sahne", value: "0", id: "check1.1",class:"Sahne", step:"1", min:"0", max:"0",alt:"0.5" },
            { type: "checkbox", name: "Streußel", value: "0", id: "check2.1" ,class:"Streußel", step:"0", min:"0", max:"0",alt:"0.5"  },
            { type: "checkbox",name: "Schoko-Soße", value: "0", id: "check3.1",class:"Schoko-Streußel", step:"0", min:"0", max:"0",alt:"0.5"  },
            { type: "checkbox",name: "Erdbeer-Sopße", value: "0", id: "check4.1" ,class:"Erdbeer-Soße", step:"0", min:"0", max:"0",alt:"0.5"  },

        ]
    }


}