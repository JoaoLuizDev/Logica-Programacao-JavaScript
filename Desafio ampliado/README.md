# Projeto ampliado

Essa pasta contém o projeto ampliado e melhorado do projeto elaborado no curso **Lógica de programação: mergulhe em programação com JavaScript**.

## Sobre
- O projeto no curso consiste em criar um código Javascript para um jogo chamado Número Secreto;
- Nele, é criado um número aleatório e o usuário fará "chutes" até acertar o número;
- Após acertá-lo, é exibida a mensagem com o número de tentativas até o acerto.

## Jogo Número Secreto
O jogo consiste em adivinhar um número secreto gerado aleatoriamente entre 1 e 2000. O jogador pode fazer tentativas de adivinhar o número e também pode pedir dicas para facilitar a adivinhação. 

### Regras do Jogo
1. O jogador deve escolher um número entre 1 e 2000.
2. O jogador pode pedir até 3 dicas:
   - A primeira dica informa se o número secreto está entre 1 e 500, 501 e 1000, 1001 e 1500, ou 1501 e 2000.
   - A segunda dica informa se o número secreto está entre 1 e 250, 251 e 500, 501 e 750, e assim por diante.
   - A terceira dica informa se o número secreto está entre 1 e 100, 101 e 200, 201 e 300, e assim por diante.
3. O jogo termina quando o jogador adivinha o número secreto.
4. Ao final do jogo, é exibido o número de tentativas e dicas usadas pelo jogador.

### Mudanças no Código
- Adicionamos a funcionalidade de dicas automáticas:
  - A primeira dica informa se o número secreto está em um dos quatro intervalos de 500.
  - A segunda dica informa se o número secreto está em um dos oito intervalos de 250.
  - A terceira dica informa se o número secreto está em um dos vinte intervalos de 100.
- O jogador não escolhe o tipo de dica, elas são fornecidas automaticamente na ordem especificada.
- O número de tentativas e dicas usadas é exibido ao final do jogo.

### Exemplo de Jogo
1. O jogador inicia o jogo e é informado que deve escolher um número entre 1 e 2000.
2. O jogador faz uma tentativa e erra.
3. O jogador pede uma dica e é informado que o número secreto está entre 1 e 500.
4. O jogador faz outra tentativa e erra.
5. O jogador pede outra dica e é informado que o número secreto está entre 1 e 250.
6. O jogador faz outra tentativa e erra.
7. O jogador pede a última dica e é informado que o número secreto está entre 1 e 100.
8. O jogador faz outra tentativa e acerta.
9. O jogo exibe o número de tentativas e dicas usadas.

Divirta-se jogando o Número Secreto!

### Deploy: https://jogonumerosecreto-woad.vercel.app/