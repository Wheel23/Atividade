// **Manipulação de Strings**

let texto = "Aprendendo JavaScript é divertido e recompensador!";

// 1. Converta o valor de texto para maiúsculas
console.log(texto.toUpperCase()); 

// 2. Verifique se texto contém a palavra "divertido"
console.log(texto.includes("divertido")); // true

// 3. Divida texto em um array de palavras
let palavras = texto.split(" ");
console.log(palavras); // ["Aprendendo", "JavaScript", "é", "divertido", "e", "recompensador!"]

// 4. Junte as palavras do array com hífens
let textoComHifens = palavras.join("-");
console.log(textoComHifens); 


// **Operações com Números**

let num1 = 200.456;
let num2 = 150.789;

// 1. Arredonde num1
console.log(Math.round(num1)); // 200

// 2. Encontre o valor máximo e mínimo entre num1 e num2
console.log(Math.max(num1, num2)); // 200.456
console.log(Math.min(num1, num2)); // 150.789

// 3. Calcule a raiz quadrada de num2
console.log(Math.sqrt(num2)); // 12.29 (aproximadamente)

// 4. Converta num1 para notação científica
console.log(num1.toExponential()); // "2.00456e+2"


// **Lógica Booleana e Comparações**

let x = 8;
let y = 12;
let z = 8;

// 1. Compare se x é maior ou igual a y
console.log(x >= y); // false

// 2. Verifique se x é diferente de z e se x é estritamente diferente de z
console.log(x != z); // false
console.log(x !== z); // false

// 3. Use uma expressão lógica para verificar x < y e z > x
console.log(x < y && z > x); // true

// 4. Use uma expressão lógica para verificar x === z ou y < z
console.log(x === z || y < z); // true


// **Trabalhando com Null, Undefined, e NaN**

let nulo = null;

// 1. Verifique se nulo é igual a undefined e estritamente igual
console.log(nulo == undefined); // true
console.log(nulo === undefined); // false

// 2. Declare uma variável indefinido sem atribuir valor
let indefinido;
console.log(isNaN(indefinido)); // true

// 3. Declare uma variável numStr2 e tente convertê-la
let numStr2 = "123abc";
let convertido = Number(numStr2);
console.log(isNaN(convertido)); // true


// **Manipulação de Arrays**

let numeros = [10, 20, 30, 40, 50];

// 1. Adicione o valor 60 ao final do array
numeros.push(60);
console.log(numeros); // [10, 20, 30, 40, 50, 60]

// 2. Remova o último valor do array
let removido = numeros.pop();
console.log(removido); // 60
console.log(numeros); // [10, 20, 30, 40, 50]

// 3. Remova o terceiro elemento do array
numeros.splice(2, 1);
console.log(numeros); // [10, 20, 40, 50]

// 4. Ordene o array em ordem decrescente
numeros.sort((a, b) => b - a);
console.log(numeros); // [50, 40, 20, 10]


// **Manipulação de Objetos Avançada**

let pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
  endereco: {
    rua: "Rua Exemplo",
    cidade: "Cidade Exemplo",
    estado: "Estado Exemplo"
  },
  apresentacao: function() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
  }
};

// 1. Acesse e exiba a propriedade cidade
console.log(pessoa.endereco.cidade); 

// 2. Atualize a propriedade profissao
pessoa.profissao = "Engenheiro";
console.log(pessoa); 

// 3. Adicione uma nova propriedade telefone
pessoa.telefone = "123-456-7890";
console.log(pessoa); // Atualizado


// **Funções e Escopo**

function soma(a, b) {
  return a + b;
}
console.log(soma(5, 3)); // 8

function ehPar(numero) {
  return numero % 2 === 0;
}
console.log(ehPar(4)); // true
console.log(ehPar(7)); // false

function dobraValores(array) {
  return array.map(num => num * 2);
}
console.log(dobraValores([1, 2, 3])); // [2, 4, 6]

function contaCaracteres(str) {
  return str.length;
}
console.log(contaCaracteres("Olá")); // 3

function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}
console.log(fatorial(5)); // 120


// **Manipulação de Datas e Horas**

let proximoAniversario = new Date('2024-09-15');
let dataAtual = new Date();

// 1. Calcule a diferença em dias
let diffEmMs = proximoAniversario - dataAtual;
let diffEmDias = Math.floor(diffEmMs / (1000 * 60 * 60 * 24));
console.log(diffEmDias); // Exibe a diferença em dias

// 2. Formate a data atual no formato "YYYY-MM-DD"
let ano = dataAtual.getFullYear();
let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
let dia = String(dataAtual.getDate()).padStart(2, '0');
console.log(`${ano}-${mes}-${dia}`); // Ex: "2024-08-21"

// 3. Adicione 30 dias à data atual
let dataFutura = new Date();
dataFutura.setDate(dataAtual.getDate() + 30);
console.log(dataFutura.toDateString()); // Ex: "Fri Sep 20 2024"


// **Trabalhando com Funções de Callback**

function executaOperacao(a, b, operacao) {
  return operacao(a, b);
}

function soma(a, b) {
  return a + b;
}

function multiplicacao(a, b) {
  return a * b;
}

// 1. Use executaOperacao para somar dois números
console.log(executaOperacao(5, 3, soma)); // 8

// 2. Use executaOperacao para multiplicar dois números
console.log(executaOperacao(5, 3, multiplicacao)); // 15

// 3. Crie uma função repetirOperacao
function repetirOperacao(numero, operacao) {
  for (let i = 0; i < numero; i++) {
    console.log(operacao(i));
  }
}
repetirOperacao(3, num => num * 2); // Exibe 0, 2, 4

// 4. Declare uma função contarOcorrencias
function contarOcorrencias(str, caractere) {
  let count = 0;
  [...str].forEach(char => {
    if (char === caractere) count++;
  });
  return count;
}
console.log(contarOcorrencias("maçã", "a")); // 3