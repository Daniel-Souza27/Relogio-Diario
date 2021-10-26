function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
     var hora = data.getHours()
    
   
    
    msg.innerHTML = `<h3> Agora são ${hora} horas.</h3>`

    if(hora >= 6 && hora < 12) {
        img.src = 'Images/manha.png'
        document.body.style.background = '#B3D2E0'
    }else if(hora >=12 && hora < 15){
        img.src = 'Images/ensolarado.png'
        document.body.style.background = '#EAEC00'
    }else if(hora >= 15 && hora <= 16) {
        img.src = 'Images/iniciotarde2.png'
        document.body.style.background = '#F4B676'
    }else if(hora >= 17 && hora < 19 ){
        img.src = 'Images/tarde.png' 
        document.body.style.background = '#D85802'
    }else if(hora >= 19 ){
        img.src = 'Images/noite.png' 
        document.body.style.background = '#103235'
    }else{
        img.src = 'Images/noite1.png'
        document.body.style.background = '#13262F'
    }

}
