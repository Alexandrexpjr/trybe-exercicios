"use strict";
// Exercício 3 : Crie um script para converter unidades de medida de capacidade:
// Esse script deverá se chamar capacity.ts ;
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
var MedidasCapacidade;
(function (MedidasCapacidade) {
    MedidasCapacidade[MedidasCapacidade["kl"] = 0] = "kl";
    MedidasCapacidade[MedidasCapacidade["hl"] = 1] = "hl";
    MedidasCapacidade[MedidasCapacidade["dal"] = 2] = "dal";
    MedidasCapacidade[MedidasCapacidade["l"] = 3] = "l";
    MedidasCapacidade[MedidasCapacidade["dl"] = 4] = "dl";
    MedidasCapacidade[MedidasCapacidade["cl"] = 5] = "cl";
    MedidasCapacidade[MedidasCapacidade["ml"] = 6] = "ml";
})(MedidasCapacidade || (MedidasCapacidade = {}));
function convert(valor, fromUnity, toUnity) {
    let exponent = toUnity - fromUnity;
    return `${valor * Math.pow(10, exponent)}${MedidasCapacidade[toUnity]}`;
}
exports.convert = convert;
function exec() {
    const measures = Object.keys(MedidasCapacidade).filter(key => Number.isNaN(Number(key)));
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const fromUnity = readline_sync_1.default.keyInSelect(measures, "Escolha um número para a unidade base");
    const toUnity = readline_sync_1.default.keyInSelect(measures, "Escolha um número para a conversão");
    const result = convert(value, fromUnity, toUnity);
    console.log(`${value}${MedidasCapacidade[fromUnity]} é igual a ${result}.`);
}
// console.log(readLine);
exec();
