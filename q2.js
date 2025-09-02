let somaIdades = 0
let quantidade = 0

let idade = prompt("Digite a idade (Digite 0 ou inforar para parar a execução)")
idade = Number(idade)

while (idade > 0){


    somaIdades += idade
    quantidade++

    idade = prompt("Digite outra idade (Digite 0 ou inferar para parar a execução)")
    idade = Number(idade)
}

if (quantidade > 0){

    media = somaIdades / quantidade
    media = Number(media)
    console.log("A media é: " + media)

} else{

    console.log("Deu nao")
}