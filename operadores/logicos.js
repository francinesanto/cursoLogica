// operadores logicos  mais usandos && e ||
let t1 = true
let t2 = false

let comprarTV50 =  t1 && t2
console.log('Vamos comprar a TV de 50"?', comprarTV50)

let comprarTV35 =  t1 !== t2
console.log('Vamos comprar a TV de 35"', comprarTV35)

let tomarSorvete = t1 || t2
console.log('Vamos comprar sorvete?', tomarSorvete)

let ficarEmcasa = !tomarSorvete;
console.log('Vamos ficar em casa', ficarEmcasa)
/* exercicio resolvido com if
saber se vamos comprar um tv ou se vamos ficar em casa
*/

let trabalho1 = true
let trabalho2 = true

if(trabalho1 && trabalho2) {
    console.log('Comprar TV 50 polegadas e tomar sorvete')
}else if(trabalho1 || trabalho2) {
    console.log('Comprar TV 35 polegadas e tomar sorvete')
}else{
    console.log('Ficar em casa')
}