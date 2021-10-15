var cedulas = [100,50,20,10,5,2,1];
var valorTroco = parseInt(prompt('Digite o valor do troco: '));
var numeroCedulas = cedulas.length;
var posicaoInicialLoop = 0;
do{
  for(var i = posicaoInicialLoop; i<numeroCedulas;  i++){
      if(cedulas[i] <= valorTroco){
          console.log('Uma cédula de ' + cedulas[i]);
          valorTroco = valorTroco - cedulas[i];
          posicaoInicialLoop = i;
          break;
      }
  }
}while(valorTroco > 0)