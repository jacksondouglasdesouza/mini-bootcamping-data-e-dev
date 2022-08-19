function start(){
    let iDcalcularImc = document.querySelector('#calcularImc');
    iDcalcularImc.addEventListener('click', cliqueId);

}

// Calcular o IMC //

function imc(peso, altura){
  imc = peso / (altura * altura);

  if (imc < 18.5){
    console.log("Abaixo do peso");
  }
  else if (imc >= 18.5 && imc < 25){
    console.log("Peso normal");
  }
  else if (imc >= 25 && imc < 30){
    console.log("Sobrepeso");
  }
  else if (imc >= 30 && imc < 35){
    console.log("Obesidade grau I");
  }
  else if (imc >= 35 && imc < 40){
    console.log("Obesidade grau II");
  }
  else if (imc >= 40){
    console.log("Obesidade grau III - Risco de Morte");
  }
  else{
    console.log("Erro - Verifique suas informações");
  }

  return imc;
}



function cliqueId(){
  //Coletando informações do usuário
  let iDpeso = document.querySelector('#peso');
  let iDaltura = document.querySelector('#altura');
  let idResultado = document.querySelector('#resultado');


  //mostrando informações ao usuário

  let peso = iDpeso.value;
  let altura = iDaltura.value;

  let idImc = imc(peso, altura);
  let formatarImc = idImc.toFixed(2).replace('.', ',');

  //RESULTADO ESPERADO
  idResultado.textContent = formatarImc;


}



start();


