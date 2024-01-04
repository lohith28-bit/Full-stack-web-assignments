let fs = require('fs');
fs.readFile('file.txt', 'utf-8', function (err, data) {
	console.log('data from fs: ', data);
})

