// function imprimeIdade() {
//   for (var idade = 30; idade <= 40; idade += 1) {
//     console.log('Idade dentro do for:', idade)
//   }
//   console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
// }
// imprimeIdade()

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade()


  // // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  // const pessoa = {
  //   nome: 'Henri',
  //   idade: 20
  // }
  // pessoa = {
  //   nome: 'Luna',
  //   idade: 19
  // } // Altere essa estrutura para corrigir o erro.
  // console.log('Nome:', pessoa.nome);
  // console.log('Idade:', pessoa.idade);
  

// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }

  pessoa.nome = 'Luna'
  pessoa.idade = 19
  
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

  
  
  // const favoriteFood = 'Lasanha';
  // favoriteFood = 'Hambúrguer';
  // console.log(favoriteFood);


  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hambúrguer';
  console.log(favoriteFood);


  // const name = 'Adriana';
  // const lastName = 'Soares';
  // console.log('Olá' + ',' + name + ' ' + lastName + '!');
  // function soma(a,b) {
  //   let resultado = a + b;
  //   return resultado;
  // }
  // let a = 3;
  // let b = 5;
  // console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
  

  const name = 'Adriana';
  const lastName = 'Soares';

  console.log(`Olá, ${name} ${lastName}!`);
  
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }

  let a = 3;
  let b = 5;

  console.log(`O resultado da soma de: ${a} + ${b} é: ${soma(a,b)}`);  


  // function numeroAleatorio() {
  //   return Math.random()
  // }
  // console.log(numeroAleatorio());
  
  const numeroAleatorio = () => Math.random()
  
  console.log(numeroAleatorio());


  // function hello(nome) {
  //   return `Olá, ${nome}!`
  // }
  // let nome = 'Ivan';
  // console.log(hello(nome));

  const hello = (nome) => `Olá, ${nome}!`

  let nome = 'Ivan';

  console.log(hello(nome));


  // function nomeCompleto(nome, sobrenome) {
  //   return `${nome} ${sobrenome}`
  // }
  // let nome = 'Ivan';
  // let sobrenome = 'Pires';
  // console.log(nomeCompleto(nome, sobrenome));

  const nomeCompleto = (nome2, sobrenome) => `${nome2} ${sobrenome}.`

  let nome2 = 'Ivan';
  let sobrenome = 'Pires';

  console.log(nomeCompleto(nome2, sobrenome)); 
 
  
  // let speed = 90;
  // const speedCar = (speed) => {
  //   if (speed >= 120) {
  //     return `Você ultrapassou o limite de velocidade`;
  //   } else {
  //     return `Você está na velocidade permitida`;
  //   }
  // };
  // console.log(speedCar(speed));
  
  let speed = 90;

  const speedCar = (speed) => (
    speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
  );

  console.log(speedCar(speed));


  // Crie uma função que ligue e desliga o motor de um carro

  let motor = true;

  const ligarMotor = (motor) => (
    motor === false ? `Motor desligado` : `Motor Ligado`
  );

  console.log(ligarMotor(motor));


  // Crie uma função que calcule a área de um círculo

  let raio = 6;

  const areaCirculo = (raio) => (
    Math.PI * (raio * raio)
  );

  console.log(areaCirculo(raio));


// crie uma função que ligue e desligue o motor de um carro

const ligarDesligar = (statusDoMotor) => {
  
}