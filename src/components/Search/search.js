import React from 'react';
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
