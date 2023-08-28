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