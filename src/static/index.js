const socket = io('/');

function sendMessage(message) {
	socket.emit('newMessage', { message: message });
}
 