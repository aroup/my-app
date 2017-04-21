import React, { Component } from 'react';
import {Row,Col} from 'antd';

class EmptyResult extends Component{
  render(){
    return(
      <div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Row>
            <Col span={6}></Col>
            <Col span={16}><h1>Sorry That thing doesn't seem to exist .  <br/> Try Anything Else?</h1></Col>
            {/* <Col span={4}></Col> */}
        </Row>

      </div>
    )
  }
}

export default EmptyResult;
