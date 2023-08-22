function exe_01(){
    let pnum = document.getElementById("1num").value
    let snum = document.getElementById("2num").value
    let subtra = pnum - snum
    document.getElementById("subtra").innerHTML = 
    `A subtração do primeiro número pelo segundo é ${subtra}`
}
function exe_02(){
    let pnum = document.getElementById("1num").value
    let snum = document.getElementById("2num").value
    let tnum = document.getElementById("3num").value
    let multipli = pnum * snum * tnum
    document.getElementById("multipli").innerHTML = 
    `A multiplicação dos números é de ${multipli}`
}
function exe_03(){
    let pnum = document.getElementById("1num").value
    let snum = document.getElementById("2num").value
    let divisao = pnum/snum 
    document.getElementById("divisao").innerHTML = 
    `A divisão dos números é de ${divisao}`
}
function exe_04(){
    let pnota = document.getElementById("1nota").value
    let snota = document.getElementById("2nota").value
    let ponderada = (2*pnota+3*snota)/(2+3)
    document.getElementById("ponderada").innerHTML = 
    `A média ponderada das notas é ${ponderada}`
}
function exe_05(){
    let calpreco = document.getElementById("preco").value
    let desconto = calpreco-(preco*0.10)
    document.getElementById("descontado").innerHTML = 
    `O preço do produto com o desconto é ${desconto}`
}
function exe_06(){
    let calsalario = document.getElementById("salario").value
    let calvendas = document.getElementById("vendas").value
    let calcomissao = calvendas*0.04
    let calsalariofinal = parseFloat(calsalario)+parseFloat(calcomissao)
    document.getElementById("comissao").innerHTML = 
    `O ganho de comissão foi ${calcomissao}`
    document.getElementById("salariofinal").innerHTML = 
    `O salário final foi de ${calsalariofinal}`
}
function exe_07(){
    let calpeso = document.getElementById("peso").value
    let calengordar = parseFloat(calpeso) + parseFloat((calpeso*0.15)) 
    let calemagrecer = calpeso - (calpeso*0.2)
    document.getElementById("engordar").innerHTML = 
    `O peso com aumento de 15% é de ${calengordar}`
    document.getElementById("emagrecer").innerHTML = 
    `O peso com uma diminuição de 20% é de ${calemagrecer}`
}
function exe_08(){
    let calpeso = document.getElementById("peso").value
    let calconversao = calpeso*1000
    document.getElementById("conversao").innerHTML =
    `O peso em gramas é de ${calconversao}`
}
function exe_09(){
    let calbasemenor = document.getElementById("basemenor").value
    let calbasemaior = document.getElementById("basemaior").value
    let calaltura = document.getElementById("altura").value
    let calcalculo = (((parseFloat(calbasemaior) + parseFloat(calbasemenor)))*calaltura) / 2
    document.getElementById("calculo").innerHTML =
    `A area do trapézio é de ${calcalculo}`
}
function exe_10(){
    let callado = document.getElementById("lado").value
    let calcalculo = callado * callado
    document.getElementById("calculo").innerHTML =
    `A area do quadrado é de ${calcalculo}`
}
function exe_11(){
    let caldiagomaior = document.getElementById("diagonalmaior").value
    let caldiagomenor = document.getElementById("diagonalmenor").value
    let calcalculo = (caldiagomaior * caldiagomenor) / 2
    document.getElementById("calculo").innerHTML =
    `A area do losango é de ${calcalculo}`
}
