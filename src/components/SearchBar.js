import React, { Component } from 'react';
import {Input} from 'antd';
const Search = Input.Search

class SearchBar extends Component {
  handleOnSearch=(value)=>{
    this.props.actions.searchItems(value);
    //  console.log(query)
  }
  handleOnChange=()=>{
    this.props.actions.clearItems();
  }
  render() {
    return (
      <Search
        placeholder="Search on BackPack"
        style={{width : 400}}
        onSearch={this.handleOnSearch}
        onChange={this.handleOnChange}
      />
    );
  }
}

export default SearchBar;
