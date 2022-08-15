let a = 10;
let b = 20;
let ab = a;

a = b;
console.log(a);

b = ab;
console.log(b);

var d = 20;
var e = 10;
var [d, e] = [e, d];
console.log(d, e);

// <!-- Escreva um algoritmo que armazene o valor 10 em uma variável A e
// o valor 20 em uma variável B. A seguir (utilizando apenas atribuições
// entre variáveis) troque os seus conteúdos fazendo com que o valor
// que está em A passe para B e vice-versa. Ao final, mostre no console
// os valores que ficaram armazenados nas variáveis após
// modificadas. -->
