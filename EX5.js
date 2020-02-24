const mapObj = {4: 'a', 3: 'e', 1: 'i', 5: 's'};
        const word = 'T35t3 d3 35t4g1o';


        str = word.replace(/[0-9]/gi,function match(matched){ 
            return mapObj[matched]});
        console.log(str);