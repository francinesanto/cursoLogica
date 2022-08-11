// uso do if
if (true)
    console.log('Vai ser executado')

if (false)
    console.log('Não vai ser executado')

console.log('Fim')
console.log('----------')

// usando if com expressoes

const nota = 8
const bomComportamento = false

// aqui só vai ser true e cair nos parabens se os dois forem true
if (nota >= 7 && bomComportamento)
    console.log('Parabéns')

if (nota < 7 || !bomComportamento)
    console.log('Uma pena')

console.log('Fim')
console.log('----------')

// usando o bloco de codigo com proposito 

const nota1 =9

if( nota1 >= 9 ) {
    console.log('Quadro de honra')
    console.log('Parabéns')
}

console.log('Fim!')