// 10 - Calcule o lucro total de uma empresa ao vender mil produtos.

let lucro = 0;
let custo = 17;
let venda = 77;

if (custo < 0 || venda < 0) {
    console.log("Erro: os valores não podem ser negativos.");
} else {
    lucro = (venda - custo) * 1000;
    console.log("Seu lucro foi de: R$ "+ lucro + " Reais");
}


