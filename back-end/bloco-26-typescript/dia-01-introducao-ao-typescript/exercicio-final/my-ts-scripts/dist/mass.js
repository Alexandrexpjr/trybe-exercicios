"use strict";
// Exercício 2 : Crie um script para converter unidades de medida de massa:
// Esse script deverá se chamar mass.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
var MedidasMassa;
(function (MedidasMassa) {
    MedidasMassa["Quilograma"] = "kg";
    MedidasMassa["Hectograma"] = "hg";
    MedidasMassa["Decagrama"] = "dag";
    MedidasMassa["Grama"] = "g";
    MedidasMassa["Decigrama"] = "dg";
    MedidasMassa["Centigrama"] = "cg";
    MedidasMassa["Miligrama"] = "mg";
})(MedidasMassa || (MedidasMassa = {}));
function convert(valor, fromUnity, toUnity) {
    const medidas = Object.values(MedidasMassa);
    let exponent = medidas.indexOf(toUnity) - medidas.indexOf(fromUnity);
    return `${valor * Math.pow(10, exponent)}${toUnity}`;
}
exports.convert = convert;
console.log(convert(111, MedidasMassa['Grama'], MedidasMassa['Decigrama']));
