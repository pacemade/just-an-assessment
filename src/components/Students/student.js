import React from 'react';

const student = (props) => {

  function average(grades) {
    console.log(grades);
    var sum = 0;
    var count = grades.length;
    for (var i = 0; i < count; i++) {
      sum = sum + parseInt(grades[i],10);
    }
    return sum / count;
  }

  return(
    <div>
      <img src={props.pic} alt="robot?"/>
      <h1>{props.firstName} {props.lastName}</h1>
      <ul>
        <li>{props.email}</li>
        <li>{props.company}</li>
        <li>{props.skill}</li>
        <li>{average(props.grades)}</li>
      </ul>
    </div>
  )
}

export default student;




// pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg"
// firstName: "Ingaberg"
// lastName: "Orton"
// email: "iorton0@imdb.com"
// company: "Yadel"
// skill: "Oracle"
// grades: (8) ["78", "100", "92", "86", "89", "88", "91", "87"]
