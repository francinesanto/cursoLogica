function sempreRetornaUm() {
  return 1;
}

const valor = sempreRetornaUm();
console.log(valor);

function textoOuNumero(textoOuNumero) {
  if (textoOuNumero) {
    return 'Sou um texto';
  }

  return 123;
}

console.log(textoOuNumero(true));
