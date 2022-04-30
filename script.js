var aluno = {
             nome: "João",
             turma: "7 - B",
             notas: [9,3],
             media: function(n1,n2){
                    return (n1 + n2)/2
             }
}

console.log(`Aluno: ${aluno.nome}`);
console.log(`Turma: ${aluno.turma}`);
console.log(`Nota final: ${aluno.media(aluno.notas[0],aluno.notas[1])}`);
