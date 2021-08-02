let linhaRainha = 5;
let colunaRainha = 3;

let linhaPeca = 3;
let colunaPeca = 5;

let ataqueBemSucedido = false;

if (linhaPeca === linhaRainha || colunaPeca === colunaRainha) {
    ataqueBemSucedido = true;
} else if (Math.abs(linhaPeca - linhaRainha) === Math.abs(colunaPeca - colunaRainha)){
    ataqueBemSucedido = true;
} else {
    ataqueBemSucedido = false;
}
console.log('Ataque bem sucedido? ' + ataqueBemSucedido)




// let linhaRainha = 7;
// let colunaRainha = 6;

// let linhaPeca = 2;
// let colunaPeca = 1;


// let ataqueBemSucedido = false;

// if (linhaPeca === linhaRainha || colunaPeca === colunaRainha) {
//   ataqueBemSucedido = true;
// } else {

//     for (let supDir = 1; supDir < 8; supDir += 1) {
//         let linhaAtaque = linhaRainha + supDir;
//         let colunaAtaque = colunaRainha + supDir;

//         if (linhaAtaque > 8 || colunaAtaque > 8) {
//             break;
//         }

//         if (linhaAtaque === linhaPeca && colunaAtaque === colunaPeca) {
//             ataqueBemSucedido = true;
//             break;
//         }
//     }
//     for (let supEsq = 1; supEsq < 8; supEsq += 1) {
//         let linhaAtaque = linhaRainha + supEsq;
//         let colunaAtaque = colunaRainha - supEsq;
    
//         if (linhaAtaque > 8 || colunaAtaque < 1) {
//             break;
//         }
    
//         if (linhaAtaque === linhaPeca && colunaAtaque === colunaPeca) {
//             ataqueBemSucedido = true;
//             break;
//         }
//     }
//     for (let infEsq = 1; infEsq < 8; infEsq += 1) {
//         let linhaAtaque = linhaRainha - infEsq;
//         let colunaAtaque = colunaRainha - infEsq;
    
//         if (linhaAtaque < 1 || colunaAtaque < 1) {
//           break;
//         }
    
//         if (linhaAtaque === linhaPeca && colunaAtaque === colunaPeca) {
//           ataqueBemSucedido = true;
//           break;
//         }
//     }
//     for (let infDir = 1; infDir < 8; infDir += 1) {
//         let linhaAtaque = linhaRainha - infDir;
//         let colunaAtaque = colunaRainha + infDir;
    
//         if (linhaAtaque < 1 || colunaAtaque > 8) {
//           break;
//         }
    
//         if (linhaAtaque === linhaPeca && colunaAtaque === colunaPeca) {
//           ataqueBemSucedido = true;
//           break;
//         }
//     }
// }

// console.log('Ataque bem sucedido? ' + ataqueBemSucedido);

