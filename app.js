alert('Bem-vindo ao jogo do Número Secreto');
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');
console.log(chute)
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert(`Você acertou o número secreto ${numeroSecreto}.`);
} else (
    alert('Você errou')
)