function clicar() {
    let idade;
    let cont = 1

    do {
        idade = document.querySelector('.botao').onclick = prompt('Insira a sua idade:')
        cont ++
    }
    while (idade <= 0 && cont < 3) {
        if (cont < 3) {
            alert(`Sua idade é ${idade} anos`)
        }
        else {
            alert('você excedeu o número de tentativas')
        }
    }

}