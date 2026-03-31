document.getElementById("btnPrimeiro").addEventListener
("click", function() {

    let titulo = document.querySelector("li").textContent;
    
    document.getElementById("resultado").value = titulo;
});