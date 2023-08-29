function exe_01(){
    let cal1nota = document.getElementById("1nota").value
    let cal2nota = document.getElementById("2nota").value
    let cal3nota = document.getElementById("3nota").value
    let cal4nota = document.getElementById("4nota").value
    let calresultado = (parseFloat(cal1nota) + parseFloat(cal2nota) + parseFloat(cal3nota) + parseFloat(cal4nota))/4
    if (calresultado < 7 && calresultado >= 0){
        document.getElementById("resultado").innerHTML =
        `Você foi reprovado!`
    }
    else if (calresultado > 7 && calresultado <=10){
        document.getElementById("resultado").innerHTML =
        `Você foi aprovado!`
    }
    else{
        alert("Digite notas válidas")
    }
}
function exe_02(){
    let cal1nota = document.getElementById("1nota").value
    let cal2nota = document.getElementById("2nota").value
    let calresultado = (parseFloat(cal1nota) + parseFloat(cal2nota))/2
    if (calresultado < 3 && calresultado >= 0){
        document.getElementById("resultado").innerHTML =
       `Você foi reprovado!`
    }
    else if (calresultado < 7 && calresultado >= 3){
        document.getElementById("resultado").innerHTML =
        `Você está em exame!`
    }
    else if (calresultado > 7 && calresultado <=10){
        document.getElementById("resultado").innerHTML =
        `Você foi aprovado!`
    }
    else{
        alert("Digite notas válidas")
    }
}
function exe_15(){
    let calinvesti = document.getElementById("investi").value
    let calinvestido = document.getElementById("investido").value
    if (calinvesti == 1){
        let calresultado = parseFloat(calinvestido) + parseFloat((calinvestido * 0.03))
        document.getElementById("resultado").innerHTML =
        `O valor investido com o lucro é ${calresultado}`
    }
    else if (calinvesti == 2){
        let calresultado = parseFloat(calinvestido) + parseFloat((calinvestido * 0.04))
        document.getElementById("resultado").innerHTML =
        `O valor investido com o lucro é ${calresultado}`
    }
    else{
        alert("Digite um tipo de investimento valido")
    }
}
function exe_16(){
    let calpreco = document.getElementById("preco").value
    if (calpreco > 0 && calpreco <= 30){
        document.getElementById("resultado").innerHTML =
       `O novo preço é de ${calpreco} e não possui desconto`
    }
    else if (calpreco > 30 && calpreco <=100){
        let desconto = calpreco * 0.10
        document.getElementById("resultado").innerHTML =
        `O novo preço é de ${calpreco - desconto} e tem ${desconto} de desconto`
    }
    else if (calpreco > 100){
        let desconto = calpreco * 0.15
        document.getElementById("resultado").innerHTML =
        `O novo preço é de ${calpreco - desconto} e tem ${desconto} de desconto`
    }
    else{
        alert("Digite um preço válido")
    }
}
function exe_17(){
    let calsenha = document.getElementById("senha").value
    if (calsenha == 4531){
        document.getElementById("resultado").innerHTML =
       `A senha está correta`
    }
    else{
        alert("Senha inválida")
    }
}
function exe_18(){
    let calidade = document.getElementById("idade").value
    if (calidade > 0 && calidade < 18){
        document.getElementById("resultado").innerHTML =
       `Você não possui maioridade`
    }
    else if (calidade >= 18){
        document.getElementById("resultado").innerHTML =
       `Você possui maioridade`
    }
    else{
        alert("Idade inválida")
    }
}
function exe_19(){
    let calsexo = document.getElementById("sexo").value
    let calaltura = document.getElementById("altura").value
    if (calsexo == 1){
        let calimc = (72.7 * calaltura) - 58
        document.getElementById("resultado").innerHTML =
       `O peso ideal para sual altura e sexo é ${calimc}`
    }
    else if (calsexo == 2){
        let calimc = (62.1 * calaltura) - 44.7
        document.getElementById("resultado").innerHTML =
       `O peso ideal para sual altura e sexo é ${calimc}`
    }
    else{
        alert("Opção inválida")
    }
}
function exe_20(){
    let calidade = document.getElementById("idade").value
    if (calidade >= 5 && calidade <= 7){
        document.getElementById("resultado").innerHTML =
       `Você está na categoria infantil`
    }
    else if (calidade >= 8 && calidade <= 10){
        document.getElementById("resultado").innerHTML =
       `Você está na categoria juvenil`
    }
    else if (calidade >=11 && calidade <= 15){
        document.getElementById("resultado").innerHTML =
       `Você está na categoria adolescente`
    }
    else if (calidade >= 16 && calidade <= 30){
        document.getElementById("resultado").innerHTML =
       `Você está na categoria adulto`
    }
    else if (calidade > 30){
        document.getElementById("resultado").innerHTML =
       `Você está na categoria sênior`
    }
    else{
        alert("Você não esta em nenhuma categoria")
    }
}
function exe_21(){
    let calcodigo = document.getElementById("codigo").value
    if (calcodigo == 1){
        document.getElementById("resultado").innerHTML =
       `A procedencia do produto é sul`
    }
    else if (calcodigo == 2){
        document.getElementById("resultado").innerHTML =
       `A procedencia do produto é norte`
    }
    else if (calcodigo == 3){
        document.getElementById("resultado").innerHTML =
       `A procedencia do produto é leste`
    }
    else if (calcodigo == 4){
        document.getElementById("resultado").innerHTML =
       `A procedencia do produto é oeste`
    }
    else if (calcodigo == 5 || calcodigo == 6){
        document.getElementById("resultado").innerHTML =
       `A procedencia do produto é nordeste`
    }
    else if (calcodigo >= 7 && calcodigo <= 9){
        document.getElementById("resultado").innerHTML =
       `A procedencia do produto é sudeste`
    }
    else if (calcodigo >= 10 && calcodigo <= 20){
        document.getElementById("resultado").innerHTML =
       `A procedencia do produto é centro-oeste`
    }
    else if (calcodigo >= 21 && calcodigo <= 30){
        document.getElementById("resultado").innerHTML =
       `A procedencia do produto é noroeste`
    }
    else{
        alert("Código inválido")
    }
}
function exe_22(){
    let calidade = document.getElementById("idade").value
    let calpeso = document.getElementById("peso").value
    if (calpeso >= 1 && calpeso < 60){
        if(calidade > 0 && calidade < 20){
            document.getElementById("resultado").innerHTML = 
            `Você está na categoria 9`
        }
        else if(calidade >= 20 && calidade <= 50){
            document.getElementById("resultado").innerHTML = 
            `Você está na categoria 6`
        }
        else if(calidade > 50){
            document.getElementById("resultado").innerHTML = 
            `Você está na categoria 3`
        }
        else{
            alert("Entre com uma idade válida")
        }
    }
    else if (calpeso >= 60 && calpeso <= 90){
        if(calidade > 0 && calidade < 20){
            document.getElementById("resultado").innerHTML = 
            `Você está na categoria 8`
        }
        else if(calidade >= 20 && calidade <= 50){
            document.getElementById("resultado").innerHTML = 
            `Você está na categoria 5`
        }
        else if(calidade > 50){
            document.getElementById("resultado").innerHTML = 
            `Você está na categoria 2`
        }
        else{
            alert("Entre com uma idade válida")
        }
    }
    else if (calpeso > 90){
        if(calidade > 0 && calidade < 20){
            document.getElementById("resultado").innerHTML = 
            `Você está na categoria 7`
        }
        else if(calidade >= 20 && calidade <= 50){
            document.getElementById("resultado").innerHTML = 
            `Você está na categoria 4`
        }
        else if(calidade > 50){
            document.getElementById("resultado").innerHTML = 
            `Você está na categoria 1`
        }
        else{
            alert("Entre com uma idade válida")
        }
    }
    else{
        alert("Entre com um peso válido")
    }
}