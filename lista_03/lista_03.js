function exe_01(){
    let contador2 = 1
    while (contador2 <= 5){  
        let a = Number(prompt('Informe A'))
        let b = Number(prompt('Informe B'))
        let c = Number(prompt('Informe C'))
        let d = Number(prompt('Informe D'))
        let contador = 1
        while (contador <= 3){
            if (a > b){ // troca a com b
                let aux = a
                a = b
                b = aux
            }
            if (b > c){ // troca b com c
                let aux = b
                b = c
                c = aux
            }
            if (c > d){ // troca c com d
                let aux = c
                c = d
                d = aux
            }
            contador++ 
        } // fecha while
        console.log(`Ordem crescente ${a}, ${b}, ${c}, ${d}`)
        console.log(`Ordem decrescente ${d}, ${c}, ${b}, ${a}`)
        contador2++
    } // fecha while
}
function exe_02(){
    let qtde = 120
    const custo = 200
    let corpo = ''
    let lucro = 0
    let maiorLucro = 0
    let melhorQtde = 0
    let melhorPreco = 0
    for(let preco = 5; preco >= 1; preco = preco - 0.5){
        lucro = (preco * qtde) - custo
        if (lucro > maiorLucro){
            maiorLucro = lucro
            melhorPreco = preco
            melhorQtde = qtde
        }
        corpo = corpo + `<tr> <td> ${preco.toFixed(2)} </td> <td> ${qtde}</td> <td> ${custo.toFixed(2)}</td> <td> ${lucro.toFixed(2)} </td> </tr>`  
        qtde = qtde + 26
    }
    document.getElementById('corpo').innerHTML = corpo
}
function exe_03(){
    let contador2 = 1
    let menorquinze = 0
    let atetrinta = 0
    let atequarentacinco = 0
    let atesessenta = 0
    let acimasessenta = 0
    let porcentagemquinze = 0
    let porcentagemsessenta = 0
    let corpo = ''

    while (contador2 <= 8){  
        let idade = Number(prompt('Informe a idade'))
        if (idade <= 15){
            menorquinze++
        }
        else if(idade >= 16 && idade <= 30){
            atetrinta++
        }
        else if(idade >= 31 && idade <= 45){
            atequarentacinco++
        }
        else if(idade >= 46 && idade <= 60){
            atesessenta++
        }
        else if (idade > 60){
            acimasessenta++
        }
        else{
            alert("insira uma idade válida")
        }
        contador2++
    }

    porcentagemquinze = (menorquinze * 100) / 8
    porcentagemsessenta = (acimasessenta * 100) / 8

    corpo = corpo + `<tr> <td> ${menorquinze} ${porcentagemquinze}% </td> <td> ${atetrinta}</td> 
    <td> ${atequarentacinco}</td> <td> ${atesessenta} </td> <td> ${acimasessenta} ${porcentagemsessenta}% </td> </tr>`
    document.getElementById('corpo').innerHTML = corpo
}

function exe_04(){
    let corpo = ''
    let numero = Number(prompt('Informe o número'))
    corpo = corpo + `
    <tr> 
    <td> Tabuada </td> 
    <td> do </td> 
    <td> ${numero}</td>
    </tr>`
    for(let aux = 1; aux <= 10; aux++){
        corpo = corpo + `
        <tr> 
        <td> ${numero} </td> 
        <td> ${aux} </td> 
        <td> ${numero * aux}</td>
        </tr>`
    }
    document.getElementById('corpo').innerHTML = corpo
}

function exe_05(){
    let corpo = ''
    for(let numero = 1; numero <= 10; numero++){
        corpo = corpo + `
        <tr> 
        <td> Tabuada </td> 
        <td> do </td> 
        <td> ${numero}</td>
        </tr>`
        for(let aux = 1; aux <= 10; aux++){
            corpo = corpo + `
            <tr> 
            <td> ${numero} </td> 
            <td> ${aux} </td> 
            <td> ${numero * aux}</td>
            </tr>`
        }
    }
    document.getElementById('corpo').innerHTML = corpo
}

function exe_06(){
    let contador2 = 1
    let totalvista = 0
    let totalprazo = 0
    let contprazo = 0
    let primeiraparcela = 0
    let total = 0
    let corpo = ''

    while (contador2 <= 15){  
        let tipo = Number(prompt('Informe o tipo de transação V=1 ou P=2'))
        let valor = Number(prompt('Informe o valor da transação'))
        if (tipo == 1){
            totalvista = totalvista + valor
            total = total + valor
        }
        else if(tipo == 2){
            totalprazo = totalprazo + valor
            total = total + valor
            contprazo++
        }
        else{
            alert("insira um tipo válido válida")
        }
        contador2++
    }

    primeiraparcela = totalprazo / 3

    corpo = corpo + `<tr> <td> ${totalvista} </td> <td> ${totalprazo}</td> 
    <td> ${total}</td> <td> ${primeiraparcela} </td> </tr>`
    document.getElementById('corpo').innerHTML = corpo
}

function exe_07(){
    let contador2 = 1
    let acimaciquenta = 0
    let mediaaltura = 0
    let contmedia = 0
    let calmediaaltura = 0
    let pesomenor = 0
    let calpesomenor = 0
    let corpo = ''

    while (contador2 <= 5){  
        let idade = Number(prompt('Informe a idade'))
        let peso = Number(prompt('Informe o peso'))
        let altura = Number(prompt('Informe a altura'))
        if (idade > 50){
            acimaciquenta++
        }
        if(idade >= 10 && idade <= 20){
            mediaaltura = mediaaltura + altura
            contmedia++
        }
        if(peso < 40){
            pesomenor++
        }
        contador2++
    }

    calmediaaltura = mediaaltura / contmedia
    calpesomenor = (pesomenor * 100) / 5

    corpo = corpo + `<tr> <td> ${acimaciquenta} </td> <td> ${calmediaaltura}</td> 
    <td> ${calpesomenor}%</td> </tr>`
    document.getElementById('corpo').innerHTML = corpo
}

function exe_08(){
    let contador2 = 1
    let acimaciquenta = 0
    let mediaidade = 0
    let contmedia = 0
    let calmediaidade = 0
    let olhoazul = 0
    let calolhoazul = 0
    let cabeloruivo = 0
    let corpo = ''

    while (contador2 <= 6){  
        let idade = Number(prompt('Informe a idade'))
        let peso = Number(prompt('Informe o peso'))
        let altura = Number(prompt('Informe a altura'))
        let olho = String(prompt('Informe a cor dos olhos'))
        let cabelo = String(prompt('Informe a cor do cabelo'))
        if (idade > 50 && peso < 60){
            acimaciquenta++
        }
        if(altura < 1.5){
            mediaidade = mediaidade + idade
            contmedia++
        }
        if(olho == 'A'){
            olhoazul++
        }
        if(cabelo == 'R' && olho != 'A'){
            cabeloruivo++
        }
        contador2++
    }

    calmediaidade = mediaidade / contmedia
    calolhoazul = (olhoazul * 100) / 6

    corpo = corpo + `<tr> <td> ${acimaciquenta} </td> <td> ${calmediaidade}</td> 
    <td> ${calolhoazul}%</td> <td> ${cabeloruivo}</td> </tr>`
    document.getElementById('corpo').innerHTML = corpo
}