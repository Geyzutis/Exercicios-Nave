//E.10 Imprima todos os elementos em que a idade é menor que 30 anos.

const Obj = [
  { id: 1, nome: "juca", sobrenome: "da silva", idade: 42 },
  { id: 2, nome: "daniel", sobrenome: "gonçalves", idade: 21 },
  { id: 3, nome: "matheus", sobrenome: "garcia", idade: 28 },
  { id: 4, nome: "gabriel", sobrenome: "pinheiro", idade: 21 }
];
for (i = 0; i < Obj.length; i++) {
  if (Obj[i].idade < 30) {
    //testa se a idade do objeto no array é menor que 30
    console.log(
      "ID: " +
        Obj[i].id +
        "\nNome: " +
        Obj[i].nome +
        "\nSobrenome: " +
        Obj[i].sobrenome +
        "\nIdade: " +
        Obj[i].idade
    ); //imprime todos os elementos dos objetos menores que 30 anos
  }
}
