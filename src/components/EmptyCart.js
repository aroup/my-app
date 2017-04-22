import React,{Component} from 'react';
import {Row,Col} from 'antd';
class EmptyCart extends Component{
  render(){
    return (
      <div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Row>
          <Col span={7}>
          </Col>
          <Col span={12}>
              <h3>You have no item in the cart!</h3>
          </Col>
          <Col span={4}>
          </Col>
        </Row>

      </div>
    );
  }
}

export default EmptyCart;
