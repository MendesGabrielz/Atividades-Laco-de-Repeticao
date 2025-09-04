let quantidadeComFebre = 0
let n = prompt("Quantas pessoas estão com febre?")
n = Number(n)
let i = 0

while (i < n) {

    let temp = prompt("Digite a temperatura")

    if (temp > 38) {

        quantidadeComFebre++
    }

    i++
}

console.log("A quantidade de pessoas com febre é: " + quantidadeComFebre)