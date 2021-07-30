let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multipliedNumbers = [];

for(let index = 1; index < numbers.length; index +=1) {
    let newIndex = index - 1;
    multipliedNumbers.push(numbers[index] * numbers[newIndex]);   
}

console.log("Números multiplicados: " + multipliedNumbers);

for(let index = 1; index < numbers.length; index +=1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex+=1) {
        if(numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }        
    }
}

console.log("Números em ordem crescente: " + numbers);

for(let index = 1; index < numbers.length; index +=1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex+=1) {
        if(numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }        
    }
}

console.log("Números em ordem decrescente: " + numbers);

for(let index = 1; index < numbers.length; index +=1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex+=1) {
        if(numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }        
    }
}


// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
//   }