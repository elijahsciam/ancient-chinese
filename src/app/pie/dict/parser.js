/* eslint-disable no-unused-vars */
const fs = require('fs');

const dictionary = fs.readFile(
  'src/app/pie/dict/cedict_ts.u8',
  'utf8',
  (err, data) => {
    if (err) throw err;
    readData(data);
  }
);

const readData = (data) => {
  const lines = data.split('\n').map((line) => {
    const word = line.split('/');
    console.log(word[0]);
  });
};
