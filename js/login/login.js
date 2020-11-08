console.log("login.js carregado");

const buttonCriar = document.querySelector("#buttonCriar");
const inputEmail  = document.querySelector("#inputEmail");
const inputSenha  = document.querySelector("#inputSenha");

buttonCriar.addEventListener("click", function(){

    console.log("clicado");

    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("senha", inputSenha.value);

});