let nomeDoAluno = prompt("Digite seu nome: ");
let frequencia = parseInt(prompt("Digite qual foi sua frequência: "));
let notaAv1 = parseFloat(prompt("Digite sua nota na AV1: "));
let notaAv2 = parseFloat(prompt("Digite sua nota na AV2: "));
let calcularParcial = (notaAv1 + notaAv2)/2;
let notaAv3;
if(calcularParcial >= 4){
    notaAv3 = parseFloat(prompt("Digite sua nota da AV3: "));
    let notaFinal = (calcularParcial + notaAv3)/2;
    if((notaFinal >= 5) && (frequencia >= 75)){
    console.log("Parabéns", nomeDoAluno, "você foi aprovado e sua nota final foi:", notaFinal);
} else {
    console.log("Reprovado na Nota Final.");
}
} else {
    console.log("Reprovado na Nota Parcial.");
}