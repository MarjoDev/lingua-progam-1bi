function lerMatriz(matriz){
    for(let i=0;i<6;i++){
        matriz[i] = []
        for(let j=0;j<3;j++){
            matriz[i][j] = parseInt((Math.random()*20)+1)
        }   
    }
}
function mostraMatriz(matriz){
    console.log(matriz)
}
function menorMatriz(matriz){
    let menor = 0
    let linha = 0
    let coluna = 0
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if(menor == 0){
                menor = matriz[i][j]
                linha = i
                coluna = j
            }
            if(menor != 0 && menor>matriz[i][j]){
                menor = matriz[i][j]
                linha = i
                coluna = j
            }
        }  
    }
    console.log(`O menor número da matriz é ${menor} da linha ${linha+1} e coluna ${coluna+1}`)
}
function maiorMatriz(matriz){
    let maior = 0
    let linha = 0
    let coluna = 0
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if(maior == 0){
                maior = matriz[i][j]
                linha = i
                coluna = j
            }
            if(maior != 0 && maior<matriz[i][j]){
                maior = matriz[i][j]
                linha = i
                coluna = j
            }
        }  
    }
    console.log(`O maior número da matriz é ${maior} da linha ${linha+1} e coluna ${coluna+1}`)
}
let principal = () => {
    let matriz = []
    lerMatriz(matriz)
    mostraMatriz(matriz)
    menorMatriz(matriz)
    maiorMatriz(matriz)
}
principal()