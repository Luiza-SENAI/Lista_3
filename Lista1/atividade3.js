const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Adicione a temperatura em graus celsius", (celsius) => {

    let Fahrenheit = ((celsius * 9)/5) + 32

    console.log("A temperatura em Fahrenheit é: " + Fahrenheit);
});