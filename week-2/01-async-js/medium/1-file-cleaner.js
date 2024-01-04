const fs = require('fs');

const cleaning = () => {
	return new Promise((resolve, reject) => {
		fs.readFile('file-medium.txt', 'utf-8', (err, data) => {
			console.log("Before cleaning: ", data);
			data = data.replace(/\s+/g, ' ');

			fs.writeFile('file-medium.txt', data, (err, data) => {
				console.log("Wrote the file removing extra space")
				resolve()
			})

		})
	})

}

cleaning().then(() => {
	fs.readFile('file-medium.txt', 'utf-8', (err, data) => {
		console.log("After cleaning: ", data);
	})
})

