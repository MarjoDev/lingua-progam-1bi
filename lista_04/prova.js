function prova_01(){
    let modelos = []
    let estoque = []
    let classificacao = []
    let positivo = 0
    
    for(let i=0;i<10;i++){
        modelos[i]=(prompt(`Informe o nome do modelo ${i+1}`))
        while(positivo == 0){
            estoque[i] =(Number(prompt(`Informe a quantidade do modelo ${i+1}`)))
            if(estoque[i] < 0){
                alert(`Entre com um valor positivo!`)
            }
            else{
                positivo = 1
            }
        }
        classificacao[i] = ((prompt(`Informe a classificação do modelo  ${i+1}`)))
        positivo = 0
    
    }
    let compramodelo = ""
    let compraestoque = 0
    let compraclassi = ""
    let verifimodelo = 0
    
    for(let i=0;i<4;i++){
        compramodelo = prompt(`Informe o modelo que deseja comprar`)
        compraestoque = Number(prompt(`Informe a quantidade que deseja comprar`))
        compraclassi = prompt(`Informe a classificação do que deseja comprar`)
        if(classificacao[i] == "notebook"){
            menor = estoque[i]
            maior = estoque[i]
            menormodelo = modelos[i]
            maiormodelo = modelos[i]
        }
        for(let j=0;j<10;j++){
            if(compramodelo == modelos[j] && compraclassi == classificacao[j]){
                j = 10
                verifimodelo = 1
                if(compraestoque > estoque[j] || compraestoque <= 0){
                    alert(`Quantidade insuficiente ou inválida em estoque, compra cancelada!`)
                    j = 10
                }
                else{
                    estoque[j] = estoque[j] - compraestoque
                    alert(`Compra realizada com sucesso!`)
                }
            }
            if(j < 10){
                verifimodelo = 1
            }
            if(verifimodelo != 1){
                alert(`Modelo inserido invalido, compra cancelada!`)
                j = 10
            }
            else{
                verifimodelo = 0
            }
        }
    }
    
    menor = 0
    maior = 0
    menormodelo = ""
    maiormodelo = ""
    
    
    for(let i=0;i<10;i++){
        if(classificacao[i] == "notebook"){        
            if(estoque[i] > maior){
                maior = estoque[i]
                maiormodelo = modelos[i]
            }
            if(estoque[i] < menor){
                menor = estoque[i]
                menormodelo = modelos[i]
            }
        }
    }
   
    alert(`O modelo de notebook com maior quantidade em estoque é ${maiormodelo}`)
    alert(`O modelo de notebook com menor quantidade em estoque é ${menormodelo}`)
}
function prova_01corrigida(){
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
            alert(objeto2.nomeCompra, vetor[j].nomes, objeto2.clasCompra, vetor[j].classificacao)
            if (objeto2.nomeCompra == vetor[j].nomes && objeto2.clasCompra == vetor[j].classificacao){
                achou = true
                // verifica se tem estoque
                if (objeto2.qtdCompra <= vetor[j].estoque){
                    alert(`Venda realizada com sucesso`)
                    vetor[j].objeto.estoque = vetor[j].estoque - objeto2.qtdCompra
                } 
                else {
                    alert(`Não tem estoque suficiente`)
                }
            }
        }
        if (!achou){
            alert(`Produto não existe`)
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
        alert(nomes[estoque.indexOf(menorEstoque)])
        alert(nomes[estoque.indexOf(maiorEstoque)])
    }
}