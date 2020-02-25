//E.3 Crie uma função que recebe vários argumentos do tipo string e imprime todos juntos
const txt = " ";
function Concatena() {
  for (const i = 0; i < arguments.length; i++) {
    if (i < arguments.length - 1) txt += arguments[i] + ",";
    else txt += arguments[i];
  }
  return txt;
}
console.log(Concatena("japonesa", "pescoço", "italiana", "libanesa"));
