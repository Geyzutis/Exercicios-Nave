//E.9 Imprima o objeto se existir alguem com menos 25 anos.

var Obj = [
  { id: 1, nome: "juca", sobrenome: "da silva", idade: 42 },
  { id: 2, nome: "daniel", sobrenome: "gonçalves", idade: 21 },
  { id: 3, nome: "matheus", sobrenome: "garcia", idade: 28 },
  { id: 4, nome: "gabriel", sobrenome: "pinheiro", idade: 21 }
];
for (i = 0; i < Obj.length; i++) {
  if (Obj[i].idade < 25) {
    console.log(Obj[i]);
  }
}
