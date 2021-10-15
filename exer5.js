// Fórmula de conversão de f para c pode ser também = °F-32 * 5/9 = °C
var tempFahren =  prompt('Digite a temperatura em °F: ');
var tempCelsius = ((parseFloat(tempFahren) -32) * 5/9);
console.log('Temperatura convertida: ' +tempCelsius + '°C');