//E.6 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada imprima o seu endereço no formato 'ENDERECO, NUMERO, CIDADE/ESTADO'.
const { get } = require("axios");

get("https://viacep.com.br/ws/96030580/json/")
  .then(function(response) {
    console.log(
      "Endereço: " +
        response.data.logradouro +
        "\nNúmero: 209" +
        "\nCidade/Estado: " +
        response.data.localidade +
        "/" +
        response.data.uf
    );
  })
  .catch(function() {
    console.log("Ocorreu um erro ao realizar a requisição");
  });
