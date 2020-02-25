//E.1 Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.
function ComparaTam(strA, strB) {
  if (strA.length > strB.length) return strA;
  return strB;
}
console.log(ComparaTam("trezentos", "oitenta"));
