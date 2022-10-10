import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'

function App() {

const URL = process.env.REACT_APP_URL

const [text, setText] = useState("");

useEffect(() => {
  axios.get(URL + "/title")
  .then(res => {
    setText(res.data.title) 
  })
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
