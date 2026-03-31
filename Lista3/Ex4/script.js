var cursos = document.getElementsByTagName("li");

document.getElementById("btnPrimeiro").addEventListener("click", function(){
document.getElementById("input1").value = cursos[0].textContent;
});

document.getElementById("btnSegundo").addEventListener("click", function(){
document.getElementById("input2").value = cursos[1].textContent;
});

document.getElementById("btnTerceiro").addEventListener("click", function(){
document.getElementById("input3").value = cursos[2].textContent;
});
