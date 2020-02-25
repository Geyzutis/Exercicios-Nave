//E.2 Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.
const Concatena = (A, B) => console.log(A + B);

function Chamafuncao(Concatena, chrA, chrB) {
  Concatena(chrA, chrB);
}
Chamafuncao(Concatena, "trezentos", " e oitenta");
