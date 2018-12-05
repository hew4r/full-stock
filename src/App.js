import React  from 'react';
import './App.css';
import axios from 'axios'
const fs = require('fs');
const path = require('path');
class App extends React.Component {
  
  state = {
    persons: []
  }
  
  componentDidMount() {
    const fs = require('fs');
 
    fs.readFile('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
      if (err) throw err;
      let student = JSON.parse(data);
      console.log(student);
    });

  }
  
  render() {
    return (
      <ul>
      
      </ul>
    )
  }
}

export default App;
