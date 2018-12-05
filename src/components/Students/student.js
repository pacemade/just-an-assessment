import React from 'react';

const student = (props) => {
  return(
    <div>
      <h1>{props.firstName}</h1>
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


// return this.props.persons.map((person, index) => {
//   return <Person
//     click={() => this.props.clicked(index)}
//     name={person.name}
//     key={person.id}
//     forwardedRef={this.lastPersonRef}
//     age={person.age}
//     changed={(event) => this.props.changed(event, person.id)} />
// })
// }
