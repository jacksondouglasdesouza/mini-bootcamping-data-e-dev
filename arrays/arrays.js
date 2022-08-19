let carro = ["gol", "fusca", "palio", "uno", "celta"];
let primeiroCarro = carro[0];
let segundoCarro = carro[1];
let terceiroCarro = carro[2];
let quartoCarro = carro[3];
let quintoCarro = carro[4];
console.log(primeiroCarro);
console.log(segundoCarro);
console.log(terceiroCarro);
console.log(quartoCarro);
console.log(quintoCarro);
carro[2] = "Argo";
console.log(carro[2]);
console.log(carro.length);
console.log(carro[carro.length - 1]);
console.log(carro[carro.length - 2]);
console.log(carro[carro.length - 3]);
console.log(carro[carro.length - 4]);

carro.push("Polo");
carro.pop("Polo");
console.log(carro);
carro.unshift("Fusca");
carro.shift("Fusca");
console.log(carro);



