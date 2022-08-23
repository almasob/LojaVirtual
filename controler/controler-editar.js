import {produtosServicos} from '../servicos/servicos-produtos.js'

const pegaURL = new URL (window.location);
const idURL = pegaURL.searchParams.get('id')

const editaURL = document.querySelector("[data-url]");
const editaNome = document.querySelector("[data-nome]");
const editaPreco = document.querySelector("[data-preco]");

produtosServicos.detalhaProduto(idURL)
.then(dados => {
    editaURL.value = dados.urlImagem;
    editaNome.value = dados.nome;
    editaPreco.value = dados.preco;
})

const form = document.querySelector("[data-form]")

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    produtosServicos.atualizaProduto(idURL,editaURL.value,editaNome.value,editaPreco.value)
    .then(()=>{window.location.href="produtos.html"} )
})


