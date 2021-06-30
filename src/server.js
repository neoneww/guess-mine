const path = require('path');
const express = require('express');
const socketIO = require('socketIO');
const app = express();
const PORT = 4040;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
	res.render('home');
});

app.listen(PORT, () => {
	console.log('server is listening ✔ ');
});

