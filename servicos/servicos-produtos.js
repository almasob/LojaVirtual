

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

const produtoPesquisado = (nome,preco,urlImagem,id) =>{
    const card = document.createElement("div");
    card.classList.add("principal__box");
    card.id = id;
    const conteudo = 
    `   <img src="${urlImagem}" alt="${nome}" class="box__img">
        <h3 class="box__nome">${nome}</h3>
        <h3 class="box__preco">${preco}</h3>
        <h3 class="box__ver" data-ver >Ver Produto</h3>
        `
    card.innerHTML = conteudo;
    return card;
}

const descricaoProdutos = (nome,preco,urlImagem)=>{
    const conteudo = 
`<div class="descricao__principal-unico">
    <img src="${urlImagem}" class="img__unico">
    <div class="infos__unico container">
        <h2 class="unico__titulo">${nome}</h2>
        <h2 class="unico__preco">${preco}</h2>
        <p class="unico__paragrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium vero dolorem, obcaecati laborum quas perspiciatis molestias hic expedita fugiat pariatur enim totam? Libero, reprehenderit. Dolores accusamus expedita doloribus excepturi?</p>
    </div>
</div>  
<div class="descricao__principal-varios container">
    <h2 class="varios__titulo">Produtos similares</h2>
    <div class="varios__box" id="13">
        <img src="./imagens/diversosCamisaatari.png" alt="" class="varios__img" >
        <h3 class="varios__nome">Camiseta Atari</h3>
        <h3 class="varios__preco">R$49,90</h3>
        <h3 class="varios__ver" data-ver>Ver Produto</h3>
    </div>
    <div class="varios__box" id="2">
        <img src="./imagens/starLego.jpg" alt="" class="varios__img" >
        <h3 class="varios__nome">Lego Darth Vader</h3>
        <h3 class="varios__preco">R$499,90</h3>
        <h3 class="varios__ver" data-ver>Ver Produto</h3>
    </div>
    <div class="varios__box" id="4">
        <img src="./imagens/starFantasia.jpg" alt="" class="varios__img" >
        <h3 class="varios__nome">Fantasia Stormtrooper</h3>
        <h3 class="varios__preco">R$199,90</h3>
        <h3 class="varios__ver" data-ver>Ver Produto</h3>
    </div>
    <div class="varios__box" id="6">
        <img src="./imagens/starBaby.jpg" alt="" class="varios__img" >
        <h3 class="varios__nome">Boneco Baby Yoda</h3>
        <h3 class="varios__preco">R$209,90</h3>
        <h3 class="varios__ver" data-ver>Ver Produto</h3>
    </div>
    <div class="varios__box" id="8">
        <img src="./imagens/consolesPlay5.jpg" alt="" class="varios__img" >
        <h3 class="varios__nome">PlayStation 5</h3>
        <h3 class="varios__preco">R$4990,90</h3>
        <h3 class="varios__ver" data-ver>Ver Produto</h3>
    </div>
    <div class="varios__box" id="1">
        <img src="./imagens/starCaneca.jpg" alt="" class="varios__img" >
        <h3 class="varios__nome">Caneca Stormtrooper</h3>
        <h3 class="varios__preco">R$57,00</h3>
        <h3 class="varios__ver" data-ver>Ver Produto</h3>
    </div>
</div>`

return conteudo;
    
}

    


export const produtosServicos = {
    chamaProdutos,
    criaProdutos,
    deletaProdutos,
    detalhaProduto,
    atualizaProduto,
    produtoPesquisado,
    descricaoProdutos
}
