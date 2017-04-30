import path from 'path';
import express from 'express';

const app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname), 'public');
app.set('view engine', 'ejs');

const server = app.listen(3000, () => {
	console.log(`Node.js Listening to PORT: ${server.address().port}`);
});

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/data.json', (req, res) => {
	res.contentType('application/json');

	let people = [];
	for (let i = 1; i <= 10000; i++) {
		people.push({
			code: i.toString().padStart(5, '0'),
			name: `サンプル${i}`
		});
	}

	res.send(JSON.stringify(people))
});