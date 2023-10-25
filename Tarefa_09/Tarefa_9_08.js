function contaPar() {

let numeros = [10, 15, 7, 8, 9, 5, 4, 3, 2, 1];
let pares = 0;
let impares = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares++;
    } else {
        impares++;
    }
}
document.getElementById('result').innerHTML = `Número pares: ${pares}`;

}

function contaImpar(){

let numeros = [10, 15, 7, 8, 9, 5, 4, 3, 2, 1];
let pares = 0;
let impares = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares++;
    } else {
        impares++;
    }
}
    document.getElementById('result').innerHTML = `Número ímpares: ${impares}`;
}


function resetForm(){

    document.getElementById('result').innerHTML = '';

}
