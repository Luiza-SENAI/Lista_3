const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu salário base (R$): ", (s) => {
    let salario = Number(s);
    let bonus = salario * 1.1;
    
    console.log("Seu salario aumentou para: R$" + bonus );

    rl.close();
});