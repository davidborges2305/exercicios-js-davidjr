/*
Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero;

Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, deixa resto diferente de zero;

Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão deve ser exata, deixando o resto igual a zero.
*/
var anoBissexto = prompt('Qual o ano que desja saber se é bissexto? ');
if(anoBissexto % 4 == 0 && anoBissexto % 100 !=0){
    console.log('O ano é bissexto')
}
else{
    console.log('O não é bissexto')
}


function somarValor(valor1, valor2){
    return valor1 + valor2
}
function subtrairValor(valor1, valor2){
    return valor1 - valor2
}
function somarOuSubtrair(valor1, valor2, ehParaFazerSoma){
}

function nomeCompleto (primeiroNome, nomeDomeio,ultimoNome, converterMinuscula){
    const nomeCompleto = primeiroNome + ' ' + nomeDomeio + ' ' + ultimoNome;
    return converterMinuscula ? nomeCompleto.toLowerCase() : nomeCompleto.toUpperCase();
}
    