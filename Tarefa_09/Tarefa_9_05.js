function exibeNotas() {
    const idades = [7, 5, 2];
    document.getElementById('result').innerHTML = `${idades}`;
}

function exibeMaiorIdade(){
    const idades = [7, 5, 2];
    const soma = idades.reduce((a, b) => a + b);
    const maiorIdade = Math.max(...idades);
    document.getElementById('result').innerHTML =`Maior idade: ${maiorIdade}`;
}

function exibeMenorIdade(){
    const idades = [7, 5, 2];
    const soma = idades.reduce((a, b) => a + b);
    const menorIdade = Math.min(...idades);
    document.getElementById('result').innerHTML = `Menor idade: ${menorIdade}`;
}

function exibeMedia(){
    const idades = [7, 5, 2];
    const soma = idades.reduce((a, b) => a + b);
    const media = soma / idades.length;
    document.getElementById('result').innerHTML = `Média de idade: ${media}`;

}

function resetForm (){

    document.getElementById('result').innerHTML = '';

}