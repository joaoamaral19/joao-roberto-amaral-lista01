let nome = "João";
let idade = 19;

function podeVotar(nome, idade) {
    if (idade >= 16) {
        console.log(nome + ", você pode votar este ano.");
    } else {
        console.log(nome + ", você não pode votar este ano.");
    }
}

podeVotar(nome, idade);
