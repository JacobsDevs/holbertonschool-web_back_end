console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit();
});
