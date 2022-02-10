const fs = require('fs').promises;

async function readFiles(files) {
  promises = [];
  for (let index = 0; index < files.length; index += 1) {
    promises.push(fs.writeFile(`./file${index + 1}.txt`, files[index]));
  }
  Promise.all(promises);

  readPromises = [];
  for (let i = 0; i < files.length; i += 1) {
    readPromises.push(fs.readFile(`./file${i + 1}.txt`, 'utf-8'));
  }
  Promise.all(readPromises)
    .then((promises) => {
      const fileAllContent = promises.join(' ');
      fs.writeFile('./fileAll.txt', fileAllContent);
  })
}

const files = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
readFiles(files)