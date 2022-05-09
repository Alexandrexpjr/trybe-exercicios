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
    MedidasComprimento[MedidasComprimento["km"] = 0] = "km";
    MedidasComprimento[MedidasComprimento["hm"] = 1] = "hm";
    MedidasComprimento[MedidasComprimento["dam"] = 2] = "dam";
    MedidasComprimento[MedidasComprimento["m"] = 3] = "m";
    MedidasComprimento[MedidasComprimento["dm"] = 4] = "dm";
    MedidasComprimento[MedidasComprimento["cm"] = 5] = "cm";
    MedidasComprimento[MedidasComprimento["mm"] = 6] = "mm";
})(MedidasComprimento || (MedidasComprimento = {}));
function convert(valor, fromUnity, toUnity) {
    let exponent = toUnity - fromUnity;
    return `${valor * Math.pow(10, exponent)}${MedidasComprimento[toUnity]}`;
}
exports.convert = convert;
function exec() {
    const measures = Object.keys(MedidasComprimento).filter(key => Number.isNaN(Number(key)));
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnity = readline_sync_1.default.keyInSelect(measures, "Escolha um número para a unidade base");
    const toUnity = readline_sync_1.default.keyInSelect(measures, "Escolha um número para a conversão");
    const result = convert(value, fromUnity, toUnity);
    console.log(`${value}${MedidasComprimento[fromUnity]} é igual a ${result}.`);
}
// console.log(readLine);
exec();
