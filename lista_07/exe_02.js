function lerMatriz(matriz){
    for(let i=0;i<2;i++){
        matriz[i] = []
        for(let j=0;j<4;j++){
            matriz[i][j] = parseInt((Math.random()*20)+1)
        }   
    }
}
function mostraMatriz(matriz){
    console.log(matriz)
}
function contaMatriz(matriz){
    let cont = []
    for(let i=0;i<2;i++){
        cont[i] = 0
        for(let j=0;j<4;j++){
            if(matriz[i][j] > 12 && matriz[i][j] < 20){
                cont[i] ++
            }
        }  
    }
    console.log(`A quantidade de números entre 12 e 20 é ${cont}`)
}
function paresMatriz(matriz){
    let pares = 0
    let paresCont = 0
    for(let i=0;i<2;i++){
        for(let j=0;j<4;j++){
            if(matriz[i][j] % 2 == 0){
                pares = pares + matriz[i][j]
                paresCont++
            }
        }  
    }
    console.log(`A média dos elementos pares é ${pares/paresCont}`)
}
let principal = () => {
    let matriz = []
    lerMatriz(matriz)
    mostraMatriz(matriz)
    contaMatriz(matriz)
    paresMatriz(matriz)
}
principal()