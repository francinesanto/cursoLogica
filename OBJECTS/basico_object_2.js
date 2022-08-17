//podemos ter uma funcao dentro de um objeto

const produto = {
    nome: 'iPad',//nome é um atributo do objeto
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function(){ //precoComDesconto é um metodo do objeto
        return this.preco * (1 - this.desconto)
    }
    //usamos o this para referenciar algo que esta dentro de um objeto
}

console.log(produto.precoComDesconto())