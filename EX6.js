const axios = require('axios');

axios.get('https://viacep.com.br/ws/96030580/json/')
    .then(function(response){
        console.log('Endereço: '+response.data.logradouro 
        +'\nNúmero: 209'
        +'\nCidade/Estado: '+response.data.localidade + '/' + response.data.uf);
    })
    .catch(function(error){
        console.warn(error);
    })