const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor em dólares ($): ", (v) => {
  rl.question("Digite a cotação do dólar: ", (c) => {

    let dolares = Number(v);
    let cot = Number(c);

    let reais = dolares * cot;

    console.log("Valor em reais: R$" + reais);

    rl.close();
  });
});