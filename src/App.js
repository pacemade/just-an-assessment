import React, { Component } from 'react';
import Student from './components/Students/student';
import Search from './components/Search/search';
import './App.css';

class App extends Component {

  state = {
    persons: [],
    search: ''
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

  findMatchesHandler = (wordToMatch, persons) => {
    return persons.filter(person => {
      const regex = new RegExp(wordToMatch, 'gi');
      return person.firstName.match(regex) || person.lastName.match(regex)
    });
  }

  searchHandler = (event) => {
    this.setState({ search: event.target.value })
    console.log(this.state.search);
  }

  displayMatchesHandler = (e) => {
    const matchArray = this.findMatchesHandler(e.target.value, this.state.persons)
    // console.log(matchArray);

  }

  showMe = () => {
    console.log(this.state.persons);
  }

  render() {
    return (
      <div className="student-container">
        <Search
          changed={this.searchHandler}/>
        {this.findMatchesHandler(this.state.search, this.state.persons).map(function(person) {
          return <Student
            key={person.id}
            pic={person.pic}
            firstName={person.firstName}
            lastName={person.lastName}
            email={person.email}
            company={person.company}
            skill={person.skill}
            grades={person.grades}
          />
        })}
      </div>
    );
  }
}

export default App;
