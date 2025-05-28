const fs = require('node:fs');

module.exports = function countStudents(path) {
  try {
    const cs = [];
    const swe = [];
    const stream = fs.readFileSync(path, 'utf8');
    const rows = stream.split('\n').slice(1);
    for (const i in rows) {
      const row = rows[i].split(',');
      if (row[3] === 'CS') {
        cs.push(row[0]);
      } if (row[3] === 'SWE') {
        swe.push(row[0]);
      }
    }
    console.log(`Number of students: ${cs.length + swe.length}`);
    console.log(`Number of students is CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students is SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
