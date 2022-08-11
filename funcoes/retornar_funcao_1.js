function somar(a) {
  return function (b) {
    return a + b;
  };
}

console.log(somar(5)(4));

const somar10 = somar(10);

console.log(somar10(5)); // 15

// esse exemplo seria util para um calculo de imposto por exemplo
