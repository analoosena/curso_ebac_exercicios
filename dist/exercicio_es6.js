"use strict";

var diarioEscolar = [{
  nome: 'Maria',
  nota: 6
}, {
  nome: 'Juquinha',
  nota: 8
}, {
  nome: 'Pelé',
  nota: 2
}, {
  nome: 'Guilherme',
  nota: 5
}];
function alunosAprovados(arrayNotas) {
  return arrayNotas.filter(function (aluno) {
    return aluno.nota >= 6;
  }) // Filtra os alunos com nota >= 6
  .map(function (aluno) {
    return aluno.nome;
  }); // Mapeia para retornar apenas os nomes dos aprovados
}
console.log(alunosAprovados(diarioEscolar));