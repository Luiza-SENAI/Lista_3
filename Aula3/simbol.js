//exemplo 1
let simbolo1 = Symbol("id");
let simbolo2 = Symbol("id");
console.log(simbolo1 === simbolo2); //false

//exemplo 2 
let id = Symbol("id");

let usuario = {
    nome: "Carlos",
    [id]: 12345

};

console.log(usuario.nome + "-" + usuario["id"]);

