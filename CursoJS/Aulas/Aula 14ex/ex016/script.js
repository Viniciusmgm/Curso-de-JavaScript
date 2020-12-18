var btn = window.document.getElementById('btnVerificar')
btn.addEventListener('click', verificar)
function verificar(){
    var txtinicio = window.document.getElementById('txtinicio')
    var txtfinal = window.document.getElementById('txtfinal')
    var txtpasso = window.document.getElementById('txtpasso')
    var msg = window.document.getElementById('msg')
    var inicio = Number(txtinicio.value)
    var final = Number(txtfinal.value)
    var passo = Number(txtpasso.value)
    if(txtinicio.value.length == 0 || txtfinal.value.length == 0 || txtpasso.value.length == 0){
        msg.innerHTML = 'Impossivel Contar'
        alert('Verifique se campos os estão preenchidos corretamente')
    }else{
        msg.innerHTML = 'Contando: '
        if(passo == 0){
            alert('Passo será considerado como 1')
            passo = 1
            }
        if(inicio <= final){
            //Contagem crescente
            for(var c = inicio; c <= final ; c += passo){
                msg.innerHTML += `${c} \u{27A1} `
                }
        }else if(inicio > final){
            //Contagem regressiva
            for(var c = inicio; c >= final ; c = c - passo){
                msg.innerHTML += `${c} \u{27A1} `
            }
        }
        msg.innerHTML += '\u{1F3C1}'
    }
    
}