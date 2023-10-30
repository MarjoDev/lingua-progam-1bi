function notasMatriz(notas){
    for(let i=0;i<15;i++){
        notas[i] = []
        for(let j=0;j<5;j++){
            notas[i][j] = parseInt((Math.random()*10)+1)
        }   
    }
}
function mostraMatriz(notas){
    console.log(notas)
}
function alunosVetor(alunos){
    for(let i=0;i<15;i++){
        alunos[i] = (`Aluno${i+1}`)
    }
}
function aprovadosMatriz(alunos, notas){
    let contMedia = 0
    for(let i=0;i<15;i++){
        contMedia = 0
        for(let j=0;j<5;j++){
            contMedia = notas[i][j] + contMedia
        }
        if(contMedia/5 >= 6){
            console.log(`O ${alunos[i]} está aprovado!`)
        }
        else if(contMedia/5 < 6 && contMedia/5 >= 3){
            console.log(`O ${alunos[i]} está em exame!`)
        }
        else{
            console.log(`O ${alunos[i]} está reprovado!`)
        }      
    }
}

let principal = () => {
    let notas = []
    let alunos = []
    notasMatriz(notas)
    alunosVetor(alunos)
    mostraMatriz(notas)
    aprovadosMatriz(notas, alunos)
}
principal()