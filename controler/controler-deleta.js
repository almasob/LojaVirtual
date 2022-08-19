import {produtosServicos} from '../servicos/servicos-produtos.js'

window.addEventListener("click",(event)=>{

    const clicado = event.target;
    const clicadoLixo = clicado.classList.contains("icone__lixo");
    if(clicadoLixo){
        const box = clicado.closest(".produtos__box");
        produtosServicos.deletaProdutos(box.id);

    }
})