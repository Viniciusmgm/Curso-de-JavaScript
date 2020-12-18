var hr = 5
if(hr > 6 && hr <= 12){
    console.log(`Bom dia. Agora são ${hr} horas da manhã`)
}else if(hr > 12 && hr <= 18){
    console.log(`Boa tarde. Agora são ${hr} horas da tarde`)
}else{
    if(hr < 6){
        console.log(`Boa madrugada. Agora são ${hr} horas da madrugada`)
    }else{
        console.log(`Boa noite. Agora são ${hr} horas da noite`)
    }
    
}