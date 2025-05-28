const fs = require('node:fs');

module.exports = function countStudents(path) {
  const cs = [];
  const swe = [];
  const stream = fs.createReadStream(path, 'utf8');
  stream.on('data', (row) => {
    const rows = row.split('\n');
    for (const i in rows) {
      if (i !== '0') {
        const row = rows[i].split(',');
        if (row.length === 1) {
          console.log(`Number of students: ${cs.length + swe.length}`);
          console.log(`Number of students is CS: ${cs.length}. List: ${cs.join(', ')}`);
          console.log(`Number of students is SWE: ${swe.length}. List: ${swe.join(', ')}`);
        }
        if (row[3] === 'CS') {
          cs.push(row[0]);
        } else {
          swe.push(row[0]);
        }
      }
    }
  });
  stream.on('error', () => {
    throw new Error('Cannot load the database');
  });
};
