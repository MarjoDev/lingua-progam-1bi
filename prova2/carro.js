function cadastraCarro(vetor, matriz) {
    for (let i = 0; i < 4; i++) {
        let objeto = {
            marca: prompt("Informe a marca do carro").toUpperCase(),
            modelo: prompt("Informe o modelo do carro").toUpperCase(),
            ano: parseInt(prompt("Informe o ano do carro")),
            valor: parseFloat(prompt("Informe o valor do carro"))
        }
        vetor.push(objeto)
    }
    for (let i = 0; i < 4; i++) {
        matriz[i] = []
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Number(prompt(`Informe as 5 avaliações do carro ${vetor[i].marca}`))
        }
    }
}
function calculaMedia(matriz, vetor) {
    let soma = 0
    let cont = 0
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            soma = soma + matriz[i][j]
            cont++
        }
        console.log(`A média das notas da marca ${vetor[i].marca} e modelo ${vetor[i].modelo} é ${soma / cont}`)
    }
}
function menorNota(matriz, vetor) {
    let menor = matriz[0][0]
    let posicao = 0
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++){
            if (matriz[j][i] < menor) {
                menor = matriz[j][i]
                posicao = i
            }
        } 
        console.log(`A menor nota da ${i+1}°Avaliação é ${menor} e a marca do carro é ${vetor[posicao].marca}`)
        posicao = 0
        menor = matriz[0][0]
    }
}
function menorMedia(matriz) {
    let media = 0
    let soma = 0
    let cont = 0
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            soma = soma + matriz[i][j]
            cont++
        }
        if(media == 0){
            media = soma / cont
        }
        if (media > soma / cont) {
            media = soma / cont
        }
    }
    console.log(`A menor média é ${media}`)
}
function menu() {
    let vetor = []
    let matriz = []
    let opcao
    do {
        opcao = parseInt(prompt(`Escolha uma opção: \n1. Cadastrar Carro \n2. Calcula media \n3. Menor nota \n4. Menor media \n5. Sair`))
        switch (opcao) {
            case 1: cadastraCarro(vetor, matriz)
                break
            case 2: calculaMedia(matriz, vetor)
                break
            case 3: menorNota(matriz, vetor)
                break
            case 4: menorMedia(matriz)
                break
            case 5: console.log(`Programa encerrado`)
                break
            default: console.log(`Opção inválida`)
        }
    }
    while (opcao != 5)
}
