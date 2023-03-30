let clienteCadastrado = ["Marta", "Paulo", "Maria", "Nuria", "Manoela", "Fernanda"];
let saboresSorvetes = ["morango", "pistache", "chocolate", "baunilha", "coco", "limão"];

function pedidoSorvete() {
    let clienteValido = false;
    let saborValido = false;

    for (let index = 0; index < clienteCadastrado.length; index += 1) {
        if (clienteCadastrado[index] === "Paulo") {
            clienteValido = true;
        }
    }

    for (let index = 0; index < saboresSorvetes.length; index += 1) {
        if (saboresSorvetes[index] === "chocolate") {
            saborValido = true;
        }
    }

    if (clienteValido === true && saborValido === true) {
        console.log("Olá, Paulo. Aqui está seu sorvete de chocolate.");
    }

    if (clienteValido === false) {
        console.log("Olá, Paulo. Você não está cadastrado em nosso sistema.");
    }

    if (saborValido === false) {
        console.log("Olá, Paulo. O sabor chocolate não está disponível.");
    }

    if (clienteValido === false && saborValido === false) {  
        console.log("Olá, Paulo. Você não está cadastrado em nosso sistema e o sabor chocolate não está disponível.");
    }
}

pedidoSorvete();

