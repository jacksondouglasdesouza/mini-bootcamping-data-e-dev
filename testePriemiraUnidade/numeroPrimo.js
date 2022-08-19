function verificarNumeroPrimo(){
  var numero = parseInt(document.getElementById('numeroDigitado').value);
  var resposta = document.getElementById('resposta');
  var divisores=0;

  for(var i = 1 ; i <= numero ; i++){
    if(numero % i == 0)
    divisores++;
  }

  if(divisores == 2){
    resposta.innerHTML=`O número ${numero} é primo`;
  }else{
    resposta.innerHTML=`O número ${numero} não é primo`;
  }
}

/* EXERCÍCIO TESTADO NO CONSOLE
function verificarNumeroPrimo(numero){
  let divisores = 0;

  for(let i = 1; i <= numero; i++){
      if(numero % i === 0){
          divisores++;
      }
  }

  
  if(divisores === 2){
      return console.log("O número " + numero + " é primo");
  } else {
      return console.log("O número " + numero + " não é primo");
  }

}

console.log(verificarNumeroPrimo(927));
console.log(verificarNumeroPrimo(957));
console.log(verificarNumeroPrimo(997));
console.log(verificarNumeroPrimo(987));
 */