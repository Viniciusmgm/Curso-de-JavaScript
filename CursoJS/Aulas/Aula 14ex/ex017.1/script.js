function gerar(){
    var txtn = window.document.getElementById('txtn')
    var num = Number(txtn.value)
    var select = window.document.getElementById('select')
    select.innerHTML = ''
    if(txtn.value.length == 0){
        alert('Preencha corretamente a caixa de texto')
    }else{
        for(var c = 1; c <= 10; c++){
            var res = num * c
            var opt = window.document.createElement('option')
            opt.appendChild(window.document.createTextNode(`${num} X ${c} = ${res}`))
            opt.value = `v${c}`
            select.appendChild(opt)
        }
        
    }
}