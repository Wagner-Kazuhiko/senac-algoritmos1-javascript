function clicar () {
    let idade = document.querySelector('.botao').onclick = prompt('Insira a sua idade')
    let cont = 1
    while (idade <= 0 && cont < 3) {
        idade = prompt ('Idade inválida. Insira novamente')
        cont ++
    }
    if (cont < 3) {
        alert(`Sua idade é ${idade} anos`)
    }
    else {
        alert('Você excedeu o número de tentativas')
    }
}
