function lerMatriz(matriz){
    for(let i=0;i<3;i++){
        matriz[i] = []
        alert(`Informe os elementos da linha ${i+1}`)
        for(let j=0;j<5;j++){
            matriz[i][j] = parseInt((Math.random()*20)+1)
        }   
    }
}
function mostraMatriz(matriz){
    console.log(matriz)
}
function contaMatriz(matriz){
    let cont = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            if(matriz[i][j] > 15 && matriz[i][j] < 20){
                cont = cont + 1
            }
        }   
    }
    console.log(`A quantidade de números entre 15 e 20 é ${cont}`)
}
let principal = () => {
    let matriz = []
    lerMatriz(matriz)
    mostraMatriz(matriz)
    contaMatriz(matriz)
}