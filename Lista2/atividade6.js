const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número:  ", (valor) => {
   
    let n1 = Number(valor); 
    rl.close;

    if (valor < 0) {
        console.log("O númeor é negativo")
    }else if (valor > 0){
        console.log("O número é positivo")
    }else{
        console.log("O valor é igual a zero")
    }
});