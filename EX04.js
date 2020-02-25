//E.4 Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'.
const frase = "teste 1 de 2 string 3";
console.log(frase.replace(/\d/g, "[removido]"));
