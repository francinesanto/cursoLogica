//Area de circuferencia

const PI = 3.14

let raio = 10 

let area = PI * raio * raio

console.log("A área da circuferencia é " + area + "m2 ")

//javascritp tem uma funcao de PI

const PIjs = Math.PI

let raioJs = 10

let area1 = PIjs * raio * raio

console.log("A área da circuferencia é " + area1 + "m2 ")


// podemos fazer a exponenciaçao com uma funcao

let area2 = PIjs * raio ** raio
console.log("A área da circuferencia é " + area2 + "m2 ")

// temos uma funcao para arrendodar o resultato

let area3 = Math.round(PIjs * raio * raio)
console.log("A área da circuferencia é " + area3 + "m2 ")