var entrar = document.getElementById('entrar');
//refatorar
entrar.addEventListener('click', function () {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var print = document.getElementById('print');
    var valorEmail = email.value;
    print.innerText = "".concat(valorEmail, ": Est\u00E1 logado!");
});
