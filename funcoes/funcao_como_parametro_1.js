function executar(fn, n1, n2) {
  if (typeof fn === 'function') {
    console.log(fn(n1, n2));
  }
}

function somar(a, b) {
  return a + b;
}

executar(somar, 90, 50);
