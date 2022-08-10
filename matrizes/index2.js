let nome = [[],[]]
let linha;
let coluna;

for(linha = 0; linha < nome.length; linha++) {
    for (coluna = 0; coluna < 3; coluna++) {
        nome[linha[coluna]] = prompt('Insira um nome')
    }
}

console.log(nome)