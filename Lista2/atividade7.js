const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número:  ", (valor1) => {
    rl.question("Digite outro número:  ", (valor2) => {
   
    let n1 = Number(valor1); 
    let n2 = Number(valor2);
    rl.close;

    if (valor1 > valor2) {
        console.log("O  " + valor1 + " é maior que " + valor2)
    }else if (valor1 < valor2){
        console.log("O  " + valor2 + " é maior que " + valor1)
    }else{
        console.log("Os valores " + valor1 + " e " + valor2 + " são iguais")
    }
})
});