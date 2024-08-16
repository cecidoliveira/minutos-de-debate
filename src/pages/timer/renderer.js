let timer,seg,min;
let pause = true;

function iniciarTemporizador(tempo,temporizador){
    min = Math.floor(tempo / 60);
    seg = tempo % 60;

    if(pause === true){            
        temporizador.innerHTML = `${min < 10 ? "0" + min : min}:${seg < 10 ? "0" + seg : seg}`;
        console.log('pause true')
        if(min == 0 && seg <= 10 && seg != 0){
            temporizador.classList.add('aviso');
        }else{ 
            temporizador.classList.remove('aviso');
        }
        
    }else{
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
    
            temporizador.innerHTML = `${min < 10 ? "0" + min : min}:${seg < 10 ? "0" + seg : seg}`; 
            // pause = false;
            if(min == 0 && seg <= 10 && seg != 0){
                temporizador.classList.add('tempo','aviso');
            }else{ 
                temporizador.classList.remove('tempo','aviso');
            }
        },1000);
        console.log('pause false')    
    }
}

function updateTempo(tempo){
    let minutes = parseInt(tempo[0]) * 60;
    return parseInt(tempo[1]) + minutes;
}

function defValorTemporizador(kpress){
    deftimer = localStorage.getItem("timer");
    //Temporizador 00:00
    const temporizador = document.querySelector(".temp");
    let tempo = temporizador.innerHTML.split(':');
    tempo = updateTempo(tempo)
    clearInterval(timer);

    switch (kpress){
        case "Enter":
            //iniciar
            pause = false;
            iniciarTemporizador(tempo,temporizador);
            break;
        case "NumpadEnter":
            //iniciar
            pause = false;
            iniciarTemporizador(tempo,temporizador);
            break;
        case "Space":
            //parar
            clearInterval(timer)
            pause = true;
            if(tempo <= 10){
                temporizador.classList.remove('tempo');
            }
            break;
        case "KeyT":
            //deftimer
            pause = true;
            temporizador.classList.remove('tempo','aviso');
            if (deftimer === null || deftimer == "00:00"){
                deftimer = "01:30";
            }
            temporizador.innerHTML = deftimer;
            break;
        case "KeyZ":
            //zerar
            temporizador.classList.remove('tempo','aviso');
            temporizador.innerHTML = "00:00";
            pause = true;
            break;  
        case "KeyP":
            if(tempo < 3500){
                tempo += 40;
                iniciarTemporizador(tempo,temporizador)
            }else{
                pause = false;
                iniciarTemporizador(tempo,temporizador)
            }
            break;

    }
}

//getkeypress (confs)
window.onstorage = () => {
    let key = localStorage.getItem("keypressing");
    if( key == "Enter" || key == "Space" || key == "KeyT" || key == "KeyZ" || key == "KeyP"){
        defValorTemporizador(key);
    }
};

//getkeypress (timer)
document.addEventListener('keypress',function(p){
    let kpress = p.code;
    defValorTemporizador(kpress);
});