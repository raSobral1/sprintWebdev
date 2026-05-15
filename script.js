let materias = ["Front-end", "Cálculo", "Python", "Web-Development"];

let imagens = [
    "imagens/see.png",
    "imagens/home.png",
    "imagens/galeria.png"
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