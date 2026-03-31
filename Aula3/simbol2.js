let id = Symbol("id");

let usuario = {
    nome: "joao",
    idade: 30,
    [id]: 12345
};

console.log("Nome do usuario é: ", usuario.nome);
console.log("ID do usuario é: ", usuario[id]);
console.log("O usuario tem ", usuario.idade, "anos");
console.log("O tipo de dado de id é: ", typeof id);