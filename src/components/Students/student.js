import React from 'react';
import './student.css';

const student = (props) => {

  function average(grades) {
    var sum = 0;
    var count = grades.length;
    for (var i = 0; i < count; i++) {
      sum = sum + parseInt(grades[i],10);
    }
    return sum / count;
  }

  return(
    <div className="student">
      <div className="student-portrait-container">
        <img src={props.pic} alt="robot?" className="student-portrait"/>
      </div>
      <div className="stats-container">
        <h1>{props.firstName.toUpperCase()} {props.lastName.toUpperCase()}</h1>
        <ul>
          <li>Email: {props.email}</li>
          <li>Company: {props.company}</li>
          <li>Skill: {props.skill}</li>
          <li>Grade Average: {average(props.grades)}%</li>
        </ul>
      </div>
    </div>
  )
}

export default student;
