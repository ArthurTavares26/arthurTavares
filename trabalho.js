1° QUESTÃO://
function mediaAprovados(notas) {
    let soma = 0;
    let quantidade = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 6) {
            soma += notas[i];
            quantidade++;
        }
    }

    if (quantidade === 0) {
        return "Nenhum aprovado";
    }

    return soma / quantidade;
}

console.log(mediaAprovados([4, 7, 9, 5, 6]));
console.log(mediaAprovados([2, 3, 5]));




2° QUESTÃO:
const temperaturas = [18, 22, 27, 31, 29, 24, 19];

let maior = temperaturas[0];
let menor = temperaturas[0];
let contadorCalor = 0;

for (let i = 0; i < temperaturas.length; i++) {

    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }

    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }

    if (temperaturas[i] >= 28) {
        contadorCalor++;
    }
}

console.log("Maior temperatura:", maior);
console.log("Menor temperatura:", menor);
console.log("Temperaturas igual ou superior a 28:", contadorCalor);




3° QUESTÃO: 
function turmaComMaiorMedia(turmas) {

    let maiorMedia = 0;
    let indiceMaior = 0;

    for (let i = 0; i < turmas.length; i++) {

        let soma = 0;

        for (let j = 0; j < turmas[i].length; j++) {
            soma += turmas[i][j];
        }

        let media = soma / turmas[i].length;

        if (media > maiorMedia) {
            maiorMedia = media;
            indiceMaior = i;
        }
    }

    return indiceMaior;
}

const turmas = [
    [7, 8, 5],
    [4, 3, 6, 9],
    [10, 7]
];

console.log(turmaComMaiorMedia(turmas));





