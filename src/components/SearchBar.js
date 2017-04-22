import React, { Component } from 'react';
import {Input} from 'antd';
const Search = Input.Search;

class SearchBar extends Component {
  handleOnSearch=(value)=>{
    this.props.actions.startAsync();
    this.props.actions.searchItems(value);
  }
  render() {
    return (
      <Search
        placeholder="Search on BackPack"
        style={{width : 500}}
        onSearch={this.handleOnSearch}
      />
    );
  }
}

export default SearchBar;
