import React, { Component } from 'react';
import Student from './components/Students/student';
import Search from './components/Search/search';
import Tag from './components/Tags/tag';
import './App.css';

class App extends Component {

  state = {
    persons: [],
    search: '',
    tagSearch: ''
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
        let personsArray = data.students
    {/* adding the tags key beforehand */}
        personsArray.map((person, index) => {
          personsArray[index] = {...personsArray[index],...{tags:[]}}
        })
        this.setState({persons: personsArray})
      })
  }

  findMatchesHandler = (wordToMatch, persons) => {
    return persons.filter(person => {
    {/* used regex to match, rather than JS */}
      const regex = new RegExp(wordToMatch, 'gi');
      return person.firstName.match(regex) || person.lastName.match(regex)
    });
  }

  findTagMatchesHandler = (wordToMatch, persons) => {
    return persons.filter(person => {
    {/* used regex to match, rather than JS */}
      const regex = new RegExp(wordToMatch, 'gi');
      return person.tags.find(tag => tag.includes(wordToMatch))
    });
  }

  searchHandler = (event) => {
    {/* search is saved in a state, and updated with each change */}
    this.setState({ search: event.target.value })
  }

  tagSearchHandler = (event) => {
    this.setState({ tagSearch: event.target.value })
    console.log(this.state.tagSearch);
  }

  addTagHandler = (event) => {
    {/* tried to start tags, got stuck trying to pull state of the individual that needed the update */}
    event.preventDefault();
    {/* this grabs the id from the name value on input */}
    const personId = event.target.firstChild.name - 1
    const tagName = event.target.firstChild.value
    let tempPersonsArray = this.state.persons
    tempPersonsArray[personId].tags.push(tagName)

    this.setState({persons: tempPersonsArray})
    event.target.firstChild.value = '';
  }

  render() {
    return (
      <div className="student-container">
        <Search
          changed={this.searchHandler}/>
        <Tag changed={this.tagSearchHandler} />
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
            tags={person.tags}
            tagUpdate={this.addTagHandler}
          />
        })}
      </div>
    );
  }
}

export default App;
