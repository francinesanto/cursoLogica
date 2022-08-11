// usando a forma literal -- o vscode reconhece que nao vai ser executado
if (true) {
    console.log('Executa')
} else {
    console.log('nao será executado')
}
console.log('----------')
//literal usando false

if (false) {
    console.log('Executa') // mostra que esse nao será executado
} else {
    console.log('nao será executado')
}
console.log('----------')
// usando variaveis

const vdd = true
const fal = false

if (vdd) {
    console.log('Executa')
} else {
    console.log('nao será executado')// nao marca que nao sera executado pois estamos usando variavel na condicao
}
console.log('----------')
// uso para atender 2 condicoes

const hora = 11
let saudacao;

if(hora < 12) {
    saudacao = 'Bom dia'
} else {
    saudacao = 'Boa tarde'
}

console.log(saudacao)
console.log('----------')