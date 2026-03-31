const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o consumo de Kwh: ", (c) => {
    rl.question("Digite o valor do Kwh: ", (v) => {

        let consumo = Number(c);
        let valor = Number(v);

        let valortotal = consumo * valor;

        console.log("O valor total da conta é de: R$" + valortotal);

        rl.close();

    });
});