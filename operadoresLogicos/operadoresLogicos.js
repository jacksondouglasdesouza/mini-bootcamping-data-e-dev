let hojeTaQuente = true;
let ontemFezCalor = true;
// And &&
if(ontemFezCalor && hojeTaQuente){
    console.log("Ontem e hoje estava Quente");
}
// Our ||
if(ontemFezCalor || hojeTaQuente){
  console.log("Ontem e hoje estava Quente");
}
// Not !
if(!ontemFezCalor && !hojeTaQuente){
  console.log("Ontem e hoje estava Quente");
} else{
  console.log("Não estava Quente");
}