if (localStorage.getItem("timer") !== null){
    inserirValores();
}

document.getElementById('def-temp').addEventListener('click', function() {
    this.blur();
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
        }, 3000);
        
    }else{
        localStorage.setItem("timer", temp);

        //menssage
        info.style.color = "green";
        info.style.textAlign = "center";
        info.innerText = "timer definido"
        setTimeout(() => {
            info.innerText = ""
        }, 3000);
    } 
});

function inserirValores(){ 
    const conteudo = document.querySelector('#defTimer');
    conteudo.value = localStorage.getItem("timer");   
}

//setkeypress (config)
document.addEventListener('keypress', function(p){
    let kpress = p.code;
    let set_seconds = false;
    switch (kpress){
        case "Enter":
            localStorage.setItem('keypressing', 'Enter');
            break;
        case "NumpadEnter":
            localStorage.setItem('keypressing', 'Enter');
            break;
        case "Space":
            localStorage.setItem('keypressing', 'Space');
            break;
        case "KeyT":
            localStorage.setItem('keypressing', 'KeyT');
            break;
        case "KeyP":
            localStorage.setItem('keypressing', 'KeyP');
            set_seconds = true;
            break;  
        case "KeyZ":
            localStorage.setItem('keypressing', 'KeyZ');
            break;    
    }
    if(set_seconds){
        localStorage.setItem('keypressing', '');
    }
});