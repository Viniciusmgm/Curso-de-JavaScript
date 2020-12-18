function carregar(){
    var img = window.document.getElementById('img')
    var msg = window.document.getElementById('msg')
    var hr = new Date()
    var hora = hr.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas</strong>`
    if(hora > 6 && hora < 12){
        window.document.body.style.backgroundColor = 'orange'
        msg.style.color = 'orange'  
        img.src = "fotomanha.png"
    }else if(hora >= 12 && hora < 18){
        window.document.body.style.backgroundColor = 'red'
        msg.style.color = 'red'
        img.src = "fototarde.png"
    }else{
        window.document.body.style.backgroundColor = 'darkblue'
        msg.style.color = 'darkblue'
        img.src = "fotonoite.png"
    }
}
