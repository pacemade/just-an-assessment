import React from 'react';
import './tag.css'

const tag = (props) => {

  return (
    <div>
      <form className="search-form">
        <input
          onChange={props.changed}
          type="text"
          className="search"
          placeholder="Search by tag" />
      </form>
    </div>
    )
  }

export default tag;
