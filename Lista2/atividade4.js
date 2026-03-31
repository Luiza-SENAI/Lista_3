const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual o dia da semana (de 1 á 7):  ", (dia) => {
   
    let n1 = Number(dia); 
    rl.close;

    if (dia == "Sabado" || dia == "Domingo") {
        console.log("é fim de semana");
    } else {
        console.log("Não é fim de semana")
    }
});