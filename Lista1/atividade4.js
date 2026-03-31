const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe o seu peso: ", (peso) => {
    rl.question('Informe a sua altur: ', (altura) => {

    let valor1 = Number (peso);
    let valor2 = Number (altura);
    rl.close;

    let IMC = peso / (altura * altura);

    console.log("O seu IMC é: " + IMC);
    });
})