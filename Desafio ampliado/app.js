alert('Bem-vindo ao jogo Número Secreto');
let numeroMaximo = 2000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;
let dicasUsadas = 0;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo} ou digite 'dica' para uma dica`);
    if (chute.toLowerCase() === 'dica') {
        dicasUsadas++;
        if (dicasUsadas == 1) {
            if (numeroSecreto <= 500) {
                alert('O número secreto é entre 1 e 500');
            } else if (numeroSecreto <= 1000) {
                alert('O número secreto é entre 501 e 1000');
            } else if (numeroSecreto <= 1500) {
                alert('O número secreto é entre 1001 e 1500');
            } else {
                alert('O número secreto é entre 1501 e 2000');
            }
        } else if (dicasUsadas == 2) {
            if (numeroSecreto <= 250) {
                alert('O número secreto é entre 1 e 250');
            } else if (numeroSecreto <= 500) {
                alert('O número secreto é entre 251 e 500');
            } else if (numeroSecreto <= 750) {
                alert('O número secreto é entre 501 e 750');
            } else if (numeroSecreto <= 1000) {
                alert('O número secreto é entre 751 e 1000');
            } else if (numeroSecreto <= 1250) {
                alert('O número secreto é entre 1001 e 1250');
            } else if (numeroSecreto <= 1500) {
                alert('O número secreto é entre 1251 e 1500');
            } else if (numeroSecreto <= 1750) {
                alert('O número secreto é entre 1501 e 1750');
            } else {
                alert('O número secreto é entre 1751 e 2000');
            }
        } else if (dicasUsadas == 3) {
            if (numeroSecreto <= 100) {
                alert('O número secreto é entre 1 e 100');
            } else if (numeroSecreto <= 200) {
                alert('O número secreto é entre 101 e 200');
            } else if (numeroSecreto <= 300) {
                alert('O número secreto é entre 201 e 300');
            } else if (numeroSecreto <= 400) {
                alert('O número secreto é entre 301 e 400');
            } else if (numeroSecreto <= 500) {
                alert('O número secreto é entre 401 e 500');
            } else if (numeroSecreto <= 600) {
                alert('O número secreto é entre 501 e 600');
            } else if (numeroSecreto <= 700) {
                alert('O número secreto é entre 601 e 700');
            } else if (numeroSecreto <= 800) {
                alert('O número secreto é entre 701 e 800');
            } else if (numeroSecreto <= 900) {
                alert('O número secreto é entre 801 e 900');
            } else if (numeroSecreto <= 1000) {
                alert('O número secreto é entre 901 e 1000');
            } else if (numeroSecreto <= 1100) {
                alert('O número secreto é entre 1001 e 1100');
            } else if (numeroSecreto <= 1200) {
                alert('O número secreto é entre 1101 e 1200');
            } else if (numeroSecreto <= 1300) {
                alert('O número secreto é entre 1201 e 1300');
            } else if (numeroSecreto <= 1400) {
                alert('O número secreto é entre 1301 e 1400');
            } else if (numeroSecreto <= 1500) {
                alert('O número secreto é entre 1401 e 1500');
            } else if (numeroSecreto <= 1600) {
                alert('O número secreto é entre 1501 e 1600');
            } else if (numeroSecreto <= 1700) {
                alert('O número secreto é entre 1601 e 1700');
            } else if (numeroSecreto <= 1800) {
                alert('O número secreto é entre 1701 e 1800');
            } else if (numeroSecreto <= 1900) {
                alert('O número secreto é entre 1801 e 1900');
            } else {
                alert('O número secreto é entre 1901 e 2000');
            }
        } else {
            alert('Você já usou todas as suas dicas!');
        }
    } else {
        chute = parseInt(chute);
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
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
let palavraDica = dicasUsadas > 1 ? 'dicas' : 'dica';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} e usou ${dicasUsadas} ${palavraDica}.`);
