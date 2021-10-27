function relogio(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var cp = window.document.getElementById('cumprimento')
    var data = new Date()
    var hr = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    var hora = hr + ":" + min + ":" + sec
    
    msg.innerHTML = `<h3> Agora são exatamente ${hora} horas.</h3>`

    if(hr >= 6 && hr < 12) {
        img.src = 'Images/manha.png'
        document.body.style.background = '#B3D2E0'
        cp.innerHTML = '<h4> Bom Dia! </h4>'

    }else if(hr >=12 && hr < 15){
        img.src = 'Images/ensolarado.png'
        document.body.style.background = '#EAEC00'
        cp.innerHTML = '<h4> Boa Tarde! </h4>'

    }else if(hr >= 15 && hr <= 16) {
        img.src = 'Images/iniciotarde2.png'
        document.body.style.background = '#F4B676'
        cp.innerHTML = '<h4> Boa Tarde! </h4>'

    }else if(hr >= 17 && hr < 19 ){
        img.src = 'Images/tarde.png' 
        document.body.style.background = '#D85802'
        cp.innerHTML = '<h4> Boa Tarde! </h4>'

    }else if(hr >= 19 ){
        img.src = 'Images/noite.png' 
        document.body.style.background = '#103235'
        cp.innerHTML = '<h4> Boa Noite! </h4>'

    }else{
        img.src = 'Images/noite1.png'
        document.body.style.background = '#13262F'
        cp.innerHTML = '<h4> Boa Madrugada! </h4>'
        
    }

    setInterval(relogio,500)
}
