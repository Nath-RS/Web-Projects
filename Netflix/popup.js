var video1 = document.querySelector("#video1");


function operacaopopup(elemento, condicao){
    
    if(condicao === true){
    document.getElementById(elemento).style.display = 'block';
    }
    else{
    document.getElementById(elemento).style.display = 'none';
    }
}


function operacaovideo(){

    if(video1.paused){
        video1.play()   
    }
    else{
        video1.pause();
    }
}

function controle(condicao){
}