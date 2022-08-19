// calculadora

function calcular(operacao,numeroA, numeroB) {
    let resultado;
    if( operacao === "+"){
      resultado = numeroA + numeroB;
    }
    else if(operacao === "-"){
      resultado = numeroA - numeroB;
    }
    else if(operacao === "*"){
      resultado = numeroA * numeroB;
    }
    else if(operacao === "/"){
      resultado = numeroA / numeroB;
    }
    else if(operacao === "^"){
      resultado = Math.pow(numeroA, numeroB);
    }
    else if(operacao === "%"){
      resultado = numeroA % numeroB;
    } else{
      console.log("Operação inválida");
    }

    return resultado;
}

console.log(calcular("+",2,3));
console.log(calcular("-",2,3));
console.log(calcular("*",2,3));
console.log(calcular("/",2,3));
console.log(calcular("^",2,3));
console.log(calcular("%",2,2));
console.log(calcular(" "));