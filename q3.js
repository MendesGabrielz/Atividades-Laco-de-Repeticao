let somaNum = 0

let num = prompt("Digite um numero (Digite 0 ou inforar para parar a execução)")
num = Number(num)

while (num > 0){

    somaNum += num

    num = prompt("Digite um numero (Digite 0 ou inferar para parar a execução)")
    num = Number(num)
}

console.log("Os numeros somados sao: " + somaNum)