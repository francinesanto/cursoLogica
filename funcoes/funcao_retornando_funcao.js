function retornar() {
  function bomDia() {
    return 'Bom dia!!!';
  }

  return bomDia;
}

console.log(retornar); // [function: retornar]
console.log(retornar()); // [function: bomDia]
console.log(retornar()()); // Bom dia!

// fazendo com uma funcao anonima

function retornarFuncao() {
  return function () {
    return 'Boa tarde';
  };
}

console.log(retornarFuncao); //[function: retornarFuncao]
console.log(retornarFuncao()); // [function],
console.log(retornarFuncao()()); //Boa tarde
