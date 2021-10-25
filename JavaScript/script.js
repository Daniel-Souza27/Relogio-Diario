function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `<h3> Agora são ${hora} horas.</h3>`

    if (hora >= 0 && hora < 12) {
        img.src = 'Images/manha.png'
        document.body.style.background = '#B3D2E0'
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'Images/tarde.png'
        document.body.style.background = '#D85802'
    } else{
        img.src = 'Images/noite.png' 
        // document.body.style.background = '#515154'
        document.body.style.background = '#103235'
    }

}
