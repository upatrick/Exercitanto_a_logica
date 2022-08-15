let valor1 = Number(prompt("Digite o 1º valor: "));
let valor2 = Number(prompt("Digite o 2º valor: "));
let valor3 = Number(prompt("Digite o 3º valor: "));
let soma = valor1 + valor2 + valor3;
let media = (valor1 + valor2 + valor3) / 3;
let produtos = valor1 * valor2 * valor3;
let maior = Math.max(valor1, valor2, valor3);
let menor = Math.min(valor1, valor2, valor3);

console.log("Soma: ", soma);
console.log("Média: ", media);
console.log("Produtos: ", produtos);
console.log("Maior valor: ", maior);
console.log("Menor valor:", menor);

// <!-- Escreva um algoritmo que armazene três valores numéricos
// diferentes e, em seguida, mostre no console a soma, a média, o
// produto, o menor e o maior desses números. O algoritmo deve
// validar e parar a execução ao mostrar um alerta com a mensagem
// “Você repetiu algum número na digitação" se caso duas variáveis
// estiverem armazenando o mesmo valor. Utilize o console.log() para
// mostrar o resultado esperado. -->
