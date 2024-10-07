var peso; 
var altura;
var imc;
var resultado;

//1-recebendo o event

function calcular (event){
    //refesh dos inputs

    event.preventDefault();
    //alert('teste');

    //recebendo os dados digitados pelo usuario

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    //calculo do imc
    imc = peso/(altura*altura);

    //testando a recepção de valores de peso e altura, e testando calculo imc

    console.log(peso);
    console.log(altura);
    console.log(imc);

    resultado = document.getElementById('resultado');
    if(imc<17){
        resultado.innerHTML = '</br> Seu resultado foi: '+imc.toFixed(2)+ '</br>Cuidado, você está muito abaixo do texto';
    }
}