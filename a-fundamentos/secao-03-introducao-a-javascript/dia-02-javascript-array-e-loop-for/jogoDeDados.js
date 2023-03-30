// simule um jogo com dois dados de seis lados. O objetivo é rolar o segundo dado até que o número sorteado seja igual ao do primeiro dado. 
// Assim, utilize o código Math.ceil(Math.random() * 6) para gerar um número aleatório entre 01 e 06. 
// Não se preocupe em entender como funciona o código; por enquanto, é importante entender apenas que, toda vez que o executar, um número aleatório será gerado.

// Geralmente o while é utilizado quando não se sabe o início e o fim do laço, algo de que se tem pouco controle (até quando deverá se repetir). 
// Aqui, o objetivo é que o número da variável dado1 seja igual ao número armazenado na variável dado2.

// O código abaixo é uma sugestão de como você pode resolver o exercício.

let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

// exemplo de como usar o while

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}


