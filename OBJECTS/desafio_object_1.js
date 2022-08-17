const data = {
    dia: 10,
    mes: 04,
    ano: 1991,
    dataDeNascimento: function() {
        return `A data do meu aniversário é ${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data.dataDeNascimento())
console.log(data.dataDeNascimento())