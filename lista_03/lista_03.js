function exe_01(){
    let contador2 = 1
    while (contador2 <= 5){
        let a = Number(prompt('Informe A'))
        let b = Number(prompt('Informe B'))
        let c = Number(prompt('Informe C'))
        let d = Number(prompt('Informe D'))
        let contador = 1

        while(contador <= 3){
            if(a > b){
                let aux = a
                a = b
                b = aux
            }
            if(b > c){
                let aux = b
                b = c
                c = aux
            }
            if(c > d){
                let aux = c
                c = d
                d = aux
            }
            contador++
        }
        console.log(`Ordem crescente ${a} ${b} ${c} ${d}`)
        console.log(`Ordem decrescente ${d} ${c} ${b} ${a}`)
        document.getElementById("resultado").innerHTML = 
        `Ordem crescente ${a} ${b} ${c} ${d} <br>
        Ordem decrescente ${d} ${c} ${b} ${a} <br>`
        contador2++
    }
}