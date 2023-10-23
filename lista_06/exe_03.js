function cadastraPartido(vetor){
    let objeto = {
        codigo: parseInt(prompt(`informe o código do partido`)),
        nome: prompt(`Informe o nome do partido`),
        sigla: prompt(`Informe a sigla do partido`),
        presidente: prompt(`Informe o presidente do partido`),
        qtde: parseInt(prompt(`Informe a quantidade de candidatos`))
    }
    while (vetor.some((item) => item.codigo == objeto.codigo || objeto.codigo < 0)){
        objeto.codigo = parseInt(prompt(`Código já existe, informe novo código`))
    }
    while (vetor.some((item) => item.sigla == objeto.sigla)){
        objeto.sigla = parseInt(prompt(`Sigla já existe, informe nova sigla`))
    }
    vetor.push(objeto)
    alert(`Partido cadastrado com sucesso`)
}
function cadastraPolitico(vetor, vetor2){
    let objeto2 = {
        codPartido: parseInt(prompt(`informe o código do partido do candidato`)),
        nome: prompt(`Informe o nome do candidato`),
        cargo: prompt(`Informe o cargo do candidato`),
        qtde:0
    }
    while (!vetor.some((item) => item.codigo == objeto2.codPartido)){
        objeto2.codPartido = parseInt(prompt(`Partido não encontrado, informe novo código`))
    }
    while (vetor2.some((item) => item.nome == objeto2.nome)){
        objeto2.nome = prompt(`Nome já existe, informe novo nome`)
    }
    vetor2.push(objeto2)
    alert(`Político cadastrado com sucesso`)
}
function votacao(vetor2){
    let votacao = {
        partido: parseInt(prompt(`Informe o código do partido`)),
        candidato: prompt(`Informe o nome do candidato`)
    }
    let posicao = vetor2.findIndex ((item) => item.codPartido == votacao.partido &&
        item.nome == votacao.candidato )
    if (posicao!= -1){
        vetor2[posicao].qtde++
        alert(`Votação realizada com sucesso`)
    }
    else{
        alert(`Partido e/ou candidato não existe`)
    }
}
function candidatoMaisVotado(vetor2){
    let candidatoMais = vetor[0]
    for(let i=1;i<vetor2.length;i++){
        if(vetor2[i].qtde > candidatoMais.qtde){
            candidatoMais = vetor[i]
        }
    }
    console.log(candidatoMais)
}
function resultado(){
    let vetor = []
    let vetor2 = []
    let opcao 
    do{
        opcao = parseInt(console.log(`Escolha uma opção: 1-Cadastrar Partido 2-Cadastrar Político 3-Votar 4-Candidato mais Votado 5-Sair do programa`))
        switch (opcao) {
            case 1:
                cadastraPartido(vetor)
            break;
            case 2:
                cadastraPolitico(vetor2, vetor)
            break;
            case 3:
                votacao(vetor2)
            break;
            case 4:
                candidatoMaisVotado(vetor2)
            break;
            case 5:
                console.log(`Programa encerrado`)
            break;
            default:
                console.log(`Insira um valor válido`)
        }
    }while(opcao != 5)
}