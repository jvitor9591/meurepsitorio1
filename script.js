const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nome.value == "" || email.value == "" || mensagem.value == "") {
        alert("Por favor, preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso!");
    }
});