const inputs = Array.from(document.querySelectorAll('[data-tipo=campo]'));
const spans = Array.from(document.querySelectorAll('[data-tipo=msgErro]'));


inputs.forEach(input =>{

    if(input.dataset.conteudo == 'preco'){
        SimpleMaskMoney.setMask(input,{
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })

    }
       
    const index = inputs.indexOf(input);
    input.addEventListener("blur",(evento) => {

        
            if(input.validity.valueMissing){
                spans[index].innerText = "Este campo não pode ficar vazio";
                input.setCustomValidity("Este campo não pode ficar vazio")
                return
            }

            if(input.validity.patternMismatch || input.validity.typeMismatch){
                spans[index].innerText = "Preenchimento inválido!";
                input.setCustomValidity("Preenchimento inválido!")
                return
            }
            
            spans[index].innerText = "";
            input.setCustomValidity("");
    })
    
})


