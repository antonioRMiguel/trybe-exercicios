function cumprimentaCliente(cliente) {
  return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
}

console.log(cumprimentaCliente('Isaac')) // Olá, Isaac. Essa é sua conta do TrybeBank

// No exemplo anterior, o valor a ser recebido no parâmetro foi colocado diretamente na chamada da função (‘Isaac’). 
// Para este exemplo, foi criada uma variável que contém o array de nomes e, na chamada da função, passou-se essa variável em vez do array de maneira direta. 
// Ambos os casos estão corretos e deve ser utilizado aquele que facilita a leitura do código.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cumprimentaCliente(cliente) {
  return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
}

console.log(cumprimentaCliente(clientesTrybeBank)); // Olá, Ada,John,Gus. Essa é sua conta do TrybeBank

// Quando uma função é passada por parâmetro ou executada dentro de outra função, ela é chamada de callback. 
// Você vai conhecer ainda mais funções callback na seção em que será abordado Higher Order Functions (HOFs).

// Função sem valor, verifica se logad ou deslogado no sistema

let status = 'deslogado'; // o status padrão é deslogado

function logarDeslogar() { // aqui criamos uma função para verificar o status
  if (status === 'deslogado') { // se a pessoa usuária estiver deslogada, alteramos o status para logado
    status = 'logado';
  } else { // caso esteja logado, alteramos para deslogado
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status + ' no sistema TrybeBank'); // O usuário está deslogado no sistema TrybeBank

// também é possivel passar multiplos valores

function sacar(valor, saldo) {
  if (valor >= 1 && saldo >= 0) {
      if (valor <= saldo) {
          return "Saque realizado com sucesso. Novo saldo: R$ " + (saldo - valor) + ",00";
      } else {
          return "Saldo insuficiente. Seu saldo atual é: R$ " + saldo + ",00";
      }
  } else {
      return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
  }
}

console.log(sacar(2, 20)); // Saque realizado com sucesso. Novo saldo: R$ 18,00
console.log(sacar(2, -5)); // Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.
console.log(sacar(2, 0)); // Saldo insuficiente. Seu saldo atual é: R$ 0,00

// A função acima verifica se o valor e o saldo passados como parâmetros são valores válidos. 
// Se forem, ela verifica se o valor passado é menor ou igual ao saldo. 
// Se for, então o saque é realizado e o novo saldo é retornado. 
// Se não for, é retornada uma mensagem de saldo insuficiente e com o saldo atual.