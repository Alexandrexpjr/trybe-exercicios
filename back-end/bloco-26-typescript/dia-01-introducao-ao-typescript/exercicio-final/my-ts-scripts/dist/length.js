"use strict";
// Exercício 1 : Crie um script para converter unidades de medida de comprimento:
// Esse script deverá se chamar length.ts ;
// Esse script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
var MedidasComprimento;
(function (MedidasComprimento) {
    MedidasComprimento["Quilometro"] = "km";
    MedidasComprimento["Hectometro"] = "hm";
    MedidasComprimento["Decametro"] = "dam";
    MedidasComprimento["Metro"] = "m";
    MedidasComprimento["Decimetro"] = "dm";
    MedidasComprimento["Centimetro"] = "cm";
    MedidasComprimento["Milimetro"] = "mm";
})(MedidasComprimento || (MedidasComprimento = {}));
function convert(valor, fromUnity, toUnity) {
    const medidas = Object.values(MedidasComprimento);
    let exponent = medidas.indexOf(toUnity) - medidas.indexOf(fromUnity);
    return `${valor * Math.pow(10, exponent)}${toUnity}`;
}
exports.convert = convert;
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    // const fromUnity = readLine.keyInSelect(Object.keys(MedidasComprimento), "Escolha um número para a unidade base");
    // const toUnity = readLine.keyInSelect(Object.keys(MedidasComprimento), "Escolha um número para a conversão");
    // return [value, fromUnity, toUnity]
    // console.log(`${value}${fromUnity} é igual a ${convert(parseInt(value), fromUnity, toUnity)}`)
}
exec();
