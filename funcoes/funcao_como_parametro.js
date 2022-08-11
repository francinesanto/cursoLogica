function executar(funcao) {
  if (typeof funcao === 'function') {
    console.log(funcao());
  }
}

function bomDia() {
  return 'Bom dia';
}

executar(3); // nao acontece nada
executar(bomDia); //retorna Bom dia

const x = bomDia; // passando a funcao pra uma variavel
const y = bomDia(); // aqui já está chamando a funçao

console.log(x()); // tem que colocar os parenteses
console.log(y);
