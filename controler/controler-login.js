const formLogin = document.querySelector("[data-formLogin]")

formLogin.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    window.location.pathname = "/produtos.html"
})

console.log(formLogin)