function exibeMedia(){

    let notas = [10, 5, 7, 8, 9, 6, 4, 3, 2, 1];

    let soma = 0;
        for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
}
    
    let media = soma / notas.length;
    document.getElementById('result').innerHTML = `A média aritmética das notas é: ${media}`;
}

function TotalizaAbaixoMedia(){

    let notas = [10, 5, 7, 8, 9, 6, 4, 3, 2, 1];
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

let abaixoDaMedia = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < media) {
        abaixoDaMedia++;
    }
}

document.getElementById('result').innerHTML = `Número de alunos com nota abaixo da média: ${abaixoDaMedia}`;

}




function resetForm(){

    document.getElementById('result').innerHTML = '';

}