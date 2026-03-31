document.getElementById("btnTitulo").addEventListener
("click", function() {

    let titulo = document.getElementById("titulo");
    
    document.getElementById("inputTitulo").value = titulo.textContent;
});