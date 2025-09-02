let total = 0 //Total dos salarios
mf = prompt("Quantas familias tem na familia ?")
let i = 0

while(i < mf){

    let salario = prompt("Digite o salario: ")
    total = total + Number(salario)
    i++
}

console.log("O salario final é: " + total)