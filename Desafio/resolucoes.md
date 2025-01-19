
## Resoluçãoes
## Desafios
1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
```js
alert('Boas vindas ao nosso site!');
```

2. Declare uma variável chamada nome e atribua a ela o valor "Lua".
```js
let nome = 'Lua';
```

3. Crie uma variável chamada idade e atribua a ela o valor 25.
```js
let idade = 25;
```

4. Defina uma variável numeroDeVendas e atribua a ela o valor 50.
```js
let numeroDeVendas = 50;
```

5. Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
```js
let saldoDisponivel = 1000;
```

6. Exiba um alerta com o texto "Erro! Preencha todos os campos"
```js
alert('Erro! Preencha todos os campos');
```

7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
```js
let mensagemDeErro = 'Erro! Preencha todos os campos';
```

8. Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
```js
alert(mensagemDeErro);
nome = prompt('Digite seu nome: ');

```

9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
```js
idade = prompt('Digite sua idade: ');
```

10. Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
```js
if (idade >= 18) {
    alert('Pode tirar a habilitação!');
}
```

11. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
```js
diaDaSemana = prompt('Hoje é qual o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}
```

12. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
```js
numero = prompt('Digite um número: ');
if (numero < 0) {
    alert('Esse número é negativo');
} else if (numero > 0) {
    alert('Esse número é positivo');
} else {
    alert('Esse número é zero');
}
```

13. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
```js
pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}
```

14. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
```js
saldoConta = 1000;
alert(`O saldo da sua conta é R$ ${saldoConta}.`);
```

15. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
```js
nome = prompt('Digite seu nome: ');
alert(`Seja bem-vindo(a) ${nome}.`);
```

16. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
```js
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}
```

17. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
```js
let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}
```

18. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
```js
let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}
```

19. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
```js
let numeroMaximo = prompt("Digite um número para a contagem progressiva:");
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}
```

20. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
```js
console.log('Seja bem-vindo');
```
21. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
```js
let nome = João Luiz;
console.log(`Olá, ${nome}.`);
```

22. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
```js
let nome = João Luiz;
alert(`Olá, ${nome}.`);
```

23. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
```js
linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
let linguagem;
console.log(`Sua linguagem preferida é ${linguagem}.`);
```

24. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
```js
let valor1 = 7;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é ${resultado}.`);
```

25. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
```js
let valor1 = 15;
let valor2 = 7;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é ${resultado}.`);
```

26. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
```js
idade = prompt('Digite sua idade: ');
if (idade >= 18) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}
```

27. Crie uma variável "numero" e peça um valor com prompt. Verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
```js
var numero = parseFloat(prompt('Digite um número: '));

if (numero > 0) {
    alert(`O número ${numero} é positivo.`);
} else if (numero < 0) {
    alert(`O número ${numero} é negativo.`);
} else {
    alert('O número é zero.');
}
```

28. Use um loop while para imprimir os números de 1 a 10 no console.
```js
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero ++;
}
```

29. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
```js
let nota = 9;
if (nota >= 7) {
    console.log('Aprovado.');
} else {
    console.log('Reprovado.')
}
```

30. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
```js
let numero = Math.random();
console.log(numero)
```

31. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
```js
let numero = parseInt(Math.random() * 10 + 1);
console.log(numero)
```

32. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
```js
let numero = parseInt(Math.random() * 1000 + 1);
console.log(numero)
```