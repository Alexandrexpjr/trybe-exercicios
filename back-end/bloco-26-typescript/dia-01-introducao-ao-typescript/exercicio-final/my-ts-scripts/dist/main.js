"use strict";
// Exercício 11 : Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync , que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação ), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:
// Retorne em que estação aquele mês se encontra.
// Caso seja um mês que possua duas estações retorne ambas.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const months_1 = __importDefault(require("./enums/months"));
const Seasons_1 = __importDefault(require("./enums/Seasons"));
const readline_sync_1 = __importDefault(require("readline-sync"));
function main() {
    const months = Object.values(months_1.default);
    let seasons = [];
    const hemispheres = ['Norte', 'Sul'];
    const month = readline_sync_1.default.keyInSelect(months, 'Escolha um mês do ano:\n');
    const hemisferio = readline_sync_1.default.keyInSelect(hemispheres, 'Agora, escolha o hemisfério:\n');
    if (month <= 2 || month == 11) {
        if (hemisferio === 0) {
            seasons.push(Seasons_1.default.PRIMAVERA);
        }
        else {
            seasons.push(Seasons_1.default.OUTONO);
        }
    }
    if (month >= 2 && month <= 5) {
        if (hemisferio === 0) {
            seasons.push(Seasons_1.default.VERAO);
        }
        else {
            seasons.push(Seasons_1.default.INVERNO);
        }
    }
    if (month >= 5 && month <= 8) {
        if (hemisferio === 0) {
            seasons.push(Seasons_1.default.OUTONO);
        }
        else {
            seasons.push(Seasons_1.default.PRIMAVERA);
        }
    }
    if (month >= 8) {
        if (hemisferio === 0) {
            seasons.push(Seasons_1.default.INVERNO);
        }
        else {
            seasons.push(Seasons_1.default.VERAO);
        }
    }
    console.log(`Estações: ${seasons}`);
}
main();
