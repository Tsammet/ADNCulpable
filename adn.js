const nombres = ["Pedro", "Juan", "Diego"];
const cromosomasxpersona = ['00000101010101010101', '00101010101101110111', '00100010010000001001'];

let cromosomaCulpable = function () {

    let cromosoma = document.getElementById('cromosoma').value;
    let separado= cromosoma.split("")
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
    console.log( dato[0])
    console.log( dato[1])
    console.log( dato[2])
    document.getElementById("mensaje").innerHTML = cromosoma;

}

