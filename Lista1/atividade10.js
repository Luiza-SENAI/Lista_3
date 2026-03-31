const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o comprimento da caixa (cm): ", (c) => {
    rl.question("Digite a largura da caixa (cm): ", (l) => { 
        rl.question("Digite a altura da caixa (cm): ", (a) => {

            let comprimento = Number(c);
            let largura = Number(l);
            let altura = Number(a);
            
            let volume = comprimento * largura * altura;

            console.log("O volume da caixa é: " + volume);

            rl.close();

        });
    });
});