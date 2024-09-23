var lista = ['aluno1', 'aluno2', 100];
//consumidndo o array
console.log(lista);
//consumindo m elemento especifico do array 
console.log(lista(2));

//descobrindo o tamanho do array
console.log(lista.length);

//saber se um elemento esta no array
lista.indexOff('alunos3');
lista.indexOff('alunos1');

//alternar uma informação dento do array
lista[0]='Helo';
lista.log(lista);
lista[1]='Lorenzo';
lista.log(lista);
lista[2]=3;
lista.log(lista);

//inserir novo elemento no array
lista.push('Clementina1');

//excluir um elemento do array
lista.shift();

//escluir o ultimo elemento da lista
lista.pop();
console.log(lista);

//restaurar os itens de dentro da lista no array com um separador
console.log(lista.join(' / '))
