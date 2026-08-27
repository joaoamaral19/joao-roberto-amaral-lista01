let numeros = [10, 4, 25, 2, 18];

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > maior) {
        maior = numeros[i];
    }

    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);
