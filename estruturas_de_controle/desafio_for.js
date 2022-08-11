// mostrar numeros do 7 até 3

for(let controle = 7; controle >= 3; controle--){
    console.log(controle)
}

console.log(`Fim`)
console.log(`------`)
// usando dois laços 

for(let x = 1; x <=3; x++) {
    let linha = ''
    for( let y =1; y <= 3; y++){
        linha +=`[${x}, ${y}]`
    }
    console.log(linha)
}

//desafio #

let linha = ''
let ser = '######'
for(let i = ''; i < ser.length; i++){
    linha += '#'
    console.log(linha)
}