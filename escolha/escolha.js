// ENCONTRANDO OS CARTÕES

const mascotes = document.querySelectorAll(".mascote");

const animais = ["capivara", "coala", "dinossauro"];

animais.forEach(function(animal) {

    for (let frame = 1; frame <= 3; frame++) {

        const imagem = new Image();

        imagem.src = "../assets/" + animal + "/" +
                     animal + frame + ".png";

    }

});
// GUARDANDO A ESCOLHA

let mascoteEscolhido = null;


// CONTROLE DA ANIMAÇÃO

let temporizadorAnimacao = null;
let imagemAnimada = null;


// FUNÇÃO PARA MOSTRAR A IMAGEM PARADA

function imagemParada(mascote) {

    const nome = mascote.dataset.mascote;

    const imagem = mascote.querySelector(".imagem-mascote");

    // Exemplo: ../assets/capivara/capivara1.png

    imagem.src = "../assets/" + nome + "/" + nome + "1.png";

}


function animarMascote(mascote) {

    // Cancela a animação anterior
    clearTimeout(temporizadorAnimacao);

    // Restaura o personagem anterior
    if (imagemAnimada !== null) {

        imagemParada(imagemAnimada);

        const imagemAnterior =
            imagemAnimada.querySelector(".imagem-mascote");

        imagemAnterior.classList.remove("animando");
    }

    imagemAnimada = mascote;

    const nome = mascote.dataset.mascote;

    const imagem = mascote.querySelector(".imagem-mascote");

    let frame = 1;

    // Mostra o primeiro desenho
    imagemParada(mascote);

    // Reinicia a animação do CSS
    imagem.classList.remove("animando");

    void imagem.offsetWidth;

    imagem.classList.add("animando");


    function proximoFrame() {

        frame++;

        imagem.src = "../assets/" + nome + "/" +
                     nome + frame + ".png";

        if (frame < 3) {

            temporizadorAnimacao = setTimeout(
                proximoFrame,
                250
            );

        } else {

            temporizadorAnimacao = setTimeout(function() {

                imagemParada(mascote);

                imagem.classList.remove("animando");

                temporizadorAnimacao = null;

            }, 250);

        }

    }

    temporizadorAnimacao = setTimeout(
        proximoFrame,
        250
    );

}

// EVENTO DE SELEÇÃO

mascotes.forEach(function(mascote) {

    mascote.addEventListener("click", function() {

        // Remove as cores da seleção anterior

        mascotes.forEach(function(item) {

            item.classList.remove(
                "capivara-selecionada",
                "coala-selecionado",
                "dinossauro-selecionado"
            );

        });


        // Descobre qual animal foi escolhido

        mascoteEscolhido = mascote.dataset.mascote;


        // Adiciona a cor correspondente

        if (mascoteEscolhido === "capivara") {

            mascote.classList.add("capivara-selecionada");

        } else if (mascoteEscolhido === "coala") {

            mascote.classList.add("coala-selecionado");

        } else if (mascoteEscolhido === "dinossauro") {

            mascote.classList.add("dinossauro-selecionado");

        }


        // Reproduz a animação do animal escolhido

        animarMascote(mascote);

    });

});