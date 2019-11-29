import React from 'react';
import './App.css';

function App() {
  return (
    <div className="form-landing">
      {/* Nickname */}
      <label htmlFor="inp-nickname">Nickname:</label>
      <input type="text" id="inp-nickname" name="nickname" placeholder="type nickname here..." />
      <div className="div-form-button">
        <button className="button" >new connection</button>
      </div>
      <hr className="hr-visible" />
      {/* List Messages */}
      <label htmlFor="messages">Messages</label>
      <textarea readOnly name="messages" />
      <hr className="hr-visible" />
      {/* Message */}
      <label htmlFor="inp-message">Message</label>
      <input type="text" id="inp-message" name="message" placeholder="type messages here..." />
      <div className="div-form-button">
        <button className="button">send message</button>
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
