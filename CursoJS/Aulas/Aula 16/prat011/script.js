function parimp(n){
    let resp = n % 2 
    if(resp == 0){
        return 'par'
    }else{
        return 'ímpar'
    }
}
var btn = window.document.getElementById('btn')
btn.addEventListener('click', verificar)
var txtn = window.document.getElementById('txtn')
var n = Number(txtn.value)
var res = window.document.getElementById('res')
function verificar(){
    let s = String(txtn.value)
    let numCaract = s.length
    let str = s.split("")
    labelW: while(numCaract != 0){
        strQ = str[numCaract-1]
        if(strQ == ',' || strQ == '.'){
            alert('Por favor, não use vírgulas, pontos ou espaços')
            res.innerHTML = ''
            break labelW
        }else{
            n = Number(txtn.value)
            var result = parimp(n)  
            res.innerHTML = `O número é ${result}`
        }
        
        numCaract--
    }
    
    
}