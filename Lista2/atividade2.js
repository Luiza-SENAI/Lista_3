const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Quantos graus esta a sua cidade:  ", (graus) => {
   
    let n1 = Number(graus); 

    if (graus <= 15){
        console.log("A temperatura " + graus + " é fria");
    }else if (graus >=30){
        console.log("A temperatura " + graus + " é quante")
    }else {
        console.log("A temperatura " + graus + " é agradavel")

    }
    });