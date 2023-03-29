// operações aritméticas básicas (soma, subtração, multiplicação e divisão - +, -, *, /, %)

let a = 17;
let b = 7;


// Soma
let soma = a + b;
console.log(soma);

// Subtração
let subtracao = a - b;
console.log(subtracao);

// Multiplicação
let multiplicacao = a * b;
console.log(multiplicacao);

// Divisão
let divisao = a / b;
console.log(divisao);

// Módulo
let modulo = a % b;
console.log(modulo);

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let a = 27;
let b = 37;

if (a > b) {
    console.log(a);
    } else {
        console.log(b);
    }

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 27;
let b = 37;
let c = 47;

if (a > b && a > c) {
    console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }

// 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let number = 7;

if (number > 0) {
    console.log("positive");
} else if (number < 0) {
    console.log("negative");
} else {    
    console.log("zero");
} 

// 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let a = 60;
let b = 60;
let c = 60;

if (a < 0 || b < 0 || c < 0) {
    console.log("Erro: ângulo inválido");
}
else if (a + b + c === 180) {
    console.log(true);
} else {
    console.log(false);
}






    