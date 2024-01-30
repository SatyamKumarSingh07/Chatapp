const socket = io('http://localhost:8000');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messagecontainer = document.querySelector(".container");
const append =(message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
}
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', username);
socket.on('user-joined', data=>{
    append(`${username} joined the chat`, 'right');
})