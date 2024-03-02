import './css/style.scss';
import { io } from 'socket.io-client';
import printStart from './scripts/printStart.mjs';
const socket = io('http://localhost:3000');

// User state check
if (sessionStorage.getItem('user')) {
  // Add function to print rooms?
  console.log('User stored in sessionStorage');
} else {
  printStart();
}

/* let sendMessage = document.querySelector('#sendMessage');
let sendBtn = document.querySelector('#sendBtn');
let chatList = document.querySelector('#chatList');

sendBtn.addEventListener('click', () => {
  let user = sessionStorage.getItem('user');
  console.log('send chat', sendMessage.value);
  socket.emit('chat', {
    message: sendMessage.value,
    user: user,
  });
});

socket.on('chat', (arg) => {
  console.log('socket', arg);

  updateChat(arg);
});

function updateChat(chat) {
  let li = document.createElement('li');
  li.innerText = chat.user + ': ' + chat.message;
  chatList.appendChild(li);
} */
