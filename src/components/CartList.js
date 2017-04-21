import React, { Component } from 'react';
import {Button,Tag} from 'antd';

class CartList extends Component{
  handleOnClick=()=>{
    this.props.actions.clearCart();
  }
  render(){
    // items will be sent in the cart list
    let {items} =this.props;
    let i = 0;
    let Listed = items.map((item)=>{
      return(
        <div key={i++}>
          <h2>{i}.</h2><p>{item.title}</p>
          <Tag color="#f50">${item.price/100}</Tag>
          <br/>
        </div>
      )
    })
    return(
      <div>
        <h1><i>Cart Items</i></h1>
        {items.length === 0 ? <Button type="danger" disabled> Clear Cart</Button> : <Button type="danger" onClick={this.handleOnClick}>Clear Cart</Button> }
        {Listed}
      </div>
    )
  }
}

export default CartList;
