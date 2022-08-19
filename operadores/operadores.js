// operadores aritméticos
let soma = 4 + 2;
console.log(`4 + 2 = ${soma}`);
let subtracao = 5 - 3;
console.log(`5 - 3 = ${subtracao}`);
let multiplicacao = 5 * 4;
console.log(`5 * 4 = ${multiplicacao}`);
let divisao = 20 / 4;
console.log(`20 / 4 = ${divisao}`);
let resto = 20 % 3;
console.log(`20 % 3 = ${resto}`);
let potenciacao = 3 ** 4;
console.log(`3 ** 4 = ${potenciacao}`);

//precedência de operações
let a = 10;
let b = 80;
let resultado = a + b / 8+ 2;
let resultado2 = (a + b) / ( 8 + 2);
console.log(`${a} + ${b} / 8 + 2 = ${resultado}`);
console.log(`(${a} + ${b}) / ( 8 + 2) = ${resultado2}`);

// operação de incremento e decremento
let incremento = 11;
incremento++;
console.log(`11 ++ = ${incremento}`);
let decremento = 12;
decremento--;
console.log(`12 -- = ${decremento}`);