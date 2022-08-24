import { produtosServicos } from "../servicos/servicos-produtos.js"

const div = document.querySelector('[data-todosProdutos]')

produtosServicos.chamaProdutos()
.then(resposta =>{
    resposta.forEach(item =>{
        const i = produtosServicos.produtoPesquisado(item.nome,item.preco,item.urlImagem,item.id)
        div.appendChild(i)
    })
})