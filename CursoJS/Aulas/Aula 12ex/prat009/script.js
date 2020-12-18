function load(){
    //Pegando os dados do sistema e declarando variaveis
    var dados = new Date()
    var min = dados.getMinutes()
    var hora = dados.getHours()
    var dia = dados.getDay()
    var mes = dados.getMonth()
    var ano = dados.getFullYear()
    var res = window.document.getElementById('res')
    var feriado = window.document.getElementById('feriado')
    

    //Definindo os meses
    var mesEsc = 0
    switch(mes){
        case 0: mesEsc = 'janeiro'
        break
        case 1: mesEsc = 'fevereiro'
        break
        case 2: mesEsc = 'março'
        break
        case 3: mesEsc = 'abril'
        break
        case 4: mesEsc = 'maio'
        break
        case 5: mesEsc = 'junho'
        break
        case 6: mesEsc = 'julho'
        break
        case 7: mesEsc = 'agosto'
        break
        case 8: mesEsc = 'setembro'
        break
        case 9: mesEsc = 'outubro'
        break
        case 10: mesEsc = 'novembro'
        break
        default: mesEsc = 'dezembro'
        break
    }

    //Hora do dia e Feriados
    var img = window.document.getElementById('img')
    if(hora > 6 && hora < 12){
    window.document.body.style.backgroundColor = 'orange'
    res.style.color = 'orange'
    img.src = "fotomanha.png"
    feriado.style.color = 'orange'
        if(mes == 0 && dia == 1){
            feriado.innerHTML = 'Feliz Ano Novo!!!'
            img.src = "fotoano.png"
        }else if(mes == 1 && 21 <= dia <= 26){
            feriado.innerHTML = 'É Carnaval, partiu folia!!!'
            img.src = "fotocarna.png"
        }else if(mes == 3 && dia == 10){
            feriado.innerHTML = 'Relaxe nessa Sexta-Feira Santa'
            img.src = "fotosexsan.png"
        }else if(mes == 3 && dia == 12){
            feriado.innerHTML = 'Feliz Páscoa!!!, hora de comer chocolate'
            img.src = "fotopascoa.png"
        }else if(mes == 3 && dia == 21){
            feriado.innerHTML = 'Aproveite Tiradentes'
            img.src = "fototirad.png"
        }else if(mes == 4 && dia == 1){
            feriado.innerHTML = 'Feliz Dia do Trabalhador'
            img.src = "fotodiadotrab.png"
        }else if(mes == 4 && dia == 10){
            feriado.innerHTML = 'Feliz Dia das Mães, abrace sua mamãe'
            img.src = "fotodiadasmaes.png"
        }else if(mes == 5 && dia == 11){
            feriado.innerHTML = 'Hoje é Corpus Christi '
            img.src = "fotocorpus.png"
        }else if(mes == 5 && dia == 12){
            feriado.innerHTML = 'Feliz Dia dos Namorados, dê um presente ao amor'
            img.src = "fotodiadosnamo.png"
        }else if(mes == 7 && dia == 9){
            feriado.innerHTML = 'Feliz Dia dos Pais, abrace seu pai'
            img.src = "fotodiadospais.png"
        }else if(mes == 8 && dia == 7){
            feriado.innerHTML = 'Feliz Dia da Independência'
            img.src = "fotoindep.png"
        }else if(mes == 9 && dia == 12){
            feriado.innerHTML = 'Hoje é  Dia de Nossa Senhora de Aparecida'
            img.src = "fotonossasenho.png"
        }else if(mes == 10 && dia == 2){
            feriado.innerHTML = 'Hoje é Finados'
            img.src = "fotofinados.png"
        }else if(mes == 10 && dia == 15){
            feriado.innerHTML = 'Feliz Dia da Proclamação da Republica'
            img.src = "fotoproc.png"
        }else if(mes == 10 && dia == 20){
            feriado.innerHTML = 'Hoje é Dia da Consciência Negra'
            img.src = "fotonegr.png"
        }else if(mes == 11 && dia == 24){
            feriado.innerHTML = 'Feliz Véspera de Natal'
            img.src = "fotovnatal.png"
        }else if(mes == 11 && dia == 25){
            feriado.innerHTML = 'Feliz Natal!!!!, abrace sua família'
            img.src = "fotonatal.png"
        }else if(mes == 11 && dia == 31){
            feriado.innerHTML = 'É Véspera de Ano Novo!!!!!!!'
            img.src = "fotovano.png"
        }

    }else if(hora < 18){
    window.document.body.style.backgroundColor = 'red'
    res.style.color = 'red'
    img.src = "fototarde.png"
    feriado.style.color = 'red'
        if(mes == 0 && dia == 1){
            feriado.innerHTML = 'Feliz Ano Novo!!!'
            img.src = "fotoano.png"
        }else if(mes == 1 && 21 <= dia <= 26){
            feriado.innerHTML = 'É Carnaval, partiu folia!!!'
            img.src = "fotocarna.png"
        }else if(mes == 3 && dia == 10){
            feriado.innerHTML = 'Relaxe nessa Sexta-Feira Santa'
            img.src = "fotosexsan.png"
        }else if(mes == 3 && dia == 12){
            feriado.innerHTML = 'Feliz Páscoa!!!, hora de comer chocolate'
            img.src = "fotopascoa.png"
        }else if(mes == 3 && dia == 21){
            feriado.innerHTML = 'Aproveite Tiradentes'
            img.src = "fototirad.png"
        }else if(mes == 4 && dia == 1){
            feriado.innerHTML = 'Feliz Dia do Trabalhador'
            img.src = "fotodiadotrab.png"
        }else if(mes == 4 && dia == 10){
            feriado.innerHTML = 'Feliz Dia das Mães, abrace sua mamãe'
            img.src = "fotodiadasmaes.png"
        }else if(mes == 5 && dia == 11){
            feriado.innerHTML = 'Hoje é Corpus Christi '
            img.src = "fotocorpus.png"
        }else if(mes == 5 && dia == 12){
            feriado.innerHTML = 'Feliz Dia dos Namorados, dê um presente ao amor'
            img.src = "fotodiadosnamo.png"
        }else if(mes == 7 && dia == 9){
            feriado.innerHTML = 'Feliz Dia dos Pais, abrace seu pai'
            img.src = "fotodiadospais.png"
        }else if(mes == 8 && dia == 7){
            feriado.innerHTML = 'Feliz Dia da Independência'
            img.src = "fotoindep.png"
        }else if(mes == 9 && dia == 12){
            feriado.innerHTML = 'Hoje é  Dia de Nossa Senhora de Aparecida'
            img.src = "fotonossasenho.png"
        }else if(mes == 10 && dia == 2){
            feriado.innerHTML = 'Hoje é Finados'
            img.src = "fotofinados.png"
        }else if(mes == 10 && dia == 15){
            feriado.innerHTML = 'Feliz Dia da Proclamação da Republica'
            img.src = "fotoproc.png"
        }else if(mes == 10 && dia == 20){
            feriado.innerHTML = 'Hoje é Dia da Consciência Negra'
            img.src = "fotonegr.png"
        }else if(mes == 11 && dia == 24){
            feriado.innerHTML = 'Feliz Véspera de Natal'
            img.src = "fotovnatal.png"
        }else if(mes == 11 && dia == 25){
            feriado.innerHTML = 'Feliz Natal!!!!, abrace sua família'
            img.src = "fotonatal.png"
        }else if(mes == 11 && dia == 31){
            feriado.innerHTML = 'É Véspera de Ano Novo!!!!!!!'
            img.src = "fotovano.png"
        }

    }else{
    window.document.body.style.backgroundColor = 'darkblue'
    res.style.color = 'darkblue'
    img.src = "fotonoite.png"
    feriado.style.color = 'darkblue'
        if(mes == 0 && dia == 1){
            feriado.innerHTML = 'Feliz Ano Novo!!!'
            img.src = "fotoano.png"
        }else if(mes == 1 && 21 <= dia <= 26){
            feriado.innerHTML = 'É Carnaval, partiu folia!!!'
            img.src = "fotocarna.png"
        }else if(mes == 3 && dia == 10){
            feriado.innerHTML = 'Relaxe nessa Sexta-Feira Santa'
            img.src = "fotosexsan.png"
        }else if(mes == 3 && dia == 12){
            feriado.innerHTML = 'Feliz Páscoa!!!, hora de comer chocolate'
            img.src = "fotopascoa.png"
        }else if(mes == 3 && dia == 21){
            feriado.innerHTML = 'Aproveite Tiradentes'
            img.src = "fototirad.png"
        }else if(mes == 4 && dia == 1){
            feriado.innerHTML = 'Feliz Dia do Trabalhador'
            img.src = "fotodiadotrab.png"
        }else if(mes == 4 && dia == 10){
            feriado.innerHTML = 'Feliz Dia das Mães, abrace sua mamãe'
            img.src = "fotodiadasmaes.png"
        }else if(mes == 5 && dia == 11){
            feriado.innerHTML = 'Hoje é Corpus Christi '
            img.src = "fotocorpus.png"
        }else if(mes == 5 && dia == 12){
            feriado.innerHTML = 'Feliz Dia dos Namorados, dê um presente ao amor'
            img.src = "fotodiadosnamo.png"
        }else if(mes == 7 && dia == 9){
            feriado.innerHTML = 'Feliz Dia dos Pais, abrace seu pai'
            img.src = "fotodiadospais.png"
        }else if(mes == 8 && dia == 7){
            feriado.innerHTML = 'Feliz Dia da Independência'
            img.src = "fotoindep.png"
        }else if(mes == 9 && dia == 12){
            feriado.innerHTML = 'Hoje é  Dia de Nossa Senhora de Aparecida'
            img.src = "fotonossasenho.png"
        }else if(mes == 10 && dia == 2){
            feriado.innerHTML = 'Hoje é Finados'
            img.src = "fotofinados.png"
        }else if(mes == 10 && dia == 15){
            feriado.innerHTML = 'Feliz Dia da Proclamação da Republica'
            img.src = "fotoproc.png"
        }else if(mes == 10 && dia == 20){
            feriado.innerHTML = 'Hoje é Dia da Consciência Negra'
            img.src = "fotonegr.png"
        }else if(mes == 11 && dia == 24){
            feriado.innerHTML = 'Feliz Véspera de Natal'
            img.src = "fotovnatal.png"
        }else if(mes == 11 && dia == 25){
            feriado.innerHTML = 'Feliz Natal!!!!, abrace sua família'
            img.src = "fotonatal.png"
        }else if(mes == 11 && dia == 31){
            feriado.innerHTML = 'É Véspera de Ano Novo!!!!!!!'
            img.src = "fotovano.png"
        }
        
    }
    res.innerHTML = `Agora são ${hora} hrs e ${min} min do dia ${dia} de ${mesEsc} de ${ano}`

}

