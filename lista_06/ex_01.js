function cadastraBike(vetor){
    let objeto = {
        marca: prompt("Informe a marca da bike"),
        modelo: prompt("Informe o modelo da bike"),
        quadro: parseInt(prompt("Informe o tamanho do quadro da bike")),
        aro: parseInt(prompt("Informe o tamanho do aro da bike")),
        ano: parseInt(prompt("Informe o ano da bike")),
        preco: parseFloat(prompt("Informe o preço da bike"))
    }
    vetor.push(objeto) 
    console.log('Bike inserida com sucesso')
}
// média de preço das bikes
function calculaMediaPreco(vetor){
    let soma = 0
    for(let i=0;i<vetor.lenght;i++){
        soma = soma + vetor[i].preco
    }   
    console.log(`Média de preço das bikes ${soma/vetor.length}`)
}
function calculaBikesAntigas(vetor){
    // bike(s) mais antiga(s)
    let maisAntiga = []
    maisAntiga[0] = vetor[0] // atribui todo o objeto
    for(let i=1;i<vetor.length;i++){
        if (vetor[i].ano < maisAntiga[0].ano){
            maisAntiga = [] //   o vetor
            maisAntiga[0] = vetor[i]
        }
        else if (vetor[i].ano == maisAntiga[0].ano){
            maisAntiga.push(vetor[i]) // mais uma com o mesmo ano
        }
    }
    console.log(`Bike(s) mais antiga(s)`)
    console.log(maisAntiga)
}

function calculaCaloi(vetor){
     //bikes da marca Caloi
     let caloi = []
     for(let i=0;i<vetor.length;i++){
         if (vetor[i].marca == 'CALOI'){
             caloi.push(vetor[i])
         }
     }
     console.log(caloi)
}

function calculaAro29(vetor){
    // qts bikes aro 29
    let aro29 = 0
    for(let i=0;i<vetor.length;i++){
        if (vetor[i].aro == 29){
            aro29++
        }
    }
    console.log(`Quantidade de bikes aro 29 ${aro29}`)
}
function calculaMaiorQuadro(vetor){
    // qual bike possui maior quadro, desconsidere empates
    let maiorQuadro = vetor[0]
    for(let i=1;i<vetor.length;i++){
        if (vetor[i].quadro > maiorQuadro.quadro){
            maiorQuadro = vetor[i]
        }
    }
    console.log(maiorQuadro)
}

function bike(){
    let vetor = []
    let opcao 
    do{
        opcao = parseInt(console.log(`Escolha uma opção: 1-Cadastrar Bike 2-Média de preço 3-Bikes Antigas 4-Bikes Caloi 5-Bikes Aro 29 6-Bikes Maior Quadro 7-Sair do programa`))
        switch (opcao) {
            case 1:
                cadastraBike(vetor)
            break;
            case 2:
                calculaMediaPreco(vetor)
            break;
            case 3:
                calculaBikesAntigas(vetor)
            break;
            case 4:
                calculaCaloi(vetor)
            break;
            case 5:
                calculaAro29(vetor)
            break;
            case 6:
                calculaMaiorQuadro(vetor)
            break;
            case 7:
                console.log(`Programa encerrado`)
            break;
            default:
                console.log(`Insira um valor válido`)
        }
    }while(opcao != 6)
}