let somaCount = 0;
let subtracaoCount = 0;
let multiplicacaoCount = 0;
let divisaoCount = 0;

let opcao = prompt("Digite a letra da opção que quer: a) SOMA b) SUBTRAÇÃO c) MULTIPLICAÇÃO d) DIVISÃO e) sair")

while (true) {

    if (opcao === 'e' || opcao === 'E') {

        console.log(somaCount)
        console.log(subtracaoCount)
        console.log(multiplicacaoCount)
        console.log(divisaoCount)
        break

    } else if (opcao === 'a' || opcao === 'A') {

        let num = Number(prompt("Digite um numero"))
        let num2 = Number(prompt("Digite outro numero"))
        let soma = num + num2

        console.log("A soma é: " + soma)

        somaCount++

    } else if (opcao === 'b' || opcao === 'B') {

        let num = Number(prompt("Digite um numero"))
        let num2 = Number(prompt("Digite outro numero"))
        let sub = num - num2

        console.log("A subtração é: " + sub)

        subtracaoCount++

    }


    else if (opcao === 'c' || opcao === 'C') {

        let num = Number(prompt("Digite um numero"))
        let num2 = Number(prompt("Digite outro numero"))
        let mult = num - num2

        console.log("A multiplicação é: " + mult)

        multiplicacaoCount++

    }


    else if (opcao === 'd' || opcao === 'D') {

        let num = Number(prompt("Digite um numero"))
        let num2 = Number(prompt("Digite outro numero"))
        let div = num / num2

        console.log("A divisao é: " + div)

        divisaoCount++

    }

}