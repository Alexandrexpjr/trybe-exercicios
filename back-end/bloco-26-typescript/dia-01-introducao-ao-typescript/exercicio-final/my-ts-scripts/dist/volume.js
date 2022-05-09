"use strict";
// Exercício 5 : Crie um script para converter unidades de medida de volume:
// Esse script deverá se chamar volume.ts ;
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
var MedidasVolume;
(function (MedidasVolume) {
    MedidasVolume[MedidasVolume["km\u00B3"] = 0] = "km\u00B3";
    MedidasVolume[MedidasVolume["hm\u00B3"] = 1] = "hm\u00B3";
    MedidasVolume[MedidasVolume["dam\u00B3"] = 2] = "dam\u00B3";
    MedidasVolume[MedidasVolume["m\u00B3"] = 3] = "m\u00B3";
    MedidasVolume[MedidasVolume["dm\u00B3"] = 4] = "dm\u00B3";
    MedidasVolume[MedidasVolume["cm\u00B3"] = 5] = "cm\u00B3";
    MedidasVolume[MedidasVolume["mm\u00B3"] = 6] = "mm\u00B3";
})(MedidasVolume || (MedidasVolume = {}));
function convert(valor, fromUnity, toUnity) {
    let exponent = (toUnity - fromUnity) * 3;
    return `${valor * Math.pow(10, exponent)}${MedidasVolume[toUnity]}`;
}
exports.convert = convert;
function exec() {
    const measures = Object.keys(MedidasVolume).filter(key => Number.isNaN(Number(key)));
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnity = readline_sync_1.default.keyInSelect(measures, "Escolha um número para a unidade base");
    const toUnity = readline_sync_1.default.keyInSelect(measures, "Escolha um número para a conversão");
    const result = convert(value, fromUnity, toUnity);
    console.log(`${value}${MedidasVolume[fromUnity]} é igual a ${result}.`);
}
// console.log(readLine);
exec();
