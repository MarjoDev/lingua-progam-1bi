function prova(){
    let vetor = []
    // entrada de dados
    for(let i=0;i<3;i++){
        let objeto = {
            nomes: prompt(`Informe o nome do computador ${i+1}`),
            estoque: Number(prompt(`Informe o estoque do computador ${i+1}`)),
            classificacao: prompt(`Informe a classificação do computador ${i+1}`).toUpperCase()
        }
        while (objeto.estoque < 0){
            objeto.estoque = Number(prompt(`Informe um estoque positivo`))
        }
        while (objeto.classificacao != "GAMER" && objeto.classificacao != "NTEBOOK" && objeto.classificacao != "DESKTOP"){
            objeto.classificacao = prompt(`Informe uma classificação valída de computador`).toUpperCase()
        }
        vetor.push(objeto)
    }
    for(let i=0;i<4;i++){
        let objeto2 = {
            nomeCompra: prompt(`Informe o nome do computador que deseja comprar`),
            qtdCompra: Number(prompt(`Informe a quantidade que deseja comprar`)),
            clasCompra: prompt(`Informe a classificação do computador que deseja comprar`).toUpperCase()
        }
        // verifica se o produto existe
        let achou = false
        for(let j=0;j<3;j++){ // para percorrer os vetores dos produtos
            console.log(objeto2.nomeCompra, vetor[j].nomes, objeto2.clasCompra, vetor[j].classificacao)
            if (objeto2.nomeCompra == vetor[j].nomes && objeto2.clasCompra == vetor[j].classificacao){
                achou = true
                // verifica se tem estoque
                if (objeto2.qtdCompra <= vetor[j].estoque){
                    console.log(`Venda realizada com sucesso`)
                    vetor[j].objeto.estoque = vetor[j].estoque - objeto2.qtdCompra
                } 
                else {
                    console.log(`Não tem estoque suficiente`)
                }
            }
        }
        if (!achou){
            console.log(`Produto não existe`)
        }
    }
    let maiorEstoque = 0
    let menorEstoque = Infinity
    let achou = false
    for(let i=1;i<3;i++){
        if (classificacao[i] == "NOTEBOOK"){
            achou = true
            if (maiorEstoque > estoque[i]){
                maiorEstoque = estoque[i]
            }
            if (menorEstoque < estoque[i]){
                menorEstoque = estoque[i]
            }
        }
    }
    if (achou){
        console.log(nomes[estoque.indexOf(menorEstoque)])
        console.log(nomes[estoque.indexOf(maiorEstoque)])
    }
}