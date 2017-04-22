import React,{Component} from 'react';
// import {Card} from 'antd';
import '../styles/card.css'
import { Tag , Button} from 'antd';

class Result extends Component {
  handleOnClick=()=>{
        this.props.actions.addCart({
          title: this.props.title,
          price: this.props.price
        });
  }
  render(){
    var price = this.props.price/100;
    return (
      <div className="floating-box">
        <div className="container">
            <div className="topright">
              <Tag color="#f50">${price}</Tag>
            </div>
            <img alt="example" width="250" height="300" src={this.props.images[0]}/>
        </div>
        <b>{this.props.title}</b>
        <br/>
        <br/>
        <Button type="primary" onClick={this.handleOnClick}>Add To Cart!</Button>
    </div>
    )
  }
}


export default Result;
