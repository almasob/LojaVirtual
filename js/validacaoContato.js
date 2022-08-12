const inputNome = document.querySelector('[data-tipo=nome]');
const inputMsg = document.querySelector('[data-tipo=mensagem]');
const inputs = [inputNome,inputMsg];

inputs.forEach(input => {
    input.addEventListener("blur",(evento)=>{
        validar(evento.target)
    })
        
}
)

function validar(input){
    let valido = input.validity.valid;
    let msgErro = document.querySelectorAll('[data-tipo=msgErro]')
    let index = inputs.indexOf(input)
    if(!valido){
        msgErro[index].textContent = "Campo não pode estar em branco"
    }else{
        msgErro[index].textContent = ""
    }
}
  