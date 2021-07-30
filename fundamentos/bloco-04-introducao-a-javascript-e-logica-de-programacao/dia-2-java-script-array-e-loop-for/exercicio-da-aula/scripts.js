let senaNumbers =[];

for(index = 0; index < 6; index += 1) {
    senaNumbers.push(Math.ceil(Math.random() * 60 - 1))
}

let firstTry = [1, 2, 3, 4, 5, 6];
let secondTry = [7, 13, 19, 26, 33, 55];
let thirdTry = [4, 11, 30, 33, 40, 59];

let tries = [firstTry, secondTry, thirdTry];

for (let indexTry = 0; indexTry < tries.length; indexTry += 1) {
    let numberOfHits = 0;
    let attempt = tries[indexTry];
    for (let indexNumber = 0; indexNumber < attempt.length; indexNumber += 1) {
        let numbers = attempt[indexNumber];
        for (let indexMega = 0; indexMega < senaNumbers.length; indexMega +=1) {
            let megaNumbers = senaNumbers[indexMega];
            if (numbers === megaNumbers) {
                numberOfHits += 1;
            }
        }
    }
console.log("Números sorteados: " + senaNumbers);
console.log("Jogo " + indexTry + ": " + attempt);
console.log("Acertos: " + numberOfHits);
console.log();
}


// let firstNumber = Math.floor(Math.random() * 60 + 1);
// let secondNumber = Math.floor(Math.random() * 60 + 1);
// let thirdNumber = Math.floor(Math.random() * 60 + 1);
// let fourthNumber = Math.floor(Math.random() * 60 + 1);
// let fifthNumber = Math.floor(Math.random() * 60 + 1);
// let sixthNumber = Math.floor(Math.random() * 60 + 1);

// let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

// let playJoaoVictor = [7, 15, 28, 42, 56, 58];
// let playEmily = [12, 49, 51, 36, 22, 8];
// let playEmmanuelle = [13, 17, 23, 42, 51, 59];

// let plays = [playJoaoVictor, playEmily, playEmmanuelle];
// let numberOfHits = 0;
// for (let indexPlays = 0; indexPlays < plays.length; indexPlays += 1) {
//   let playArray = plays[indexPlays];
//   for (let index = 0; index < playArray.length; index += 1) {
//     let playNumber = playArray[index];
//     for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
//       let megaNumber = megaSenaNumbers[indexMega];
//       if (playNumber === megaNumber) {
//         numberOfHits += 1;
//       }
//     }
//   }
//   console.log('Mega Sena: ' + megaSenaNumbers);
//   console.log('Jogo ', indexPlays, ': ' + playArray);
//   console.log('Acertos: ' + numberOfHits);
//   console.log();
// }
