async function api(){
    let id = Number(document.getElementById("id").value)
    let resultado = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    let dados = await resultado.json()
    document.getElementById("nome").value = dados.name
    document.getElementById("usuario").value = dados.username
    document.getElementById("rua").value = dados.address.street
    document.getElementById("suite").value = dados.address.suite
    document.getElementById("cidade").value = dados.address.city
    document.getElementById("cep").value = dados.address.zipcode
    document.getElementById("latitude").value = dados.address.geo.lat
    document.getElementById("longitude").value = dados.address.geo.lng
    document.getElementById("telefone").value = dados.phone
    document.getElementById("website").value = dados.websitse
    document.getElementById("companhia").value = dados.company.name
    document.getElementById("frase").value = dados.company.catchPhrase
    document.getElementById("bs").value = dados.company.bs
}