"use strict";
// Exercício 5 : Crie um script para converter unidades de medida de volume:
// Esse script deverá se chamar volume.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
var MedidasVolume;
(function (MedidasVolume) {
    MedidasVolume["Quilometro c\u00FAbico"] = "km\u00B3";
    MedidasVolume["Hectometro c\u00FAbico"] = "hm\u00B3";
    MedidasVolume["Decametro c\u00FAbico"] = "dam\u00B3";
    MedidasVolume["Metro c\u00FAbico"] = "m\u00B3";
    MedidasVolume["Decimetro c\u00FAbico"] = "dm\u00B3";
    MedidasVolume["Centimetro c\u00FAbico"] = "cm\u00B3";
    MedidasVolume["Milimetro c\u00FAbico"] = "mm\u00B3";
})(MedidasVolume || (MedidasVolume = {}));
function convert(valor, fromUnity, toUnity) {
    const medidas = Object.values(MedidasVolume);
    let exponent = (medidas.indexOf(toUnity) - medidas.indexOf(fromUnity)) * 3;
    return `${valor * Math.pow(10, exponent)}${toUnity}`;
}
exports.convert = convert;
console.log(convert(33, MedidasVolume['Metro cúbico'], MedidasVolume['Centimetro cúbico']));
