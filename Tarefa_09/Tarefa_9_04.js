function exibeMenor() {

    let output = '';

    const meuArray = [3,5,7,9,1];

    let menorNumero = Math.min(...meuArray);
    
    let posicaoMenorNumero = meuArray.indexOf(menorNumero);

    document.getElementById("result").innerHTML = `o numero menor é ${menorNumero}, está na posição ${posicaoMenorNumero}`;


}

function resetForm (){

    document.getElementById('result').innerHTML = '';

}