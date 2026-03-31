const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Para descobrir o perimetro do circulo, infome o raio ", (valor1) => {
    
    let raio = Number (valor1);
    let pi = (3.14);

    let resultado = (valor1 * pi) * 2;

    console.log("O perimetro do circulo é " + resultado);
});