//obejto mais complexo
const client = {
    codigo: 1,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 101 Bloco B',
        pontosRef: [
            'Hospital X',
            'Shopping Y'
        ]
    },
    nomeFilhos: ['Bia', 'Carlos']
}

console.log(client.endereco.complemento)