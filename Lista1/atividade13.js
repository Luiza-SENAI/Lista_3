const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cotacao = 5.5; 

rl.question("Digite o valor em Reais (R$): ", (v) => {

  let reais = Number(v);
  let dolar = reais / cotacao;

  console.log("Valor em dólar: $" + dolar);

  rl.close();
});