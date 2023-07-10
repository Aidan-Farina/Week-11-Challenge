const { readFromFile } = require('./helpers/fsUtils');

const dbPath = './db/db.json';

readFromFile(dbPath)
  .then((data) => {
    console.log('Data read from file:', data);
  })
  .catch((error) => {
    console.error('Error reading file:', error);
  });