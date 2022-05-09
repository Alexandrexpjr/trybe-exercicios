"use strict";
// Exercício 4 : Crie um script para converter unidades de medida de área:
// Esse script deverá se chamar area.ts ;
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
var MedidasArea;
(function (MedidasArea) {
    MedidasArea[MedidasArea["km\u00B2"] = 0] = "km\u00B2";
    MedidasArea[MedidasArea["hm\u00B2"] = 1] = "hm\u00B2";
    MedidasArea[MedidasArea["dam\u00B2"] = 2] = "dam\u00B2";
    MedidasArea[MedidasArea["m\u00B2"] = 3] = "m\u00B2";
    MedidasArea[MedidasArea["dm\u00B2"] = 4] = "dm\u00B2";
    MedidasArea[MedidasArea["cm\u00B2"] = 5] = "cm\u00B2";
    MedidasArea[MedidasArea["mm\u00B2"] = 6] = "mm\u00B2";
})(MedidasArea || (MedidasArea = {}));
function convert(valor, fromUnity, toUnity) {
    let exponent = (toUnity - fromUnity) * 2;
    return `${valor * Math.pow(10, exponent)}${MedidasArea[toUnity]}`;
}
exports.convert = convert;
function exec() {
    const measures = Object.keys(MedidasArea).filter(key => Number.isNaN(Number(key)));
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnity = readline_sync_1.default.keyInSelect(measures, "Escolha um número para a unidade base");
    const toUnity = readline_sync_1.default.keyInSelect(measures, "Escolha um número para a conversão");
    const result = convert(value, fromUnity, toUnity);
    console.log(`${value}${MedidasArea[fromUnity]} é igual a ${result}.`);
}
// console.log(readLine);
exec();
