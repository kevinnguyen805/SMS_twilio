import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [text, setText] = useState({
    'recipient': '',
    'textMessage': ''
  })

  const handleChanges = (event) => {
    event.preventDefault();
    setText({
      ...text, 
      [event.target.name]:event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

  }

  // create a text message function 
  //when the person presses this button, the text will be passed along

  const sendText = (event) => {
    event.preventDefault()
    // TODO - GET request - pass variables within the query string 
    axios.get(`http://localhost:4000/send-text?recipient=${text.recipient}&textmessage=${text.textMessage}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      Hello this is my practice Twilio text 

      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="recipient"
        value={text.recipient}
        onChange={handleChanges}
        placeholder="Recipient"
      />
      <input 
        type="text"
        name="textMessage"
        value={text.textMessage}
        onChange={handleChanges}
        placeholder="Text Message"
      />
      <button onClick={sendText}>Send Text</button>
      </form>
    </div>
  );
}

export default App;
