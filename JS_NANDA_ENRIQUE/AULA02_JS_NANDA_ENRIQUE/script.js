var area=document.getElementById('area')

function entrar(){
    //alert("Clicou")
    var nome=prompt ("Digite seu nome")
    //console.log(nome)
    area.innerHTML="Bem bindo " +nome+ " "

    //criando um botaom do html a aprtir do js

    let botaoSair = document.createElement("button")
    botaoSair.innerHTML = "Sair da conta"

    area.appendChild (botaoSair)

    function sair (){
        alert("até mais")
        area.innerHTML = "voce saiu"
    }

}