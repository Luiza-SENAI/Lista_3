const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('qual seu nome? ', (resposta) => {
    console.log('Seja bem-vindo(a) ' + resposta);
    rl.close();
});