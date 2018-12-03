import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './main.css';

class SearchBar extends Component {

  handleSearch = (search) => {
    this.props.search(search)
  }

  render() {
    return (
      <div className="search-bar-div">
        <input
          className="search-bar"
          type="text"
          placeholder="Search Districts..."
          onChange={ (e) => this.handleSearch(e.target.value) }
          name="search-bar"
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
}



export default SearchBar;