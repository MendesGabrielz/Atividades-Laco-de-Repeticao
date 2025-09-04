let quantidadeComFebre = 0
let n = prompt("Quantas pessoas estão com febre?")
n = Number(n)

for(i = 0; i < n; i++) {

    let temp = prompt("Digite a temperatura")

    if (temp > 38) {

        quantidadeComFebre++
    }
}

console.log("A quantidade de pessoas com febre é: " + quantidadeComFebre)