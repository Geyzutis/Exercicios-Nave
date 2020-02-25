//E.1 Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.
function ComparaTam(strA, strB) {
  if (strA.length > strB.length) return strA;
  else if (strB.length > strA.length) return strB;
  else return "argumentos idênticos";
}
console.log(ComparaTam("trezentos", "trezentos"));
