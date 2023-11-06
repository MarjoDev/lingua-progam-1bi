//deve ser assincrona pois tem chamada sincrona dentro dela
async function api(){
    //recupera cep informado pelo usuario
    let cep = Number(document.getElementById("cep").value)
    //chamando a api usando a função "fetch" do Js
    //await é sincrono
    let resultado = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    //os dados chegam em formato string e sera convertido para json
    let dados = await resultado.json()
    //coloca o logradouro no formulario
    document.getElementById("logradouro").value = dados.logradouro
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("localidade").value = dados.localidade
    document.getElementById("uf").value = dados.uf
    document.getElementById("ddd").value = dados.ddd
}