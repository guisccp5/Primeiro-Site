function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12)  {
        //BOM DIA.
        img.src = 'fotomanha.png'
        document.body.style.background = '#a4dafc'
    }
    else if (hora <= 18 ) {
        //BOA TARDE.
        img.src = 'fototarde.png'
        document.body.style.background = '#843207'
    }
    else{
        //BOA NOITE.
        img.src = 'fotonoite.png'
        document.body.style.background = '#42324d'
    }
}