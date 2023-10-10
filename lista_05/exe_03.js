function eleicao(){
    let partido = []
    for(let i=0;i<5;i++){
        let objeto = {
            codigo: parseInt(prompt(`informe o código do partido`)),
            nome: prompt(`Informe o nome do partido`),
            sigla: prompt(`Informe a sigla do partido`),
            presidente: prompt(`Informe o presidente do partido`),
            qtde: parseInt(prompt(`Informe a quantidade de candidatos`))
        }
        while (partido.some((item) => item.codigo == objeto.codigo || objeto.codigo < 0)){
            objeto.codigo = parseInt(prompt(`Código já existe, informe novo código`))
        }
        while (partido.some((item) => item.sigla == objeto.sigla)){
            objeto.sigla = parseInt(prompt(`Sigla já existe, informe nova sigla`))
        }
        partido.push(objeto)
        alert(`Partido cadastrado com sucesso`)
    }
    let politico = []
    for(let i=0;i<5;i++){
        let objeto = {
            codPartido: parseInt(prompt(`informe o código do partido do candidato`)),
            nome: prompt(`Informe o nome do candidato`),
            cargo: prompt(`Informe o cargo do candidato`),
            qtde:0
        }
        while (!partido.some((item) => item.codigo == objeto.codPartido)){
            objeto.codPartido = parseInt(prompt(`Partido não encontrado, informe novo código`))
        }
        while (politico.some((item) => item.nome == objeto.nome)){
            objeto.nome = prompt(`Nome já existe, informe novo nome`)
        }
        politico.push(objeto)
        alert(`Político cadastrado com sucesso`)
    }
    for(let i=0;i<10;i++){
        let votacao = {
            partido: parseInt(prompt(`Informe o código do partido`)),
            candidato: prompt(`Informe o nome do candidato`)
        }
        let posicao = politico.findIndex ((item) => item.codPartido == votacao.partido &&
            item.nome == votacao.candidato )
        if (posicao!= -1){
            politico[posicao].qtde++
            alert(`Votação realizada com sucesso`)
        }
        else{
            alert(`Partido e/ou candidato não existe`)
        }
    }
    let candidatoMais = politico[0]
    for(let i=1;i<politico.length;i++){
        if(politico[i].qtde > candidatoMais.qtde){
            candidatoMais = politico[i]
        }
    }
    console.log(candidatoMais)
}