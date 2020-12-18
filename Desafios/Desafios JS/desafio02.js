var l1 = ['X','O','O']
var l2 = ['X','X','O']
var l3 = ['O','X','O']
if(verifDiagonal(l1,l2,l3) != 'empate' || verifVertical(l1,l2,l3) != 'empate' || verifHorizontal(l1,l2,l3) != 'empate'){
    if(verifDiagonal(l1,l2,l3) != 'empate'){
        console.log(`O jogador que escolheu ${verifDiagonal(l1,l2,l3)} venceu`)
    }else if(verifVertical(l1,l2,l3) != 'empate'){
        console.log(`O jogador que escolheu ${verifVertical(l1,l2,l3)} venceu`)
    }else{
        console.log(`O jogador que escolheu ${verifHorizontal(l1,l2,l3)} venceu`)
    }
}else{
    console.log('O jogo empatou')
}
function verifVertical(l1,l2,l3){
    for(let pos = 2 ; pos != -1 ; pos--){
        if(l1[pos] == l2[pos] && l1[pos] == l3[pos]){
            return l1[pos]
        }else{
            return 'empate'
        }
    }
}
function verifHorizontal(){
    if(l1[0] == l1[1] && l1[0] == l1[2]){
        return l1[0]
    }else if(l2[0] == l2[1] && l2[0] == l2[2]){
        return l2[0]
    }else if(l3[0] == l3[1] && l3[0] == l3[2]){
        return l3[0]
    }else{
        return 'empate'
    }
}
function verifDiagonal(l1,l2,l3){
    if(l2[1] == 'X'){
        if(l1[0] == l2[1] && l1[0] == l3[2] || l1[2] == l2[1] && l1[2] == l3[0]){
            return l2[1]
        }else{
            return 'empate'
        }
    }else if(l2[1] == 'O'){
        if(l1[0] == l2[1] && l1[0] == l3[2] || l1[2] == l2[1] && l1[2] == l3[0]){
            return l2[1]
        }else{
            return 'empate'
        }
    }
}