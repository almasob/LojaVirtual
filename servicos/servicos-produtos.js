

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

const deletaProdutos = (id)=>{
    return fetch(`http://localhost:3000/produtos/${id}`,{
    method:"DELETE"
    }).then(resposta => 
        {if(!resposta){
            throw new Error("Não foi possivel excluir produto")
            }}

        )
}

const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

const atualizaProduto = (id,url,nome,preco)=>{
    return fetch(`http://localhost:3000/produtos/${id}`,{
        method: 'PUT',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(
            {nome :nome,
            urlImagem :url,
            preco : preco})
    }).then(resposta =>{
        return resposta.json();
    })
}

    


export const produtosServicos = {
    chamaProdutos,
    criaProdutos,
    deletaProdutos,
    detalhaProduto,
    atualizaProduto
}
