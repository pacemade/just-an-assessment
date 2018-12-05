import React from 'react';
import Student from '../Students/student'
import './search.css'

const search = (props) => {

  return (
    <div>
      <form className="search-form">
        <input
          onChange={props.changed}
          type="text"
          className="search"
          placeholder="Search by name" />
      </form>
    </div>
    )
  }

export default search;
