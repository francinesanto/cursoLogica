const a = 8
const b = 4
const operacao = '/'

let soma = a + b
let sub = a - b
let mult = a * b
let div = a / b


const resultado = operacao === '+' ? soma : operacao === '-'? sub : operacao === '*'? mult : div 

console.log(resultado)