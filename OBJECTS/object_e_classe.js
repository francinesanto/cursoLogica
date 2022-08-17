//fazendo o exemplo da data com uma classe
class Data {
    constructor(dia = 1, mes = 1, ano = 1970 ) {
        this.dia = dia;
        this.mes = mes,
        this.ano = ano

    }

    //para fazer um metodo dentro de class
    exibir() {
        return `A data é ${this.dia}/${this.mes}/${this.ano}}`
    }
}

const d1 = new Data()
console.log(d1)// pega os valores padrões
d1.dia = 10 // alterando um valor
console.log(d1)
console.log(d1.exibir())
const d2 = new Data(31,12,2021)
console.log(d2)
console.log(d2.exibir())