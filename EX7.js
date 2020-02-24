var Obj = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
            ];


    for(var i=0;i<Obj.length;i++){
        var b = Obj[i].nome.slice(1);
        var a = Obj[i].nome.charAt(0).toUpperCase();
        
        console.log('Olá '+a+b+' '+Obj[i].sobrenome);
    }