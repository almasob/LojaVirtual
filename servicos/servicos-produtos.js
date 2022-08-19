

const chamaProdutos = () => fetch("http://localhost:3000/produtos")
        .then(resposta => resposta.json())

const criaProdutos = (nome,preco,urlImagem) =>{
    return fetch('http://localhost:3000/produtos',{
        method:"POST",
        headers:{"Content-Type": "application/json"}
        ,
        body: JSON.stringify({nome,preco,urlImagem})
    }).then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error("Nao foi possivel criar produtos")
        })

    
}
    


export const produtosServicos = {
    chamaProdutos,
    criaProdutos
}
