document.getElementById("btnContar").addEventListener ("click" , function() {
    
    const totalItens = document.getElementById("listaCursos").getElementsByTagName("li");
    document.getElementById("resultadoContagem").value = totalItens.length;
});