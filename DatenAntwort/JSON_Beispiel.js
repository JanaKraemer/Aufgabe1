let f = {
    name: "DM",
    courses: [
        {
            name: "EIA2",
            prof: {
                name: "Lukas Scheuerle"
            },
            students: [
                {
                    name: "Anna",
                    mat: 12345,
                    enr: true
                },
                {
                    name: "Tobias",
                    mat: 54321,
                    enr: true
                },
                {
                    name: "Lea",
                    mat: 65479,
                    enr: true
                },
                {
                    name: "Olli",
                    mat: 98437,
                    enr: false
                },
                {
                    name: "Regina",
                    mat: 67256,
                    enr: false
                },
                {
                    name: "Hannes",
                    mat: 67894,
                    enr: true
                },
                {
                    name: "Felix",
                    mat: 34594,
                    enr: true
                },
                {
                    name: "Jana",
                    mat: 34987,
                    enr: false
                },
            ]
        }
    ]
};
console.log(JSON.stringify(f, null, "    "));
//# sourceMappingURL=JSON_Beispiel.js.map