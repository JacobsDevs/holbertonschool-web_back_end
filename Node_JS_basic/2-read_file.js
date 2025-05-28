const fs = require('node:fs');

module.exports = function countStudents(path) {
  try {
    const cs = [];
    const swe = [];
    const stream = fs.readFileSync(path, 'utf-8');
    const rows = stream.split('\n').slice(1);
    for (const row of rows) {
      const data = row.split(',');
      if (data[3] === 'CS') {
        cs.push(data[0]);
      } if (data[3] === 'SWE') {
        swe.push(data[0]);
      }
    }
    console.log(`Number of students: ${cs.length + swe.length}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
