"use strict";
// Exercício 3 : Crie um script para converter unidades de medida de capacidade:
// Esse script deverá se chamar capacity.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
var MedidasCapacidade;
(function (MedidasCapacidade) {
    MedidasCapacidade["Quilolitro"] = "kl";
    MedidasCapacidade["Hectolitro"] = "hl";
    MedidasCapacidade["Decalitro"] = "dal";
    MedidasCapacidade["Litro"] = "l";
    MedidasCapacidade["Decilitro"] = "dl";
    MedidasCapacidade["Centilitro"] = "cl";
    MedidasCapacidade["Mililitro"] = "ml";
})(MedidasCapacidade || (MedidasCapacidade = {}));
function convert(valor, fromUnity, toUnity) {
    const medidas = Object.values(MedidasCapacidade);
    let exponent = medidas.indexOf(toUnity) - medidas.indexOf(fromUnity);
    return `${valor * Math.pow(10, exponent)}${toUnity}`;
}
exports.convert = convert;
console.log(convert(2, MedidasCapacidade['Litro'], MedidasCapacidade['Mililitro']));
