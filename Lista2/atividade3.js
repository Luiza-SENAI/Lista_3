const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual o dia da semana (de 1 á 7):  ", (dia) => {
   
    let n1 = Number(dia); 
    rl.close;

    if (dia == 1) {
        console.log("É domingo")
    }else if (dia == 2) {
        console.log("É segunda")
    }else if (dia == 3) {
        console.log("É terça")
    }else if (dia == 4) {
        console.log("É quarta")
    }else if (dia == 5) {
        console.log("É quinta")
    }else if (dia == 6) {
        console.log("É sexta")
    }else if (dia == 7) {
        console.log("É sabado")
    }else {
        console.log("Número invalido, o programa so aceita valorores de 1 á 7")
    }
});