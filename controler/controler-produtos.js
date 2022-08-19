

import { produtosServicos } from "../servicos/servicos-produtos.js";

//criamos uma div que receberá as informações do novo produto
const novoProduto = (nome,preco,urlImagem) =>{
    const card = document.createElement("div");
    card.classList.add("produtos__box");
    const conteudo = 
    `   <div class="box__icones">
            <img src="./imagens/lixo.png" alt="icone lixo" class="icone__lixo">
            <img src="./imagens/lapis.png" alt="icone lapis" class="icone__lapis">
        </div>
        <img src="${urlImagem}" alt="${nome}" class="box__img">
        <h3 class="box__nome">${nome}</h3>
        <h3 class="box__preco">${preco}</h3>
        <h3 class="box__ver">Ver Produto</h3>
        `

    card.innerHTML = conteudo;
    return card;
}

//aqui é a div de tods os produtos, onde cada adicionado será filho
const todosProdutos = document.querySelector("[data-produtos]");


//colocamos o produto na div de todos os produtos
const render = async () => {
    try{
        const listaProdutos = await produtosServicos.chamaProdutos()
        listaProdutos.forEach(item => {
            todosProdutos.appendChild(novoProduto(item.nome,item.preco,item.urlImagem))
        })
        }
    catch(erro){
        console.log("ola")
    }
}

render()
