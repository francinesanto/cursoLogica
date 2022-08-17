const notas = [7,8,3,5,10,9,8,8 ]

//imprimi cada elemento do array notas
let valores = ''
for(let nota of notas) {
    valores += nota + ' '
}
console.log(valores)

//imprimi cada indice do array notas
let indices = ''

for(let indice in notas) {
    indices += indice + ' '
}
console.log(indices)