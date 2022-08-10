

function clicar() {
    let nome = [];
    let resp = 's';
    for (let i = 0; resp == 's'; i ++) {
        nome[i] = prompt(' Digite o nome do aluno ')
        resp = prompt('Deseja continuar? s/n')
        let resultado = document.querySelector('.resultado')
        resultado.innerHTML += `${nome[i]}` 
    }
}
