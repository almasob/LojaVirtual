import {produtosServicos} from '../servicos/servicos-produtos.js'

const pegaURL = new URL (window.location);
const idURL = pegaURL.searchParams.get('id')

const editaURL = document.querySelector("[data-url]");
const editaNome = document.querySelector("[data-nome]");
const editaPreco = document.querySelector("[data-preco]");

window.addEventListener("click",(evento) =>{
    const cliquei = evento.target;
    const clicadoLapis = cliquei.classList.contains("icone__lapis")

    if(clicadoLapis){
        const id = cliquei.closest(".produtos__box").id;
        window.location.href = `editar.html?id=${id}`
        
    }


})

produtosServicos.detalhaProduto(idURL)
.then(dados => {
    editaURL.value = dados.urlImagem;
    editaNome.value = dados.nome;
    editaPreco.value = dados.preco;
})