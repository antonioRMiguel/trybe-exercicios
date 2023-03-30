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