let numeros = [8, 3, 5];

function ordemCrescente(vetor) {
    let a = vetor[0];
    let b = vetor[1];
    let c = vetor[2];
    let aux;

    if (a > b) {
        aux = a;
        a = b;
        b = aux;
    }

    if (a > c) {
        aux = a;
        a = c;
        c = aux;
    }

    if (b > c) {
        aux = b;
        b = c;
        c = aux;
    }

    return "Números em ordem crescente: " + a + ", " + b + ", " + c;
}

console.log(ordemCrescente(numeros));
