const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual a altura do retangulo: ", (altura) => {
    rl.question('Qual o tamanho da base: ', (base) => {

    let n1 = Number (altura);
    let n2 = Number (base);

    let area = base * altura;
    rl.close;

    console.log("A área do seu retangulo é de " + area);

    });
})