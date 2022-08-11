function somar(a, b, c, d) {
  return a + b + c + d;
}

console.log(somar(1, 2, 3, 4)); //10
console.log(somar(1, 2, 3)); //NaN

//definindo um valor default para um parametro

function sum(a, b, c, d = 0) {
  return a + b + c + d;
}

console.log(sum(1, 2, 3, 4, 5, 6)); // o js nao da erro se for passado mais argumentos do que o esperado o retorno é 10
console.log(sum(1, 2, 3, 4)); //10
console.log(sum(1, 2, 3)); //6
