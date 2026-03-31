const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", (n1) => {
    rl.question("Digite o segundo número: ", (n2) => {
        rl.question("Escolha a operação (+, -, *, /): ", (op) => {
            
            let operacao = Number(op)
            let numero1 = Number(n1)
            let numero2 = Number(n2)


if (operacao == "+") {
    console.log("Resultado: " + (numero1 + numero2));
} 
else if (operacao == "-") {
    console.log("Resultado: " + (numero1 - numero2));
} 
else if (operacao == "*") {
    console.log("Resultado: " + (numero1 * numero2));
} 
else if (operacao == "/") {
    console.log("Resultado: " + (numero1 / numero2));
} 
else {
    console.log("Operação inválida.");
}
rl.close()
        });
    });
});