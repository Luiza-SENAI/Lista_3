document.getElementById("btnParagrafo").addEventListener
("click", function() {

    var texto = document.getElementById("btnParagrafo");
    
    document.getElementById("inputParagrafo").value = texto.textContent;
});