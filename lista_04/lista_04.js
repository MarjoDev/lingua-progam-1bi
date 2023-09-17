function exe_01(){
    let vetor = []
    for(let i=0;i<6;i++){
        vetor.push(Number(prompt(`Informe o ${i+1}° número`)))
    }
    let pares = []
    let quantpares = 0 
    let impares = []
    let quantimpares = 0
    for(let i=0;i<6;i++){
       if(vetor[i] % 2 == 0){
            pares [i] = vetor [i]
            quantpares++
       }
       else{
            impares [i] = vetor [i]
            quantimpares++
       }
    }
    alert(`Os números pares são:`)
    for(let i=0;i<6;i++){
        if (pares[i] != null){
            alert(`${pares[i]}`)
        }
    }
    alert(`A quantidade de pares é de ${quantpares}`)
    alert(`Os números impares são:`)
    for(let i=0;i<6;i++){
        if (impares[i] != null){
            alert(`${impares[i]}`)
        }
    }
    alert(`A quantidade de impares é de ${quantimpares}`)
}
function exe_02(){
    let vetor = []
    for(let i=0;i<7;i++){
        vetor.push(Number(prompt(`Informe o ${i+1}° número`)))
    }
    let multidois = []
    let multitres  = []
    let multiambos  = []
    for(let i=0;i<7;i++){
       if(vetor[i] % 2 == 0){
            multidois [i] = vetor [i]
       }
       if(vetor[i] % 3 == 0){
        multitres [i] = vetor [i]
       }
       if(vetor[i] % 2 == 0 && vetor[i] % 3 == 0){
        multiambos [i] = vetor [i]
       }
    }    
    alert(`Os números divísiveis por dois são:`)
    for(let i=0;i<7;i++){
        if (multidois[i] != null){
            alert(`${multidois[i]}`)
        }
    }
    alert(`Os números divísiveis por tres são:`)
    for(let i=0;i<7;i++){
        if (multitres[i] != null){
            alert(`${multitres[i]}`)
        }
    }
    alert(`Os números divísiveis por dois e tres são:`)
    for(let i=0;i<7;i++){
        if (multiambos[i] != null){
            alert(`${multiambos[i]}`)
        }
    }
}