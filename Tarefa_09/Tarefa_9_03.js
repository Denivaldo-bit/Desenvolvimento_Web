function exibePares(){

   const meuArray = [];

    let output = '';

    for (let i = 0; i < 10; i++) {
        meuArray.push(i + 1);
        console.log(meuArray[i]);

    }

    let numerosPares = meuArray.filter(meuArray => meuArray % 2 === 0);
        console.log(numerosPares);

    document.getElementById("result").innerHTML = "<br>" + numerosPares;

    }
    

    function resetForm (){

        document.getElementById('result').innerHTML = '';

    }
