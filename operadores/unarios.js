let a = 1

a = a + 1
a += 1
a++

console.log(a)


// temos precedencia nos operadores
let b = 2 

console.log(++a === b++)// verdadeiro
//evitar codigo confuso
//aqui o b valeria 3
console.log(a === b)// falso

//negacao
console.log(!true)// false
console.log(!false)// verdadeiro

//usar a dupla negacao pra avaliar se algo vai ser faço ou verdadeiro
console.log(!!true)// continua a ser verdadeiro
console.log(!!'')// string vazia é false
console.log(!!0)// 0 é false