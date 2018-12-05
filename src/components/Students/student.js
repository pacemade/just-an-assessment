import React, { Component } from 'react';
import './student.css';

class Student extends Component {

  average = (grades) => {
    var sum = 0;
    var count = grades.length;
    for (var i = 0; i < count; i++) {
      sum = sum + parseInt(grades[i],10);
    }
    return sum / count;
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
          <ul>
            {this.props.grades.map((grade, index) => {
              return <li>Test {index+1}: {grade}%</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Student;
