import React, { Component } from 'react';
import {Row,Col} from 'antd';

class InitialMessage extends Component{
  render(){
    return(
      <div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Row>
            <Col span={8}></Col>
            <Col span={10}><h1>What Will You Buy Today ?</h1></Col>
            <Col span={6}></Col>
        </Row>

      </div>
    )
  }
}

export default InitialMessage;
