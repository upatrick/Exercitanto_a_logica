const anoAtual = 2022;
const anoNascimento = prompt("Digite seu ano de nascimento: ");
let idade = anoAtual - anoNascimento;

if (idade < 16) {
    console.log("Você não pode votar pois tem: ", idade, "anos");
} else {
    console.log("Você poderá votar pois tem: ", idade, "anos");
}

// <!-- Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu). -->
