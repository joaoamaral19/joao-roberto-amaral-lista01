let turmas = [
    {
        nomeProfessor: "murilo",
        alunos: [
            {
                nome: "João",
                nota: 8
            },
            {
                nome: "pedro",
                nota: 6
            },
            {
                nome: "rincon",
                nota: 9
            }
        ]
    },

    {
        nomeProfessor: "Carlos",
        alunos: [
            {
                nome: "Ana",
                nota: 5
            },
            {
                nome: "Maria",
                nota: 10
            },
            {
                nome: "Lucas",
                nota: 7
            }
        ]
    }
];

function ordenarAlunos(turma) {
    turma.alunos.sort(function(a, b) {
        return a.nota - b.nota;
    });
}

function mostrarResultado(turma) {

    for (let i = 0; i < turma.alunos.length; i++) {

        let aluno = turma.alunos[i];

        if (aluno.nota >= 7) {
            console.log(
                "Parabéns " + aluno.nome +
                ", você foi aprovado com a nota " + aluno.nota
            );
        } else {
            console.log(
                "Não foi dessa vez " + aluno.nome +
                ", você reprovou com a nota " + aluno.nota
            );
        }
    }
}

for (let i = 0; i < turmas.length; i++) {

    ordenarAlunos(turmas[i]);

    console.log("Professor: " + turmas[i].nomeProfessor);

    mostrarResultado(turmas[i]);
}
