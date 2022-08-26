import{produtosServicos} from "../servicos/servicos-produtos.js"



window.addEventListener("click",(event)=>{
    const clicado = event.target;
    const verProduto = clicado.hasAttribute('data-ver');
    

    if(verProduto){
        let idBox = parseInt(clicado.closest("div").id,10);
        produtosServicos.chamaProdutos().then((resposta)=>{
            resposta.forEach((item)=>{
                if(item.id == idBox){
                    localStorage.setItem("descricao",JSON.stringify(item))
                }
            })
            
            window.location.pathname = '/descricao.html'
        })
    }

    
}) 
    
if(window.location.pathname == '/descricao.html'){
    const div = document.querySelector("[data-desc]");
    const local = JSON.parse(localStorage.getItem("descricao"))
    const conteudo = produtosServicos.descricaoProdutos(local.nome,local.preco,local.urlImagem);
    div.innerHTML = conteudo
}


