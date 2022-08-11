// se escutado esse codigo vai ser infinito 
//pois colocamos um true fixo e nunca sai pra false
/*while (true) {
    console.log('Laço infinito')
}

console.log('Fim')// vscode sabe que esse codigo nunca vai ser executado
*/
//quantidade indeterminada de repetições
// verificando quantas vezes foram geradas um valor acima de 0.8
let quantidade = 0

while(Math.random() < 0.8) {
    quantidade++
}
//Math.random() -> gera um numero aleatorio entre 0 e 1, o 1 nunca é exibido.
console.log('Qtde: ' + quantidade)

//verificar quantas vezes repete usando a data menor que o futuro
const futuro = Date.now() + 2000
let quantidade1 = 0

while(Date.now() < futuro) {
    quantidade1++
}

console.log('Qtde:' + quantidade1)

// usando o while com um condicao DETERMINADA
let controle = 1
while(controle <= 10) {
    console.log(controle)
    controle++
}

console.log('Fim')