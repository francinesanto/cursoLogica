const numeros = [1, 2, 3, 4, 5 ]

//passa o indice que deve começar a excluir e a quantidade de elementos
numeros.splice(1,1)

console.log(numeros)//1,3,4,5

numeros.splice(1,2)// 1,5
console.log(numeros)

//exclui o ultimo elemento do array e retorna ele
numeros.pop();
console.log(numeros)//1

