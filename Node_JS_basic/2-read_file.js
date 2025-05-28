const fs = require('node:fs');
const { parse } = require('csv-parse');

module.exports = function countStudents(path) {
  try {
    const cs = [];
    const swe = [];
    fs.createReadStream(path)
      .pipe(parse({ delimiter: ',', from_line: 2 }))
      .on('data', (row) => {
        if (row[3] === 'CS') {
          cs.push(row[0]);
        } else {
          swe.push(row[0]);
        }
      })
      .on('end', () => {
        console.log(`Number of students: ${cs.length + swe.length}`);
        console.log(`Number of students is CS: ${cs.length}. List: ${cs.join(', ')}`);
        console.log(`Number of students is SWE: ${swe.length}. List: ${swe.join(', ')}`);
      });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
