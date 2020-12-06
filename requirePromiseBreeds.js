const fs = require('fs').promises;

const breedDetailsFromFile = function(breed) {
  return fs.readFile(`./data/${breed}.txt`, 'utf8');
};

breedDetailsFromFile('Balinese').then(data => {
  console.log(data);
}).catch(e => {
  console.log('An error occurred: ', e.message);
});