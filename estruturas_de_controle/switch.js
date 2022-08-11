//usado para verificar casos, nao é usado o true or false

let nota = 8.8

switch(Math.ceil(nota)) { //Math.ceil arredonda pra cima 
    case 10:
    case 9:
    case 8:
    case 7:    
        console.log('Aprovado')
        break
    case 6:
    case 5:
    case 4:    
        console.log('Prova Recuperação')
        break
    case 3: 
    case 2:
    case 1:    
        console.log('Reprovado')
        break
    default: 
        console.log('Não entrego atividades/prova')
}

console.log(`Fim`)