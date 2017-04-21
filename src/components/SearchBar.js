import React, { Component } from 'react';
import {Input} from 'antd';
const Search = Input.Search

class SearchBar extends Component {
  handleOnSearch=(value)=>{
    this.props.actions.startAsync();
    this.props.actions.searchItems(value);
    //  console.log(query)
  }
  handleOnChange=()=>{
    this.props.actions.makeFalse();
    this.props.actions.clearItems();
  }
  render() {
    return (
      <Search
        placeholder="Search on BackPack"
        style={{width : 500}}
        onSearch={this.handleOnSearch}
        onChange={this.handleOnChange}
      />
    );
  }
}

export default SearchBar;
