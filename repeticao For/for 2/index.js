let senha;
let repete;
let s;

function clicar() {
    do {
        senha = document.querySelector('.botao').onclick = prompt('Insira sua senha numérica de 6 digitos:')
    }
    while (senha.length != 6)
    repete = prompt('Redigite sua senha para validação. Ela deve ser a mesma.')
    
    {
        s = prompt('Para acessar sua conta entre com sua senha')
        for (let i = 1; senha != s && i < 3; i ++) {
            alert(`a senha informada não confere. Insira novamente. Você tem mais $(3 - i) tentativa(s).`)
            s = prompt('Para acessar sua conta entre com sua senha')
        }

        if (i < 3) {
            alert('Sua senha está correta! Você pode acessar sua conta.')
        }

        else {
            senha = 99;
            alert('Sua senha foi bloqueada. procure o seu gerente')
        }
    }
}
