"use strict";
// Exercício 2 : Crie um script para converter unidades de medida de massa:
// Esse script deverá se chamar mass.ts ;
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
var MedidasMassa;
(function (MedidasMassa) {
    MedidasMassa[MedidasMassa["kg"] = 0] = "kg";
    MedidasMassa[MedidasMassa["hg"] = 1] = "hg";
    MedidasMassa[MedidasMassa["dag"] = 2] = "dag";
    MedidasMassa[MedidasMassa["g"] = 3] = "g";
    MedidasMassa[MedidasMassa["dg"] = 4] = "dg";
    MedidasMassa[MedidasMassa["cg"] = 5] = "cg";
    MedidasMassa[MedidasMassa["mg"] = 6] = "mg";
})(MedidasMassa || (MedidasMassa = {}));
function convert(valor, fromUnity, toUnity) {
    let exponent = toUnity - fromUnity;
    return `${valor * Math.pow(10, exponent)}${MedidasMassa[toUnity]}`;
}
exports.convert = convert;
function exec() {
    const measures = Object.keys(MedidasMassa).filter(key => Number.isNaN(Number(key)));
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnity = readline_sync_1.default.keyInSelect(measures, "Escolha um número para a unidade base");
    const toUnity = readline_sync_1.default.keyInSelect(measures, "Escolha um número para a conversão");
    const result = convert(value, fromUnity, toUnity);
    console.log(`${value}${MedidasMassa[fromUnity]} é igual a ${result}.`);
}
// console.log(readLine);
exec();
