//import logger from "morgan";
//const morgan = require('morgan');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const app = express();
const PORT = 4040;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));
//app.use(app.logger('dev'));

app.get('/', (req, res) => {
	res.render('home');
});

//saving into server variable for socket.io
const server = app.listen(PORT, () => {
	console.log('server is listening ✔ ');
});

const io = socketIO(server);

io.on('connection', (socket) => console.log(socket));
