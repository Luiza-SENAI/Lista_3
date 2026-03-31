const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Escolha um numero do menu de 1 a 3: ", (valor) => {

    let escolha = Number(valor)

switch (escolha) {
    case 1:
        console.log("Seu pedido foi Pizza.");
        break;
    case 2:
        console.log("Seu pedido foi Hambúrguer.");
        break;
    case 3:
        console.log("Seu pedido foi Salada.");
        break;
    default:
        console.log("Opção inválida.");
}
rl.close()

});