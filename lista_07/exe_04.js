function notasMatriz(notas, alunos){
    for(let i=0;i<15;i++){
        notas[i] = []
        alunos[i] = (`Aluno ` + (i+1))
        for(let j=0;j<5;j++){
            notas[i][j] = parseInt((Math.random()*10)+1)
        }   
    }
}
function mostraMatriz(notas){
    console.log(notas)
}
function calculaMatriz(alunos, notas){
    for(let i=0;i<15;i++){
        let soma = 0
        for(let j=0;j<5;j++){
            soma = notas[i][j] + soma
        }
        if (soma/5 >= 6){
            console.log(`${alunos[i]} foi aprovado com média ${(soma/5).toFixed(1)}`)
        }
        else if (soma/5 >= 3){
            console.log(`${alunos[i]} ficou de exame com média ${(soma/5).toFixed(1)}`)
        }
        else {
            console.log(`${alunos[i]} foi reprovado com média ${(soma/5).toFixed(1)}`)
        }  
    }
}
function calculaMedia(notas){
    let soma = 0
    for(let i=0;i<15;i++){
        for(let j=0;j<5;j++){
            soma = soma + notas[i][j]
        }   
    }
    console.log(`A média final da turma é ${(soma/75).toFixed(1)}`)
}

let principal = () => {
    let notas = []
    let alunos = []
    notasMatriz(notas, alunos)
    mostraMatriz(notas)
    calculaMatriz(notas, alunos)
    calculaMedia(notas)
}
principal()