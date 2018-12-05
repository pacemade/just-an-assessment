import React from 'react';
import './search.css'

const search = (props) => {

  return (
    <form className="search-form">
      <input
        type="text"
        className="search"
        placeholder="Search by name" />
    </form>
    )
  }

export default search;
