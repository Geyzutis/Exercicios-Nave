//E.11 Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.

var Obj = [
  { id: 1, nome: "juca", sobrenome: "da silva", idade: 42 },
  { id: 2, nome: "daniel", sobrenome: "gonçalves", idade: 21 },
  { id: 3, nome: "matheus", sobrenome: "garcia", idade: 28 },
  { id: 4, nome: "gabriel", sobrenome: "pinheiro", idade: 21 }
];

console.log(
  Obj.sort(function(a, b) {
    if (a.idade == b.idade)
      //se a idade for igual executa o comando
      return b.id - a.id; //subtrai os ids dos paramentros e retorna o maior
    return b.idade - a.idade; //subtrai as idades dos parametros, quando >0 ele 'passa a frente' do outro
  })
);
