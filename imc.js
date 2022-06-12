function calculoIMC() {
    var peso = Number(document.getElementById('peso').value);
    var altura = Number(document.getElementById('altura').value);
    document.getElementById('pesoInformado').innerHTML = peso
    document.getElementById('alturaInformada').innerHTML = altura
    if (peso <= 0 || altura < 0) { alert("Informe valores positivos para peso e altura!"); }
    else if (altura == 0) { alert("Informe valor válido para altura!") } 
    else {
        var imc = parseInt(peso / (altura * altura))
        if (imc < 20) { situacao = " abaixo do peso" }
        else if (imc < 25) { situacao = " com peso normal" }
        else if (imc < 30) { situacao = " com sobrepeso" }
        else if (imc < 35) { situacao = " com obesidade grau 1" }
        else if (imc < 40) { situacao = " com obesidade grau 2" }
        else { situacao = " com obesidade grau 3" }

        let final = document.body;
        let paragrafo = document.createElement('p');
        let conclusao = document.createTextNode("Os dados informados indicam que a pessoa está" + situacao + " com IMC igual a " + imc);
        paragrafo.appendChild(conclusao);
        final.appendChild(paragrafo);
        document.getElementById("pagina").appendChild(final);
    }
}