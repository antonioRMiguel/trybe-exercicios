// 11 - Calculo o salário líquido do contribuinte, levando em consideração a alíquota do INSS calculado com as seguintes faixas:

// Faixa de imposto de INSS:
// Até R$ 1.556,94: alíquota de 8%
// De R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// De R$ 2.594,92 a R$ 5.189,82: alíquota de 11%
// Acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// Faixa de imposto de renda:
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a R$ 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto  
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto

let salarioBruto = 6500;
let salarioLiquido = 0;
let inss = 0;
let ir = 0;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
    } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
        inss = salarioBruto * 0.09;
    } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
        inss = salarioBruto * 0.11;
    } else {
        inss = 570.88;
    } 

salarioLiquido = salarioBruto - inss;

if (salarioLiquido <= 1903.98) {
    ir = 0;
} else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
    ir = (salarioLiquido * 0.075) - 142.80;
} else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
    ir = (salarioLiquido * 0.15) - 354.80;
} else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
    ir = (salarioLiquido * 0.225) - 636.13;
} else {
    ir = (salarioLiquido * 0.275) - 869.36;
} 

salarioLiquido = salarioLiquido - ir;

console.log("O seu salário líquido será de: " + salarioLiquido);

