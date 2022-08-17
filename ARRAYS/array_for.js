const numeros = [ 1, 2, 3, 4, 5, 6]

for(let i = 0; i < 6; i++) {
    console.log(i, numeros[i])
}
//na saida a esquerda temos os indices do array e direita os valores 
//nessa abordagem estamos mantendo o valor fixo podemos corrigir usando o numeros.length


for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

//saida apenas dos valores que contem no array numeros


