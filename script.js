var aluno = {
             nome: "João",
             turma: "7 - B",
             notas: [9,3],
             media: function(n1,n2){
                    return (n1 + n2)/2
             }
}

console.log(`aluno: ${aluno.nome}`);
console.log(`Idade: ${aluno.turma}`);
console.log(`Nota final: ${aluno.media(aluno.notas[0],aluno.notas[1])}`);
