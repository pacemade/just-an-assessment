import React, { Component } from 'react';
import './student.css';

class Student extends Component {

  state = {
    toggle: 'hidden'
  }

  average = (grades) => {
    var sum = 0;
    var count = grades.length;
    for (var i = 0; i < count; i++) {
      sum = sum + parseInt(grades[i],10);
    }
    return sum / count;
  }

  toggleCollapsible = () => {
    if(this.state.toggle === "hidden") {
        this.setState({toggle: 'shown'})
    } else {
        this.setState({toggle: 'hidden'})
    }
  }

  render() {
    return(
      <div className="student">
        <div className="student-portrait-container">
          <img src={this.props.pic} alt="robot" className="student-portrait"/>
        </div>
        <div className="stats-container">
          <h1>{this.props.firstName.toUpperCase()} {this.props.lastName.toUpperCase()}</h1>
          <ul>
            <li>Email: {this.props.email}</li>
            <li>Company: {this.props.company}</li>
            <li>Skill: {this.props.skill}</li>
            <li>Grade Average: {this.average(this.props.grades)}%</li>
          </ul>
          {/* changes css class of the field based on state of the CURRENT student */}
          <div className={this.state.toggle === 'hidden' ? 'content': ''} >
            <ul>
              {this.props.grades.map((grade, index) => {
                return <li key={index}>Test {index+1}: {grade}%</li>
              })}
            </ul>
          {/* tried to start tags */}
            <form onSubmit={() => this.props.tagUpdate(this.props.firstName)}>
              <input type="text" />
            </form>
          </div>
        </div>
        {/* changes the button from + to - based on state */}
        <button className='collapsible' onClick={this.toggleCollapsible}>{this.state.toggle === 'hidden' ? '+': '-'}</button>
      </div>
    )
  }
}

export default Student;
