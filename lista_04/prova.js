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