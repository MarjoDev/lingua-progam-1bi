let exe_02 = () => {
    let farmacias = []
    for(let i=0;i<5;i++){
        let objeto = {
            codigo: parseInt(prompt("Informe o código da farmácia")),
            nome: prompt("Informe o nome da farmácia"),
            endereço: prompt("Informe o endereço da farmácia")
        }
        while(farmacias.some((item) => item.codigo == objeto.codigo)){
            objeto.codigo = parseInt(prompt("Código já existente, informe novo código"))
        }
        farmacias.push(objeto) 
    }
    let remedios = []
    for(let i=0;i<3;i++){
        let objeto2 = {
            codigo: parseInt(prompt("Informe o código da farmácia")),
            nome: prompt("Informe o nome da remédio").toUpperCase(),
            estoque: parseInt(prompt("Informe o estoque do remédio")),
            preco:prompt("Informe o preço do remédio")
        }
        while(!farmacias.some((item) => item.codigo == objeto2.codigo)){
            objeto2.codigo = parseInt(prompt("Informe um código válido"))
        }
        remedios.push(objeto2) 
    }
    for(let i=0;i<1;i++){
        let objeto3 = {
            codigo: parseFloat(prompt("Informe o código da farmácia")),
            nome: prompt("Informe o nome da remédio").toUpperCase(),
            quantidade: parseInt(prompt("Informe a quantidade que deseja funcionar")),
        }
        if(remedios.some((item) =>
            (item.codigo == objeto3.codigo && item.nome == objeto3.nome))){
                let indice = remedios.findIndex((item =>
                    item.nome == objeto3.nome && item.codigo == objeto3.codigo))
                if (objeto3.quantidade <= remedios[indice].estoque){
                    remedios[indice].estoque = remedios[indice].estoque = objeto3.quantidade
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
}