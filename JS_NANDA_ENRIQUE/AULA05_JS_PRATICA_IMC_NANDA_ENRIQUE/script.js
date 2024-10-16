var peso;
var altura;
var imc;
var resultado;

//1-recebendo o event

function calcular(event) {
    //refesh dos inputs

    event.preventDefault();
    //alert('teste');

    //recebimc >= 17 && endo os dados digitados pelo usuario

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    //calculo do imc
    imc = peso / (altura * altura);

    //testando a recepção de valores de peso e altura, e testando calculo imc

    console.log(peso);
    console.log(altura);
    console.log(imc);

    resultado = document.getElementById('resultado');
    if (imc < 17) {
        resultado.innerHTML = '</br> Seu resultado foi: ' + imc.toFixed(2) + '</br>Cuidado, você está muito abaixo do peso';
    } else if (imc >= 17 && imc < 18.5) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '</br> Opa! Você está abaixo do peso'
    }
    else if (imc >= 18.50 && imc < 24.99) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '</br> Opa! Seu peso é normal'
    }
    else if (imc >= 25 && imc < 29.99) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '</br> Opa! Você esta acima do peso'
    }
    else if (imc >= 30) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '</br> Opa! Você está Obeso'
    }
}