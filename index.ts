const entrar=document.getElementById('entrar') as HTMLButtonElement
//refatorar
entrar.addEventListener('click', ()=>{
const email=document.getElementById('email') as HTMLInputElement
const password=document.getElementById('password') as HTMLInputElement
const print=document.getElementById('print') as HTMLParagraphElement
const valorEmail=email.value
print.innerText= `${valorEmail}: Está logado!`
}
)