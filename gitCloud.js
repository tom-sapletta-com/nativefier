// npm install --save gitcloud
const gitCloud = require('gitcloud');

gitCloud('http://nativefier.github.io/gitcloud')
	.then(fileIndex => {
		console.log(fileIndex);
	})
	.catch(error => {
		console.error(error);
	});
