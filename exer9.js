function clickBotaoCalcularValor() {
    
    var tipoArroz = document.getElementById("tipoArroz").value;
    var precoArrozT1 = document.getElementById("precoArrozT1").value;
    var precoArrozT2 = document.getElementById("precoArrozT2").value;
    var precoFeijaoBranco = document.getElementById("precoFeijaoBranco").value;
    var precoFeijaoPreto = document.getElementById("precoFeijaoPreto").value;
    var precoLinguicaDePorco = document.getElementById("precoLinguicaDePorco").value;
    var precolentilha = document.getElementById("precoLentilha").value;
    var totalCompras;

    if (tipoArroz == '1') {
        precoArrozT1 = parseFloat(precoArrozT1);
        precoFeijaoPreto = parseFloat(precoFeijaoPreto);
        totalCompras = precoArrozT1 + (precoFeijaoPreto * 2);
    } else {
        if (tipoArroz == '2') {
            precodoArrozT2 = parseFloat(precoArrozT2);
            precoFeijaoBranco = parseFloat(precoFeijaoBranco);
            totalCompras = (precoArrozT2 * 3) + (precoFeijaoBranco);
        } else {
            precoLinguicaDePorco = parseFloat(precoLinguicaDePorco);
            precolentilha = parseFloat(precolentilha);
            totalCompras = (precolentilha * 2) + precoLinguicaDePorco
        }
    }

    alert("O preço das suas compras somaram R$" + totalCompras);
    if (sexo == 'F' && idade >= 16) {
        alert ("Venha participar da nossa campanha de saúde!");
    } else if (sexo == 'M'){
        if (estado_civil == "casado"){
            alert ("Venha participar da nossa campanha para casais.")
        } else {
            alert ("Venha participar da nossa campanha de doação de sangue.")
        }
    }else {
        alert("Gênero não especificado")
    }

}


