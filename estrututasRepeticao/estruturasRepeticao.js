
let nomes = ["João", "Maria", "José", "Ana", "Jorge", "Pedro", "Moisés"];
// While
let i = 0;
while(i < nomes.length){
    console.log(nomes[i]);
    i++;
} 
// For
for(var i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
    console.log(i); //Posição no Array
}


function palavraInvertida(palavra){
    let palavraInvertida = "";
    for(let i = palavra.length - 1; i >= 0; i--){
        palavraInvertida += palavra[i];
    }

    return palavraInvertida;
}



    let palavraINvertida = "";
    let i = palavra.length - 1;
    while(i >= 0){
        palavraINvertida += palavra[i];
        i--;
    }
    return palavraINvertida;


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function verificarNumero(numero){
    let existe = false;
    for(let i = 0; i < numeros.length; i++){
        console.log(`Posição no Array ${i}`);
        if(numeros[i] === numero){
            existe = true;
            console.log("O número " + numero + " existe no array ele está na posição " + i);
            break;
        }
    }
    return existe;
}


for(let i = 0; i < 10; i++){
    console.log("teste"+[i]);
}
