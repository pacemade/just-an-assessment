import React, { Component } from 'react';
import Student from './components/Students/student';
import Search from './components/Search/search';
import Tag from './components/Tags/tag';
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
        this.setState({persons: data.students})
      })
  }

  findMatchesHandler = (wordToMatch, persons) => {
    return persons.filter(person => {
    {/* used regex to match, rather than JS */}
      const regex = new RegExp(wordToMatch, 'gi');
      return person.firstName.match(regex) || person.lastName.match(regex)
    });
  }

  searchHandler = (event) => {
    {/* search is saved in a state, and updated with each change */}
    this.setState({ search: event.target.value })
  }

  addTagHandler = (eyed) => {
    {/* tried to start tags, got stuck trying to pull state of the individual that needed the update */}
    console.log(eyed);
    // event.preventDefault();
    // console.log(event.target.firstChild.value);
    // const tagName = event.target.firstChild.value
    // let tempPersonsArray = {...this.state.persons}
    //
    // let tempPerson = {...tempPersonsArray[0],...{tag: tagName}}
    //
    // console.log(tempPerson);
    // console.log(tempPersonsArray);
    //
    // event.target.firstChild.value = '';
  }

  render() {
    return (
      <div className="student-container">
        <Search
          changed={this.searchHandler}/>
        <Tag />
        {/* state persons is filtered and mapped into student component */}
        {this.findMatchesHandler(this.state.search, this.state.persons).map((person) => {
          return <Student
            key={person.id - 1}
            id={person.id}
            pic={person.pic}
            firstName={person.firstName}
            lastName={person.lastName}
            email={person.email}
            company={person.company}
            skill={person.skill}
            grades={person.grades}
            tagUpdate={this.addTagHandler}
          />
        })}
      </div>
    );
  }
}

export default App;
