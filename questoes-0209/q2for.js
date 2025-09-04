let aluno1 = {

    matri: '',
    nota: ''
}

let aluno2 = {

    matri: '',
    nota: ''
}

let aluno3 = {

    matri: '',
    nota: ''
}

let aluno4 = {

    matri: '',
    nota: ''
}

let aluno5 = {

    matri: '',
    nota: ''
}

let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5]
let notaFinal = 0
notaFinal = Number(notaFinal)

for(i = 0; i < 5; i++){

    alunos[i].matri = prompt("Qual o numero da matricula")
    alunos[i].nota = Number(prompt("Qual a nota"))

     notaFinal += alunos[i].nota

}

let media = notaFinal / 5

console.log("Media na tela: " + media)


for(i = 0; i < 5; i++){

    if(alunos[i].nota > media){

        console.log("Ta bem demais: " + alunos[i].matri)
    }

    i++
}