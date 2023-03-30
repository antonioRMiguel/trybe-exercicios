//Lidando com arrays

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// Some todos os valores contidos no array e imprima o resultado;

let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

console.log(soma);

// Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let media = soma / numbers.length;

console.log(media);

// Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; 
// e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

// Utilizando for, descubra o maior valor contido no array e imprima-o.

let maior = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}

console.log(maior);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”.

let impar = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    impar += 1;
  }
}

if (impar === 0) {
  console.log("Nenhum valor ímpar encontrado");
}

console.log(impar);

// Utilizando for, descubra qual o menor valor contido no array e imprima-o.

let menor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}

console.log(menor);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];

for (let i = 1; i <= 25; i += 1) {
  array.push(i);
}

console.log(array);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let i = 0; i < array.length; i += 1) {
  console.log(array[i] / 2);
}


