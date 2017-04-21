import React, { Component } from 'react';
import SearchBar from './SearchBar';
import * as appActions from '../actions/appActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row,Col} from 'antd';
import ResultList from './ResultList';
import CartList from './CartList';
import LoadingBar from './LoadingBar';

class BackPackSearch extends Component {
  render() {
    let {isLoading} =this.props;
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
            {
              isLoading ?
              <Row>
                <Col span={2}></Col>
                <Col span={20}><LoadingBar/></Col>                
                <Col span={2}></Col>
              </Row>  : <ResultList results={this.props.results} actions={this.props.actions}/>
            }
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
    results : state.results,
    isLoading : state.isLoading
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BackPackSearch);
