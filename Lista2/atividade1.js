const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Informe seu saldo:  ", (saldo) => {
    let n1 = Number(saldo); 

    if (saldo >= 0){
        console.log("Seu saldo esta positivo");
    }else {
        console.log("Seu saldo esta negativo")
    }
});