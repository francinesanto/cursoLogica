//             0    1    2   3    4    5 -- indices      
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8]

console.log(notas)
console.log(notas[3])//mostra 9.5
console.log(notas[4] = 8.7)
console.log(notas[6])// undefined pq nao tem esse indice
console.log(notas)

// pra confirmar se é um array
console.log(Array.isArray(notas))//true