import React, { Component } from 'react';
import Student from './components/Students/student';
import './App.css';

class App extends Component {

  state = {
    persons: []
  }

  componentDidMount() {
    this.callTheApi();
  }

  callTheApi = () => {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        // console.log(data.students);
        // this.updateStudentStateHandler(data.students);
        this.setState({persons: data.students})
      })
  }

  showMe = () => {
    console.log(this.state.persons);
  }

  render() {
    return (
      <div>
        {this.state.persons.map(function(person) {
          return <Student
          firstName={person.firstName}
          />
        })}
        <button onClick={this.showMe}>Show me</button>
      </div>
    );
  }
}

export default App;
