// algoritmo pra saber se um aluno está provado, em recuperação ou reprovado

const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

// saber qual nota é a menor
function notaDescarte(n1, n2) {
  return n1 <= n2 ? n1 : n2;
}

function media(n1, n2, n3) {
  const menorNota = notaDescarte(n1, notaDescarte(n2, n3));

  if (menorNota === n1) {
    return (n2 + n3) / 2;
  } else if (menorNota === n2) {
    return (n1 + n3) / 2;
  } else {
    return (n1 + n2) / 2;
  }
}

mediaFinal = media(nota1, nota2, nota3);

function statusAluno(media) {
  if (media >= 7) {
    return 'Aprovado';
  } else if (media >= 4) {
    return 'Recuperação';
  } else {
    return 'Reprovado';
  }
}

console.log(statusAluno(mediaFinal));
