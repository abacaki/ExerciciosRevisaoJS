// EXERCÍCIO 05 - DESCONTO
// Considere:
//
// let preco = 200;
// let desconto = 20;
//
// Calcule o valor do desconto e o preço final.
// O desconto está em porcentagem.

// Escreva sua solução abaixo:

let preco = 200;
let desconto = 20;
let valorDesconto = (preco * desconto)/100;
const total = preco - valorDesconto;

console.log(`200 reais com um desconto de 20% tem o preço final de: ${total} `);