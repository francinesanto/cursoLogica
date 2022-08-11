/// desenvolvendo uma calculadora com uma funcao
let resultado
let sentenca
function calculadora(operacao, num1, num2) {
    if(operacao === '+') {
        resultado = num1 + num2
         sentenca = 'A soma de ' + num1 + '+' + num2 + " é igual a " + resultado 
    } else if(operacao === '-'){
        resultado = num1 - num2
         sentenca = 'A subtração de ' + num1 + '-' + num2 + " é igual a " + resultado 
    } else if(operacao === '*'){
        resultado = num1 * num2
         sentenca = 'A multiplicação de ' + num1 + '*' + num2 + " é igual a " + resultado 
    } else if(operacao === '/'){
        resultado = num1 / num2
         sentenca = 'A divisão de ' + num1 + '/' + num2 + " é igual a " + resultado 
    } else if(operacao === '%'){
        resultado = num1 % num2
         sentenca = 'A modulo de ' + num1 + '%' + num2 + " é igual a " + resultado 
    } else if(operacao === 'P') {
        resultado = num1 * num2 / 100
         sentenca = 'A porcentagem de ' + num1 + '%' + num2 + " é igual a " + resultado 
    } else {
        sentenca = 'Operacao invalida'
    }  
    return sentenca
}

let resposta = calculadora('+', 2 , 2 )

console.log(resposta)