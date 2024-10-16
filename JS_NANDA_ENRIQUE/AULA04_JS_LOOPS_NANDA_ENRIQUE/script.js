//laço while
var x = 0
document.write('<br><h3>Testando loop com WHILE</h3>')
while (x <= 10) {
    document.write('<br>O valor de x é:' + x)
    x = x + 1
}

//laço for

var controle = 10
document.write('<br><h3>Testando loop com FOR</h3>')
for (a = 0; a < controle; a++) {
    document.write('<br>O valor de x é:' + a)
}

//laço switch = escolha
//criar função pedir
function pedir() {
    //alert('a casa caiu mano!!!')
          
    //    console.log(valor);
    //    console.log(typeof(valor));
    //    console.log(Number(valor));
    //    console.log(typeof(Number(valor)));

    switch (Number(valor)) {
        case 1:
            alert('Você que escolheu suco');
            break;
        case 2:
            alert('Você que escolheu água gelada');
            break;
        case 3:
            alert('Você que escolheu sorvete');
            break;
        case 4:
            alert('Você está chamando o garçom');
            break;
        default:
            alert('Digite um numero entre 1 e 4')
            break;
    }
}

