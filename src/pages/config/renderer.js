if (localStorage.getItem("timer") !== null){
    inserirValores();
}

function getTemp(){
    const temp = document.getElementById('defTimer').value;
    const info = document.getElementById('menssage');

    var validPattern = /^[0-5][0-9]:[0-5][0-9]$/;
    if (!validPattern.test(temp)) {
        inserirValores();

        //menssage
        info.style.color = "red";
        info.style.textAlign = "center";
        info.innerText = "valor invalido (ex: 59:00)";
        setTimeout(() => {
            info.innerText = ""
        }, 5000);
        
    }else{
        localStorage.setItem("timer", temp);

        //menssage
        info.style.color = "green";
        info.style.textAlign = "center";
        info.innerText = "timer definido"
        setTimeout(() => {
            info.innerText = ""
        }, 5000);
    }  
}

function inserirValores(){ 
    const conteudo = document.querySelector('#defTimer');
    conteudo.value = localStorage.getItem("timer");   
}

//setkeypress (config)
document.addEventListener('keypress', function(p){
    let kpress = p.code;

    switch (kpress){
        case "KeyS":
            localStorage.setItem('keypressing', 'KeyS');
            break;
        case "Space":
            localStorage.setItem('keypressing', 'Space');
            break;
        case "KeyT":
            localStorage.setItem('keypressing', 'KeyT');
            break;
        case "KeyZ":
            localStorage.setItem('keypressing', 'KeyZ');
            break;    
    }
});