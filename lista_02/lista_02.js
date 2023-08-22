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
