const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a primeira nota: ", (n1) => {
    rl.question("Digite a segunda nota: ", (n2) => { 
        rl.question("Digite a terceira nota: ", (n3) => {

            let nota1 = Number(n1);
            let nota2 = Number(n2);
            let nota3 = Number(n3);

            let media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

            console.log("A media ponderada é: " + media);

            rl.close();

        });
    });
});