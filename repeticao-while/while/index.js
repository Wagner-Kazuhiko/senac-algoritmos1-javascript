function clicar () {
    let idade = document.querySelector('.botao').onclick = prompt('Insira a sua idade')
    while (idade <= 0) {
        idade = prompt ('Idade inválida. Insira novamente')
    }
    alert(`Sua idade é ${idade} anos.`)
}
