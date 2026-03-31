const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro valor", (valor1) => {
    rl.question('igite o segundo valor', (valor2) => {

    let n1 = Number (valor1);
    let n2 = Number (valor2);

    console.log("O resultado das quatro operações: ");
    console.log("SOMA: " + (n1 + n2 ));
    console.log("SUBTRAÇÃO: " + (n1 - n2));
    console.log('MULTIPLICAÇÃO: ' + (n1 * n2));
    console.log('DIVISÃO: ' + (n1 / n2));

    });
})


