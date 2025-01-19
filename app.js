alert('Bem-vindo ao jogo Número Secreto');
let numeroMaximo = 200;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
                alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
} 

let palavraTentativa = tentativas > 1 ? 'tentativas' :'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// uso de operador ternário em vez de if/else para boas práticas e reduzir código 
/*
if (tentativas > 1) {
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/