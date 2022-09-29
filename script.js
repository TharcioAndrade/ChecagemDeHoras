function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // para chamar a variavel usei ${} para ela se diferenciar nas aspas mas precisas ser essas aspas ``
    msg.innerHTML = `agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#7dd3e2'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#fd8100'
    } else{
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#041a31'
    }
}
