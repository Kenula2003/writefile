
const fs = require('fs');

const filePath = 'output.txt';
const fileContent = 'This is a sample text written using fs.writeFile() method in Node.js!';

fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log(`File has been written successfully to ${filePath}`);
    }
});
