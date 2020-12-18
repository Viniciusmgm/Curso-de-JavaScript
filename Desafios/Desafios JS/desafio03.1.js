var numI = 35.5
var numR = '' 
var numIq = String(numI)
var numQ = numIq.split("")
numIq.split("")
if(numQ[0] != '.' && numQ[1] != '.' && numQ[2] != '.' && numQ[3] != '.'){
    if(numIq.length == 4){
        let alg0 = numIq[0]
        let alg1 = numIq[1]
        let alg2 = numIq[2]
        let alg3 = numIq[3]
        if(alg0 <= 3){
            for(let pos = 0 ; pos < alg0 ; pos++){
                numR += 'M'
            }
        }else{
            console.log('Coloque um número abaixo de 4000')
        }
        if(alg1 < 5){
            if(alg1 < 4){
                for(let pos = 0 ; pos < alg1 ; pos++){
                    numR += 'C'
                }
            }
            else{
                numR += 'CD'
            }
        }else if(alg1 < 9){
            alg1 -= 5
            numR += 'D'
            for(let pos = 0 ; pos < alg1 ; pos++){
                numR += 'C'
            }
        }else{
            numR += 'CM'
        }
        if(alg2 < 5){
            if(alg2 < 4){
                for(let pos = 0 ; pos < alg2 ; pos++){
                    numR += 'X'
                }
            }
            else{
                numR += 'XL'
            }
        }else if(alg2 < 9){
            alg2 -= 5
            numR += 'L'
            for(let pos = 0 ; pos < alg2 ; pos++){
                numR += 'X' 
            }
        }else{
            numR += 'XC'
        }
        if(alg3 < 5){
            if(alg3 < 4){
                for(let pos = 0 ; pos < alg3 ; pos++){
                    numR += 'I'
                }
            }
            else{
                numR += 'IV'
            }
        }else if(alg3 < 9){
            alg3 -= 5
            numR += 'V'
            for(let pos = 0 ; pos < alg3 ; pos++){
                numR += 'I'
            }
        }else{
            numR += 'IX'
        }
    }else if(numIq.length == 3){
        let alg0 = numIq[0]
        let alg1 = numIq[1]
        let alg2 = numIq[2]
        if(alg0 < 5){
            if(alg0 < 4){
                for(let pos = 0 ; pos < alg0 ; pos++){
                    numR += 'C'
                }
            }
            else{
                numR += 'CD'
            }
        }else if(alg0 < 9){
            alg0 -= 5
            numR += 'D'
            for(let pos = 0 ; pos < alg0 ; pos++){
                numR += 'C' 
            }
        }else{
            numR += 'CM'
        }
        if(alg1 < 5){
            if(alg1 < 4){
                for(let pos = 0 ; pos < alg1 ; pos++){
                    numR += 'X'
                }
            }
            else{
                numR += 'XL'
            }
        }else if(alg1 < 9){
            alg1 -= 5
            numR += 'L'
            for(let pos = 0 ; pos < alg1 ; pos++){
                numR += 'X'
            }
        }else{
            numR += 'XC'
        }
        if(alg2 < 5){
            if(alg2 < 4){
                for(let pos = 0 ; pos < alg2 ; pos++){
                    numR += 'I'
                }
            }
            else{
                numR += 'IV'
            }
        }else if(alg2 < 9){
            alg2 -= 5
            numR += 'V'
            for(let pos = 0 ; pos < alg2 ; pos++){
                numR += 'I'
            }
        }else{
            numR += 'IX'
        }
    }else if(numIq.length == 2){
        let alg0 = numIq[0]
        let alg1 = numIq[1]
        if(alg0 < 5){
            if(alg0 < 4){
                for(let pos = 0 ; pos < alg0 ; pos++){
                    numR += 'X'
                }
            }
            else{
                numR += 'XL'
            }
        }else if(alg0 < 9){
            alg0 -= 5
            numR += 'L'
            for(let pos = 0 ; pos < alg0 ; pos++){
                numR += 'X'
            }
        }else{
            numR += 'XC'
        }
        if(alg1 < 5){
            if(alg1 < 4){
                for(let pos = 0 ; pos < alg1 ; pos++){
                    numR += 'I'
                }
            }
            else{
                numR += 'IV'
            }
        }else if(alg1 < 9){
            alg1 -= 5
            numR += 'V'
            for(let pos = 0 ; pos < alg1 ; pos++){
                numR += 'I'
            }
        }else{
            numR += 'IX'
        }
    }else if(numIq.length == 1){
        let alg0 = numIq[0]
        if(alg0 < 5){
            if(alg0 < 4){
                for(let pos = 0 ; pos < alg0 ; pos++){
                    numR += 'I'
                }
            }
            else{
                numR += 'IV'
            }
        }else if(alg0 < 9){
            alg0 -= 5
            numR += 'V'
            for(let pos = 0 ; pos < alg0 ; pos++){
                numR += 'I'
            }
        }else{
            numR += 'IX'
        }
    }
    console.log(`O número convertido é: ${numR}`)
}else{
        console.log('Coloque números inteiros')
}
