// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = "rainha";

switch (peca.toLowerCase()) {
    case "rei":
        console.log("O rei se move em todas as direções (horizontal, vertical e diagonal), porém apenas uma casa por vez.");
        break;
    case "rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;
    case "bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
        break;
    case "cavalo":
        console.log("O cavalo possui um movimento em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;
    case "torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;
    case "peão":
        console.log("O peão movimenta-se apenas uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
        break;
    default:
        console.log("Erro: peça inválida");
}

