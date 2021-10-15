
const arrayNumeros = [];
const tamanhoArray = 10;

for(var indice = 0; indice < tamanhoArray; indice++) {
  var valorDigitado = parseInt(prompt('Digite o valor: '));
  arrayNumeros.push(valorDigitado);
}

const indicePrimeiraPosicaoArray = 0;
var menorNum = arrayNumeros[indicePrimeiraPosicaoArray];
var maiorNum = arrayNumeros[indicePrimeiraPosicaoArray];

for(var posicaoAtualArray = 1 ; posicaoAtualArray < tamanhoArray ; posicaoAtualArray++){
  if(arrayNumeros[posicaoAtualArray] < menorNum){
    menorNum = arrayNumeros[posicaoAtualArray];
  }
  if(arrayNumeros[posicaoAtualArray]> maiorNum){
    maiorNum = arrayNumeros[posicaoAtualArray];
  }
}

console.log('Esse é o menor número : ' + menorNum )
console.log('Esse é o maior número ' +  maiorNum);
