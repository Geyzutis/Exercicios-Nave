//E.5 Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário.
const Dic = { 4: "a", 3: "e", 1: "i", 5: "s" };
const word = "T35t3 d3 35t4g1o";

console.log(
  word.replace(/[0-9]/gi, function match(num) {
    return Dic[num];
  })
);
