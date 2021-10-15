var anoNasc = prompt('Digite o ano nascimento: ');
var anoAtual = prompt('Digite o ano atual: ');
var idade = anoAtual - anoNasc;
if( idade >= 16){
  console.log('Pode Votar!');
}
else{
  console.log('Você não pode votar!');
}