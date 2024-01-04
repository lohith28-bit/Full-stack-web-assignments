const fs = require('fs');

fs.writeFile('file.txt', 'Hello , Its a altered file', (err) => {
	if (err) throw err;
	console.log('The file has been saved!');
});