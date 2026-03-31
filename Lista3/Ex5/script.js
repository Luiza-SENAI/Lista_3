var itensLista = document.getElementsByTagName("li");

//Primeira disciplina
document.getElementById("btnPrimeiro").addEventListener("click", function() {
document.getElementById("inputPrimeiro").value = itensLista[0].textContent;

});

//Segunda disciplina
document.getElementById("btnSegundo").addEventListener("click", function() {
    document.getElementById("inputSegundo").value = itensLista[1].textContent;

});

//Terceira disciplina
document.getElementById("btnTerceiro").addEventListener("click", function() {
    document.getElementById("inputTerceiro").value = itensLista[2].textContent;


});

//Todas as diciplinas
document.getElementById('btnTodas').addEventListener ('click', function() {
   
    var todosItens = document.querySelectorAll('li');
    var texto = [];
    todosItens.forEach(function(item) {
        texto.push(item.textContent);

    });

    document.getElementById('inputTodas').value = texto.join
    (', ');

});