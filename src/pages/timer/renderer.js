let timer,seg,min;
let pause = true;

function iniciarTemporizador(tempo,temporizador){
    min = Math.floor(tempo / 60);
    seg = tempo % 60;

    if(pause == true){            
        temporizador.innerHTML = `${min < 10 ? "0" + min : min}:${seg < 10 ? "0" + seg : seg}`;
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
            pause = false;
            if(min == 0 && seg <= 10 && seg != 0){
                temporizador.classList.add('tempo','aviso');
            }else{ 
                temporizador.classList.remove('tempo','aviso');
            }
        },1000);    
    }
}

function updateTempo(tempo){
    let minutes = parseInt(tempo[0]) * 60;
    return parseInt(tempo[1]) + minutes;
}

function defValorTemporizador(kpress){
    pergunta = localStorage.getItem("pergunta");
    resposta = localStorage.getItem("resposta");
    replica = localStorage.getItem("replica");
    treplica = localStorage.getItem("treplica");

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
        case "KeyP":
            //Pergunta
            pause = true;
            temporizador.classList.remove('tempo','aviso');
            if (pergunta === null || pergunta == "00:00"){
                pergunta = "02:00";
            }
            temporizador.innerHTML = pergunta;
            break;
        case "KeyR":
            //Resposta
            pause = true;
            temporizador.classList.remove('tempo','aviso');
            if (resposta === null || resposta == "00:00"){
                resposta = "04:00";
            }
            temporizador.innerHTML = resposta;
            break;
        case "KeyO":
            //Replica
            pause = true;
            temporizador.classList.remove('tempo','aviso');
            if (replica === null || replica == "00:00"){
                replica = "01:00";
            }
            temporizador.innerHTML = replica;
            break;
        case "KeyT":
            //Treplica
            pause = true;
            temporizador.classList.remove('tempo','aviso');
            if (treplica === null || treplica == "00:00"){
                treplica = "03:00";
            }
            temporizador.innerHTML = treplica;
            break;
        case "KeyZ":
            //zerar
            temporizador.classList.remove('tempo','aviso');
            temporizador.innerHTML = "00:00";
            pause = true;
            break;  
        case "KeyM":
            //+10s
            if(tempo < 3530){
                tempo += 10;
                iniciarTemporizador(tempo,temporizador)
            } 
            break;

    }
}

//getkeypress (confs)
window.onstorage = () => {
    let key = localStorage.getItem("keypressing");
    if( key == "Enter" || key == "Space" || key == "KeyP" || key == "KeyR" || key == "KeyO" || key == "KeyT"|| key == "KeyM" || key == "KeyZ"){
        defValorTemporizador(key);
    }
};

//getkeypress (timer)
document.addEventListener('keypress',function(p){
    let kpress = p.code;
    defValorTemporizador(kpress);
});