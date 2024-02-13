const nombres = ["Pedro", "Juan", "Diego"];
const cromosomasxpersona = ['00000101010101010101', '00101010101101110111', '00100010010000001001'];

let cromosomaCulpable = function () {

    let cromosoma = document.getElementById('cromosoma').value;
    var x=0;
    let dato=[0,0,0]
    for (let cromosomas of cromosomasxpersona) {
 
        let i=0;
     
        for (cromo1 of cromosomas) {
       
            if(cromo1==cromosoma[i]){
                dato[x]+=5;
            }      
            i++
        }
        x++
    }

    let culpable=0;
    for(let j=0;j<=3;j++)

    if(dato[j]>=dato[0]&&dato[j]>=dato[1]&&dato[j]>=dato[2]){
        culpable=j
    }

    console.log( culpable)

    document.getElementById("mensaje").innerHTML = "el culpable es "+ nombres[culpable]+ " con un parentezco de "+ dato[culpable]+"%."

}

