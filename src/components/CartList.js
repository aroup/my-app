import React, { Component } from 'react';
import {Button,Tag,Row,Col} from 'antd';
import EmptyCart from './EmptyCart';

class CartList extends Component{
  handleOnClick=()=>{
    this.props.actions.clearCart();
  }
  render(){

    let {items} =this.props;
    let i = 0;
    let Listed = items.map((item)=>{
      return(
        <div key={i++}>
          <Row>
            <Col span={16}>
              <p>{i} .  {item.title}</p>
            </Col>
            <Col span={2}></Col>
            <Col span={6}>
              <Tag color="#f50">${item.price/100}</Tag>
            </Col>
          </Row>
          <br/>
        </div>
      )
    });
    return(
      <div>
        <Row>
          <Col span="16">
            <h2><i><u>Cart Items</u></i></h2>
          </Col>
          <Col span="2">
          </Col>
          <Col span="6">
            {items.length === 0 ? <Button type="danger" disabled> Clear Cart</Button> : <Button type="danger" onClick={this.handleOnClick}>Clear Cart</Button> }
          </Col>
        </Row>
        <br/>
        <br/>
        {items.length===0 ? <EmptyCart/> : Listed }
      </div>
    );
  }
}

export default CartList;
