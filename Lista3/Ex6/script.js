//botão 1
document.getElementById("bntaviso1").addEventListener ("click" , function() {

    let aviso1 = document.getElementsByClassName("aviso1")[0].textContent;

    document.getElementById("resultado1").value = aviso1;
});

//botão 2
document.getElementById("btnAviso2").addEventListener("click", function() {

    let aviso2 = document.getElementsByClassName("aviso2")[1].textContent;

    document.getElementById("resultado2").value = aviso2;
});