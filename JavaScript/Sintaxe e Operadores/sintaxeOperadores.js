/*Atividade prática realizada no módulo Sintaxe e Operadores em JavaScript com Stephany Nusch no BootCamp DIO */

function comparacao(num1, num2) {
    const frase1 = criaFrase1 (num1, num2);
    const frase2 = criaFrase2 (num1, num2);

    return `${Frase1} ${Frase2}`;
}

function criaFrase1 (num1, num2) {
    let frase1 = `Os números ${num1} e ${num2}`;
    let iguais = 'não';

    if (num1 === num2) {
        iguais = '';
    }

    return `${frase1} ${iguais} são iguais.`;
}

function criaFrase2 (num1, num2) {
    const soma = num1 + num2;
    let compara10 = 'menor';
    let compara20 = 'menor';

    if (soma > 10) {
        compara10 = 'maior';
    }

    if (soma > 20) {
        compara20 = 'maior';
    }

    return `Sua soma é ${soma}, correspondente a ${compara10} e ${compara20}`;
}

console.log(comparacao(1,15));
  
  /*  const Iguais = num1 === num2;
  const soma = num1 + num2;
    
    if(Iguais) {
        return "Números Iguais";
    } 

    return "Números diferentes";*/

    /*return Iguais ? "Números Iguais" : "Números diferentes;"*/    
