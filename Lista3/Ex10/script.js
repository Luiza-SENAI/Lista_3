const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaCursos");
const input = document.getElementById("inputCurso");

botao.onclick = function() {
    const nomeCurso = input.value;

    if (nomeCurso.trim() !== "") {
        
        const novoLi = document.createElement("li");
        
        novoLi.textContent = nomeCurso;
        
        lista.appendChild(novoLi);
        
        input.value = "";
        input.focus();
        
    } else {
        alert("Digite o nome de um curso!");
    }
};