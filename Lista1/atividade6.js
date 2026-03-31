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

            let Soma = nota1 + nota2 + nota3;
            let media = Soma / 3;

            console.log("A media aritmetica é: " + media);

            rl.close();

        });
    });
});
