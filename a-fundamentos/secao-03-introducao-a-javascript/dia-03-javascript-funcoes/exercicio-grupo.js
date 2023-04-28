// vamos// Vamos criar um projeto que será capaz de ler/receber três valores 
// inteiros e testar se são positivos. Em seguida, verifica se formam 
// um triângulo e, caso isso seja possível, verifica qual é o tipo de triângulo, 
// além de calcular o seu perímetro. Ao final, 
// uma mensagem deverá ser impressa na saída do console.

// Dados iniciais do desafio
// Valores dos lados em cm

let lado1 = 9;
let lado2 = 7;
let lado3 = 8;

// 1. Crie uma função `checkIntegerPositive` que verifica se os valores dos lados são inteiros e positivos.
// Caso positivo, a função deve retornar `true`. Caso contrário, deve retornar `false`.

function checkIntegerPositive(l1, l2, l3) {
    if (l1 > 0 && l2 > 0 && l3 > 0) {
        return true;
    } else {
        return false;
    }
}

// 2. Crie uma função `checkTriangle` que verifica se os valores dos lados formam um triângulo.

function checkTriangle(l1, l2, l3) {
    if (l1 + l2 + l3 === 180) {
        return true;
    } else {
        return false;
    }
}

// 3. Crie uma função `checkTriangleType` que verifica se o triângulo é equilátero, isósceles ou escaleno.

function checkTriangleType(l1, l2, l3) {
    if (l1 === l2 && l2 === l3) {
        return "Equilátero";
    } else if (l1 === l2 || l2 === l3 || l1 === l3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

// 4. Crie uma função `calculatePerimeter` que calcula o perímetro do triângulo.

function calculatePerimeter(l1, l2, l3) {
    return l1 + l2 + l3;
} 

// OBS: o console.log final deverá ser assim: 
// console.log(infoTriangle(lado1, lado2, lado3)); Tudo deve acontecer depois de sua execução...



function infoTriangle(l1, l2, l3) {
    if (checkIntegerPositive(l1, l2, l3)) {
        if (checkTriangle(l1, l2, l3)) {
            return `O triângulo é do tipo ${checkTriangleType(l1, l2, l3)} e seu perímetro é ${calculatePerimeter(l1, l2, l3)} cm.`;
        } else {
            return "Os valores não formam um triângulo.";
        }
    } else {
        return "Os valores não são positivos.";
    }
}

console.log(infoTriangle(lado1, lado2, lado3));


