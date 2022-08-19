

import { produtosServicos } from "../servicos/servicos-produtos.js";

const form = document.querySelector("[data-form]")

form.addEventListener("submit",(evento)=>{
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imgUrl = document.querySelector("[data-url]").value;

    produtosServicos.criaProdutos(nome,preco,imgUrl).then(resposta =>{
        window.location.pathname = "/produtos.html"
        console.log(resposta)
    }).catch(erro => {
        console.log(erro)
    })
})
