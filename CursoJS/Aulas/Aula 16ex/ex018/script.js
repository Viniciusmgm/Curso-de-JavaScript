var txtn = window.document.getElementById('txtn')
var sel = window.document.getElementById('sel')
var p = window.document.getElementsByTagName('p')
var numS = []
function adicionar(){
    var n = Number(txtn.value)
    p[1].innerHTML = ''
    p[2].innerHTML = ''
    p[3].innerHTML = ''
    p[4].innerHTML = ''
    p[5].innerHTML = ''
    txtn.value = ''
    if(n > 100 || n < 1){
        alert('Por favor coloque um número de 1 a 100')
    }else{
        verif = verificaNum(numS, n)
        if(verif == false){
            alert(`O número ${n} já foi adicionado. Mude o número por favor`)
        }else{
            numS.push(n)
            let numCaract = numS.length-1
            let opt = window.document.createElement('option')
            opt.text = `O número ${n} foi adicionado`
            opt.value = `v${numCaract}`
            sel.appendChild(opt)
        }
    }
}
function somar(numS){
    let soma = 0
    if(numS.length == 1){
       alert('O número será somado a 0')
       return numS
    }else{
        for(let numC = numS.length-1 ; numC != -1 ; numC--){
            soma = soma + numS[numC]
        }
        return soma
    }
}
function media(numS, s){
    if(numS.length == 1){
        return s / 2
    }else{
        return (s / numS.length)
    }
}
function finalizar(){
    if(numS.length == 0){
        alert('Adicione números antes de finalizar')
    }else{
        let maiorV = numS[0]
        let menorV = numS[0]
        for(let pos in numS){
            let numPos = numS[pos]
            if(numPos > maiorV){
                maiorV = numPos
            }else if(numPos < menorV){
                menorV = numPos
            }
        }
        p[1].innerHTML = `Ao todo temos ${numS.length} números cadastrados`
        p[2].innerHTML = `O maior número informado é: ${maiorV}`
        p[3].innerHTML = `O menor número informado é: ${menorV}`
        var s = somar(numS)
        let m = media(numS, s)
        p[4].innerHTML = `A soma dos números informados é: ${s}`
        p[5].innerHTML = `A média dos números informados é: ${m.toFixed(2)}`
    }
}
function verificaNum(numS, n){
    if(numS.indexOf(n) === -1){
        return true
    }else{
        return false
    }
}

