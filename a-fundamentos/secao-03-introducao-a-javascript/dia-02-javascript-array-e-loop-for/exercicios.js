// Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let index of names){
    console.log(index);
}


// Mostra o números do array

let numeros = [1, 2 , 3, 4, 5];

for(let index of numeros) { 
    console.log(index);
}

// Ao contrário do for, o while executa a iteração com apenas uma condição. 
// Enquanto essa condição for verdadeira, o conteúdo de escopo do while vai sendo cumprido e, ao encontrar uma condição falsa, o bloco é encerrado. 
// Por exemplo:
// obs: o while é mais utilizado quando não sabemos o número de iterações que precisamos fazer.
// obs2: Os códigos de número devolvem ao console o número de iterações que foram feitas. São códigos com o mesmo resulta!

let counter = 0;

while(counter !== 5) {
  counter += 1;
  console.log(counter);
}

// O código acima vai imprimir no console os números de 1 a 5.

// Agora, vamos fazer um programa que imprima no console a tabuada do 5 (5, 10, 15, 25, 35, 45, 55, 65, 75, 85, 95).

// O código abaixo é uma sugestão de como você pode resolver o exercício:

let counter2 = 0; 

while(counter2 <= 10) {
  console.log(counter2 * 5);
  counter2 += 1;
}

// O código acima vai imprimir no console a tabuada do 5.

