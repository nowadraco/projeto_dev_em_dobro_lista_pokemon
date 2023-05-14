const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaotrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscurEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscurEstaAtivo) {
        body.classList.remove("modo-escuro");
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        body.classList.add("modo-escuro");
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
