import React, { Component } from 'react';
import Student from './components/Students/student';
import './App.css';

class App extends Component {

  callTheApi = (e) => {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.callTheApi}>Call the Api!</button>
        <Student />
      </div>
    );
  }
}

export default App;
