const numeros = [1, 2, 3, 4, 5 ]
console.log(numeros)

numeros.push(6) // adiciona o elemento 6
console.log(numeros)

console.log(numeros.join(' - '))// junta os elementos com o caracterer escolhido e retorna uma string


const numero2 = numeros.concat(7,8,9) // junta os valores dos dois arrays e retorna um novo com esses valores
console.log(numero2)

console.log(numeros.includes(10))//false - o 10 nao existi no array numeros 

console.log(numeros.indexOf(4))// retorna o index do primeiro elemento com valor 4
console.log(numeros.indexOf(2,3))// quer o indice do elemento com valor 2 a partir do 3 indice
//se ele nao encontrar o retorno é um -1
