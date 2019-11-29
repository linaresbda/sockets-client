import React from 'react';
import './App.css';
import io from 'socket.io-client';

function App() {
  let socket;
  let urlServer = 'http://192.168.15.13:80';
  
  function handleNewConnection() {
    if (!socket || socket.connected === false) {
      console.log('new connection');
      socket = io(urlServer, { query: `user=${document.getElementById('inp-nickname').value}` });
      listenerSocket();
    }
  }

  function handleSendMessage() {
    if (socket && socket.connected === true) {
      let message = document.getElementById('inp-message').value;
      let recipient = document.getElementById('inp-recipient').value;
      if (message !== '') {
        socket.emit('request', { message, recipient });
        console.log('send message');
      }
    } else {
      console.log('socket is not available');
    }
  }

  function listenerSocket() {
    socket.on('response', data => {
      let txtMessage = document.getElementById('txt-messages');
      let message = `${txtMessage.value}\n`;
      message = message += data;
      txtMessage.value = message;
    });
  }

  return (
    <div className="form-landing">
      {/* Nickname */}
      <label htmlFor="inp-nickname">Nickname:</label>
      <input type="text" id="inp-nickname" name="nickname" placeholder="type nickname here..." />
      <div className="div-form-button">
        <button className="button" onClick={handleNewConnection}>new connection</button>
      </div>
      <hr className="hr-visible" />
      {/* List Messages */}
      <label htmlFor="messages">Messages</label>
      <textarea id='txt-messages' disabled={true} readOnly name="messages" />
      <hr className="hr-visible" />
      {/* Message */}
      <label htmlFor="inp-message">Message</label>
      <input type="text" id="inp-message" name="message" placeholder="type messages here..." />
      <div className="div-form-button">
        <button className="button" onClick={handleSendMessage}>send message</button>
      </div>
      <hr className="hr-visible" />
      {/* Message recipient*/}
      <label htmlFor="inp-recipient">Destinatary</label>
      <input type="text" id="inp-recipient" name="recipient" placeholder="type message recipient here... (nickname)" />
      <span className="note">Note: if this field is empty, it is considered broadcast</span>
      <hr />
    </div>
  );
}

export default App;
