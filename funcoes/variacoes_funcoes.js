//funcao com parametros e retorna valores

function sum(num1, num2) {
  return num1 + num2;
}

let resultado = sum(30, 56);
console.log(resultado);

//funcao com parametro e sem retorno

function exibirMulti(a, b) {
  console.log(a * b);
}
exibirMulti(10, 2);

// funcao sem parametro e com retorno

function retornoDataAtual() {
  return new Date();
}

console.log(retornoDataAtual());

//funcao sem parametro e sem retorno

function exibirHoraAtual() {
  console.log(new Date().getHours());
}

exibirHoraAtual();
