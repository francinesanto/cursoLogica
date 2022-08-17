const numeros = [ 10, 20, 30]

//podemos usar o for each com a funcao anonima 

numeros.forEach(function() {
    console.log('Dentro do forEach')
})
//executa o texto pela quantidade de elementos no array

// podemos fazer a funcao por fora

function praCadaElemento() {
    console.log('Para cada Elemento')
}

numeros.forEach(praCadaElemento)

// se for passado parametro - o primeiro é o valor de cada elemento - o segundo é o indice-- o terceiro éo array completo

function paraCadaElementoComParam(elemento, indice, array) {
    console.log(elemento, indice,array)
}

numeros.forEach(paraCadaElementoComParam)