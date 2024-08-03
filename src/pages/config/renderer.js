if (localStorage.getItem("pergunta") !== null){
    inserirValores();
}

function getTemp(){
    const bntSubmit = document.getElementById('send');
    bntSubmit.blur();
    const formData = new FormData(document.querySelector('form'));
    
    localStorage.setItem("pergunta", formData.get("defPergunta"));
    localStorage.setItem("resposta", formData.get("defResposta"));
    localStorage.setItem("replica", formData.get("defReplica"));
    localStorage.setItem("treplica", formData.get("defTreplica"));

}

function inserirValores(){ 
    const conteudo = document.querySelector('form');
    
    conteudo[0].value = localStorage.getItem("pergunta");
    conteudo[1].value = localStorage.getItem("resposta");
    conteudo[2].value = localStorage.getItem("replica");
    conteudo[3].value = localStorage.getItem("treplica");  
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
        case "KeyP":
            localStorage.setItem('keypressing', 'KeyP');
            break;
        case "KeyR":
            localStorage.setItem('keypressing', 'KeyR');
            break;
        case "KeyO":
            localStorage.setItem('keypressing', 'KeyO');
            break;    
        case "KeyT":
            localStorage.setItem('keypressing', 'KeyT');
            break;
        case "KeyZ":
            localStorage.setItem('keypressing', 'KeyZ');
            break; 
        case "KeyM":
            localStorage.setItem('keypressing', 'KeyM');
            set_seconds = true;
            break;    
    }
    if(set_seconds){
        localStorage.setItem('keypressing', '');
    }
});