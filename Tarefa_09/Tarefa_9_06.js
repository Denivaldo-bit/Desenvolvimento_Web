function checaValor (){

    const valores = [1,2,3,4,5,6,7,8,9];
const x = parseInt(document.getElementById('valor').value);

if (valores.includes(x)) {
    document.getElementById('result').innerHTML = ("Valor informado existente no array");
} else {
    document.getElementById('result').innerHTML = ("Valor informado não existente no array");
}

}

function resetForm (){

    document.getElementById('result').innerHTML = '';

}