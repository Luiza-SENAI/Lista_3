const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor do produto: ", (v) => {
  rl.question("Digite o percentual de desconto(1-100): ", (d) => {

    let preco = Number(v);
    let perc = Number(d);

    let valorDesconto = preco * (perc / 100);
    let valorFinal = preco - valorDesconto;

    console.log("Valor final a ser pago: R$ " + valorFinal);

    rl.close();
  });
});