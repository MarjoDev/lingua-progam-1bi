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
function cadastraRemedio(vetor){
    let objeto2 = {
        codigo: parseInt(prompt("Informe o código da farmácia")),
        nome: prompt("Informe o nome da remédio").toUpperCase(),
        estoque: parseInt(prompt("Informe o estoque do remédio")),
        preco:prompt("Informe o preço do remédio")
    }
    while(!vetor.some((item) => item.codigo == objeto2.codigo)){
        objeto2.codigo = parseInt(prompt("Informe um código válido"))
    }
    vetor.push(objeto2) 
}
function compraRemedio(vetor){
    let objeto3 = {
        codigo: parseFloat(prompt("Informe o código da farmácia")),
        nome: prompt("Informe o nome da remédio").toUpperCase(),
        quantidade: parseInt(prompt("Informe a quantidade que deseja funcionar")),
    }
    if(vetor.some((item) =>
        (item.codigo == objeto3.codigo && item.nome == objeto3.nome))){
            let indice = vetor.findIndex((item =>
                item.nome == objeto3.nome && item.codigo == objeto3.codigo))
            if (objeto3.quantidade <= vetor[indice].estoque){
                vetor[indice].estoque = vetor[indice].estoque = objeto3.quantidade
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
function remedio(){
    let vetor = []
    let opcao 
    do{
        opcao = parseInt(console.log(`Escolha uma opção: 1-Cadastrar Farmácia 2-Cadastrar Remédio 3-Comprar Remédio 4-Sair do programa`))
        switch (opcao) {
            case 1:
                cadastraFarmacia(vetor)
            break;
            case 2:
                cadastraRemedio(vetor)
            break;
            case 3:
                compraRemedio(vetor)
            break;
            case 4:
                console.log(`Programa encerrado`)
            break;
            default:
                console.log(`Insira um valor válido`)
        }
    }while(opcao != 4)
}