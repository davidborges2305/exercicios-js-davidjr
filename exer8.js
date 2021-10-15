/*
MENOR QUE 18,5	MAGREZA	0
ENTRE 18,5 E 24,9	NORMAL	0
ENTRE 25,0 E 29,9	SOBREPESO	I
ENTRE 30,0 E 39,9	OBESIDADE	II
MAIOR QUE 40,0	OBESIDADE GRAVE	III
SEU IMC:
*/
/*
peso / (altura * altura)
*/
function exibirResultado(resultado){
    console.log('Seu resultado é: ' + resultado);
  }
  
  var peso = prompt('Informe seu peso');
  var altura = prompt('Informe sua altura');
  var imc =  peso / (altura * altura);
  
  console.log('Seu IMC: ' + imc.toFixed(2));
  
  if (imc<=18.5){
      exibirResultado('Magreza');
  }else if (imc<=24.9){
      exibirResultado("Normal");
  }else if (imc<=29.9){
      exibirResultado('Sobrepeso I');
  }else if (imc<=39.9){
      exibirResultado('Obesidade II');
  }else{
      exibirResultado('Obesidade grave III');
  }
  


