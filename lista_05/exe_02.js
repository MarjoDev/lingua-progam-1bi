let exe_02 = () => {
    let farmacias = []
    for(let i=0;i<5;i++){
        let objeto = {
            codigo: parseFloat(prompt("Informe o código da farmácia")),
            nome: prompt("Informe o nome da farmácia"),
            endereço: prompt("Informe o endereço da farmácia")
        }
        while(farmacias.some((item) => item.codigo == objeto.codigo)){
            objeto.codigo = parseFloat(prompt("Informe o código da farmácia"))
        }
        farmacias.push(objeto) 
    }
    let remedios = []
    for(let i=0;i<10;i++){
        let objeto2 = {
            codigo: parseFloat(prompt("Informe o código da farmácia")),
            nome: prompt("Informe o nome da remédio"),
            estoque: parseInt(prompt("Informe o estoque do remédio")),
            preco:prompt("Informe o preço do remédio")
        }
        while(farmacias.some((item) => item.codigo != objeto2.codigo)){
            objeto2.codigo = parseFloat(prompt("Informe o código da farmácia"))
        }
        remedios.push(objeto2) 
    }
    let compras = []
    for(let i=0;i<5;i++){
        let objeto2 = {
            codigo: parseFloat(prompt("Informe o código da farmácia")),
            nome: prompt("Informe o nome da remédio"),
            estoque: parseInt(prompt("Informe o estoque do remédio")),
            preco:prompt("Informe o preço do remédio")
        }
        while(farmacias.some((item) => item.codigo != objeto2.codigo)){
            objeto2.codigo = parseFloat(prompt("Informe o código da farmácia"))
        }
        remedios.push(objeto2) 
    }
}