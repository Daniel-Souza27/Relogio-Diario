function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
     var hora = data.getHours()
   
    
    msg.innerHTML = `<h3> Agora são ${hora} horas.</h3>`

    if (hora >= 6 && hora < 12) {
        img.src = 'Images/manha.png'
        document.body.style.background = '#B3D2E0'
    }else if (hora >= 12 && hora <= 16) {
        img.src = ''
        document.body.style.background = ''
    }else if () {
        img.src = ''
        document.body.style.background = ''
    } else{
        img.src = '' 
        document.body.style.background = ''
    }

}
