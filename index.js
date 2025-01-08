var formulario = document.getElementById("Supporte");

formulario.onsubmit = function (event) {
    event.preventDefault();

    var nome = document.getElementById("campo_nome").value;
    var email = document.getElementById("campo_email").value;
    var idade = document.getElementById("campo_idade").value;

    var enviar = true;

    if (nome === "" || !isNaN(parseInt(nome))) {
        alert("O campo nome está vazio ou contém um número!");
        document.getElementById("ErroNome");
        enviar = false;
    }

    if (email === "") {
        alert("O campo email está vazio!");
        document.getElementById("ErroEmail");
        enviar = false;
    }

    if (idade === "") {
        alert("O campo idade está vazio!");
        document.getElementById("ErroIdade");
        enviar = false;
    } else if (parseInt(idade) < 18) {
        alert("Erro! 🚫 Você Precisa ter 18 Anos ou mais para Enviar o Formulário!");
        document.getElementById("ErroIdade");
        enviar = false;
    }

    if (enviar) {
        alert("Formulário Enviado com Sucesso!✅");
        location.reload();
    }
};
