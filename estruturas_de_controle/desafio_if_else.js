const a = 10
const b = 28
const operacao = '/' // + - * /

let resultado
let sentenca

if(operacao === '+') {
    resultado = a + b
    sentenca = "A soma de " + a + " + " + b + " é igual a " + resultado
} else if(operacao === '-'){
    resultado = a - b
    sentenca = "A subtração de " + a + " - " + b + " é igual a " + resultado
} else if(operacao === '*'){
    resultado = a * b
    sentenca = "A multiplicação de " + a + " + " + b + " é igual a " + resultado
} else if(operacao === '/'){
    resultado = a / b
    sentenca = "A divisão de " + a + " + " + b + " é igual a " + resultado
}


console.log(sentenca)