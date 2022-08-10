function clicar() {
    let nome = [], email = [], tel = [], resultado = [];
    resultado = document.querySelector('.resultado')
    for (let i = 0; i < 3; i++) {
        nome[i] = prompt(`Digite o nome da ${i + 1} pessoa`);
        email[i] = prompt(`Digite o email da ${i + 1} pessoa`);
        tel[i] = prompt(`Digite o telefone da ${i + 1} pessoa`)

        resultado.innerHTML += `<p>
                            ${nome[i]}<br>
                            ${email[i]}<br>
                            ${tel[i]}
                            </p>`
    
    }
}