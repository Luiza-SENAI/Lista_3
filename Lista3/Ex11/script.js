const botao = document.getElementById("botaoRemover");
const lista = document.getElementById("minhaLista");

botao.onclick = function() {
    if (lista.lastElementChild) {
        
        const ultimoItem = lista.lastElementChild;
        
        lista.removeChild(ultimoItem);
        
    } else {
        alert("A lista já está vazia!");
    }
};