let carros = [
    {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2012
    },
    {
        marca: "Honda",
        modelo: "Civic",
        ano: 2018
    },
    {
        marca: "Chevrolet",
        modelo: "Onix",
        ano: 2020
    },
    {
        marca: "Ford",
        modelo: "Fiesta",
        ano: 2014
    }
];

for (let i = 0; i < carros.length; i++) {
    if (carros[i].ano > 2015) {
        console.log(carros[i]);
    }
}
