const botaoEntrar = document.querySelector(".entrar");
const modalEntrar = document.querySelector(".modal-entrar");
botaoEntrar.addEventListener("click", function(event) {
    event.preventDefault();
    modalEntrar.style.display = "flex";
    
});

const botaoCriar = document.querySelector(".criar-conta");
const modalCriar = document.querySelector(".modal-criar");
botaoCriar.addEventListener("click", function(event) {
    event.preventDefault();
    modalCriar.style.display = "flex";
    
});
const botaoFecharEntrar = document.querySelector(".fechar-entrar");
botaoFecharEntrar.addEventListener("click", function() {

    modalEntrar.style.display = "none";
});

const botaoFecharCriar = document.querySelector(".fechar-criar");
botaoFecharCriar.addEventListener("click", function() {

    modalCriar.style.display = "none";
});