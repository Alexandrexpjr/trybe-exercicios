"use strict";
// Exercício 4 : Crie um script para converter unidades de medida de área:
// Esse script deverá se chamar area.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
var MedidasArea;
(function (MedidasArea) {
    MedidasArea["Quilometro quadrado"] = "km\u00B2";
    MedidasArea["Hectometro quadrado"] = "hm\u00B2";
    MedidasArea["Decametro quadrado"] = "dam\u00B2";
    MedidasArea["Metro quadrado"] = "m\u00B2";
    MedidasArea["Decimetro quadrado"] = "dm\u00B2";
    MedidasArea["Centimetro quadrado"] = "cm\u00B2";
    MedidasArea["Milimetro quadrado"] = "mm\u00B2";
})(MedidasArea || (MedidasArea = {}));
function convert(valor, fromUnity, toUnity) {
    const medidas = Object.values(MedidasArea);
    let exponent = (medidas.indexOf(toUnity) - medidas.indexOf(fromUnity)) * 2;
    return `${valor * Math.pow(10, exponent)}${toUnity}`;
}
exports.convert = convert;
console.log(convert(33, MedidasArea['Metro quadrado'], MedidasArea['Centimetro quadrado']));
