function encode(phrase) {
  let encodedPhrase = '';
  for (let index = 0; index < phrase.length; index += 1) {
    let character = phrase[index];
    switch (character) {
      case 'a':
        encodedPhrase += '1';
        break;
      case 'e': 
        encodedPhrase += '2';
        break;
      case 'i':
        encodedPhrase += '3';
        break;
      case 'o':
        encodedPhrase += '4';
        break;
      case 'u':
        encodedPhrase += '5';
        break;
      default:
        encodedPhrase += character;       
    } 
  }
  return encodedPhrase;
}

console.log(encode('hi there'));

function decode(encodedPhrase) {
  let decodedPhrase = '';
  for (let index = 0; index < encodedPhrase.length; index += 1) {
    let character = encodedPhrase[index];
    switch (character) {
      case '1':
        decodedPhrase += 'a';
        break;
      case '2': 
        decodedPhrase += 'e';
        break;
      case '3':
        decodedPhrase += 'i';
        break;
      case '4':
        decodedPhrase += 'o';
        break;
      case '5':
        decodedPhrase += 'u';
        break;
      default:
        decodedPhrase += character;       
    } 
  }
  return decodedPhrase;
}

module.exports = { encode, decode };