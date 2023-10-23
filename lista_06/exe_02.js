function cadastraFarmacia(vetor) {
    let objeto = {
        codigo: parseInt(prompt("Informe o código da farmácia")),
        nome: prompt("Informe o nome da farmácia"),
        endereço: prompt("Informe o endereço da farmácia")
    }
    while(vetor.some((item) => item.codigo == objeto.codigo)){
        objeto.codigo = parseInt(prompt("Código já existente, informe novo código"))
    }
    vetor.push(objeto) 
}
function cadastraRemedio(vetor, vetor2){
    let objeto2 = {
        codigo: parseInt(prompt("Informe o código da farmácia")),
        nome: prompt("Informe o nome da remédio").toUpperCase(),
        estoque: parseInt(prompt("Informe o estoque do remédio")),
        preco:prompt("Informe o preço do remédio")
    }
    while(!vetor.some((item) => item.codigo == objeto2.codigo)){
        objeto2.codigo = parseInt(prompt("Informe um código válido"))
    }
    let indice = vetor2.findIndex( (item) => item.codigo == objeto.codigo && item.nome == objeto.nome)
        if (indice == -1){ // remedio não existe
            vetor2.push(objeto) // insere remédio
        }
        else { // já existe, atualiza estoque
            vetor2[indice].qtde = vetor2[indice].estoque + objeto.estoque
        } 
}
function compraRemedio(vetor2){
    let objeto3 = {
        codigo: parseFloat(prompt("Informe o código da farmácia")),
        nome: prompt("Informe o nome da remédio").toUpperCase(),
        quantidade: parseInt(prompt("Informe a quantidade que deseja funcionar")),
    }
    if(vetor2.some((item) =>
        (item.codigo == objeto3.codigo && item.nome == objeto3.nome))){
            let indice = vetor2.findIndex((item =>
                item.nome == objeto3.nome && item.codigo == objeto3.codigo))
            if (objeto3.quantidade <= vetor2[indice].estoque){
                vetor2[indice].estoque = vetor2[indice].estoque = objeto3.quantidade
                alert(`Compra realizada com sucesso`)
            }
            else{
                alert(`Estoque insuficiente`)
            }
        }
    else{
        alert(`Farmácia ou remédio inexistente`)
    }
}
let remedio = () => {
    let vetor = []
    let vetor2 = []
    let opcao 
    do{
        opcao = parseInt(console.log(`Escolha uma opção: 1-Cadastrar Farmácia 2-Cadastrar Remédio 3-Comprar Remédio 4-Sair do programa`))
        switch (opcao) {
            case 1:
                cadastraFarmacia(vetor)
            break;
            case 2:
                cadastraRemedio(vetor, vetor2)
            break;
            case 3:
                compraRemedio(vetor2)
            break;
            case 4:
                console.log(`Programa encerrado`)
            break;
            default:
                console.log(`Insira um valor válido`)
        }
    }while(opcao != 4)
}