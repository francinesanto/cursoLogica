function imc(peso, altura) {
  let imc = peso / (altura * altura);
  let resultado;

  if (imc < 18.5) {
    resultado = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    resultado = 'Peso Normal';
  } else if (imc >= 25 && imc < 30) {
    resultado = 'Sobrepeso';
  } else if (imc >= 30 && imc < 35) {
    resultado = 'Obesidade Grau I';
  } else if (imc >= 35 && imc < 40) {
    resultado = 'Obesidade Grau II';
  } else {
    resultado = 'Obesidade Grau III ou Mórbida';
  }

  return resultado;
}

let resposta = imc(35, 1.5);

console.log(resposta);
