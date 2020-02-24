
function Concatena(){
    var txt = " ";
    for(var i=0;i<arguments.length; i++){
        if(i < (arguments.length-1)){
        txt += arguments[i] + ",";
            } 
        else {
        txt +=arguments[i];  
            }
        }
        return txt;
        }
        console.log(Concatena('japonesa','pescoço','italiana','libanesa'));
