function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let tex = document.getElementById('text');

    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();
    
    msg.innerHTML = `Agora são ${hora} horas ${min} minutos ${seg} segundos.`
    if(hora < 12 && hora >= 6){
        //Bom dia
        img.src = './img/manha4.png'
        document.body.style.backgroundColor= '#edd1b3'
        tex.innerHTML =' Você está no turno da Manhã.'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = './img/tarde4.png'
        document.body.style.backgroundColor= '#ed9e57'
        tex.innerHTML =' Você está no turno da Tarde.'
    } else if(hora > 24 && hora >= 18){
        //Boa noite
        img.src = './img/noite4.png'
        document.body.style.backgroundColor= '#5188b5'
        tex.innerHTML =' Você está no turno da Noite.'
    } else if(hora < 6 && hora >= 0 ){
        // Boa madrugada
        img.src = './img/m.png'
        document.body.style.backgroundColor= '#1b1f28'
        tex.innerHTML =' Você está no turno da Madrugada'
    } 
}

