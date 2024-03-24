// Use readline for Node.js environment
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Prompt user to input student marks
rl.question('Kindly input student marks: ', (marks) => {
  // Convert marks to a number
  marks = parseFloat(marks);

  // Check if marks entered is between 0 and 100
    if (marks > 79) {
      console.log('Grade:A');
    } else if (marks >= 60 && marks <= 79) {
        console.log('Grade:B')
    } else if (marks >= 50 && marks <= 59) {
        console.log('Grade:C'); 
    } else if (marks >= 40 && marks <= 49) {
        console.log('Grade:D');
    } else {
     console.log('Grade:E');
    }

  // Close readline interface
  rl.close();
});
