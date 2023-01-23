function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 6 && hora < 12) {
        //BOM DIA!
        img.src = 'dia.png'
        document.body.style.background = '#eacaa8'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        
        img.src = 'tarde.png'
        document.body.style.background = '#f3a752'
    } else if (hora >= 19 && hora <= 24){
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#337f91'
    } else {
        img.src = 'madrugada.png'
        document.body.style.background = '#262338'
    }
}