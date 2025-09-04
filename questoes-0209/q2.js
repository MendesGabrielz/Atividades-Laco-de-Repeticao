let i = 0

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

while (i < 5){

    alunos[i].matri = prompt("Qual o numero da matricula")
    alunos[i].nota = Number(prompt("Qual a nota"))

     notaFinal += alunos[i].nota

    i++

}

let media = notaFinal / 5

console.log("Media na tela: " + media)

i = 0

while (i < 5){

    if(alunos[i].nota > media){

        console.log("Ta bem demais: " + alunos[i].matri)
    }

    i++
}