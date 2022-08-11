// usando if dentro de else
let hora = 11
let saudacao
if (hora < 12) {
    saudacao = 'Bom dia'
} else {
    if (hora < 18) {
        saudacao = 'Boa tarde'
    } else {
        saudacao = 'Boa noite'
    }
}

console.log(saudacao)

// uso do else if

let hora1 = 18
let saudacao1
if (hora1 < 12) {
    saudacao1 = 'Bom dia'
} else if (hora1 < 18) {
    saudacao1 = 'Boa tarde'
} else {
    saudacao1 = 'Boa noite'
}

console.log(saudacao1)