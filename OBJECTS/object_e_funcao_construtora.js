// funcao construtora - > cria um objeto

function Produto() {
    console.log(this)
}

const p1 = new Produto() // usando o new estou criando um objeto

console.log(typeof p1)//object

//transformando o exemplo da data com a funcao construtora
// cria o objeto Data com os atributos dia/mes/ano
function Data(dia = 1, mes = 1, ano = 1976) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data()
const d2 = new Data(10,04,1991)

console.log(typeof d1)
console.log( d1)// exibi a data padrao
console.log( d2)
console.log( d2.exibir())

//a funcao construtora serve tbm para dar a estrutura do objeto como a classe