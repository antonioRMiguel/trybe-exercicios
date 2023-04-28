let clienteCadastrado = ["Marta", "Paulo", "Maria", "Nuria", "Manoela", "Fernanda"];
let saboresSorvetes = ["morango", "pistache", "chocolate", "baunilha", "coco", "limão"];

function pedidoSorvete(nome, sabor) {
    let clienteValido = false;
    let saborValido = false;

    for (let index = 0; index < clienteCadastrado.length; index += 1) {
        if (clienteCadastrado[index] === nome) {
            clienteValido = true;
        }
    }

    for (let index = 0; index < saboresSorvetes.length; index += 1) {
        if (saboresSorvetes[index] === sabor) {
            saborValido = true;
        }
    }

    if (clienteValido === true && saborValido === true) {
        console.log("nome + ", pague seu sorvete de " + sabor + " no caixa."");
    } else {
        console.log("CLiente e/ou sorvete não cadastrado")
    }
}

pedidoSorvete(Maria, pistache);

