console.log("dashboard.js carregado");

const buttonAlugar = document.querySelector("#buttonAlugar");

buttonAlugar.addEventListener("click", function(){

    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("senha"));

});