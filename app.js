 function alterar () {
    var notaPrimeiroBimestre = parseFloat(prompt("Digite aqui sua nota do primeiro bimestre"));
    var notaSegundoBimestre = parseFloat(prompt("Digite aqui sua nota do segundo bimestre"));
    var notaTerceiroBimestre = parseFloat(prompt("Digite aqui sua nota do terceiro bimestre"));
    var notaQuartoBimestre = parseFloat(prompt("Digite aqui sua nota do quarto bimestre"));

    var notaFinal = (notaPrimeiroBimestre+notaSegundoBimestre+notaTerceiroBimestre+notaQuartoBimestre) / 4;

    var notaFixa = notaFinal.toFixed(2);

    document.querySelector(".media-aluno").innerHTML = notaFixa;
};


