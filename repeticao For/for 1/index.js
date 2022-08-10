function clicar() {
    let idade = document.querySelector('.botao').onclick = prompt('Insira a sua idade')
    for (let i = 1; idade < 0 && i < 3; i ++) {
        idade = prompt('Idade inválida. Insira a sua idade novamente')
    }
}