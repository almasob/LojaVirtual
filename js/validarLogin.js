const inputEmail = document.querySelector('[data-tipo=email]');
const inputSenha = document.querySelector('[data-tipo=senha]');
const inputs = [inputEmail,inputSenha];

inputs.forEach(input =>{
    let index = inputs.indexOf(input);
    let span = document.querySelectorAll('[data-tipo=msgErro]');

    input.addEventListener("blur",evento=>{
        if(input.validity.valueMissing){
            span[index].textContent = "Campo não pode estar vazio";
            return
        }else{
            span[index].textContent = ""
        }

        if(input.validity.patternMismatch || input.validity.typeMismatch){
            span[index].textContent = "Formato inválido";
            return
        }else{
            span[index].textContent = ""
        }
    })
})
