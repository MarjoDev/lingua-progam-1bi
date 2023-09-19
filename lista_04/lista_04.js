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
function exe_03(){
    let codigos = []
    let estoque = []
    for(let i=0;i<10;i++){
        codigos.push(Number(prompt(`Informe o código do produto ${i+1}`)))
        estoque.push(Number(prompt(`Informe a quantidade em estoque do produto ${i+1}`)))
    }
    let cliente = Number(prompt(`Informe o código do cliente que deseja comprar`))
    do {
        let produto = Number(prompt(`Informe o código do produto que deseja comprar`))
        let qtde = Number(prompt(`Informe a quantidade que deseja comprar`))
        let achou = false 
        for(let i=0;i<10;i++){
            if (codigos[i] == produto){ 
                achou = true 
                if (estoque[i] >= qtde){ 
                    alert(`Venda realizada com sucesso`)
                    estoque[i] = estoque[i] - qtde 
                }
                else {
                    alert(`Não tem estoque suficiente`)
                }
            }
        }
        if (!achou){ 
            alert(`Produto não encontrado`)
        }
        cliente = Number(prompt(`Informe o código do novo cliente ou 0 para encerrar`))
    }
    while(cliente != 0)
    for(let i=0;i<10;i++){
        console.log(`Produto ${codigos[i]} tem ${estoque[i]} unidades em estoque`)
    }
}
function exe_04(){
    let vetor = []
    for(let i=0;i<15;i++){
        vetor.push(Number(prompt(`Informe o ${i+1}° número`)))
    }
    for(let i=0;i<15;i++){
        if (vetor[i] == 30){
            alert(`A posição ${i+1} tem o valor 30`)
        }
    }
}
function exe_05(){
    let logica = []
    let linguagem = []
    let ambos = 0
    for(let i=0;i<10;i++){
        logica.push(Number(prompt(`Informe o código do ${i+1}° aluno para matéria de lógica`)))
        linguagem.push(Number(prompt(`Informe o código do ${i+1}° aluno para matéria de linguagem de programação`)))
    }
    for(let i=0;i<10;i++){
        for(let j=0;j=10;j++){
            if (logica[i] == linguagem[j]){
                ambos++
            }
        }
    }
    alert(`O número de alunos matriculados em ambas matérias é ${ambos}`)
}
function exe_06(){
    let vendas = []
    let percentuais = []
    let nomes = []
    for(let i=0;i<10;i++){
        nomes.push(prompt(`Informe o nome do vendedor ${i+1}`))
        vendas.push(Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)))
        percentuais.push(Number(prompt(`Informe o percentual de comissão do vendedor ${i+1}`)))
    }
    let comissoes = []
    for(let i=0;i<10;i++){
        comissoes.push(vendas[i] * percentuais[i]/100)
        console.log(`${nomes[i]} vai receber ${comissoes[i]}`)
    }
    let total = 0
    for(let i=0;i<10;i++){
        total = total + vendas[i]
    }
    console.log(`Total de vendas ${total}`)
    let maior = comissoes[0]
    let menor = comissoes[0]
    for(let i=1;i<10;i++){
        if (comissoes[i] > maior){
            maior = comissoes[i]
        }
        if (comissoes[i] < menor){
            menor = comissoes[i]
        }
    }
    console.log(`Maior comissão ${maior} do ${nomes[comissoes.indexOf(maior)]}`)
    console.log(`Menor comissão ${menor} do ${nomes[comissoes.indexOf(menor)]}`)
}