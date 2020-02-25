//E.7 Imprima uma mensagem de saudação com o nome completo para cada um dos objetos. O nome deve ter a primeira letra maiúscula.
const Obj = [
  { id: 1, nome: "juca", sobrenome: "da silva", idade: 42 },
  { id: 2, nome: "daniel", sobrenome: "gonçalves", idade: 21 },
  { id: 3, nome: "matheus", sobrenome: "garcia", idade: 28 },
  { id: 4, nome: "gabriel", sobrenome: "pinheiro", idade: 21 }
];

for (const i = 0; i < Obj.length; i++) {
  const b = Obj[i].nome.slice(1);
  const a = Obj[i].nome.charAt(0).toUpperCase();

  console.log("Olá, " + a + b + " " + Obj[i].sobrenome + "!");
}
