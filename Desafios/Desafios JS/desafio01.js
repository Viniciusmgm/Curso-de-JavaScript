var entr = 'SRRSPSRPPRSSSR' 
entr.toUpperCase()    
var j1 = 0
var j2 = 0
entr.split("")
if(entr.length % 2 == 0){
    let placarj1 = 0
    let placarj2 = 0
    for(let nEntr = entr.length-1 ; nEntr >= 0 ; nEntr = nEntr-2){
        j1 = entr[nEntr]
        j2 = entr[nEntr-1]
        let partida = verificar(j1, j2)
        switch(partida){
            case 'j1':  placarj1 += 1
                break
            case 'j2':  placarj2 += 1
                break
        }
    }   
    if(placarj1 == placarj2){
        console.log(`Os jogadores empataram, o placar foi ${placarj1} a ${placarj2}`)
    }else if(placarj1 > placarj2){
        console.log(`O jogador 1 ganhou, o placar foi ${placarj1} a ${placarj2}`)
    }else{
        console.log(`O jogador 2 ganhou, o placar foi ${placarj1} a ${placarj2}`)
    }
}else{
    console.log('Verifique se os dados estão corretos')
}
function verificar(j1, j2){
    if(j1 == 'P' && j1 == 'P' || j1 == 'S' && j2 == 'S' || j1 == 'R' && j2 == 'R'){
        return 'empate'
    }else if(j1 == 'P' && j1 == 'R' || j1 == 'S' && j2 == 'P' || j1 == 'R' && j2 == 'S'){
        return 'j1'
    }else{
        return 'j2'
    }
}
