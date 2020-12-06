const fs = require('fs');

const breedDetailsFromFile = function(breed) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};

breedDetailsFromFile('Balinese').then(data => {
  console.log(data);
}).catch(e => {
  console.log('An error occurred: ', e.message);
});