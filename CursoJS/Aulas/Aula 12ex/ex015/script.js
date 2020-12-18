function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var fAno = Number(fano.value)
    var res = window.document.getElementById('res')
    if(fAno == 0 || fAno > ano || fAno < 1898){
        window.alert('Verifique se os dados colocados estão corretos e tente novamente')
    }else{
        var mas = window.document.getElementById('mas')
        var idade = ano - fAno
        var gen = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if(mas.checked){
            gen = 'homem'
            if(idade < 12){
                img.setAttribute('src','fotomenino.png')
                res.innerHTML = `Você é um ${gen} de ${idade} anos`
                //Criança
            }else if(idade < 18){
                img.setAttribute('src','fotoadosh.png')
                res.innerHTML = `Você é um ${gen} de ${idade} anos`
                //Adolescente
            }else if(idade < 60){
                img.setAttribute('src','fotohomem.png')
                res.innerHTML = `Você é um ${gen} de ${idade} anos`
                //Adulto
            }else{
                img.setAttribute('src','fotoidoso.png')
                res.innerHTML = `Você é um ${gen} de ${idade} anos`
                //Idoso
            }
        }else{
            gen = 'mulher'
            if(idade < 12){
                img.setAttribute('src','fotomenina.png')
                res.innerHTML = `Você é um ${gen} de ${idade} anos`
                //Criança
            }else if(idade < 18){
                img.setAttribute('src','fotoadosm.png')
                res.innerHTML = `Você é um ${gen} de ${idade} anos`
                //Adolescente
            }else if(idade < 60){
                img.setAttribute('src','fotomulher.png')
                res.innerHTML = `Você é um ${gen} de ${idade} anos`
                //Adulto
            }else{
                img.setAttribute('src','fotoidosa.png')
                res.innerHTML = `Você é um ${gen} de ${idade} anos`
                //Idoso
            }
        }
        res.appendChild(img)
    }
}