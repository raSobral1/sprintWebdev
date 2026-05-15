let materias = ["Front-end", "Cálculo", "Python", "Web-Development"];

let imagens = [
    "imagens/see.jpg",
    "imagens/home.jpg",
    "imagens/galeria.jpg"
];

let imagemAtual = 0;

function fazerLogin() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    if (nome === "") {
        alert("Digite seu nome.");
        return;
    }

    if (senha.length < 4) {
        alert("A senha precisa ter pelo menos 4 caracteres.");
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("sistema").style.display = "block";
    document.getElementById("mensagem").innerHTML = "Bem-vindo(a), " + nome + "!";

    mostrarMaterias();

    alert("Login realizado com sucesso!");
}

function mostrarMaterias() {
    let lista = document.getElementById("listaMaterias");
    lista.innerHTML = "";

    for (let i = 0; i < materias.length; i++) {
        lista.innerHTML += "<li>" + materias[i] + "</li>";
    }
}

function ativarSLID() {
    alert("Modo SLID ativado!");

    let confirmar = confirm("Deseja simular o funcionamento do SLID?");

    if (confirmar) {
        alert("Câmera ativada, áudio capturado e conteúdo identificado.");
    } else {
        alert("Simulação cancelada.");
    }
}

function adicionarMateria() {
    let novaMateria = prompt("Digite o nome da nova matéria:");

    if (novaMateria === "" || novaMateria === null) {
        alert("Nenhuma matéria foi adicionada.");
    } else {
        materias.push(novaMateria);
        mostrarMaterias();
        alert("Matéria adicionada com sucesso!");
    }
}

function proximaImagem() {
    imagemAtual++;

    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }

    document.getElementById("imagem").src = imagens[imagemAtual];
}

function voltarImagem() {
    imagemAtual--;

    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1;
    }

    document.getElementById("imagem").src = imagens[imagemAtual];
}

function sair() {
    alert("Você saiu do sistema.");

    document.getElementById("sistema").style.display = "none";
    document.getElementById("login").style.display = "block";
}