document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    let resposta = document.getElementById("resposta");

    if (nome && email && mensagem) {
        resposta.innerHTML = "Mensagem enviada com sucesso!";
        resposta.style.color = "green";

        // Limpar os campos após o envio
        document.getElementById("formContato").reset();
    } else {
        resposta.innerHTML = "Por favor, preencha todos os campos.";
        resposta.style.color = "red";
    }
});

