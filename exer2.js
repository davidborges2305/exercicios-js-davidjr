var votosCandidatoA, votosCandidatoB, votosCandidatoC, votosBrancos, votosNulos, totalVotos;
var porcentagemA, porcetagemB, porcentagemC, porcentagemBrancos, porcentagemNulos;
votosCandidatoA = parseInt(prompt(' Digite os votos do canditado A: '));
votosCandidatoB = parseInt(prompt(' Digite os votos do canditado B: '));
votosCandidatoC = parseInt(prompt(' Digite os votos do canditado C: '));
votosBrancos = parseInt(prompt(' Digite os votos em branco: '));
votosNulos = parseInt(prompt(' Digite os votos nulos: '));
totalVotos = votosCandidatoA + votosCandidatoB + votosCandidatoC + votosBrancos + votosNulos;

porcentagemA = votosCandidatoA / totalVotos;
porcetagemB = votosCandidatoB / totalVotos;
porcentagemC =votosCandidatoC / totalVotos;
porcentagemBrancos =votosBrancos / totalVotos;
porcentagemNulos = votosNulos/ totalVotos;
console.log(' O candidato A atingiu a seguinte porcentagem de votos:  ' + porcentagemA);
console.log(' O candidato B atingiu a seguinte porcentagem de votos:  ' + porcentagemB);
console.log(' O candidato C atingiu a seguinte porcentagem de votos:  ' + porcentagemC);
console.log(' A porcentagem de votos brancos foi a seguinte:  ' + porcentagemBrancos);
console.log(' A porcentagem de votos nulos:  ' + porcentagemNulos);
console.log(' O total de votos é: ' +totalVotos );

