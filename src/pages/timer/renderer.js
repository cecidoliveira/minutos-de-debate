let timer,seg,min;
 
function iniciarTemporizador(tempo,temporizador){
    min = parseInt(tempo[0]);
    seg = parseInt(tempo[1]); 

    timer = setInterval(function() {
        
        if(seg == 0){
            if(min == 0){
                temporizador.classList.remove('tempo');
                clearInterval(timer);
                seg = 1;       
            }else{
                min--;
                seg = 60; 
            }
        }
        seg --;

        minutes = min < 10 ? "0" + min : min;
        seconds = seg < 10 ? "0" + seg : seg;

        temporizador.innerHTML = minutes+":"+seconds; 

        if(min == 0 && seg <= 10 && seg != 0){
            temporizador.classList.add('tempo','aviso');
        }

    },1000);

}

function defValorTemporizador(kpress){
    deftimer = localStorage.getItem("timer");

    //Temporizador 00:00
    const temporizador = document.querySelector(".temp");
    let tempo = temporizador.innerHTML.split(':');

    clearInterval(timer);

    switch (kpress){
        case "KeyS":
            //iniciar
            iniciarTemporizador(tempo,temporizador);
            break;
        case "Space":
            //parar
            if(seg <=10 && min == 0){
                temporizador.classList.remove('tempo','aviso');
                temporizador.classList.add('aviso');
            }
            break;
        case "KeyT":
            //deftimer
            temporizador.classList.remove('tempo','aviso');
            if (deftimer === null || deftimer == "00:00"){
                deftimer = "59:00";
            }
            temporizador.innerHTML = deftimer;
            break;
        case "KeyZ":
            //zerar
            temporizador.classList.remove('tempo','aviso');
            temporizador.innerHTML = "00:00";
            break;    
    }
}

//getkeypress (confs)
window.onstorage = () => {
    let key = localStorage.getItem("keypressing");
    if( key == "KeyS" || key == "Space" || key == "KeyT" || key == "KeyZ"){
        defValorTemporizador(key);
    }
};

//getkeypress (timer)
document.addEventListener('keypress',function(p){
    let kpress = p.code;
    defValorTemporizador(kpress);
});