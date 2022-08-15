let eleitoresMunicipio = prompt("Quantos eleitores tem no município?");

let votosBrancos = prompt("Tiveram quantos votos brancos?");
let votosNulos = prompt("Tiveram quantos votos nulos?");
let votosValidos = prompt("Tiveram quantos votos válidos?");

let pBrancos = (votosBrancos / eleitoresMunicipio) * 100;
let pNulos = (votosNulos / eleitoresMunicipio) * 100;
let pValidos = (votosValidos / eleitoresMunicipio) * 100;

const somaVotos = pBrancos + pNulos + pValidos;
if (somaVotos <= 100) {
    console.log(
        "O municipio teve",
        pBrancos.toFixed(2),
        "% de votos branco,",
        pNulos.toFixed(2),
        "% de votos nulo e",
        pValidos.toFixed(2),
        "% de votos válidos"
    );
} else {
    console.log("Teve mais votos do que a quantidade de pessoas!");
}

// <!-- Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores. -->
