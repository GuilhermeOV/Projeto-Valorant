document.addEventListener("DOMContentLoaded", function () {
    function manipular(formulario, comentariosDiv, contador) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            if (contador === 0) {
                var comentario = formulario.querySelector("textarea").value.trim();

                if (comentario) {
                    var novoComentarioDiv = document.createElement("div");
                    novoComentarioDiv.classList.add("coment");

                    var novaimagem = document.createElement("img");
                    novaimagem.src = "imagens/comentario3.webp";

                    var novoComentario = document.createElement("p");
                    novoComentario.textContent = comentario;

                    novoComentarioDiv.appendChild(novaimagem);
                    novoComentarioDiv.appendChild(novoComentario);

                    var botaoExcluir = document.createElement("button");
                    botaoExcluir.textContent = "Excluir comentario";
                    botaoExcluir.addEventListener("click", function () {
                        comentariosDiv.removeChild(novoComentarioDiv);
                        contador = 0; 
                    });

                    novoComentarioDiv.appendChild(botaoExcluir);

                    comentariosDiv.appendChild(novoComentarioDiv);

                    formulario.querySelector("textarea").value = "";
                    contador = 1;
                } else {
                    alert("Por favor, insira um comentário válido.");
                }
            } else {
                alert("Limite de comentários por usuário atingido");
            }
        });
    }

    manipular(document.getElementById("formulario1"), document.getElementById("comentarios1"), 0);
    manipular(document.getElementById("formulario2"), document.getElementById("comentarios2"), 0);
    manipular(document.getElementById("formulario3"), document.getElementById("comentarios3"), 0);
});