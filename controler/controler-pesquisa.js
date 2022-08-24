import { produtosServicos } from "../servicos/servicos-produtos.js"

const pesquisa = document.querySelector("[data-pesquisa]")
const pesquisar = document.querySelector("[data-pesquisar]")
const box = document.querySelector('[data-resultado]')
const lista = []

pesquisar.addEventListener("click", ()=>{
    
    if(pesquisa.value.length > 0){
        produtosServicos.chamaProdutos().then((resposta)=>{
            resposta.forEach((item)=>{
                let nome = item.nome
                if(nome.toLowerCase().includes(pesquisa.value.toLowerCase())){
                    lista.push(item)
                    
                }
            })  
            localStorage.setItem("produtos",JSON.stringify(lista)) 
            window.location.pathname = "/resultadoPesquisa.html"
        })
        
        
    }   else{
            alert("DIGITE ALGO PARA PESQUISAR!")
        }
})


if(window.location.pathname == '/resultadoPesquisa.html'){
    const local = JSON.parse(localStorage.getItem("produtos"))
    local.forEach(i =>{
        box.appendChild(produtosServicos.produtoPesquisado(i.nome,i.preco,i.urlImagem,i.id))
    })
    if(local.length == 0){
    const div = document.createElement("div")
    div.innerHTML = "<h2 style='color:red;font-weight:bold'>Nenhum produto encontrado</h2>";
    box.appendChild(div)
    }
}

