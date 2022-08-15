let preco = parseInt(prompt("Valor do produto:"));
let parcelas = parseInt(prompt("Número de parcelas:"));

let valorParcelas = 0;
let precoTotal = 0;

if (parcelas == 1) {
    parcelaTotal = preco - preco * 0.025;
    console.log("Você pagará R$", parcelaTotal, "no produto.");
} else if (parcelas >= 2 && parcelas <= 5) {
    console.log("Você pagará R$", preco, "no produto.");
} else if (parcelas >= 6 && parcelas <= 10) {
    precoTotal = preco + preco * 0.06;
    valorParcelas = precoTotal / parcelas;
    console.log("Você pagará R$", precoTotal, "no produto.");
    console.log(
        "Você pagará ",
        parcelas,
        " parcelas de R$",
        valorParcelas.toFixed(2)
    );
} else if (parcelas >= 11 && parcelas <= 15) {
    precoTotal = preco + preco * 0.13;
    valorParcelas = precoTotal / parcelas;
    console.log("Você pagará R$", precoTotal, "no produto.");
    console.log(
        "Você pagará ",
        parcelas,
        " parcelas de R$",
        valorParcelas.toFixed(2)
    );
}

//a
