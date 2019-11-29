import React from 'react';
import './App.css';

function App() {
  return (
    <div className="form-landing">
      <label htmlFor="inp-message">Message</label>
      <input type="text" id="inp-message" name="message" placeholder="type message here!!" />
      <div className="div-form-button">
        <button className="button" >new connection</button>
        <button className="button button-secondary" >send message</button>
      </div>
      <hr />
    </div>
  );
}

export default App;
