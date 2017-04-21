import React, { Component } from 'react';
import SearchBar from './SearchBar';
import * as appActions from '../actions/appActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Row,Col} from 'antd';
import ResultList from './ResultList';
import CartList from './CartList';
import LoadingBar from './LoadingBar';
import InitialMessage from './InitialMessage';
// import EmptyResult from './EmptyResult';
class BackPackSearch extends Component {
  render() {
    let {isLoading,isLoaded} =this.props;

    return (
      <div>
        <Row>
          <Col span={16}>
            <Row>
              <Col span={6}></Col>
              <Col span={12}><SearchBar actions={this.props.actions}/></Col>
            </Row>
            <br/> <br/>
            {
              isLoading ?
              <Row>
                <Col span={10}></Col>
                <Col span={4}><LoadingBar/></Col>
                <Col span={10}></Col>
              </Row>  :
              isLoaded ?
               <ResultList results={this.props.results} actions={this.props.actions}/>
               : <InitialMessage/>
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
    isLoading : state.isLoading,
    isLoaded : state.isLoaded
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BackPackSearch);
