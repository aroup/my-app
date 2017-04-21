import React, { Component } from 'react';
import SearchBar from './SearchBar';
import * as appActions from '../actions/appActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row,Col} from 'antd';
import ResultList from './ResultList';
import CartList from './CartList';

class BackPackSearch extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={16}>
            <Row>
              <Col span={4}></Col>
              <Col span={16}><SearchBar actions={this.props.actions}/></Col>
              <Col span={4}></Col>
            </Row>
            <br/> <br/>
            <ResultList results={this.props.results} actions={this.props.actions}/>
          </Col>
          <Col span={8}>
            <CartList items={this.props.items} actions={this.props.actions}/>
          </Col>
        </Row>
      </div>

    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(appActions,dispatch)
  };
}

function mapStateToProps(state){
  return {
    items : state.items,
    results : state.results
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BackPackSearch);
