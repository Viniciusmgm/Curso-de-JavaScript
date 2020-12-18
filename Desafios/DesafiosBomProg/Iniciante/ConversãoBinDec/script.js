var txtn = window.document.getElementById('txtn')
var msg = window.document.getElementById('msg')
function converter(){
    var nBin = String(txtn.value)
    var nDec = Number.parseInt(nBin,2)
    let nBinQ = nBin.split("")
    if(nBin == ''){
        alert('Por favor, digite um número')
        msg.innerHTML = ''
    }else{
        labelF: for(let pos in nBinQ){
            if(nBinQ[pos] == '.'){
                msg.innerHTML = ''
                alert('Por favor, coloque números inteiros')
                break labelF
            }else{
                msg.innerHTML = `O resultado da conversão é: ${nDec}`
            }
        }
    }
}